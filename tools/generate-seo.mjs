import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const BASE_URL = (process.env.SITE_URL || "https://technologygroup.vercel.app").replace(/\/+$/, "");
const IMAGE_EXT = /\.(jpe?g|png|jfif|webp)$/i;

function readProducts() {
  const source = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
  return new Function(`${source}; return productFamilies;`)();
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function optimizedImage(ref) {
  if (!ref) return "";
  if (ref.includes("/img/opt/")) return ref;
  return ref.replace("./img/", "./img/opt/").replace(IMAGE_EXT, ".webp");
}

function absoluteUrl(ref) {
  return `${BASE_URL}/${String(ref).replace(/^\.\//, "")}`;
}

function parsePrice(value) {
  const number = Number.parseFloat(String(value).replace(/,/g, "").replace(/[^\d.-]/g, ""));
  return Number.isFinite(number) ? number : null;
}

function brandOf(product, family) {
  const brandSpec = (product.specs || []).find((spec) => spec.label.toLowerCase() === "marca");
  return brandSpec ? brandSpec.value : family.title;
}

function descriptionOf(product, family) {
  const specs = (product.specs || [])
    .slice(0, 3)
    .map((spec) => `${spec.label}: ${spec.value}`)
    .join(", ");
  const base = `${product.title} de ${brandOf(product, family)}. ${specs}.`;
  return `${base} Disponible en Technology Group, soluciones en iluminación y electricidad.`.slice(0, 300);
}

function buildProducts(families) {
  const products = [];
  const slugCounts = new Map();
  for (const family of families) {
    for (const product of family.variants) {
      const images = (product.images || [])
        .map(optimizedImage)
        .filter(Boolean)
        .map(absoluteUrl);
      const baseSlug = slugify(product.title);
      const count = (slugCounts.get(baseSlug) || 0) + 1;
      slugCounts.set(baseSlug, count);
      const slug = count > 1 ? `${baseSlug}-${count}` : baseSlug;
      products.push({
        title: product.title,
        family: family.title,
        brand: brandOf(product, family),
        description: descriptionOf(product, family),
        price: parsePrice(product.price),
        images,
        imageUrl: images[0] || `${BASE_URL}/img/opt/og-image.jpg`,
        url: `${BASE_URL}/#producto-${slug}`,
        slug,
      });
    }
  }
  return products;
}

function buildStructuredData(products) {
  const store = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${BASE_URL}/#store`,
    name: "Technology Group",
    alternateName: "Technology Group Iluminación y Electricidad",
    url: `${BASE_URL}/`,
    logo: `${BASE_URL}/img/opt/tg.webp`,
    image: `${BASE_URL}/img/opt/og-image.jpg`,
    description:
      "Tienda de iluminación LED y material eléctrico: lámparas, reflectores, cables, breakers, cámaras de seguridad, UPS, protectores y sillas gamer.",
    telephone: "+584226382165",
    priceRange: "$",
    currenciesAccepted: "USD",
    areaServed: { "@type": "Country", name: "Venezuela" },
    knowsLanguage: "es-VE",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: `${BASE_URL}/`,
    name: "Technology Group",
    inLanguage: "es-VE",
    publisher: { "@id": `${BASE_URL}/#store` },
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#catalogo`,
    name: "Catálogo de productos Technology Group",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: product.url,
      item: {
        "@type": "Product",
        name: product.title,
        url: product.url,
        image: product.images.length > 1 ? product.images : product.imageUrl,
        description: product.description,
        category: product.family,
        brand: { "@type": "Brand", name: product.brand },
        ...(product.price !== null
          ? {
              offers: {
                "@type": "Offer",
                price: product.price.toFixed(2),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: product.url,
              },
            }
          : {}),
      },
    })),
  };

  return [store, website, itemList]
    .map(
      (data) =>
        `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`
    )
    .join("\n    ");
}

function writeStructuredData(html) {
  const start = "<!-- SEO_DATA_START -->";
  const end = "<!-- SEO_DATA_END -->";
  if (html.includes(start) && html.includes(end)) {
    return html.replace(
      new RegExp(`${start}[\\s\\S]*?${end}`),
      `${start}\n    ${structuredData}\n    ${end}`
    );
  }
  return html.replace("</head>", `    ${start}\n    ${structuredData}\n    ${end}\n  </head>`);
}

function buildSitemap(products) {
  const uniqueImages = new Map();
  for (const product of products) {
    for (const imageUrl of product.images) {
      if (!uniqueImages.has(imageUrl)) uniqueImages.set(imageUrl, product.title);
    }
  }

  const imageEntries = [...uniqueImages.entries()]
    .map(
      ([url, title]) => `    <image:image>
      <image:loc>${escapeXml(url)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
    </image:image>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${imageEntries}
  </url>
</urlset>
`;
}

const families = readProducts();
const products = buildProducts(families);
const structuredData = buildStructuredData(products);

const indexPath = path.join(ROOT, "index.html");
const html = fs.readFileSync(indexPath, "utf8");
fs.writeFileSync(indexPath, writeStructuredData(html));

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), buildSitemap(products));
fs.writeFileSync(
  path.join(ROOT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`
);

console.log(`SEO generado: ${families.length} categorías, ${products.length} productos.`);
console.log(`Sitemap: ${BASE_URL}/sitemap.xml`);
