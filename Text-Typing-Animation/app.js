const text = document.querySelector('.second-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "speed.";
    }, 0);

    setTimeout(() => {
        text.textContent = "cash.";
    }, 2000);

    setTimeout(() => {
        text.textContent = "growth.";
    }, 4000);
}

textLoad();
setInterval(textLoad, 6000);