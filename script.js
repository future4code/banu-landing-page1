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

/* Menu scroll desktop */

let botaoHome = document.querySelector('#botao-home');
let botaoPromocoes = document.querySelector('#botao-promocoes');
let botaoProdutos = document.querySelector('#botao-produtos');
let botaoContato = document.querySelector('#botao-contato');
let botaoCompreAgora = document.querySelector('#botao-compre-agora');

botaoHome.addEventListener('click', (botaoHome) => {
    botaoHome.preventDefault();
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    });
});

botaoPromocoes.addEventListener('click', (botaoPromocoes) => {
    botaoPromocoes.preventDefault();
    window.scrollTo({
        top:594,
        left:0,
        behavior: 'smooth'
    });
});

botaoCompreAgora.addEventListener('click', (botaoCompreAgora) => {
    botaoCompreAgora.preventDefault();
    window.scrollTo({
        top:594,
        left:0,
        behavior: 'smooth'
    });
});

botaoProdutos.addEventListener('click', (botaoProdutos) => {
    botaoProdutos.preventDefault();
    window.scrollTo({
        top:1279,
        left:0,
        behavior: 'smooth'
    });
});

botaoContato.addEventListener('click', (botaoContato) => {
    botaoContato.preventDefault();
    window.scrollTo({
        top:1663,
        left:0,
        behavior: 'smooth'
    });
});



/* Menu scroll mobile */

let botaoPromocoesMobile = document.querySelector('#botao-promocoes-mobile');
let botaoProdutosMobile = document.querySelector('#botao-produtos-mobile');
let botaoContatoMobile = document.querySelector('#botao-contato--mobile');


botaoPromocoesMobile.addEventListener('click', (botaoPromocoesMobile) => {
    botaoPromocoesMobile.preventDefault();
    fecharMenuMobile();
    window.scrollTo({
        top:672,
        left:0,
        behavior: 'smooth'
    });
});

botaoProdutosMobile.addEventListener('click', (botaoProdutosMobile) => {
    botaoProdutosMobile.preventDefault();
    fecharMenuMobile();
    window.scrollTo({
        top:1852,
        left:0,
        behavior: 'smooth'
    });
});

botaoContatoMobile.addEventListener('click', (botaoContatoMobile) => {
    botaoContatoMobile.preventDefault();
    fecharMenuMobile();
    window.scrollTo({
        top:2746,
        left:0,
        behavior: 'smooth'
    });
});