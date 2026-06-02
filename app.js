const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", () => {
  mensaje.textContent = `¡Funciona! Hora local: ${new Date().toLocaleTimeString("es")}`;
});
