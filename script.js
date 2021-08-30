// Abrir menu
let abrirMenuMobile = () => {
    document.querySelector('.menu-mobile').style.display = 'flex';
    document.querySelector('.menu-bar--mobile img').style.display = 'none';
};

let menuIcon = document.querySelector('.imagem-menu');

menuIcon.addEventListener('click', abrirMenuMobile);

let fecharMenuMobile = () => {
    document.querySelector('.menu-mobile').style.display = 'none';
    document.querySelector('.menu-bar--mobile img').style.display = 'flex';
};

let bodySite = document.querySelector('.banner');

bodySite.addEventListener('click', fecharMenuMobile);

// Slide banner
let botaoSlideDireita = document.querySelector('.pointer-direita');
let botaoSlideEsquerda = document.querySelector('.pointer-esquerda');

botaoSlideDireita.addEventListener('click', () => {
    let bannerRotativo = document.querySelector('#sliders');

    if (bannerRotativo.classList.contains('banner-1')) {
        bannerRotativo.classList.remove('banner-1');
        bannerRotativo.classList.add('banner-2');
    } else if (bannerRotativo.classList.contains('banner-2')) {
        bannerRotativo.classList.remove('banner-2');
        bannerRotativo.classList.add('banner-3');
    } else if (bannerRotativo.classList.contains('banner-3')) {
        bannerRotativo.classList.remove('banner-3');
        bannerRotativo.classList.add('banner-1');
    }
});


botaoSlideEsquerda.addEventListener('click', () => {
    let bannerRotativo = document.querySelector('#sliders');

    if (bannerRotativo.classList.contains('banner-1')) {
        bannerRotativo.classList.remove('banner-1');
        bannerRotativo.classList.add('banner-3');
    } else if (bannerRotativo.classList.contains('banner-3')) {
        bannerRotativo.classList.remove('banner-3');
        bannerRotativo.classList.add('banner-2');
    } else if (bannerRotativo.classList.contains('banner-2')) {
        bannerRotativo.classList.remove('banner-2');
        bannerRotativo.classList.add('banner-1');
    }
});

