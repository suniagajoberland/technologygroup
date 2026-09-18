/**
 * ============================================================
 * DATA PARA EDITAR - LOS PRODUCTOS DE LA TIENDA
 * ============================================================
 * AQUI ES DONDE DEBES AGREGAR / QUITAR / CAMBIAR PRODUCTOS.
 * No necesitas tocar index.html, styles.css ni app.js.
 *
 * ESTRUCTURA:
 *  productFamilies = [ categoria1, categoria2, ... ]
 *
 *  CADA CATEGORIA tiene:
 *   - section   : grupo al que pertenece (cables, lamparas, ...)
 *   - title     : nombre que se muestra en la portada de la tarjeta
 *   - icon      : icono de FontAwesome de la portada (ej. "fas fa-bolt")
 *   - cover     : color de fondo de la portada (ver styles.css)
 *   - variants  : LISTA DE PRODUCTOS. El flip los recorre uno a uno
 *
 *  CADA PRODUCTO (variante) tiene:
 *   - title     : nombre del producto
 *   - price     : precio o texto
 *   - oldPrice  : precio anterior (dejar '' si no hay oferta)
 *   - badge     : etiqueta opcional: 'new' | 'hot' | 'sale' (o '')
 *   - badgeText : texto de la etiqueta (ej. "Nuevo")
 *   - images    : ARRAY DE FOTOS del producto (puedes poner 1 o varias)
 *   - specs     : especificaciones (no se usan aun, se pueden ignorar)
 *
 * COMO AGREGAR UN PRODUCTO NUEVO:
 *  1. Copia un bloque { ... } de "variants"
 *  2. Cambia title, price, badge y las URLs de images
 *  3. Listo: la tarjeta lo recorrera automaticamente
 *
 * COMO AGREGAR UNA CATEGORIA NUEVA:
 *  1. Copia un bloque de categoria completo
 *  2. Cambia section, title, icon, cover y variants
 *  3. Asegurate de que "section" tenga su contenedor en app.js
 *     (SECTION_IDS) apuntando al mismo grid
 * ============================================================
 */

