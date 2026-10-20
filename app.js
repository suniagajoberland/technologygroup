/* ============================================================
   LOGICA DE LA TIENDA DE ILUMINACION
   ============================================================
   ESTE ARCHIVO:
   1. Menu (navbar): fondo al hacer scroll
   2. Tarjetas flip: UNA tarjeta por categoria (marca/descripcion).
      - Cara frontal: portada de la categoria
      - Dorso: productos de la categoria, con botones
        para CAMBIAR de producto y VOLVER a la portada
      - Movil: toque para voltear; swipe horizontal cambia de
        producto; swipe hacia abajo en el dorso vuelve a portada
   3. Modal de galeria de fotos

   COMO MODIFICAR:
   - Agregar/quitar productos -> edita "data.js"
   ============================================================ */


/* ============================================================
   1. MENU (NAVBAR)
   ============================================================ */
const navbar = document.getElementById('navbar');

/* Agrega fondo al menu cuando haces scroll */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


/* ============================================================
   2. TARJETAS FLIP (UNA POR CATEGORIA)
   ============================================================ */

/* Contenedor donde se dibujan TODAS las tarjetas */
const PRODUCTS_GRID = document.getElementById('productsGrid');

/* Devuelve la clase CSS de la etiqueta (badge) segun su tipo */
function badgeClass(badge) {
    const map = { hot: 'badge-hot', new: 'badge-new', sale: 'badge-sale' };
    return map[badge] || '';
}

/* Detecta swipes con el dedo (movil/tablet).
   - swipe horizontal: onSwipeLeft / onSwipeRight
   - swipe hacia abajo: onSwipeDown
   Los toques simples NO se procesan aqui: dejan pasar al click
   normal (voltear, abrir galeria, botones). */
function attachTouchGestures(el, { onSwipeLeft, onSwipeRight, onSwipeDown, threshold = 45 }) {
    let tracking = false;
    let x0 = 0, y0 = 0;

    el.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        tracking = true;
        x0 = e.touches[0].clientX;
        y0 = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener('touchend', (e) => {
        if (!tracking) return;
        tracking = false;
        const t = e.changedTouches[0];
        const dx = t.clientX - x0;
        const dy = t.clientY - y0;
        if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) return;

        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0 && onSwipeLeft) {
                e.preventDefault(); // cancela el click sintetico
                onSwipeLeft();
            } else if (dx > 0 && onSwipeRight) {
                e.preventDefault();
                onSwipeRight();
            }
        } else if (dy > threshold && onSwipeDown) {
            e.preventDefault();
            onSwipeDown();
        }
    }, { passive: false });

    el.addEventListener('touchcancel', () => {
        tracking = false;
    });
}

/* Crea UNA tarjeta flip por categoria:
   - Frente: portada con icono, nombre y cantidad de productos
   - Dorso: producto actual con precio + botones
     [ < ] cambiar producto [ > ]  y  [ Volver ]
   Click en la portada voltea; los botones del dorso controlan
   la navegacion entre productos sin salir del flip. */
