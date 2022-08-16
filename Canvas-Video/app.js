const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const video = document.querySelector('video');

let positionX = 100, positionY = 0;

canvas.addEventListener('mousemove', event => {
    positionX = event.offsetX;
    positionY = event.offsetY;
    console.log(positionX, positionY);
});

function animation() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.save();
    context.beginPath();
    context.rect(positionX - 175, 0, 350, 750);
    context.clip();

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.restore();

    requestAnimationFrame(animation);
}
animation();