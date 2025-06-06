//Atualização automática do ano no rodapé
document.addEventListener("DOMContentLoaded", function () {
    const anoAtual = new Date().getFullYear();
    document.getElementById("ano").textContent = anoAtual;
});
