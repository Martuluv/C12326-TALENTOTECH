import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card", "text-dark");

    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.classList.add("btn", "btn-primary");

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();

  renderizarProductos();
  actualizarContador(carrito);
});
