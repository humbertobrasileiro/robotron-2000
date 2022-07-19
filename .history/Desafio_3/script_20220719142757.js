const lista = document.querySelector("ul");
const some = document.querySelector(".some");
const exibe = document.querySelector(".exibe");

some.addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

exibe.addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
