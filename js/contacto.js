import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    mostrarMensaje("Gracias por comunicarte con nosotros 💜");

    form.reset();
  });
});

const mostrarMensaje = (mensaje) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = mensaje;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.remove();
  }, 2500);
};
