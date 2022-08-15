const circle = document.querySelector('.circle');
const images = document.querySelectorAll('img');
const timeline = gsap.timeline({ paused: true });

timeline.to(images, { scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" });

circle.addEventListener('mouseenter', () => {
    timeline.play();
});

circle.addEventListener('mouseout', () => {
    timeline.reverse();
});