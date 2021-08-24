let abrirMenuMobile = () => {
    document.querySelector('.menu-mobile').style.display = 'flex';
};

let menuIcon = document.querySelector('.imagem-menu');

menuIcon.addEventListener('click', abrirMenuMobile);

let fecharMenuMobile = () => {
    document.querySelector('.menu-mobile').style.display = 'none';
};

let bodySite = document.querySelector('.banner');

bodySite.addEventListener('click', fecharMenuMobile);

