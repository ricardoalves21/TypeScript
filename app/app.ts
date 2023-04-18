import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});

// o comando para subir a aplicação será: 'npm run start'
