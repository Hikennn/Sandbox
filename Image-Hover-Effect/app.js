const link = document.querySelectorAll('.link');
const hoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-image');

for (let index = 0; index < link.length; index++) {
    link[index].addEventListener('mousemove', (event) => {
        hoverReveal[index].style.opacity = 1;
        hoverReveal[index].style.transform = `translate(-100%, -50%) rotate(5deg)`;
        linkImages[index].style.transform = 'scale(1,1)';
        hoverReveal[index].style.left = event.clientX + "px";
    });

    link[index].addEventListener('mouseleave', () => {
        hoverReveal[index].style.opacity = 0;
        hoverReveal[index].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[index].style.transform = 'scale(0.8, 0.8)';
    });
}