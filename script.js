//Atualização automática do ano no rodapé
document.addEventListener("DOMContentLoaded", function () {
    const anoAtual = new Date().getFullYear();
    document.getElementById("ano").textContent = anoAtual;
});

// Carrossel de imagens produtos
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

// Carrossel de imagens na seção hero
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hero-image img');
    const leftBtn = document.querySelector('.arrow.left');
    const rightBtn = document.querySelector('.arrow.right');
    let current = 0;
    let interval;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    function prevImage() {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    }

    function startAutoSlide() {
        interval = setInterval(nextImage, 5000);
    }

    leftBtn.addEventListener('click', () => {
        prevImage();
        clearInterval(interval);
        startAutoSlide();
    });

    rightBtn.addEventListener('click', () => {
        nextImage();
        clearInterval(interval);
        startAutoSlide();
    });

    startAutoSlide();
});

//função para definir o link de contato seção produtos

document.addEventListener('DOMContentLoaded', function () {
    const link = document.getElementById('link-contato');

    // Número do WhatsApp e de ligação
    const numeroWhatsApp = '5521990364744';
    const numeroTelefone = '+5521990364744';

    // Detecta se é dispositivo móvel
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        link.setAttribute('href', `tel:${numeroTelefone}`);
    } else {
        link.setAttribute('href', `https://wa.me/${numeroWhatsApp}`);
    }
});

