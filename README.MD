Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ES6)
📂 Estrutura do Projeto
bash
Copy code
/projeto-formularios
│
├── index.html      # Arquivo principal com a estrutura HTML
├── styles.css      # Arquivo de estilos CSS
└── script.js       # Arquivo de lógica JavaScript
📋 Como Usar
Clone este repositório ou baixe os arquivos.
Abra o arquivo index.html em um navegador.
💻 Código Completo
1️⃣ HTML (index.html)
html
Copy code
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulários Sobrepostos</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <!-- Formulário Principal -->
      <div class="formulario" id="form1">
        <h2>Formulário Principal</h2>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <button id="botaoSecundario">Ir para Formulário Secundário</button>
      </div>

      <!-- Formulário Secundário (inicialmente escondido) -->
      <div class="formulario escondido" id="form2">
        <h2>Formulário Secundário</h2>
        <input type="text" placeholder="Endereço" />
        <input type="number" placeholder="Idade" />
        <button id="botaoPrincipal">Voltar ao Formulário Principal</button>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
2️⃣ CSS (styles.css)
css
Copy code
/* styles.css */
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.container {
  position: relative;
  width: 300px;
  height: 400px;
}

.formulario {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out, visibility 0.5s;
}

.escondido {
  visibility: hidden;
  opacity: 0;
}

.visivel {
  visibility: visible;
  opacity: 1;
}
3️⃣ JavaScript (script.js)
javascript
Copy code
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
⚙️ Funcionamento
Botão "Ir para Formulário Secundário":
Ao clicar, o formulário principal é ocultado e o formulário secundário é exibido.
Botão "Voltar ao Formulário Principal":
Ao clicar, o formulário secundário é ocultado e o formulário principal é exibido.
🎯 Personalização
Alterar Estilo: Modifique o CSS para personalizar a aparência dos formulários.
Novos Campos: Adicione novos inputs ou botões conforme necessário no HTML.
🚀 Conclusão
Este projeto simples demonstra como usar JavaScript e CSS para criar uma interface fluida com formulários sobrepostos. A transição suave entre formulários melhora a experiência do usuário e a usabilidade do sistema.

📝 Licença
Este projeto é livre para uso e modificação.