const productFamilies = [

    // =============== CABLES (1 tarjeta: recorre #2 -> #14) ===============
    {
        section: 'cables',
        title: 'Cable de Corriente',
        icon: 'fas fa-bolt',
        cover: 'cover-cables',
        variants: [
            {
                title: 'Cable #2',
                price: 'Precio por metro',
                oldPrice: '',
                badge: 'hot', badgeText: 'Mas Vendido',
                images: [
                    './img/2.jpg',                    
                ],
                specs: [
                    { label: 'Calibre', value: '#2 AWG' },
                    { label: 'Aplicacion', value: 'Alimentacion principal' },
                    { label: 'Uso', value: 'Industrial / Residencial' }
                ]
            },
            {
                title: 'Cable #4',
                price: 'Precio por metro',
                oldPrice: '',
                badge: '',
                images: [
                    './img/4.jpg',
                ],
                specs: [
                    { label: 'Calibre', value: '#4 AWG' },
                    { label: 'Aplicacion', value: 'Alimentacion principal' },
                    { label: 'Uso', value: 'Industrial / Residencial' }
                ]
            },
            {
                title: 'Cable #6',
                price: 'Precio por metro',
                oldPrice: '',
                badge: '',
                images: [
                    './img/6.jpg',
                ],
                specs: [
                    { label: 'Calibre', value: '#6 AWG' },
                    { label: 'Aplicacion', value: 'Circuito de alimentacion' },
                    { label: 'Uso', value: 'Residencial / Comercial' }
                ]
            },
            {
                title: 'Cable #8',
                price: 'Precio por metro',
                oldPrice: '',
                badge: '',
                images: [
                    './img/8.jpg',
                ],
                specs: [
                    { label: 'Calibre', value: '#8 AWG' },
                    { label: 'Aplicacion', value: 'Subalimentacion' },
                    { label: 'Uso', value: 'Residencial / Comercial' }
                ]
            },
            {
                title: 'Cable #10',
                price: 'Precio por metro',
                oldPrice: '',
                badge: '',
                images: [
                    './img/10.jpg',
                ],
                specs: [
                    { label: 'Calibre', value: '#10 AWG' },
                    { label: 'Aplicacion', value: 'Circuitos ramales' },
                    { label: 'Uso', value: 'Residencial' }
                ]
            },
            {
                title: 'Cable #12',
                price: 'Precio por metro',
                oldPrice: '',
                badge: 'new', badgeText: 'Nuevo',
                images: [
                    './img/12.jpg',
                ],
                specs: [
                    { label: 'Calibre', value: '#12 AWG' },
                    { label: 'Aplicacion', value: 'Circuitos de tomacorriente' },
                    { label: 'Uso', value: 'Residencial' }
                ]
            },
            {
                title: 'Cable #14',
                price: 'Precio por metro',
                oldPrice: '',
                badge: '',
                images: [
                    './img/14.jpg',
                ],
                specs: [
                    { label: 'Calibre', value: '#14 AWG' },
                    { label: 'Aplicacion', value: 'Circuitos de iluminacion' },
                    { label: 'Uso', value: 'Residencial' }
                ]
            }
        ]
    },

    // =============== LAMPARAS REDONDAS (recorre los 3 modelos) ===============
    {
        section: 'lamparas',
        title: 'Lampara Redonda Superficial',
        icon: 'fas fa-lightbulb',
        cover: 'cover-redonda',
        variants: [
            {
                title: 'Lampara Redonda Superficial',
                price: 'Desde $150',
                oldPrice: '$190',
                badge: 'sale', badgeText: 'Oferta',
                images: [
                    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
                    'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&q=80',
                    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80'
                ],
                specs: [
                    { label: 'Forma', value: 'Redonda' },
                    { label: 'Instalacion', value: 'Superficial' },
                    { label: 'Tecnologia', value: 'LED' }
                ]
            },
            {
                title: 'Lampara Redonda Arco Decorativa',
                price: 'Desde $180',
                oldPrice: '',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
                    'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&q=80',
                    'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80'
                ],
                specs: [
                    { label: 'Forma', value: 'Redonda' },
                    { label: 'Instalacion', value: 'Superficial' },
                    { label: 'Tecnologia', value: 'LED' }
                ]
            },
            {
                title: 'Lampara Redonda Foco Grande',
                price: 'Desde $200',
                oldPrice: '$240',
                badge: 'hot', badgeText: 'Popular',
                images: [
                    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
                    'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&q=80',
                    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80'
                ],
                specs: [
                    { label: 'Forma', value: 'Redonda' },
                    { label: 'Instalacion', value: 'Superficial' },
                    { label: 'Tecnologia', value: 'LED' }
                ]
            }
        ]
    },

    // =============== LAMPARAS CUADRADAS (recorre los 3 modelos) ===============
    {
        section: 'lamparas',
        title: 'Lampara Cuadrada Superficial',
        icon: 'fas fa-lamp',
        cover: 'cover-cuadrada',
        variants: [
            {
                title: 'Lampara Cuadrada Superficial',
                price: 'Desde $140',
                oldPrice: '',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&q=80',
                    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
                    'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80'
                ],
                specs: [
                    { label: 'Forma', value: 'Cuadrada' },
                    { label: 'Instalacion', value: 'Superficial' },
                    { label: 'Tecnologia', value: 'LED' }
                ]
            },
            {
                title: 'Lampara Cuadrada 2x2',
                price: 'Desde $220',
                oldPrice: '$260',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&q=80',
                    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
                    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80'
                ],
                specs: [
                    { label: 'Forma', value: 'Cuadrada' },
                    { label: 'Instalacion', value: 'Superficial' },
                    { label: 'Tecnologia', value: 'LED' }
                ]
            },
            {
                title: 'Lampara Cuadrada Industrial',
                price: 'Desde $190',
                oldPrice: '',
                badge: 'new', badgeText: 'Nuevo',
                images: [
                    'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=600&q=80',
                    'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
                    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80'
                ],
                specs: [
                    { label: 'Forma', value: 'Cuadrada' },
                    { label: 'Instalacion', value: 'Superficial' },
                    { label: 'Tecnologia', value: 'LED' }
                ]
            }
        ]
    },

    // =============== REFLECTORES LED (recorre 50W -> 400W) ===============
    {
        section: 'reflectores',
        title: 'Reflectores LED',
        icon: 'fas fa-sun',
        cover: 'cover-reflector',
        variants: [
            {
                title: 'Reflector LED 50W',
                price: '$450',
                oldPrice: '$550',
                badge: 'sale', badgeText: 'Oferta',
                images: [
                    'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80',
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
                ],
                specs: [
                    { label: 'Potencia', value: '50W' },
                    { label: 'Tipo', value: 'LED' },
                    { label: 'Aplicacion', value: 'Jardin / Camping' }
                ]
            },
            {
                title: 'Reflector LED 100W',
                price: '$680',
                oldPrice: '',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80',
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
                ],
                specs: [
                    { label: 'Potencia', value: '100W' },
                    { label: 'Tipo', value: 'LED' },
                    { label: 'Aplicacion', value: 'Patio / Garaje' }
                ]
            },
            {
                title: 'Reflector LED 200W',
                price: '$980',
                oldPrice: '$1,100',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80',
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
                ],
                specs: [
                    { label: 'Potencia', value: '200W' },
                    { label: 'Tipo', value: 'LED' },
                    { label: 'Aplicacion', value: 'Cancha / Bodega' }
                ]
            },
            {
                title: 'Reflector LED 300W',
                price: '$1,350',
                oldPrice: '',
                badge: 'hot', badgeText: 'Popular',
                images: [
                    'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80',
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
                ],
                specs: [
                    { label: 'Potencia', value: '300W' },
                    { label: 'Tipo', value: 'LED' },
                    { label: 'Aplicacion', value: 'Cancha / Industrial' }
                ]
            },
            {
                title: 'Reflector LED 400W',
                price: '$1,850',
                oldPrice: '$2,100',
                badge: 'sale', badgeText: 'Oferta',
                images: [
                    'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80',
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
                ],
                specs: [
                    { label: 'Potencia', value: '400W' },
                    { label: 'Tipo', value: 'LED' },
                    { label: 'Aplicacion', value: 'Industrial / Eventos' }
                ]
            }
        ]
    },

    // =============== REFLECTOR ALUMBRADO PUBLICO (1 modelo) ===============
    {
        section: 'reflectores',
        title: 'Alumbrado Publico',
        icon: 'fas fa-city',
        cover: 'cover-alumbrado',
        variants: [
            {
                title: 'Reflector Alumbrado Publico',
                price: '$2,200',
                oldPrice: '',
                badge: 'new', badgeText: 'Nuevo',
                images: [
                    'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80',
                    'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80',
                    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80'
                ],
                specs: [
                    { label: 'Tipo', value: 'Alumbrado Publico' },
                    { label: 'Potencia', value: '100W - 300W' },
                    { label: 'Aplicacion', value: 'Calles / Avenidas' }
                ]
            }
        ]
    },

    // =============== SILLAS GAMER (recorre los 3 modelos) ===============
    {
        section: 'gamer',
        title: 'Sillas Gamer',
        icon: 'fas fa-chair',
        cover: 'cover-gamer',
        variants: [
            {
                title: 'Silla Gamer Basica',
                price: '$2,800',
                oldPrice: '$3,200',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80',
                    'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&q=80',
                    'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=80'
                ],
                specs: [
                    { label: 'Material', value: 'Cuero PU' },
                    { label: 'Capacidad', value: 'Hasta 120kg' },
                    { label: 'Reclinado', value: '135°' }
                ]
            },
            {
                title: 'Silla Gamer Pro',
                price: '$3,500',
                oldPrice: '$4,000',
                badge: 'hot', badgeText: 'Mas Vendido',
                images: [
                    'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80',
                    'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&q=80',
                    'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=80'
                ],
                specs: [
                    { label: 'Material', value: 'Cuero PU Premium' },
                    { label: 'Capacidad', value: 'Hasta 150kg' },
                    { label: 'Reclinado', value: '180°' }
                ]
            },
            {
                title: 'Silla Gamer Deluxe',
                price: '$4,200',
                oldPrice: '',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80',
                    'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&q=80',
                    'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=80'
                ],
                specs: [
                    { label: 'Material', value: 'Cuero + Mesh' },
                    { label: 'Capacidad', value: 'Hasta 180kg' },
                    { label: 'Reclinado', value: '180° + Soporte Lumbar' }
                ]
            }
        ]
    },

    // =============== PROTECTORES DE CORRIENTE (recorre nevera -> lavadora) ===============
    {
        section: 'protectores',
        title: 'Protectores de Corriente',
        icon: 'fas fa-shield-halved',
        cover: 'cover-protector',
        variants: [
            {
                title: 'Protector para Nevera',
                price: '$350',
                oldPrice: '$420',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&q=80',
                    'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80',
                    'https://images.unsplash.com/photo-1584790193260-4961a55e95bc?w=600&q=80'
                ],
                specs: [
                    { label: 'Aplicacion', value: 'Nevera / Refrigerador' },
                    { label: 'Proteccion', value: 'Sobre y baja tension' },
                    { label: 'Capacidad', value: '220V' }
                ]
            },
            {
                title: 'Protector para TV',
                price: '$280',
                oldPrice: '',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&q=80',
                    'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80',
                    'https://images.unsplash.com/photo-1584790193260-4961a55e95bc?w=600&q=80'
                ],
                specs: [
                    { label: 'Aplicacion', value: 'Televisor' },
                    { label: 'Proteccion', value: 'Sobre y baja tension' },
                    { label: 'Capacidad', value: '220V' }
                ]
            },
            {
                title: 'Protector para Computadora',
                price: '$300',
                oldPrice: '$360',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&q=80',
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
                    'https://images.unsplash.com/photo-1584790193260-4961a55e95bc?w=600&q=80'
                ],
                specs: [
                    { label: 'Aplicacion', value: 'Computadora / PC' },
                    { label: 'Proteccion', value: 'Sobre y baja tension' },
                    { label: 'Capacidad', value: '220V' }
                ]
            },
            {
                title: 'Protector para Aire Acondicionado',
                price: '$420',
                oldPrice: '$500',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&q=80',
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
                    'https://images.unsplash.com/photo-1584790193260-4961a55e95bc?w=600&q=80'
                ],
                specs: [
                    { label: 'Aplicacion', value: 'Aire Acondicionado' },
                    { label: 'Proteccion', value: 'Sobre y baja tension' },
                    { label: 'Capacidad', value: '220V / 10A' }
                ]
            },
            {
                title: 'Protector para Lavadora',
                price: '$320',
                oldPrice: '',
                badge: '',
                images: [
                    'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&q=80',
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
                    'https://images.unsplash.com/photo-1584790193260-4961a55e95bc?w=600&q=80'
                ],
                specs: [
                    { label: 'Aplicacion', value: 'Lavadora' },
                    { label: 'Proteccion', value: 'Sobre y baja tension' },
                    { label: 'Capacidad', value: '220V' }
                ]
            }
        ]
    },

    // =============== REGULADOR 8 TOMAS (1 modelo) ===============
    {
        section: 'protectores',
        title: 'Regulador de 8 Tomas',
        icon: 'fas fa-plug',
        cover: 'cover-regulador',
        variants: [
            {
                title: 'Regulador Protector 8 Tomas',
                price: '$650',
                oldPrice: '$780',
                badge: 'hot', badgeText: 'Mas Vendido',
                images: [
                    'https://images.unsplash.com/photo-1584790193260-4961a55e95bc?w=600&q=80',
                    'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600&q=80',
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
                ],
                specs: [
                    { label: 'Tomas', value: '8 tomacorrientes' },
                    { label: 'Regulacion', value: 'Estabilizador de voltaje' },
                    { label: 'Proteccion', value: 'Sobre y baja tension' }
                ]
            }
        ]
    }
];