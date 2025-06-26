//Atualização automática do ano no rodapé
document.addEventListener("DOMContentLoaded", function () {
    const anoAtual = new Date().getFullYear();
    document.getElementById("ano").textContent = anoAtual;
});

document.addEventListener('DOMContentLoaded', function () {
    const carrosseis = document.querySelectorAll('.carrossel');

    carrosseis.forEach(carrossel => {
        const imagens = carrossel.querySelectorAll('img');
        let index = 0;

        if (imagens.length === 0) return; // Evita erro se não houver imagens

        imagens[index].classList.add('ativo');

        setInterval(() => {
            imagens[index].classList.remove('ativo');
            index = (index + 1) % imagens.length;
            imagens[index].classList.add('ativo');
        }, 5000);
    });
});

