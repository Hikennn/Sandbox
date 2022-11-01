const button = document.getElementById('button');

button.addEventListener('mousemove', (event) => {
    positionX = event.offsetX;
    button.style.background = `radial-gradient(circle at calc(${positionX}% / 5), rgba(248,49,88,1) 0%, rgba(146,23,77,1) 100%)`
})
