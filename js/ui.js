export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");

  if (!contador) return;

  contador.textContent = carrito.length;
};

export const mostrarMensaje = (mensaje) => {
  alert(mensaje);
};
export const mostrarNotificacion = (mensaje) => {
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
