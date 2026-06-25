export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");

  if (!contador) return;

  contador.textContent = carrito.length;
};

export const mostrarMensaje = (mensaje) => {
  alert(mensaje);
};
