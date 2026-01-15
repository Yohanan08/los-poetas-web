// ==============================
// LISTA DE PRODUCTOS (DATOS)
// ==============================
const productos = [
  { nombre: "Cemento Holcim Fuerte", descripcion: "Calidad para uso general. Ideal para vigas y lozas.", imagen: "img/Cemento-Holcim.jpg" },
  { nombre: "Cemento Continentales", descripcion: "Excelente rendimiento para acabados y muros.", imagen: "img/continentales.png" },
  { nombre: "Cemento Canal", descripcion: "Gran rendimiento, excelente para albañilería.", imagen: "img/canal.jpg" },
  { nombre: "Tablas de Madera", descripcion: "Madera de pino seleccionada para carpintería.", imagen: "img/inventario-de-tabla.jpg" },
  { nombre: "Cuartones y Reglas", descripcion: "Material estructural ideal para soportes de techos.", imagen: "img/almacen-de-madera.jpg" },
  { nombre: "Ladrillos", descripcion: "Arcilla cocida de alta resistencia para muros.", imagen: "img/venta-de-ladrillo.jpg" },
  { nombre: "Bloques de Concreto", descripcion: "Bloques certificados para paredes estructurales.", imagen: "img/bloques.png" },
  { nombre: "Grava Triturada", descripcion: "Limpia e ideal para mezclas de alta resistencia.", imagen: "img/grava.jpg" },
  { nombre: "Perlines (Galvanizados)", descripcion: "Alta resistencia para estructuras de techos.", imagen: "img/Perlines.jpg" }
];

// ==============================
// FUNCIONES LÓGICAS
// ==============================

function renderizarProductos() {
  const contenedor = document.getElementById("listaProductos");
  
  if (!contenedor) return;

  contenedor.innerHTML = ""; // Limpia el contenedor

  productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto-card"; 
    div.innerHTML = `
      <div class="producto-img-container">
          <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="this.src='img/placeholder.jpg'">
          <span class="tag-disponible">STOCK DISPONIBLE</span>
      </div>
      <div class="producto-info">
          <h3>${p.nombre}</h3>
          <p>${p.descripcion}</p>
          <button class="btn-cotizar-dinamico" onclick="consultarProducto('${p.nombre}')">
              COTIZAR POR WHATSAPP
          </button>
      </div>`;
    contenedor.appendChild(div);
  });
}

function consultarProducto(nombre) {
  const texto = encodeURIComponent(`Hola Los Poetas, deseo cotizar: ${nombre}`);
  window.open(`https://wa.me/50587182143?text=${texto}`, '_blank');
}

// EJECUCIÓN: Esperar a que el HTML cargue para mostrar los productos
document.addEventListener("DOMContentLoaded", renderizarProductos);