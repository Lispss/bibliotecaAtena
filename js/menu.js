const menu = document.querySelector('.menu');
const botaoMenu = document.querySelector('.menu-toggle');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
    botaoMenu.classList.toggle('aberto');
});