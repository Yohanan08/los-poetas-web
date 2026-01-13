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
    nombre: "Tablas de madera",
    descripcion: "Madera resistente ideal para construcción.",
  },
  {
    nombre: "Listones",
    descripcion: "Listones para soporte y refuerzo estructural.",
  },
  {
    nombre: "Madera para encofrado",
    descripcion: "Madera adecuada para trabajos de concreto.",
  },
  {
    nombre: "Venta al por mayor",
    descripcion: "Atención a proyectos de gran volumen.",
  },
  {
    nombre: "Ladrillos",
    descripcion:
      "Ladrillos resistentes para construcción de muros, cerramientos y estructuras. Ideales para proyectos de obra gris, con buena durabilidad y fácil colocación.",
  },
  {
    nombre: "Grava",
    descripcion:
      "Grava de construcción utilizada en la preparación de concreto y obras civiles. Material esencial para mezclas resistentes y trabajos estructurales.",
  },
];

const contenedor = document.getElementById("listaProductos");

productos.forEach((producto) => {
  const div = document.createElement("div");
  div.className = "producto";

  div.innerHTML = `
    <div class="producto-card">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <span class="badge">Disponible</span>
      <button onclick="consultarProducto('${producto.nombre}')">
        Consultar por WhatsApp
      </button>
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
      "Vendemos madera, ladrillos, grava y materiales para construcción.";
  }

  if (tipo === "mayor") {
    respuesta.textContent =
      "Sí, atendemos pedidos al por mayor y proyectos de gran volumen.";
  }

  if (tipo === "ubicacion") {
    respuesta.textContent =
      "Estamos ubicados en Repartos Los Poetas – Nicaragua.";
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
