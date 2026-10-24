/* ============================================================
   LOGICA DE LA TIENDA DE ILUMINACION
   ============================================================ */


/* ============================================================
   1. MENU (NAVBAR) - HORIZONTAL STICKY CON BUSCADOR
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* Buscador y filtro por marca */
const productSearch = document.getElementById('productSearch');
const searchClear = document.getElementById('searchClear');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const searchResultsText = document.getElementById('searchResultsText');
const noResults = document.getElementById('noResults');
const brandFilter = document.getElementById('brandFilter');

let currentSearchTerm = '';
let currentBrandFilter = 'all';
let brands = [];

function initBrandFilter() {
    if (!brandFilter) return;
    const brandSet = new Set();
    productFamilies.forEach(family => {
        brandSet.add(family.title);
    });
    brands = Array.from(brandSet).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    
    brands.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'brand-filter-btn';
        btn.dataset.brand = brand;
        btn.textContent = brand;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.brand-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentBrandFilter = brand;
            renderProducts();
        });
        brandFilter.appendChild(btn);
    });
    
    const allBtn = brandFilter.querySelector('[data-brand="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', () => {
            document.querySelectorAll('.brand-filter-btn').forEach(b => b.classList.remove('active'));
            allBtn.classList.add('active');
            currentBrandFilter = 'all';
            renderProducts();
        });
    }
}

if (productSearch) {
    productSearch.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase().trim();
        if (searchClear) {
            searchClear.style.display = currentSearchTerm ? 'flex' : 'none';
        }
        renderProducts();
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        if (productSearch) {
            productSearch.value = '';
            currentSearchTerm = '';
            searchClear.style.display = 'none';
            productSearch.focus();
        }
        renderProducts();
    });
    searchClear.style.display = 'none';
}


/* ============================================================
   2. TARJETAS FLIP - PRODUCTOS SEPARADOS CON EFECTO FLIP
   ============================================================ */

const PRODUCTS_GRID = document.getElementById('productsGrid');

function badgeClass(badge) {
    const map = { hot: 'badge-hot', new: 'badge-new', sale: 'badge-sale' };
    return map[badge] || '';
}

function attachTouchGestures(el, { onSwipeLeft, onSwipeRight, threshold = 45 }) {
    let tracking = false;
    let x0 = 0, y0 = 0;
    let scroll0 = 0;
    let scrolled = false;

    el.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        tracking = true;
        scrolled = false;
        x0 = e.touches[0].clientX;
        y0 = e.touches[0].clientY;
        scroll0 = window.scrollY;
    }, { passive: true });

    el.addEventListener('touchmove', () => {
        if (tracking && window.scrollY !== scroll0) scrolled = true;
    }, { passive: true });

    el.addEventListener('touchend', (e) => {
        if (!tracking) return;
        tracking = false;
        if (scrolled || window.scrollY !== scroll0) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - x0;
        const dy = t.clientY - y0;
        if (Math.abs(dx) < threshold || Math.abs(dx) <= Math.abs(dy)) return;

        if (dx < 0 && onSwipeLeft) {
            e.preventDefault();
            onSwipeLeft();
        } else if (dx > 0 && onSwipeRight) {
            e.preventDefault();
            onSwipeRight();
        }
    }, { passive: false });

    el.addEventListener('touchcancel', () => {
        tracking = false;
    });
}

/* Crear tarjeta flip para cada producto individual */
function createProductCard(product, family) {
    const card = document.createElement('div');
    card.className = 'flip-card product-flip-card';
    card.dataset.productName = product.title.toLowerCase();

    const inner = document.createElement('div');
    inner.className = 'flip-card-inner';

    /* Cara frontal - Producto */
    const front = document.createElement('div');
    front.className = 'flip-card-face flip-card-front product-front';
    front.innerHTML = `
        <div class="cover-decor"></div>
        <div class="product-front-image">
            <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
            ${product.badge ? `<span class="card-badge ${badgeClass(product.badge)}">${product.badgeText || product.badge}</span>` : ''}
        </div>
        <div class="product-front-info">
            <div class="product-category">${family.title}</div>
            <h3 class="product-front-title">${product.title}</h3>
            <div class="product-front-price">
                <span class="price-current">${product.price}</span>
                ${product.oldPrice ? `<span class="price-old">${product.oldPrice}</span>` : ''}
            </div>
            <span class="cover-hint"><i class="fas fa-hand-pointer"></i> Click para ver detalles / Pedir</span>
        </div>
    `;

    /* Cara trasera - Detalles y pedido con efecto flip */
    const back = document.createElement('div');
    back.className = 'flip-card-face flip-card-back product-back';

    const flipInner = document.createElement('div');
    flipInner.className = 'card-flip-inner order-flip';
    back.appendChild(flipInner);

    function renderBack() {
        const badge = product.badge ?
            `<span class="card-badge ${badgeClass(product.badge)}">${product.badgeText || product.badge}</span>` : '';
        const old = product.oldPrice ?
            `<span class="price-old">${product.oldPrice}</span>` : '';
        const count = product.images.length > 1 ?
            `<span class="card-image-count">
                <i class="fas fa-images"></i> ${product.images.length} fotos
            </span>` : '';

        flipInner.innerHTML = `
            <div class="card-image-container">
                <img class="card-image" src="${product.images[0]}" alt="${product.title}" loading="lazy">
                ${badge}
                ${count}
                <button class="gallery-btn" title="Ver todas las fotos">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
            <div class="card-body">
                <div class="card-category">${family.title}</div>
                <h3 class="card-title">${product.title}</h3>
                <div class="product-specs">
                    ${product.specs ? product.specs.slice(0, 3).map(s => 
                        `<div class="spec-item"><span class="spec-label">${s.label}:</span> <span class="spec-value">${s.value}</span></div>`
                    ).join('') : ''}
                </div>
                <div class="card-price">
                    <span class="price-current">${product.price}</span>
                    ${old}
                </div>
                <div class="order-section">
                    <a class="order-whatsapp-btn"
                       href="https://wa.me/584226382165?text=${encodeURIComponent('Hola, me gustaría pedir: ' + product.title + ' - Precio: ' + product.price)}"
                       target="_blank" rel="noopener">
                        <i class="fab fa-whatsapp"></i> Pedir por WhatsApp
                    </a>
                </div>
                <span class="flip-back-hint"><i class="fas fa-undo"></i> Toca para volver</span>
            </div>
        `;

        const openGallery = (e) => {
            e.stopPropagation();
            openModal({ title: product.title, images: product.images });
        };
        flipInner.querySelector('.gallery-btn').addEventListener('click', openGallery);
        flipInner.querySelector('.card-image-container').addEventListener('click', openGallery);
    }

    front.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-btn') || e.target.closest('a')) return;
        renderBack();
        card.classList.add('flipped');
    });

    back.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-btn') || e.target.closest('.card-image-container img') || e.target.closest('.order-whatsapp-btn')) return;
        card.classList.remove('flipped');
    });

    attachTouchGestures(front, {
        onSwipeLeft: () => {
            renderBack();
            card.classList.add('flipped');
        },
        onSwipeRight: () => {
            renderBack();
            card.classList.add('flipped');
        },
    });

    attachTouchGestures(back, {
        onSwipeRight: () => {
            card.classList.remove('flipped');
        },
        onSwipeLeft: () => {
            card.classList.remove('flipped');
        },
    });

    renderBack();
    inner.append(front, back);
    card.appendChild(inner);
    return card;
}

