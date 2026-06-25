import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();

  const contenedor = document.getElementById("contenedor-carrito");
  const acciones = document.getElementById("acciones-carrito");

  if (!contenedor || !acciones) return;

  contenedor.innerHTML = "";
  acciones.innerHTML = "";

  actualizarContador(carrito);

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p>Tu carrito está vacío 😕</p>`;
    return;
  }

  carrito.forEach((producto, index) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <img src="../${producto.img}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button class="btn-eliminar">Eliminar</button>
    `;

    card.querySelector(".btn-eliminar").addEventListener("click", () => {
      eliminarProducto(index);
      renderizarCarrito();
    });

    contenedor.appendChild(card);
  });

  const btnVaciar = document.createElement("button");
  btnVaciar.textContent = "Vaciar carrito";
  btnVaciar.classList.add("btn");

  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  acciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", renderizarCarrito);
