import { salvarRegistro } from "./storage.js";

export function inicializarFormularios() {
  // 1. Formulário de Voluntários
  const formVoluntario = document.querySelector("#form-voluntario");
  if (formVoluntario) {
    formVoluntario.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = formVoluntario.querySelector("[name='nome']").value;
      const email = formVoluntario.querySelector("[name='email']").value;
      const area = formVoluntario.querySelector("[name='area']").value;

      if (salvarRegistro("voluntarios", { nome, email, area })) {
        alert("Inscrição realizada com sucesso! Nossa equipe entrará em contato.");
        formVoluntario.reset();
      }
    });
  }

  // 2. Formulário de Doações
  const formDoacao = document.querySelector("#form-doacao");
  if (formDoacao) {
    formDoacao.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor = formDoacao.querySelector("[name='valor']").value;
      const metodo = formDoacao.querySelector("[name='metodo']").value;

      if (salvarRegistro("doacoes", { valor, metodo })) {
        alert(`Obrigado pelo apoio! Doação no valor de R$ ${valor} registrada.`);
        formDoacao.reset();
      }
    });
  }

  // 3. Formulário de Login
  const formLogin = document.querySelector("#form-login");
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = formLogin.querySelector("[name='email']").value;
      
      salvarRegistro("sessoes", { email });
      alert("Acesso autorizado! Bem-vindo ao painel da ONG Solidária.");
      window.location.href = "index.html";
    });
  }
}