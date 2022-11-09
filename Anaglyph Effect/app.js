const container = document.getElementById('container');
const title = document.getElementById('title');
const viewer = document.getElementById('viewer');
const viewerText = document.getElementById('viewerText');

container.addEventListener('mouseenter', () => {
    title.style.opacity = 0;
    viewer.style.display = 'block';
    viewer.style.backgroundColor = 'red';
    container.style.cursor = 'none';

    viewer.style.height = '0px';
    viewer.style.width = '0px';
    viewer.style.transition = 'height 0.6s, width 0.6s';

    title.style.transition = 'opacity 0.6s';
});

container.addEventListener('mouseleave', () => {
    viewer.style.height = '0px';
    viewer.style.width = '0px';

    title.style.opacity = 1;
});

container.addEventListener('mousemove', (event) => {
    const positionX = event.offsetX - 125;
    const positionY = event.offsetY - 125;

    viewer.style.left = `${positionX}px`;
    viewer.style.top = `${positionY}px`;

    viewer.style.height = '250px';
    viewer.style.width = '250px';
    viewer.style.borderRadius = '50%';
    viewerText.style.display = 'block';

    viewer.style.transition = 'height 0.6s, width 0.6s, border-radius 0.6s';
});

container.addEventListener('click', () => {
    viewer.style.backgroundColor = viewer.style.backgroundColor === 'red' ? 'blue' : 'red';
    viewerText.innerText = 'DOUBLE CLICK';
});

container.addEventListener('dblclick', () => {
    viewer.style.top = `0px`;
    viewer.style.left = `0px`;

    viewer.style.height = '100%';
    viewer.style.width = '100%';
    viewer.style.borderRadius = '25px';
    viewerText.style.display = 'none';
    viewer.style.transition = 'all 0.6s';

    viewerText.innerText = 'CLICK';
});


