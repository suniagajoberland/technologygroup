/* ============================================================
   LOGICA DE LA TIENDA DE ILUMINACION
   ============================================================ */

const navbar = document.getElementById('navbar');
const productSearch = document.getElementById('productSearch');
const searchClear = document.getElementById('searchClear');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const searchResultsText = document.getElementById('searchResultsText');
const noResults = document.getElementById('noResults');
const brandFilter = document.getElementById('brandFilter');
const PRODUCTS_GRID = document.getElementById('productsGrid');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDots = document.getElementById('modalDots');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const CARD_SIZES = '(max-width: 480px) 92vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 320px';
const PLACEHOLDER_IMAGE = 'img/opt/og-image.jpg';

let currentSearchTerm = '';
let currentSearchRaw = '';
let currentBrandFilter = 'all';
let brands = [];

/* ============================================================
   UTILIDADES
   ============================================================ */
function debounce(callback, delay = 160) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
    };
}

function normalizeText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function slugify(value) {
    return normalizeText(value)
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function imageSources(source) {
    if (!source) return { src: PLACEHOLDER_IMAGE, srcset: '' };
    if (!/\.webp$/i.test(source)) return { src: source, srcset: '' };
    const thumb = source.replace(/\.webp$/i, '-640.webp');
    return { src: thumb, srcset: `${thumb} 640w, ${source} 1280w` };
}

function badgeClass(badge) {
    const map = { hot: 'badge-hot', new: 'badge-new', sale: 'badge-sale' };
    return map[badge] || '';
}

function badgeLabel(product) {
    if (product.badgeText) return product.badgeText;
    const map = { hot: 'Popular', new: 'Nuevo', sale: 'Oferta' };
    return map[product.badge] || product.badge || '';
}

function brandOf(product, family) {
    const brandSpec = (product.specs || []).find(
        (spec) => spec.label.toLowerCase() === 'marca'
    );
    return brandSpec ? brandSpec.value : family.title;
}

/* ============================================================
   1. MENU (NAVBAR) - HORIZONTAL STICKY CON BUSCADOR
   ============================================================ */
if (navbar) {
    let ticking = false;
    window.addEventListener(
        'scroll',
        () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
        },
        { passive: true }
    );
}

/* ============================================================
   2. DATOS PRECALCULADOS
   ============================================================ */
const slugCounts = new Map();
const ALL_PRODUCTS = productFamilies
    .flatMap((family) =>
        family.variants.map((product) => {
            const baseSlug = slugify(product.title);
            const count = (slugCounts.get(baseSlug) || 0) + 1;
            slugCounts.set(baseSlug, count);

            const searchParts = [
                product.title,
                family.title,
                brandOf(product, family),
                ...(product.specs || []).map((spec) => `${spec.label} ${spec.value}`),
            ];

            return {
                product,
                family,
                slug: count > 1 ? `${baseSlug}-${count}` : baseSlug,
                searchText: normalizeText(searchParts.join(' ')),
            };
        })
    )
    .sort((a, b) => a.product.title.localeCompare(b.product.title, 'es', { sensitivity: 'base' }));

/* ============================================================
   3. FILTRO POR MARCA Y BUSCADOR
   ============================================================ */
function initBrandFilter() {
    if (!brandFilter) return;

    const brandSet = new Set(productFamilies.map((family) => family.title));
    brands = Array.from(brandSet).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

    const fragment = document.createDocumentFragment();
    brands.forEach((brand) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'brand-filter-btn';
        button.dataset.brand = brand;
        button.textContent = brand;
        fragment.appendChild(button);
    });
    brandFilter.appendChild(fragment);

    brandFilter.addEventListener('click', (event) => {
        const button = event.target.closest('.brand-filter-btn');
        if (!button) return;

        brandFilter.querySelectorAll('.brand-filter-btn').forEach((item) => {
            item.classList.toggle('active', item === button);
        });

        currentBrandFilter = button.dataset.brand || 'all';
        renderProducts();
    });
}

