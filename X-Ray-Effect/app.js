const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const video = document.getElementById('xray-video');

let positionX = 0, positionY = 0;

canvas.addEventListener('mousemove', event => {
    positionX = event.offsetX;
    positionY = event.offsetY;
});

function animation() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.save();
    context.beginPath();
    context.arc(positionX, positionY, 200, 0, 2 * Math.PI);
    context.clip();
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.restore();

    requestAnimationFrame(animation);
}

animation();