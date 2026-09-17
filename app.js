/* ============================================================
   LOGICA DE LA TIENDA DE ILUMINACION
   ============================================================
   ESTE ARCHIVO:
   1. Menu (navbar): fondo al hacer scroll + menu movil
   2. Hero: particulas flotantes + contadores animados
   3. Tarjetas de productos: una tarjeta por categoria,
      el flip recorre todos sus productos (de data.js)
   4. Modal de galeria de fotos

   COMO MODIFICAR:
   - Agregar/quitar productos -> edita "data.js"
   - Velocidad del flip -> setTimeout(650) + CSS transition
   - Velocidad de animaciones -> en este archivo
   ============================================================ */


/* ============================================================
   1. MENU (NAVBAR)
   ============================================================ */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

/* Agrega fondo al menu cuando haces scroll */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* Menu hamburguesa en movil */
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* Cierra el menu al hacer click en un link */
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});


/* ============================================================
   2. HERO (PARTICULAS + CONTADORES)
   ============================================================ */

/* Genera particulas flotantes de fondo */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 6 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 15) + 's';
        if (Math.random() > 0.5) p.style.background = 'var(--accent)';
        container.appendChild(p);
    }
}
createParticles();

/* Anima un numero desde 0 hasta su valor */
function animateCounter(element, target) {
    const duration = 2000;
    const start = performance.now();
    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/* Anima las estadisticas del hero */
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        animateCounter(counter, parseInt(counter.dataset.target));
    });
}

/* Activa las animaciones de aparicion al hacer scroll */
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('hero')) animateCounters();
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}


/* ============================================================
   3. TARJETAS DE PRODUCTOS (efecto flip)
   ============================================================ */

/* Contenedor donde se dibujan TODAS las tarjetas */
const PRODUCTS_GRID = document.getElementById('productsGrid');

/* Devuelve la clase CSS de la etiqueta (badge) segun su tipo */
function badgeClass(badge) {
    const map = { hot: 'badge-hot', new: 'badge-new', sale: 'badge-sale' };
    return map[badge] || '';
}

/* PORTADA: dibuja la cara de portada de la tarjeta con el
   titulo de la categoria y la cantidad de modelos. */
function renderCover(face, family) {
    const count = family.variants.length;
    face.innerHTML = `
        <div class="card-cover ${family.cover}">
            <div class="cover-decor"></div>
            <div class="cover-icon"><i class="${family.icon}"></i></div>
            <h3 class="cover-title">${family.title}</h3>
            <span class="cover-count">${count} ${count === 1 ? 'modelo' : 'modelos'}</span>
            <span class="cover-hint"><i class="fas fa-hand-pointer"></i> Click para ver modelos</span>
        </div>
    `;
}

/* PRODUCTO: dibuja la cara de un producto (imagen, precio,
   contador "Modelo X / total"). */
function renderProduct(face, variant, family, index, total) {
    const badge = variant.badge ?
        `<span class="card-badge ${badgeClass(variant.badge)}">${variant.badgeText}</span>` : '';
    const old = variant.oldPrice ?
        `<span class="price-old">${variant.oldPrice}</span>` : '';

    face.innerHTML = `
        <div class="card-image-container">
            <img class="card-image" src="${variant.images[0]}" alt="${variant.title}" loading="lazy">
            ${badge}
            <span class="card-image-count">
                <i class="fas fa-images"></i> ${variant.images.length} fotos
            </span>
            <button class="gallery-btn" title="Ver todas las fotos">
                <i class="fas fa-expand"></i>
            </button>
        </div>
        <div class="card-body">
            <div>
                <div class="card-category">${family.title}</div>
                <h3 class="card-title">${variant.title}</h3>
            </div>
            <div>
                <div class="card-price">
                    <span class="price-current">${variant.price}</span>
                    ${old}
                </div>
                <div class="card-meta">
                    <span class="model-counter">
                        Modelo <b>${index + 1}</b> / ${total}
                    </span>
                    <span class="flip-hint">
                        <i class="fas fa-sync-alt"></i> Click para el siguiente
                    </span>
                </div>
            </div>
        </div>
    `;
}

/* Crea UNA tarjeta por categoria.
   El ciclo del flip es: portada(-1) -> producto0 -> producto1
   ... -> portada, y vuelve a empezar. */
function createCategoryCard(family) {
    const total = family.variants.length;
    let pos = -1;        // estado actual: -1 = portada, 0..total-1 = producto
    let flipped = false; // cara visible: false = front, true = back
    let busy = false;    // bloquea clicks mientras gira (evita doble flip)

    // Construccion de la tarjeta: dos caras dentro de un "inner" 3D
    const card = document.createElement('div');
    card.className = 'flip-card';

    const inner = document.createElement('div');
    inner.className = 'flip-card-inner';

    const front = document.createElement('div');
    front.className = 'flip-card-front';

    const back = document.createElement('div');
    back.className = 'flip-card-back';

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Define el contenido de una cara segun el estado (-1 = portada)
    const render = (face, state) => {
        if (state === -1) renderCover(face, family);
        else renderProduct(face, family.variants[state], family, state, total);
    };

    // ESTADO INICIAL: portada al frente, primer producto preparado detras
    render(front, -1);
    render(back, 0);

    // CLICK EN LA TARJETA
    card.addEventListener('click', (e) => {
        // Si se pulsa el boton de galeria se abre el modal del modelo
        // visible (sin cambiar el flip).
        if (e.target.closest('.gallery-btn')) {
            e.stopPropagation();
            const v = family.variants[pos >= 0 ? pos : 0];
            openModal({ title: v.title, images: v.images });
            return;
        }

        if (busy) return;   // ignora clicks durante el giro
        busy = true;

        // Siguiente estado del ciclo
        const next = (pos === total - 1) ? -1 : pos + 1;

        // La cara que se va a revelar recibe su contenido ANTES de girar
        const targetFace = flipped ? front : back;
        render(targetFace, next);

        // Ejecuta el giro 180 grados
        flipped = !flipped;
        card.classList.toggle('flipped', flipped);
        pos = next;

        // Desbloquea los clicks cuando termina el giro
        setTimeout(() => busy = false, 650);
    });

    return card;
}

/* Genera todas las tarjetas y las coloca en la seccion unica.
   La cantidad de tarjetas sale automaticamente de data.js */
function renderAllCategories() {
    if (!PRODUCTS_GRID) return;
    productFamilies.forEach(family => {
        PRODUCTS_GRID.appendChild(createCategoryCard(family));
    });
}


/* ============================================================
   4. MODAL DE GALERIA DE FOTOS
   ============================================================ */
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDots = document.getElementById('modalDots');
let modalImages = [];
let modalIndex = 0;

/* Abre el modal con las imagenes del producto recibido */
function openModal(product, startIndex = 0) {
    modalImages = product.images;
    modalIndex = startIndex;
    showModalImage();
    renderModalDots();
    modal.classList.add('active');

    // Si el producto tiene 1 sola foto oculta las flechas
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
   5. INICIO DE LA PAGINA
   ============================================================ */
renderAllCategories();

// Activa las animaciones de aparicion de las secciones
document.querySelectorAll('.products-section, .footer').forEach(el => {
    el.classList.add('fade-in');
});
setupIntersectionObserver();