if (productSearch) {
    const runSearch = debounce(() => {
        currentSearchRaw = productSearch.value;
        currentSearchTerm = normalizeText(currentSearchRaw);
        renderProducts();
    });

    productSearch.addEventListener('input', () => {
        if (searchClear) {
            searchClear.style.display = productSearch.value ? 'flex' : 'none';
        }
        runSearch();
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        if (productSearch) {
            productSearch.value = '';
            productSearch.focus();
        }
        currentSearchRaw = '';
        currentSearchTerm = '';
        searchClear.style.display = 'none';
        renderProducts();
    });
    searchClear.style.display = 'none';
}

/* ============================================================
   4. TARJETAS FLIP
   ============================================================ */
function attachTouchGestures(el, { onSwipeLeft, onSwipeRight, threshold = 45 }) {
    let tracking = false;
    let x0 = 0;
    let y0 = 0;
    let scroll0 = 0;
    let scrolled = false;

    el.addEventListener(
        'touchstart',
        (event) => {
            if (event.touches.length !== 1) return;
            tracking = true;
            scrolled = false;
            x0 = event.touches[0].clientX;
            y0 = event.touches[0].clientY;
            scroll0 = window.scrollY;
        },
        { passive: true }
    );

    el.addEventListener(
        'touchmove',
        () => {
            if (tracking && window.scrollY !== scroll0) scrolled = true;
        },
        { passive: true }
    );

    el.addEventListener(
        'touchend',
        (event) => {
            if (!tracking) return;
            tracking = false;
            if (scrolled || window.scrollY !== scroll0) return;

            const touch = event.changedTouches[0];
            const dx = touch.clientX - x0;
            const dy = touch.clientY - y0;
            if (Math.abs(dx) < threshold || Math.abs(dx) <= Math.abs(dy)) return;

            if (dx < 0 && onSwipeLeft) {
                event.preventDefault();
                onSwipeLeft();
            } else if (dx > 0 && onSwipeRight) {
                event.preventDefault();
                onSwipeRight();
            }
        },
        { passive: false }
    );

    el.addEventListener('touchcancel', () => {
        tracking = false;
    });
}