function renderProducts() {
    if (!PRODUCTS_GRID) return;
    PRODUCTS_GRID.innerHTML = '';
    
    const products = [];
    productFamilies.forEach(family => {
        family.variants.forEach(variant => {
            products.push({ product: variant, family: family });
        });
    });
    
    let filteredProducts = products;
    
    if (currentBrandFilter !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.family.title === currentBrandFilter);
    }
    
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(item => 
            item.product.title.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    if (searchResultsInfo && searchResultsText) {
        if (currentSearchTerm) {
            searchResultsInfo.style.display = 'block';
            let filterText = `para "${productSearch.value}"`;
            if (currentBrandFilter !== 'all') {
                filterText += ` en ${currentBrandFilter}`;
            }
            searchResultsText.textContent = `Se encontraron ${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''} ${filterText}`;
        } else if (currentBrandFilter !== 'all') {
            searchResultsInfo.style.display = 'block';
            searchResultsText.textContent = `Mostrando productos de ${currentBrandFilter} (${filteredProducts.length})`;
        } else {
            searchResultsInfo.style.display = 'none';
        }
    }
    
    if (noResults) {
        noResults.style.display = ((currentSearchTerm || currentBrandFilter !== 'all') && filteredProducts.length === 0) ? 'flex' : 'none';
    }
    
    filteredProducts.sort((a, b) => 
        a.product.title.localeCompare(b.product.title, 'es', { sensitivity: 'base' })
    );
    
    filteredProducts.forEach(item => {
        PRODUCTS_GRID.appendChild(createProductCard(item.product, item.family));
    });
}


/* ============================================================
   3. MODAL DE GALERIA DE FOTOS
   ============================================================ */
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDots = document.getElementById('modalDots');
let modalImages = [];
let modalIndex = 0;

function openModal(product, startIndex = 0) {
    modalImages = product.images;
    modalIndex = startIndex;
    showModalImage();
    renderModalDots();
    modal.classList.add('active');

    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    const showNav = modalImages.length > 1;
    prevBtn.style.display = showNav ? 'flex' : 'none';
    nextBtn.style.display = showNav ? 'flex' : 'none';
}

function closeModal() {
    modal.classList.remove('active');
}

function showModalImage() {
    modalImage.style.opacity = '0';
    setTimeout(() => {
        modalImage.src = modalImages[modalIndex];
        modalImage.style.opacity = '1';
    }, 150);
    updateModalDots();
}

function renderModalDots() {
    modalDots.innerHTML = '';
    modalImages.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'modal-dot';
        dot.addEventListener('click', () => {
            modalIndex = idx;
            showModalImage();
        });
        modalDots.appendChild(dot);
    });
    updateModalDots();
}

function updateModalDots() {
    modalDots.querySelectorAll('.modal-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === modalIndex);
    });
}

function nextImage() {
    modalIndex = (modalIndex + 1) % modalImages.length;
    showModalImage();
}

function prevImage() {
    modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
    showModalImage();
}

// Botones del modal
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalNext').addEventListener('click', nextImage);
document.getElementById('modalPrev').addEventListener('click', prevImage);

// Atajos de teclado cuando el modal esta abierto
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Cierra el modal al hacer click fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});


/* ============================================================
   4. INICIO DE LA PAGINA (CARGA INMEDIATA)
   ============================================================ */
initBrandFilter();
renderProducts();

// Fuerza la visibilidad de todas las secciones al cargar sin esperar scroll
document.querySelectorAll('.fade-in, .products-section, .footer').forEach(el => {
    el.classList.add('visible');
});