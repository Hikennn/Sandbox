const cube = document.querySelector('.cube');

window.addEventListener('scroll', () => {
    const top = window.pageYOffset / 10;
    cube.style.transform = `rotateX(${top}deg) rotateY(${top}deg)`;
});