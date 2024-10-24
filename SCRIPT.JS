// script.js

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const botaoSecundario = document.getElementById("botaoSecundario");
const botaoPrincipal = document.getElementById("botaoPrincipal");

// Mostrar Formulário Secundário e Esconder o Principal
botaoSecundario.addEventListener("click", () => {
  form1.classList.remove("visivel");
  form1.classList.add("escondido");

  form2.classList.remove("escondido");
  form2.classList.add("visivel");
});

// Voltar ao Formulário Principal
botaoPrincipal.addEventListener("click", () => {
  form2.classList.remove("visivel");
  form2.classList.add("escondido");

  form1.classList.remove("escondido");
  form1.classList.add("visivel");
});
