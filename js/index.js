import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  // 🟢 1. Traer productos locales
  fetch("./data/productos.json")
    .then((resLocal) => resLocal.json())
    .then((productosLocales) => {
      // 🌐 2. Traer API
      fetch("https://fakestoreapi.com/products")
        .then((resApi) => resApi.json())
        .then((productosApi) => {
          // 🔄 3. Adaptar API al mismo formato
          const apiAdaptada = productosApi.map((p) => ({
            id: p.id,
            nombre: p.title,
            precio: p.price,
            img: p.image,
          }));

          // 🔗 4. Unir productos (tuyos primero)
          const todosLosProductos = [...productosLocales, ...apiAdaptada];

          // 🖼️ 5. Renderizar
          todosLosProductos.forEach((producto) => {
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
        })
        .catch((error) => console.error("Error API:", error));
    })
    .catch((error) => console.error("Error JSON local:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();

  renderizarProductos();
  actualizarContador(carrito);
});
