const titleSpans = document.querySelectorAll('h1 span');
const buttons = document.querySelectorAll('.button-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.circle');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');

window.addEventListener('load', () => {

    const timeline = gsap.timeline({ paused: true });

    timeline
        .staggerFrom(titleSpans, 1, { top: -100, opacity: 0, ease: 'power2.out' }, 0.3)
        .staggerFrom(buttons, 1, { opacity: 0, ease: 'power2.out' }, 0.3, '-=1')
        .from(line1, 1, { width: 0, ease: 'power2.out' }, '-=2')
        .from(line2, 1, { width: 0, ease: 'power2.out' }, '-=2')
        .from(logo, 1, { transform: 'scale(0)', ease: 'power2.out' }, '-=2')
        .staggerFrom(medias, 1, { right: -200, ease: 'power2.out' }, 0.3, '-=1');

    timeline.play();

})