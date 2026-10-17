import { inicializarFormularios } from "./forms.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa os manipuladores de formulários
  inicializarFormularios();

  // Inicializa ícones do Lucide se disponível
  if (window.lucide) {
    lucide.createIcons();
  }

  // Destaca o link ativo na navegação
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === paginaAtual) {
      link.classList.add("active");
    }
  });
});