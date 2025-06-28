// script.js

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".circulo");
  const inputNota = document.getElementById("notaSelecionada");
  const botaoSubmit = document.querySelector("button");

  let notaSelecionada = null;

  // Quando o usuário clica em um número
  botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault(); // Evita redirecionamento imediato
      notaSelecionada = botao.textContent;
      inputNota.value = notaSelecionada;

      // Destacar botão selecionado
      botoes.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");
    });
  });

  // Quando o usuário clica em "SUBMIT"
  botaoSubmit.addEventListener("click", () => {
    if (notaSelecionada) {
      // Redireciona para a página de sucesso com a nota na URL
      window.location.href = `sucess.html?circulo=${notaSelecionada}`;
    } else {
      alert("Por favor, selecione uma nota antes de enviar.");
    }
  });
});