function createProductCard(product, family, slug) {
    const card = document.createElement('article');
    card.className = 'flip-card product-flip-card';
    card.id = `producto-${slug}`;
    card.tabIndex = 0;
    card.setAttribute('aria-label', `${product.title}. Presiona Enter para ver detalles.`);

    const inner = document.createElement('div');
    inner.className = 'flip-card-inner';

    const sources = imageSources(product.images && product.images[0]);
    const safeTitle = escapeHtml(product.title);
    const safeFamily = escapeHtml(family.title);
    const safePrice = escapeHtml(product.price);
    const badgeMarkup = product.badge
        ? `<span class="card-badge ${badgeClass(product.badge)}">${escapeHtml(badgeLabel(product))}</span>`
        : '';

    /* Cara frontal */
    const front = document.createElement('div');
    front.className = 'flip-card-face flip-card-front product-front';
    front.innerHTML = `
        <div class="cover-decor"></div>
        <div class="product-front-image">
            <img
                src="${sources.src}"
                ${sources.srcset ? `srcset="${sources.srcset}" sizes="${CARD_SIZES}"` : ''}
                width="640"
                height="640"
                alt="${safeTitle} - ${safeFamily}"
                loading="lazy"
                decoding="async"
            >
            ${badgeMarkup}
        </div>
        <div class="product-front-info">
            <div class="product-category">${safeFamily}</div>
            <h3 class="product-front-title">${safeTitle}</h3>
            <div class="product-front-price">
                <span class="price-current">${safePrice}</span>
                ${product.oldPrice ? `<span class="price-old">${escapeHtml(product.oldPrice)}</span>` : ''}
            </div>
            <span class="cover-hint"><i class="fas fa-hand-pointer" aria-hidden="true"></i> Click para ver detalles / Pedir</span>
        </div>
    `;

    /* Cara trasera (se construye solo al abrir por primera vez) */
    const back = document.createElement('div');
    back.className = 'flip-card-face flip-card-back product-back';

    const flipInner = document.createElement('div');
    flipInner.className = 'card-flip-inner order-flip';
    back.appendChild(flipInner);

    let backBuilt = false;

    function buildBack() {
        if (backBuilt) return;
        backBuilt = true;

        const photoCount =
            product.images && product.images.length > 1
                ? `<span class="card-image-count"><i class="fas fa-images" aria-hidden="true"></i> ${product.images.length} fotos</span>`
                : '';

        const codeMarkup = product.code
            ? `<div class="spec-item"><span class="spec-label">Código:</span> <span class="spec-value">${escapeHtml(product.code)}</span></div>`
            : '';

        const specs = (product.specs || [])
            .slice(0, 3)
            .map(
                (spec) =>
                    `<div class="spec-item"><span class="spec-label">${escapeHtml(spec.label)}:</span> <span class="spec-value">${escapeHtml(spec.value)}</span></div>`
            )
            .join('');

        const allSpecs = codeMarkup + specs;

        flipInner.innerHTML = `
            <div class="card-image-container">
                <img
                    class="card-image"
                    src="${sources.src}"
                    ${sources.srcset ? `srcset="${sources.srcset}" sizes="${CARD_SIZES}"` : ''}
                    width="640"
                    height="640"
                    alt="${safeTitle} - ${safeFamily}"
                    loading="lazy"
                    decoding="async"
                >
                ${badgeMarkup}
                ${photoCount}
                <button class="gallery-btn" type="button" title="Ver todas las fotos" aria-label="Ver todas las fotos de ${safeTitle}">
                    <i class="fas fa-expand" aria-hidden="true"></i>
                </button>
            </div>
            <div class="card-body">
            <div class="card-category">${safeFamily}</div>
            <h3 class="card-title">${safeTitle}</h3>
            <div class="product-specs">${allSpecs}</div>
            <div class="card-price">
                    <span class="price-current">${safePrice}</span>
                    ${product.oldPrice ? `<span class="price-old">${escapeHtml(product.oldPrice)}</span>` : ''}
                </div>
                <div class="order-section">
                    <a class="order-whatsapp-btn"
                       href="https://wa.me/584226382165?text=${encodeURIComponent(
                           `Hola, me gustaría pedir: ${product.title} - Precio: ${product.price}`
                       )}"
                       target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-whatsapp" aria-hidden="true"></i> Pedir por WhatsApp
                    </a>
                </div>
                <span class="flip-back-hint"><i class="fas fa-undo" aria-hidden="true"></i> Toca para volver</span>
            </div>
        `;

        const openGallery = (event) => {
            event.stopPropagation();
            openModal(product);
        };
        flipInner.querySelector('.gallery-btn').addEventListener('click', openGallery);
        flipInner.querySelector('.card-image-container').addEventListener('click', openGallery);
    }

    function showDetails() {
        buildBack();
        card.classList.add('flipped');
    }

    function hideDetails() {
        card.classList.remove('flipped');
    }

    card.showDetails = showDetails;

    front.addEventListener('click', (event) => {
        if (event.target.closest('.gallery-btn') || event.target.closest('a')) return;
        showDetails();
    });

    back.addEventListener('click', (event) => {
        if (
            event.target.closest('.gallery-btn') ||
            event.target.closest('.card-image-container img') ||
            event.target.closest('.order-whatsapp-btn')
        ) {
            return;
        }
        hideDetails();
    });

    card.addEventListener('keydown', (event) => {
        if (event.target !== card) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (card.classList.contains('flipped')) {
                hideDetails();
            } else {
                showDetails();
            }
        } else if (event.key === 'Escape') {
            hideDetails();
        }
    });

    attachTouchGestures(front, {
        onSwipeLeft: showDetails,
        onSwipeRight: showDetails,
    });

    attachTouchGestures(back, {
        onSwipeRight: hideDetails,
        onSwipeLeft: hideDetails,
    });

    inner.append(front, back);
    card.appendChild(inner);
    return card;
}

