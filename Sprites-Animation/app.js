const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const canvasWidth = canvas.width = 778;
const canvasHeight = canvas.height = 625;
const spriteWidth = 1038;
const spriteHeight = 833;
let gameFrame = 0;
let stagger = 0;
const staggerFrame = 5;
let index = 3;
let playerState = 'run';

const dropdown = document.getElementById('animations');

dropdown.addEventListener('change', (e) => {
    playerState = e.target.value;
});

const image = document.getElementById('myImage');

const aniamtionStates = [
    {
        name: 'run',
        frames: 4,
    },
    {
        name: 'attack',
        frames: 6,
    },
    {
        name: 'jump',
        frames: 9,
    },
    {
        name: 'dash',
        frames: 7,
    }
];

const spriteAnimations = ['run', 'attack', 'jump', 'dash'];


function animate() {
    if ((stagger % staggerFrame) == 0) {

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        index = spriteAnimations.indexOf(playerState);

        let frameX = spriteWidth * (gameFrame % (aniamtionStates[index].frames));
        let frameY = spriteHeight * index;

        context.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
        gameFrame++;
    }
    stagger++;

    requestAnimationFrame(animate);
}

animate();