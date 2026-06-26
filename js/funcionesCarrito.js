import {
  guardarCarrito,
  obtenerCarrito,
  eliminarCarritoStorage,
} from "./storage.js";

import { actualizarContador } from "./ui.js";
import { mostrarNotificacion } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();

  carrito.push(producto);

  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarNotificacion("🛒 Producto agregado al carrito");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();

  carrito.splice(indice, 1);

  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarNotificacion("🛒 Producto eliminado del carrito");
};

export const vaciarCarrito = () => {
  eliminarCarritoStorage();
  actualizarContador([]);
  mostrarNotificacion("🛒 Carrito vaciado");
};
