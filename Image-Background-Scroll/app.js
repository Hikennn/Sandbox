const images = document.querySelectorAll('.image');

window.addEventListener('scroll', () => {
    const scrollPosition = scrollY / 30;

    images.forEach(image => {
        image.style.backgroundPositionY = `${scrollPosition}%`;
    });
});