function renderProducts() {
    if (!PRODUCTS_GRID) return;

    const filtered = ALL_PRODUCTS.filter((item) => {
        const matchesBrand = currentBrandFilter === 'all' || item.family.title === currentBrandFilter;
        const matchesSearch = !currentSearchTerm || item.searchText.includes(currentSearchTerm);
        return matchesBrand && matchesSearch;
    });

    if (searchResultsInfo && searchResultsText) {
        if (currentSearchTerm) {
            searchResultsInfo.style.display = 'block';
            let filterText = `para "${currentSearchRaw}"`;
            if (currentBrandFilter !== 'all') filterText += ` en ${currentBrandFilter}`;
            searchResultsText.textContent = `Se encontraron ${filtered.length} producto${
                filtered.length !== 1 ? 's' : ''
            } ${filterText}`;
        } else if (currentBrandFilter !== 'all') {
            searchResultsInfo.style.display = 'block';
            searchResultsText.textContent = `Mostrando productos de ${currentBrandFilter} (${filtered.length})`;
        } else {
            searchResultsInfo.style.display = 'none';
        }
    }

    if (noResults) {
        noResults.style.display =
            (currentSearchTerm || currentBrandFilter !== 'all') && filtered.length === 0
                ? 'flex'
                : 'none';
    }

    const fragment = document.createDocumentFragment();
    filtered.forEach((item) => {
        fragment.appendChild(createProductCard(item.product, item.family, item.slug));
    });
    PRODUCTS_GRID.replaceChildren(fragment);
}

function focusLinkedProduct() {
    if (!location.hash.startsWith('#producto-')) return;

    const card = document.getElementById(location.hash.slice(1));
    if (!card) return;

    setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.focus({ preventScroll: true });
        if (typeof card.showDetails === 'function') card.showDetails();
    }, 0);
}

/* ============================================================
   5. MODAL DE GALERIA DE FOTOS
   ============================================================ */
let modalImages = [];
let modalIndex = 0;
let modalTitle = '';
let lastFocusedElement = null;

function preloadAdjacentImages() {
    if (modalImages.length < 2) return;
    const next = modalImages[(modalIndex + 1) % modalImages.length];
    const previous = modalImages[(modalIndex - 1 + modalImages.length) % modalImages.length];
    [next, previous].forEach((src) => {
        if (src) new Image().src = src;
    });
}

function openModal(product, startIndex = 0) {
    if (!modal) return;

    modalImages = product.images || [];
    modalIndex = startIndex;
    modalTitle = product.title;
    lastFocusedElement = document.activeElement;

    showModalImage();
    renderModalDots();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const showNav = modalImages.length > 1;
    if (modalPrev) modalPrev.style.display = showNav ? 'flex' : 'none';
    if (modalNext) modalNext.style.display = showNav ? 'flex' : 'none';

    if (modalClose) modalClose.focus({ preventScroll: true });
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus({ preventScroll: true });
    }
}

function showModalImage() {
    if (!modalImage || !modalImages.length) return;
    modalImage.src = modalImages[modalIndex];
    modalImage.alt = `${modalTitle} - foto ${modalIndex + 1} de ${modalImages.length}`;
    updateModalDots();
    preloadAdjacentImages();
}

function renderModalDots() {
    if (!modalDots) return;
    const fragment = document.createDocumentFragment();
    modalImages.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'modal-dot';
        dot.setAttribute('aria-label', `Ver foto ${index + 1}`);
        dot.addEventListener('click', () => {
            modalIndex = index;
            showModalImage();
        });
        fragment.appendChild(dot);
    });
    modalDots.replaceChildren(fragment);
    updateModalDots();
}

function updateModalDots() {
    if (!modalDots) return;
    modalDots.querySelectorAll('.modal-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === modalIndex);
    });
}

function nextImage() {
    if (modalImages.length < 2) return;
    modalIndex = (modalIndex + 1) % modalImages.length;
    showModalImage();
}

function prevImage() {
    if (modalImages.length < 2) return;
    modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
    showModalImage();
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalNext) modalNext.addEventListener('click', nextImage);
if (modalPrev) modalPrev.addEventListener('click', prevImage);

document.addEventListener('keydown', (event) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
});

if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    attachTouchGestures(modal, {
        onSwipeLeft: nextImage,
        onSwipeRight: prevImage,
        threshold: 50,
    });
}

window.addEventListener('hashchange', focusLinkedProduct);

/* ============================================================
   6. INICIO DE LA PAGINA
   ============================================================ */
initBrandFilter();
renderProducts();
focusLinkedProduct();
