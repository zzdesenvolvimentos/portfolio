document.addEventListener("DOMContentLoaded", function() {
    // Inicializa os ícones da biblioteca Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Controle do Menu Hambúrguer em Telas Pequenas (Mobile)
    const btnMobile = document.getElementById("btn-mobile");
    const menuLinks = document.getElementById("menu-links");

    if (btnMobile && menuLinks) {
        btnMobile.addEventListener("click", () => {
            menuLinks.classList.toggle("active");
        });
    }
});

/**
 * Função para gerar pedido direto no WhatsApp da AM Lanches
 * @param {string} nomeLanche - Nome do produto selecionado
 */
function pedirLanche(nomeLanche) {
    // Número do WhatsApp oficial da AM Lanches
    const numeroWhatsApp = "556692257917"; 

    // Mensagem pronta para o cliente
    const mensagem = `Olá Maiza! Gostaria de fazer um pedido de: *${nomeLanche}*. Podia me passar os detalhes de valor e disponibilidade?`;

    // Abre a conversa no WhatsApp em uma nova aba
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}