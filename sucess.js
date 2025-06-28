// sucess.js

document.addEventListener("DOMContentLoaded", () => {
  const spanNota = document.getElementById("notaSelecionada");

  const params = new URLSearchParams(window.location.search);
  const nota = params.get("circulo");

  if (nota) {
    spanNota.textContent = nota;
  } else {
    spanNota.textContent = "nenhuma nota";
  }
});