function createFlipCard(family) {
    const variants = [...family.variants]; // ya vienen ordenados alfabeticamente en data.js
    const total = variants.length;
    let index = 0;

    const card = document.createElement('div');
    card.className = 'flip-card';

    const inner = document.createElement('div');
    inner.className = 'flip-card-inner';

    /* -------- CARA FRONTAL (portada) -------- */
    const front = document.createElement('div');
    front.className = 'flip-card-face flip-card-front';
    front.innerHTML = `
        <div class="cover-decor"></div>
        <div class="cover-icon"><i class="${family.icon}"></i></div>
        <h3 class="cover-title">${family.title}</h3>
        <span class="cover-count">${total} ${total === 1 ? 'producto' : 'productos'}</span>
        <span class="cover-hint"><i class="fas fa-hand-pointer"></i> Click o toca para ver</span>
    `;

    /* -------- CARA TRASERA (productos) -------- */
    const back = document.createElement('div');
    back.className = 'flip-card-face flip-card-back';

    function renderBack() {
        const v = variants[index];
        const badge = v.badge ?
            `<span class="card-badge ${badgeClass(v.badge)}">${v.badgeText}</span>` : '';
        const old = v.oldPrice ?
            `<span class="price-old">${v.oldPrice}</span>` : '';
        const count = v.images.length > 1 ?
            `<span class="card-image-count">
                <i class="fas fa-images"></i> ${v.images.length} fotos
            </span>` : '';

        back.innerHTML = `
            <div class="card-image-container">
                <img class="card-image" src="${v.images[0]}" alt="${v.title}" loading="lazy">
                ${badge}
                ${count}
                <button class="gallery-btn" title="Ver todas las fotos">
                    <i class="fas fa-expand"></i>
                </button>
            </div>
            <div class="card-body">
                <div class="card-category">${family.title}</div>
                <h3 class="card-title">${v.title}</h3>
                <div class="card-price">
                    <span class="price-current">${v.price}</span>
                    ${old}
                    <a class="card-whatsapp"
                       href="https://wa.me/584226382165?text=${encodeURIComponent('Hola, me gustaría comprar: ' + v.title)}"
                       target="_blank" rel="noopener"
                       title="Comprar por WhatsApp">
                        <i class="fab fa-whatsapp"></i> Comprar
                    </a>
                </div>
                <div class="card-nav">
                    <button class="nav-btn nav-prev" title="Producto anterior"
                        ${total < 2 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="nav-counter">${index + 1} / ${total}</span>
                    <button class="nav-btn nav-next" title="Siguiente producto"
                        ${total < 2 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <button class="flip-return" title="Volver a la portada">
                        <i class="fas fa-undo"></i> Volver
                    </button>
                </div>
            </div>
        `;

        const openGallery = (e) => {
            e.stopPropagation();
            openModal({ title: v.title, images: v.images });
        };
        back.querySelector('.gallery-btn').addEventListener('click', openGallery);
        back.querySelector('.card-image-container').addEventListener('click', openGallery);

        const prevBtn = back.querySelector('.nav-prev');
        const nextBtn = back.querySelector('.nav-next');
        if (prevBtn) prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            index = (index - 1 + total) % total;
            renderBack();
        });
        if (nextBtn) nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            index = (index + 1) % total;
            renderBack();
        });

        back.querySelector('.flip-return').addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('flipped');
        });
    }

    /* Click en la portada -> voltea al dorso (empieza en el 1er producto) */
    front.addEventListener('click', () => {
        index = 0;
        renderBack();
        card.classList.add('flipped');
    });

    /* -------- GESTOS CON EL DEDO (movil/tablet) -------- */
    /* Portada: swipe horizontal tambien voltea la tarjeta */
    attachTouchGestures(front, {
        onSwipeLeft: () => flipToBack(),
        onSwipeRight: () => flipToBack(),
    });

    /* Dorso: swipe horizontal cambia de producto
       (si estas en el 1ro y deslizas a la derecha, vuelve a portada),
       swipe hacia abajo vuelve a la portada */
    attachTouchGestures(back, {
        onSwipeLeft: () => {
            index = (index + 1) % total;
            renderBack();
        },
        onSwipeRight: () => {
            if (index === 0) {
                card.classList.remove('flipped');
            } else {
                index -= 1;
                renderBack();
            }
        },
        onSwipeDown: () => card.classList.remove('flipped'),
    });

    function flipToBack() {
        index = 0;
        renderBack();
        card.classList.add('flipped');
    }

    renderBack();
    inner.append(front, back);
    card.appendChild(inner);
    return card;
}

/* Ordena las categorias alfabeticamente y dibuja una tarjeta flip por cada una */
function renderAllCategories() {
    if (!PRODUCTS_GRID) return;
    const sorted = [...productFamilies].sort((a, b) =>
        a.title.localeCompare(b.title, 'es', { sensitivity: 'base' })
    );
    sorted.forEach(family => {
        PRODUCTS_GRID.appendChild(createFlipCard(family));
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
renderAllCategories();

// Fuerza la visibilidad de todas las secciones al cargar sin esperar scroll
document.querySelectorAll('.fade-in, .products-section, .footer').forEach(el => {
    el.classList.add('visible');
});