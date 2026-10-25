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
 *  Las categorias estan AGRUPADAS POR MARCA (o por descripcion
 *  si el producto no tiene marca) y ordenadas alfabeticamente.
 *  Cada categoria es UNA TARJETA FLIP en la pagina.
 *
 *  CADA CATEGORIA tiene:
 *   - section   : grupo al que pertenece (cables, lamparas, ...)
 *   - title     : nombre de la categoria (marca o descripcion)
 *   - icon      : icono de FontAwesome (ej. "fas fa-bolt")
 *   - cover     : identificador de portada (ya no se usa)
 *   - variants  : LISTA DE PRODUCTOS ordenada alfabeticamente.
 *                 Se muestran en la cara trasera del flip con
 *                 botones para cambiar y volver
 *
 *  CADA PRODUCTO (variante) tiene:
 *   - title     : nombre del producto
 *   - price     : precio (ej. "$1.95")
 *   - oldPrice  : precio anterior (dejar '' si no hay oferta)
 *   - badge     : etiqueta opcional: 'new' | 'hot' | 'sale' (o '')
 *   - badgeText : texto de la etiqueta (ej. "Nuevo")
 *   - images    : ARRAY DE FOTOS del producto (puedes poner 1 o varias)
 *   - specs     : especificaciones. Si tiene { label: "Marca" } el
 *                 producto se agrupa bajo esa marca
 *
 * COMO AGREGAR UN PRODUCTO NUEVO:
 *  1. Copia un bloque { ... } de "variants"
 *  2. Cambia title, price, badge y las URLs de images
 *  3. Agrega specs con "Marca" si quieres que se agrupe por marca
 *  4. Listo: aparecera en la tarjeta flip de su categoria
 * ============================================================
 */

