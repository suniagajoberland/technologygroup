import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMG_DIR = path.join(ROOT, "img");
const OPT_DIR = path.join(IMG_DIR, "opt");
const SIZES = [640, 1280];
const QUALITY = 78;
const CONCURRENCY = 4;
const IMAGE_EXT = /\.(jpe?g|png|jfif|webp)$/i;

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function walk(dir) {
  const entries = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (path.resolve(full) === path.resolve(OPT_DIR)) continue;
      entries.push(...walk(full));
    } else if (IMAGE_EXT.test(entry.name)) {
      entries.push(full);
    }
  }
  return entries;
}

async function runPool(items, worker, limit) {
  let index = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const current = items[index++];
      await worker(current);
    }
  });
  await Promise.all(runners);
}

async function optimizeOne(source) {
  const rel = toPosix(path.relative(IMG_DIR, source));
  const base = rel.replace(IMAGE_EXT, "");
  const fullOut = path.join(OPT_DIR, `${base}.webp`);
  const thumbOut = path.join(OPT_DIR, `${base}-640.webp`);

  fs.mkdirSync(path.dirname(fullOut), { recursive: true });

  const image = sharp(source, { failOn: "none" }).rotate();
  const metadata = await image.metadata();
  const maxDimension = Math.max(metadata.width || 0, metadata.height || 0);

  for (const size of SIZES) {
    const target = size === 640 ? thumbOut : fullOut;
    const pipeline = sharp(source, { failOn: "none" })
      .rotate()
      .resize({
        width: size,
        height: size,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY, effort: 5, alphaQuality: 85, smartSubsample: true });

    await pipeline.toFile(target);
  }

  const outMeta = await sharp(fullOut).metadata();
  return {
    source,
    rel,
    fullOut,
    thumbOut,
    originalRef: `./img/${rel}`,
    optimizedRef: `./img/opt/${base}.webp`,
    width: outMeta.width,
    height: outMeta.height,
    sourceBytes: fs.statSync(source).size,
    optimizedBytes: fs.statSync(fullOut).size + fs.statSync(thumbOut).size,
    sourceWidth: metadata.width,
    sourceHeight: metadata.height,
    maxDimension,
  };
}

async function createBrandAssets() {
  const iconSource = path.join(IMG_DIR, "ico.jpeg");
  const logoSources = [path.join(IMG_DIR, "tg.jpeg"), path.join(IMG_DIR, "ico.jpeg")].filter((file) =>
    fs.existsSync(file)
  );

  if (fs.existsSync(iconSource)) {
    await sharp(iconSource)
      .resize(64, 64, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OPT_DIR, "favicon.png"));

    await sharp(iconSource)
      .resize(180, 180, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OPT_DIR, "apple-touch-icon.png"));
  }

  if (logoSources.length) {
    const logo = await sharp(logoSources[0])
      .resize({ width: 760, withoutEnlargement: true })
      .png()
      .toBuffer();

    const logoMeta = await sharp(logo).metadata();
    const top = Math.max(40, Math.round((630 - logoMeta.height) / 2) - 60);

    const overlay = Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="55%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#f97316"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)"/>
        <circle cx="1000" cy="90" r="220" fill="#f59e0b" opacity="0.08"/>
        <circle cx="120" cy="600" r="180" fill="#3b82f6" opacity="0.08"/>
        <rect x="0" y="0" width="1200" height="8" fill="url(#accent)"/>
        <text x="600" y="500" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="#f8fafc">Technology Group</text>
        <text x="600" y="552" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#f59e0b">Iluminación · Electricidad · Seguridad</text>
      </svg>
    `);

    await sharp(overlay)
      .composite([{ input: logo, top, left: Math.round((1200 - logoMeta.width) / 2) }])
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(path.join(OPT_DIR, "og-image.jpg"));
  }
}

async function updateReferences(results) {
  const replacements = new Map(results.map((item) => [item.originalRef, item.optimizedRef]));

  for (const file of ["data.js", "index.html"]) {
    const full = path.join(ROOT, file);
    if (!fs.existsSync(full)) continue;
    let source = fs.readFileSync(full, "utf8");
    let changed = 0;
    for (const [from, to] of replacements) {
      if (source.includes(from)) {
        source = source.split(from).join(to);
        changed += 1;
      }
    }
    if (changed) fs.writeFileSync(full, source);
  }
}

async function main() {
  if (!fs.existsSync(IMG_DIR)) {
    console.error("No existe la carpeta img/");
    process.exit(1);
  }

  const sources = walk(IMG_DIR);
  if (sources.length === 0) {
    console.log("No hay imágenes pendientes por optimizar en img/.");
    return;
  }

  fs.mkdirSync(OPT_DIR, { recursive: true });
  console.log(`Imágenes encontradas: ${sources.length}`);

  const results = [];
  await runPool(
    sources,
    async (source) => {
      try {
        const result = await optimizeOne(source);
        results.push(result);
        console.log(
          `OK  ${result.rel} -> ${Math.round(result.sourceBytes / 1024)} KB a ${Math.round(
            result.optimizedBytes / 1024
          )} KB`
        );
      } catch (error) {
        console.error(`ERROR ${source}: ${error.message}`);
      }
    },
    CONCURRENCY
  );

  await createBrandAssets();
  await updateReferences(results);

  for (const result of results) {
    fs.rmSync(result.source, { force: true });
  }

  const productsDir = path.join(IMG_DIR, "products");
  if (fs.existsSync(productsDir) && fs.readdirSync(productsDir).length === 0) {
    fs.rmdirSync(productsDir);
  }

  const before = results.reduce((total, item) => total + item.sourceBytes, 0);
  const after = results.reduce((total, item) => total + item.optimizedBytes, 0);
  console.log(
    `\nOptimización completa: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(
      after / 1024 / 1024
    ).toFixed(1)} MB (${Math.round((1 - after / before) * 100)}% menos)`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
