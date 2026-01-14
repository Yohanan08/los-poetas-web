// ==============================
// FORMULARIO DE CONTACTO
// ==============================
const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validación básica
  if (!nombre.trim() || !telefono.trim() || !mensaje.trim()) {
    respuesta.textContent = "Por favor completa todos los campos.";
    return;
  }

  const texto = `Hola, mi nombre es ${nombre}. Mi teléfono es ${telefono}. ${mensaje}`;
  const url = `https://wa.me/50587182143?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");

  respuesta.textContent =
    "Gracias por escribirnos. Serás redirigido a WhatsApp.";
  form.reset();
});

// ==============================
// LISTA DE PRODUCTOS
// ==============================
const productos = [
  {
    nombre: "Cemento Holcim Fuerte",
    descripcion:
      "Cemento de alta calidad para uso general. Ideal para vigas, columnas y lozas de concreto.",
    imagen: "img/Cemento-Holcim.jpg",
  },
  {
    nombre: "Cemento Continentales",
    descripcion:
      "Excelente trabajabilidad y rendimiento para acabados, muros y construcciones generales.",
    imagen: "img/continentales.png",
  },
  {
    nombre: "Cemento Canal",
    descripcion:
      "Cemento de gran rendimiento y durabilidad, excelente para albañilería y acabados.",
    imagen: "img/canal.jpg",
  },
  {
    nombre: "Tablas de Madera",
    descripcion:
      "Tablas de pino de alta calidad, seleccionadas para cimbra, carpintería y acabados finos en construcción.",
    imagen: "img/inventario-de-tabla.jpg",
  },
  {
    nombre: "Cuartones y Reglas",
    descripcion:
      "Material estructural de madera resistente, ideal para soportes de techos, marcos y refuerzos de obra.",
    imagen: "img/almacen-de-madera.jpg",
  },
  {
    nombre: "Ladrillos",
    descripcion:
      "Ladrillos de arcilla cocida de alta resistencia, perfectos para muros de carga, cercas y detalles arquitectónicos.",
    imagen: "img/venta-de-ladrillo.jpg",
  },
  {
    nombre: "Bloques de Concreto",
    descripcion:
      'Bloques certificados de diferentes medidas (4", 6", 8") para paredes estructurales seguras y duraderas.',
    imagen: "img/bloques.png",
  },
  {
    nombre: "Grava Triturada",
    descripcion:
      "Grava limpia y de granulometría ideal para mezclas de concreto de alta resistencia y bases de suelos.",
    imagen: "img/grava.jpg",
  },
  {
    nombre: "Venta al por Mayor",
    descripcion:
      "Atención especial a proyectos grandes y constructoras con precios competitivos y logística de entrega rápida.",
    imagen: "img/descarga-de-camion.jpg",
  },
  {
    nombre: "Perlines (Galvanizados)",
    descripcion: "Perlines de alta resistencia para estructuras de techos. Resistentes a la corrosión.",
    imagen: "img/Perlines.jpg",
  },
];

const contenedor = document.getElementById("listaProductos");

// Renderizado de productos con diseño mejorado
productos.forEach((producto) => {
  const div = document.createElement("div");
  div.className = "producto";

  div.innerHTML = `
    <div class="producto-card">
      <div class="producto-img-container">
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
      </div>
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span class="badge">Stock Disponible</span>
        <button class="btn-cotizar" onclick="consultarProducto('${producto.nombre}')">
           Consultar por WhatsApp
        </button>
      </div>
    </div>
  `;

  contenedor.appendChild(div);
});

// ==============================
// WHATSAPP POR PRODUCTO
// ==============================
function consultarProducto(nombreProducto) {
  const texto = `Hola, estoy interesado en ${nombreProducto}`;
  const url = `https://wa.me/50587182143?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

// ==============================
// CHAT DE PREGUNTAS RÁPIDAS
// ==============================
function responder(tipo) {
  const respuesta = document.getElementById("respuestaChat");

  if (tipo === "tipos") {
    respuesta.textContent =
      "Ofrecemos cementos, madera, perlines GHT, grava, ladrillos y cajas metálicas para techo.";
  }

  if (tipo === "mayor") {
    respuesta.textContent =
      "Sí, atendemos pedidos al por mayor y proyectos de gran volumen.";
  }

  if (tipo === "ubicacion") {
    respuesta.textContent =
      "Estamos ubicados de donde fue laboratorios Divina 1km al este, mano derecha contiguo a la Bahía del bus. ¡Te esperamos!";
  }
}

// ==============================
// TOGGLE CHAT (MÓVILES FRIENDLY)
// ==============================
function toggleChat() {
  const chat = document.getElementById("chatBox");
  const btn = document.querySelector(".chat-toggle");

  chat.classList.toggle("chat-hidden");
  btn.textContent = chat.classList.contains("chat-hidden") ? "❓" : "✖";
}
