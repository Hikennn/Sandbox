const menu = document.querySelector('.burger-menu');
const container = document.querySelector('.container');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
    menu.classList.contains('burger-menu-open') ? menu.classList.remove('burger-menu-open') : menu.classList.add('burger-menu-open');

    if (menu.classList.contains('burger-menu-open')) {
        nav.style.display = 'block';
        nav.style.width = '100%';
        container.style.display = 'none';
    } else {
        nav.style.display = 'none';
        nav.style.width = '100%';
        container.style.display = 'flex';
    }

});