const productFamilies = [
  {
    "section": "lamparas",
    "title": "AA Iluminacion",
    "icon": "fas fa-lightbulb",
    "cover": "cover-redonda",
    "variants": [
      {
        "title": "Lampara LED 12W Empotrable Cuadrada",
        "price": "5.22$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-cua.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "12W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 12W Empotrable Redonda",
        "price": "4.62$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-red.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "12W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Redonda"
          }
        ]
      },
      {
        "title": "Lampara LED 12W Superficial Cuadrada",
        "price": "5.48$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/12wc.png"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "12W"
          },
          {
            "label": "Tipo",
            "value": "Superficial Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 12W Superficial Redonda",
        "price": "4.84$",
        "oldPrice": "",
        "badge": "sale",
        "badgeText": "Oferta",
        "images": [
          "./img/12wr.png"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "12W"
          },
          {
            "label": "Tipo",
            "value": "Superficial Redonda"
          }
        ]
      },
      {
        "title": "Lampara LED 15W Empotrable Cuadrada",
        "price": "5.80$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-cua.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "15W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 18W Empotrable Cuadrada",
        "price": "6.12$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-cua.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "18W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 18W Empotrable Redonda",
        "price": "5.59$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-red.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "18W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Redonda"
          }
        ]
      },
      {
        "title": "Lampara LED 18W Superficial Cuadrada",
        "price": "6.57$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/18wc.png"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "18W"
          },
          {
            "label": "Tipo",
            "value": "Superficial Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 18W Superficial Redonda",
        "price": "6.00$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/18wr.png"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "18W"
          },
          {
            "label": "Tipo",
            "value": "Superficial Redonda"
          }
        ]
      },
      {
        "title": "Lampara LED 24W Empotrable Cuadrada",
        "price": "9.25$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-cua.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "24W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 24W Empotrable Redonda",
        "price": "9.25$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-red.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "24W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Redonda"
          }
        ]
      },
      {
        "title": "Lampara LED 24W Superficial Cuadrada",
        "price": "10.30$",
        "oldPrice": "",
        "badge": "new",
        "badgeText": "Nuevo",
        "images": [
          "./img/24wc.png"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "24W"
          },
          {
            "label": "Tipo",
            "value": "Superficial Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 24W Superficial Redonda",
        "price": "9.00$",
        "oldPrice": "",
        "badge": "hot",
        "badgeText": "Popular",
        "images": [
          "./img/24wr.png"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "24W"
          },
          {
            "label": "Tipo",
            "value": "Superficial Redonda"
          }
        ]
      },
      {
        "title": "Lampara LED 3W Empotrable Cuadrada",
        "price": "2.83$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-cua.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "3W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 6W Empotrable Cuadrada",
        "price": "3.54$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-cua.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "6W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Cuadrada"
          }
        ]
      },
      {
        "title": "Lampara LED 6W Empotrable Redonda",
        "price": "3.12$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-empotrabl-red.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "AA Iluminacion"
          },
          {
            "label": "Potencia",
            "value": "6W"
          },
          {
            "label": "Tipo",
            "value": "Empotrable Redonda"
          }
        ]
      }
    ]
  },
  {
    "section": "reflectores",
    "title": "Alumbrado Publico",
    "icon": "fas fa-road",
    "cover": "cover-alumbrado",
    "variants": [
      {
        "title": "Reflector Alumbrado Publico",
        "price": "$2,200",
        "oldPrice": "",
        "badge": "new",
        "badgeText": "Nuevo",
        "images": [
          "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?w=600&q=80",
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80",
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "Alumbrado Publico"
          },
          {
            "label": "Potencia",
            "value": "100W - 300W"
          },
          {
            "label": "Aplicacion",
            "value": "Calles / Avenidas"
          }
        ]
      }
    ]
  },
  {
    "section": "aparatos",
    "title": "Apagadores y Tomacorrientes",
    "icon": "fas fa-toggle-on",
    "cover": "cover-protector",
    "variants": [
      {
        "title": "Apagador con Toma Acrilico Blanco",
        "price": "$3.74",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-doble-toma.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATW-1K1C"
          }
        ]
      },
      {
        "title": "Apagador Doble 3-Way Conmutable Blanco",
        "price": "$3.41",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-blanco.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-HTW-2K-3W"
          }
        ]
      },
      {
        "title": "Apagador Doble con Toma Negro Modura",
        "price": "$4.38",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-doble-toma.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETB-2K3C"
          }
        ]
      },
      {
        "title": "Apagador Doble con Toma Plateado Modura",
        "price": "$4.55",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-doble-toma.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-2K3C"
          }
        ]
      },
      {
        "title": "Apagador Individual 3-Way Acrilico Blanco",
        "price": "$3.09",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-acrilico.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATW-1K-3W"
          }
        ]
      },
      {
        "title": "Apagador Individual 3-Way Plateado Troen",
        "price": "$3.25",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-plateado.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-1K-3W"
          }
        ]
      },
      {
        "title": "Apagador Individual Negro Troen",
        "price": "$2.68",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-negro.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETB-1K"
          }
        ]
      },
      {
        "title": "Apagador Individual Plateado Troen",
        "price": "$2.60",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-plateado.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-1K"
          }
        ]
      },
      {
        "title": "Apagador Triple 3-Way Conmutable Blanco",
        "price": "$4.87",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-triple.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-HTW-3K-3W"
          }
        ]
      },
      {
        "title": "Apagador Triple 3-Way Negro Troen",
        "price": "$5.12",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-triple.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETB-3K-3W"
          }
        ]
      },
      {
        "title": "Apagador Triple 3-Way Plateado Troen",
        "price": "$4.71",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-triple.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-3K-3W"
          }
        ]
      },
      {
        "title": "Apagador Triple Acrilico Blanco",
        "price": "$4.63",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/apagador-triple.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATW-3K"
          }
        ]
      },
      {
        "title": "Tapa Ciega Blanca Nordik Troen",
        "price": "$1.54",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tapa-ciega.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-HTW-EP"
          }
        ]
      },
      {
        "title": "Tapa Ciega para Empotrar Acrilico Blanco",
        "price": "$2.19",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tapa-ciega.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATW-EP"
          }
        ]
      },
      {
        "title": "Tapa Ciega para Empotrar Acrilico Negro",
        "price": "$2.27",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tapa-ciega-negra.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATB-EP"
          }
        ]
      },
      {
        "title": "Tapa Ciega para Empotrar Plateado",
        "price": "$1.79",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tapa-ciega.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-EP"
          }
        ]
      },
      {
        "title": "Timbre para Puertas Acrilico Blanco",
        "price": "$3.25",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/timbre.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATW-DBT"
          }
        ]
      },
      {
        "title": "Timbre para Puertas Blanco Nordik Troen",
        "price": "$2.60",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/timbre.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-HTW-DBT"
          }
        ]
      },
      {
        "title": "Timbre para Puertas Plateado Troen",
        "price": "$3.17",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/timbre.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-DBT"
          }
        ]
      },
      {
        "title": "Tomacorriente Doble Acrilico Blanco",
        "price": "$3.57",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tomacorriente-blanco.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-ATW-6C"
          }
        ]
      },
      {
        "title": "Tomacorriente Doble Blanco con Tierra",
        "price": "$1.95",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tomacorriente-blanco.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ET118Z-44"
          }
        ]
      },
      {
        "title": "Tomacorriente Doble Blanco Nordik Troen",
        "price": "$3.00",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tomacorriente-blanco.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "TR-HTW-6C"
          }
        ]
      },
      {
        "title": "Tomacorriente Doble con USB y Tipo C",
        "price": "$11.45",
        "oldPrice": "",
        "badge": "new",
        "badgeText": "Nuevo",
        "images": [
          "./img/products/tomacorriente-usb.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETP-6C1TC"
          }
        ]
      },
      {
        "title": "Tomacorriente Doble Negro con Tierra",
        "price": "$3.41",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tomacorriente-negro.svg"
        ],
        "specs": [
          {
            "label": "Codigo",
            "value": "A136-ETB-6C"
          }
        ]
      }
    ]
  },
  {
    "section": "cables",
    "title": "Cable de Corriente",
    "icon": "fas fa-plug-circle-bolt",
    "cover": "cover-cables",
    "variants": [
      {
        "title": "Cable Electrico #8 x Rollo",
        "price": "310.88$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/8.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#8 AWG"
          },
          {
            "label": "Marca",
            "value": "CABEL"
          },
          {
            "label": "Presentacion",
            "value": "Rollo"
          }
        ]
      },
      {
        "title": "Cable Electrico #10 x Rollo",
        "price": "191.40$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/10.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#10 AWG"
          },
          {
            "label": "Marca",
            "value": "CABEL"
          },
          {
            "label": "Presentacion",
            "value": "Rollo"
          }
        ]
      },
      {
        "title": "Cable Electrico #12 x Rollo",
        "price": "126.44$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/12.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#12 AWG"
          },
          {
            "label": "Marca",
            "value": "CABEL"
          },
          {
            "label": "Presentacion",
            "value": "Rollo"
          }
        ]
      },
      {
        "title": "Cable Electrico #14 x Rollo",
        "price": "80.04$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/14.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#14 AWG"
          },
          {
            "label": "Marca",
            "value": "CABEL"
          },
          {
            "label": "Presentacion",
            "value": "Rollo"
          }
        ]
      },
      {
        "title": "Cable Electrico #2",
        "price": "1120$",
        "oldPrice": "",
        "badge": "hot",
        "badgeText": "Mas Vendido",
        "images": [
          "./img/2.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#2 AWG"
          },
          {
            "label": "Aplicacion",
            "value": "Alimentacion principal"
          },
          {
            "label": "Uso",
            "value": "Industrial / Residencial"
          }
        ]
      },
      {
        "title": "Cable Electrico #4",
        "price": "705$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/4.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#4 AWG"
          },
          {
            "label": "Aplicacion",
            "value": "Alimentacion principal"
          },
          {
            "label": "Uso",
            "value": "Industrial / Residencial"
          }
        ]
      },
      {
        "title": "Cable Electrico #6",
        "price": "395$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/6.jpg"
        ],
        "specs": [
          {
            "label": "Calibre",
            "value": "#6 AWG"
          },
          {
            "label": "Aplicacion",
            "value": "Circuito de alimentacion"
          },
          {
            "label": "Uso",
            "value": "Residencial / Comercial"
          }
        ]
      }
    ]
  },
  {
    "section": "cintas",
    "title": "Cintas LED y Accesorios",
    "icon": "fas fa-tv",
    "cover": "cover-redonda",
    "variants": [
      {
        "title": "Cinta COB Blanca 12W 50m",
        "price": "$139.20",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/cinta-cob-rollo.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "COB Blanca 12W"
          },
          {
            "label": "Presentacion",
            "value": "Rollo 50m"
          }
        ]
      },
      {
        "title": "Cinta COB Blanca 12W x Metro",
        "price": "$2.50",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/cinta-cob.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "COB Blanca 12W"
          },
          {
            "label": "Presentacion",
            "value": "Metro"
          }
        ]
      },
      {
        "title": "Cinta COB Calida 12W 50m",
        "price": "$187.45",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/cinta-cob-rollo.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "COB Calida 12W"
          },
          {
            "label": "Presentacion",
            "value": "Rollo 50m"
          }
        ]
      },
      {
        "title": "Cinta COB Calida 12W x Metro",
        "price": "$2.50",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/cinta-cob.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "COB Calida 12W"
          },
          {
            "label": "Presentacion",
            "value": "Metro"
          }
        ]
      },
      {
        "title": "Cinta COB Directa 110V Blanca 50mts",
        "price": "$163.65",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/cinta-cob-rollo.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "COB Directa 110V Blanca"
          },
          {
            "label": "Largo",
            "value": "50mts"
          }
        ]
      },
      {
        "title": "Cinta COB Directa 110V Calida 50mts",
        "price": "$163.65",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/cinta-cob-rollo.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "COB Directa 110V Calida"
          },
          {
            "label": "Largo",
            "value": "50mts"
          }
        ]
      },
      {
        "title": "Conector 180°",
        "price": "$1.50",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/conector-cinta.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "Conector 180°"
          }
        ]
      },
      {
        "title": "Conector 90°",
        "price": "$1.50",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/conector-cinta.svg"
        ],
        "specs": [
          {
            "label": "Tipo",
            "value": "Conector 90°"
          }
        ]
      }
    ]
  },
  {
    "section": "breakers",
    "title": "Classic Lux",
    "icon": "fas fa-power-off",
    "cover": "cover-regulador",
    "variants": [
      {
        "title": "Breaker THQC 1x20 Amp Superficial",
        "price": "$7.05",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-1p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 1x20A Superficial"
          }
        ]
      },
      {
        "title": "Breaker THQC 1x30 Amp Empotrar",
        "price": "$6.03",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-1p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 1x30A Empotrar"
          }
        ]
      },
      {
        "title": "Breaker THQC 1x30 Amp Superficial",
        "price": "$7.05",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-1p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 1x30A Superficial"
          }
        ]
      },
      {
        "title": "Breaker THQC 2x30 Amp Empotrar",
        "price": "$13.31",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-2p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 2x30A Empotrar"
          }
        ]
      },
      {
        "title": "Breaker THQC 2x30 Amp Superficial",
        "price": "$15.66",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-2p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 2x30A Superficial"
          }
        ]
      },
      {
        "title": "Breaker THQC 2x50 Amp Superficial",
        "price": "$15.66",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-2p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 2x50A Superficial"
          }
        ]
      },
      {
        "title": "Breaker THQC 2x60 Amp Superficial",
        "price": "$15.66",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/breaker-2p.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "THQC 2x60A Superficial"
          }
        ]
      },
      {
        "title": "Tablero Riel Plastico 2 Circuitos",
        "price": "$2.94",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tablero-riel.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Circuitos",
            "value": "2"
          }
        ]
      },
      {
        "title": "Tablero Riel Plastico 3 Circuitos",
        "price": "$4.22",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tablero-riel.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Circuitos",
            "value": "3"
          }
        ]
      },
      {
        "title": "Tapa Interperie p/ Toma Doble Gris",
        "price": "$3.69",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/tapa-interperie.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Classic Lux"
          },
          {
            "label": "Tipo",
            "value": "Tapa Interperie"
          }
        ]
      }
    ]
  },
  {
    "section": "redes",
    "title": "Dahua",
    "icon": "fas fa-network-wired",
    "cover": "cover-regulador",
    "variants": [
      {
        "title": "UTP Cat5e Indoor 100% Cobre 305mts - Dahua",
        "price": "$188.50",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/utp-cable.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Dahua"
          },
          {
            "label": "Categoria",
            "value": "Cat5e Indoor"
          },
          {
            "label": "Largo",
            "value": "305mts"
          }
        ]
      }
    ]
  },
  {
    "section": "bombillos",
    "title": "Ebeli",
    "icon": "fas fa-sun",
    "cover": "cover-redonda",
    "variants": [
      {
        "title": "Bombillo LED 12W E27",
        "price": "1.93$",
        "oldPrice": "",
        "badge": "hot",
        "badgeText": "Mas Vendido",
        "images": [
          "./img/products/bombillo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "12W"
          },
          {
            "label": "Base",
            "value": "E27"
          }
        ]
      },
      {
        "title": "Bombillo LED 15W E27",
        "price": "2.22$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/bombillo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "15W"
          },
          {
            "label": "Base",
            "value": "E27"
          }
        ]
      },
      {
        "title": "Bombillo Tubular 10W E27",
        "price": "3.59$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/bombillo-tubular.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "10W"
          },
          {
            "label": "Base",
            "value": "E27"
          }
        ]
      },
      {
        "title": "Lampara LED 36W Borde Infinito Superficial",
        "price": "12.58$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-borde.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "36W"
          },
          {
            "label": "Tipo",
            "value": "Borde Infinito"
          }
        ]
      },
      {
        "title": "Lampara LED Spot 5W Ojo de Aguila",
        "price": "2.90$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-spot.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "5W"
          },
          {
            "label": "Tipo",
            "value": "Spot Ojo de Aguila"
          }
        ]
      },
      {
        "title": "Panel LED 120x60 96W",
        "price": "58.00$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/panel-led.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "96W"
          },
          {
            "label": "Medida",
            "value": "120x60cm"
          }
        ]
      },
      {
        "title": "Panel LED 60x60 60W",
        "price": "28.65$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/panel-led.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "60W"
          },
          {
            "label": "Medida",
            "value": "60x60cm"
          }
        ]
      },
      {
        "title": "Reflector LED RGB 100W",
        "price": "44.08$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/reflector-rgb.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "100W"
          },
          {
            "label": "Tipo",
            "value": "RGB"
          }
        ]
      },
      {
        "title": "Reflector LED RGB 200W",
        "price": "73.08$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/reflector-rgb.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "200W"
          },
          {
            "label": "Tipo",
            "value": "RGB"
          }
        ]
      },
      {
        "title": "Reflector LED RGB 20W",
        "price": "16.24$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/reflector-rgb.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "20W"
          },
          {
            "label": "Tipo",
            "value": "RGB"
          }
        ]
      },
      {
        "title": "Reflector LED RGB 50W",
        "price": "27.26$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/reflector-rgb.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "50W"
          },
          {
            "label": "Tipo",
            "value": "RGB"
          }
        ]
      },
      {
        "title": "Reflector LED Slim 100W",
        "price": "18.02$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/r100w.jfif"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "100W"
          },
          {
            "label": "Tipo",
            "value": "Slim"
          }
        ]
      },
      {
        "title": "Reflector LED Slim 200W",
        "price": "36.54$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/r200w.jfif"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "200W"
          },
          {
            "label": "Tipo",
            "value": "Slim"
          }
        ]
      },
      {
        "title": "Reflector LED Slim 300W",
        "price": "58.00$",
        "oldPrice": "",
        "badge": "hot",
        "badgeText": "Popular",
        "images": [
          "./img/r300w.jfif"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "300W"
          },
          {
            "label": "Tipo",
            "value": "Slim"
          }
        ]
      },
      {
        "title": "Reflector LED Slim 400W",
        "price": "68.44$",
        "oldPrice": "",
        "badge": "sale",
        "badgeText": "Oferta",
        "images": [
          "./img/r400w.jfif"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "400W"
          },
          {
            "label": "Tipo",
            "value": "Slim"
          }
        ]
      },
      {
        "title": "Reflector LED Slim 50W",
        "price": "12.76$",
        "oldPrice": "",
        "badge": "sale",
        "badgeText": "Oferta",
        "images": [
          "./img/r50w.jpg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Ebeli"
          },
          {
            "label": "Potencia",
            "value": "50W"
          },
          {
            "label": "Tipo",
            "value": "Slim"
          }
        ]
      }
    ]
  },
  {
    "section": "reflectores",
    "title": "Exceline",
    "icon": "fas fa-shield-halved",
    "cover": "cover-alumbrado",
    "variants": [
      {
        "title": "Fotocelda",
        "price": "17.30$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/fotocelda.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Tipo",
            "value": "Fotocelda"
          },
          {
            "label": "Aplicacion",
            "value": "Alumbrado automatico"
          }
        ]
      },
      {
        "title": "Protector de Nevera",
        "price": "$13.92",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/protector.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Aplicacion",
            "value": "Nevera / Refrigerador"
          },
          {
            "label": "Proteccion",
            "value": "Sobre y baja tension"
          }
        ]
      },
      {
        "title": "Protector Electronico Multiproposito",
        "price": "$16.07",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/protector.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Aplicacion",
            "value": "Multiproposito"
          },
          {
            "label": "Proteccion",
            "value": "Sobre y baja tension"
          }
        ]
      },
      {
        "title": "Protector p/ Equipos Electronicos",
        "price": "$24.94",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/protector.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Aplicacion",
            "value": "Computadora / PC"
          },
          {
            "label": "Proteccion",
            "value": "Sobre y baja tension"
          }
        ]
      },
      {
        "title": "Protector para Lavadora",
        "price": "$16.07",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/protector.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Aplicacion",
            "value": "Lavadora"
          },
          {
            "label": "Proteccion",
            "value": "Sobre y baja tension"
          }
        ]
      },
      {
        "title": "Protector para Microonda",
        "price": "$16.07",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/protector.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Aplicacion",
            "value": "Microonda"
          },
          {
            "label": "Proteccion",
            "value": "Sobre y baja tension"
          }
        ]
      },
      {
        "title": "Protector TV",
        "price": "$25.64",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/protector.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Exceline"
          },
          {
            "label": "Aplicacion",
            "value": "Televisor"
          },
          {
            "label": "Proteccion",
            "value": "Sobre y baja tension"
          }
        ]
      }
    ]
  },
  {
    "section": "redes",
    "title": "Hikvision",
    "icon": "fas fa-video",
    "cover": "cover-regulador",
    "variants": [
      {
        "title": "Camara Bullet Hikvision",
        "price": "$27.92",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/camara-bullet.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Tipo",
            "value": "Bullet"
          }
        ]
      },
      {
        "title": "Camara Domo Hikvision",
        "price": "$24.94",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/camara-domo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Tipo",
            "value": "Domo"
          }
        ]
      },
      {
        "title": "DVR 16 Canales",
        "price": "$142.27",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/dvr.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Canales",
            "value": "16CH"
          }
        ]
      },
      {
        "title": "DVR 4 Canales",
        "price": "$60.34",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/dvr.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Canales",
            "value": "4CH"
          }
        ]
      },
      {
        "title": "DVR 8 Canales",
        "price": "$75.64",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/dvr.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Canales",
            "value": "8CH"
          }
        ]
      },
      {
        "title": "UTP Cat5e Indoor 100% Cobre 305mts - Hikvision",
        "price": "$185.60",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/utp-cable.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Categoria",
            "value": "Cat5e Indoor"
          },
          {
            "label": "Largo",
            "value": "305mts"
          }
        ]
      },
      {
        "title": "UTP Cat5e Outdoor 100% Cobre 305mts",
        "price": "$218.66",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/utp-cable.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Categoria",
            "value": "Cat5e Outdoor"
          },
          {
            "label": "Largo",
            "value": "305mts"
          }
        ]
      },
      {
        "title": "UTP Cat6 Indoor 100% Cobre 305mts",
        "price": "$284.20",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/utp-cable.svg"
        ],
        "specs": [                                                                                                                                                                                                             
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Categoria",
            "value": "Cat6 Indoor"
          },
          {
            "label": "Largo",
            "value": "305mts"
          }
        ]
      },
      {
        "title": "UTP Cat6 Outdoor 100% Cobre 305mts",
        "price": "$319.00",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/utp-cable.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hikvision"
          },
          {
            "label": "Categoria",
            "value": "Cat6 Outdoor"
          },
          {
            "label": "Largo",
            "value": "305mts"
          }
        ]
      }
    ]
  },
  {
    "section": "seguridad",
    "title": "Hilook",
    "icon": "fas fa-camera",
    "cover": "cover-alumbrado",
    "variants": [
      {
        "title": "Camara Bullet Hilook THC-B120-P",
        "price": "$21.61",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/camara-bullet.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hilook"
          },
          {
            "label": "Tipo",
            "value": "Bullet"
          }
        ]
      },
      {
        "title": "Camara Domo Hilook THC-T120-P",
        "price": "$20.88",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/camara-domo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Hilook"
          },
          {
            "label": "Tipo",
            "value": "Domo"
          }
        ]
      }
    ]
  },
  {
    "section": "seguridad",
    "title": "Imou",
    "icon": "fas fa-camera",
    "cover": "cover-alumbrado",
    "variants": [
      {
        "title": "Camara Imou Ranger 2 3MP IPC-K2EN-3H3W",
        "price": "$48.72",
        "oldPrice": "",
        "badge": "hot",
        "badgeText": "Popular",
        "images": [
          "./img/products/camara-wifi.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Imou"
          },
          {
            "label": "Resolucion",
            "value": "3MP"
          }
        ]
      },
      {
        "title": "Camara Imou Ranger 2 5MP IPC-K2EN-5H3W",
        "price": "$60.32",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/camara-wifi.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Imou"
          },
          {
            "label": "Resolucion",
            "value": "5MP"
          }
        ]
      },
      {
        "title": "Camara Imou Versa 1080P Full Color IPC-C22FN-0",
        "price": "$55.68",
        "oldPrice": "",
        "badge": "new",
        "badgeText": "Nuevo",
        "images": [
          "./img/products/camara-wifi.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Imou"
          },
          {
            "label": "Resolucion",
            "value": "1080P Full Color"
          }
        ]
      }
    ]
  },
  {
    "section": "bombillos",
    "title": "Inova",
    "icon": "fas fa-lightbulb",
    "cover": "cover-redonda",
    "variants": [
      {
        "title": "Buld LED E27 Industrial 100W",
        "price": "24.43$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/buld-industrial.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Inova"
          },
          {
            "label": "Potencia",
            "value": "100W"
          },
          {
            "label": "Base",
            "value": "E27"
          }
        ]
      },
      {
        "title": "Buld Recargable 30W",
        "price": "9.86$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/buld-recargable.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Inova"
          },
          {
            "label": "Potencia",
            "value": "30W"
          },
          {
            "label": "Tipo",
            "value": "Recargable"
          }
        ]
      },
      {
        "title": "Lampara LED Hermetica 80W 120cm",
        "price": "20.36$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/lampara-hermetica.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Inova"
          },
          {
            "label": "Potencia",
            "value": "80W"
          },
          {
            "label": "Largo",
            "value": "120cm"
          }
        ]
      }
    ]
  },
  {
    "section": "ups",
    "title": "Logan",
    "icon": "fas fa-battery-three-quarters",
    "cover": "cover-regulador",
    "variants": [
      {
        "title": "UPS Logan 1000VA 4 Tomas",
        "price": "$104.40",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/ups.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Logan"
          },
          {
            "label": "Capacidad",
            "value": "1000VA"
          },
          {
            "label": "Tomas",
            "value": "4"
          }
        ]
      },
      {
        "title": "UPS Logan 750VA 4 Tomas",
        "price": "$80.04",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/ups.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Logan"
          },
          {
            "label": "Capacidad",
            "value": "750VA"
          },
          {
            "label": "Tomas",
            "value": "4"
          }
        ]
      }
    ]
  },
  {
    "section": "bombillos",
    "title": "Lucerna",
    "icon": "fas fa-lightbulb",
    "cover": "cover-redonda",
    "variants": [
      {
        "title": "Bombillo GU10 8W 3000K",
        "price": "4.07$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/bombillo-gu10.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Lucerna"
          },
          {
            "label": "Potencia",
            "value": "8W"
          },
          {
            "label": "Base",
            "value": "GU10"
          }
        ]
      },
      {
        "title": "Reflector LED RGB 30W",
        "price": "36.19$",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/reflector-rgb.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Lucerna"
          },
          {
            "label": "Potencia",
            "value": "30W"
          },
          {
            "label": "Tipo",
            "value": "RGB"
          }
        ]
      }
    ]
  },
  {
    "section": "montaje",
    "title": "Metalnet",
    "icon": "fas fa-screwdriver-wrench",
    "cover": "cover-regulador",
    "variants": [
      {
        "title": "Barra Roscada 3/8 2mts",
        "price": "$10.44",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/barra-roscada.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "3/8 - 2mts"
          }
        ]
      },
      {
        "title": "Base de Pared 10-15cm",
        "price": "$8.29",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-pared.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Pared 10-15cm"
          }
        ]
      },
      {
        "title": "Base de Pared 20cm",
        "price": "$9.28",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-pared.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Pared 20cm"
          }
        ]
      },
      {
        "title": "Base de Pared 30cm",
        "price": "$15.25",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-pared.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Pared 30cm"
          }
        ]
      },
      {
        "title": "Base de Pared 40cm",
        "price": "$20.71",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-pared.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Pared 40cm"
          }
        ]
      },
      {
        "title": "Base de Techo 10cm",
        "price": "$5.22",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-techo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Techo 10cm"
          }
        ]
      },
      {
        "title": "Base de Techo 15cm",
        "price": "$5.63",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-techo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Techo 15cm"
          }
        ]
      },
      {
        "title": "Base de Techo 20cm",
        "price": "$5.97",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-techo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Techo 20cm"
          }
        ]
      },
      {
        "title": "Base de Techo 30cm",
        "price": "$7.54",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-techo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Techo 30cm"
          }
        ]
      },
      {
        "title": "Base de Techo 40cm",
        "price": "$10.56",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/base-techo.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Techo 40cm"
          }
        ]
      },
      {
        "title": "Escalerilla 10cm",
        "price": "$29.30",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/escalerilla.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "10cm"
          }
        ]
      },
      {
        "title": "Escalerilla 15cm",
        "price": "$34.80",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/escalerilla.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "15cm"
          }
        ]
      },
      {
        "title": "Escalerilla 20cm",
        "price": "$38.28",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/escalerilla.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "20cm"
          }
        ]
      },
      {
        "title": "Escalerilla 30cm",
        "price": "$48.83",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/escalerilla.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "30cm"
          }
        ]
      },
      {
        "title": "Escalerilla 40cm",
        "price": "$61.48",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/escalerilla.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "40cm"
          }
        ]
      },
      {
        "title": "Kit de Empalme - Union",
        "price": "$3.54",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/kit-empalme.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Kit de Empalme"
          }
        ]
      },
      {
        "title": "Kit de Empalme Union",
        "price": "$3.60",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/kit-empalme.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Tipo",
            "value": "Kit de Empalme"
          }
        ]
      },
      {
        "title": "Kit Tuerca Hexagonal + Arandela Plana 3/8",
        "price": "$3.07",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/products/kit-tuerca.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "Metalnet"
          },
          {
            "label": "Medida",
            "value": "3/8"
          }
        ]
      }
    ]
  },
  {
    "section": "gamer",
    "title": "Sillas Gamer",
    "icon": "fas fa-chair",
    "cover": "cover-gamer",
    "variants": [
      {
        "title": "Silla Gamer DANGER",
        "price": "$2,800",
        "oldPrice": "$3,200",
        "badge": "",
        "images": [
          "./img/danger.jfif"
        ],
        "specs": [
          {
            "label": "Material",
            "value": "Cuero PU"
          },
          {
            "label": "Capacidad",
            "value": "Hasta 120kg"
          },
          {
            "label": "Reclinado",
            "value": "135°"
          }
        ]
      },
      {
        "title": "Silla Gamer MUSHU",
        "price": "$4,200",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/mushu.jfif"
        ],
        "specs": [
          {
            "label": "Material",
            "value": "Cuero + Mesh"
          },
          {
            "label": "Capacidad",
            "value": "Hasta 180kg"
          },
          {
            "label": "Reclinado",
            "value": "180° + Soporte Lumbar"
          }
        ]
      },
      {
        "title": "Silla Gamer NYX",
        "price": "$4,200",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/nyx.jfif"
        ],
        "specs": [
          {
            "label": "Material",
            "value": "Cuero + Mesh"
          },
          {
            "label": "Capacidad",
            "value": "Hasta 180kg"
          },
          {
            "label": "Reclinado",
            "value": "180° + Soporte Lumbar"
          }
        ]
      },
      {
        "title": "Silla Gamer SNIPER",
        "price": "$3,500",
        "oldPrice": "$4,000",
        "badge": "hot",
        "badgeText": "Mas Vendido",
        "images": [
          "./img/sniper.jfif"
        ],
        "specs": [
          {
            "label": "Material",
            "value": "Cuero PU Premium"
          },
          {
            "label": "Capacidad",
            "value": "Hasta 150kg"
          },
          {
            "label": "Reclinado",
            "value": "180°"
          }
        ]
      },
      {
        "title": "Silla Gamer SPARTAN",
        "price": "$4,200",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/spartan.jfif"
        ],
        "specs": [
          {
            "label": "Material",
            "value": "Cuero + Mesh"
          },
          {
            "label": "Capacidad",
            "value": "Hasta 180kg"
          },
          {
            "label": "Reclinado",
            "value": "180° + Soporte Lumbar"
          }
        ]
      },
      {
        "title": "Silla Gamer ZU",
        "price": "$4,200",
        "oldPrice": "",
        "badge": "",
        "images": [
          "./img/zu.jfif"
        ],
        "specs": [
          {
            "label": "Material",
            "value": "Cuero + Mesh"
          },
          {
            "label": "Capacidad",
            "value": "Hasta 180kg"
          },
          {
            "label": "Reclinado",
            "value": "180° + Soporte Lumbar"
          }
        ]
      }
    ]
  },
  {
    "section": "protectores",
    "title": "U Products",
    "icon": "fas fa-plug",
    "cover": "cover-protector",
    "variants": [
      {
        "title": "Protector 8 Tomas 1200W",
        "price": "$13.92",
        "oldPrice": "",
        "badge": "hot",
        "badgeText": "Mas Vendido",
        "images": [
          "./img/products/protector-8tomas.svg"
        ],
        "specs": [
          {
            "label": "Marca",
            "value": "U Products"
          },
          {
            "label": "Tomas",
            "value": "8 tomacorrientes"
          },
          {
            "label": "Capacidad",
            "value": "1200W"
          }
        ]
      }
    ]
  }
];
