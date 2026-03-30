const setup = () => {
    let button = document.querySelector('#button');
    button.addEventListener("click", () => {
        reset();
    })
}

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0
};

const img = document.querySelector('#gameImage');
const score = document.querySelector('#score');
const playField = document.querySelector('#playField');

img.addEventListener("click", () => {
    if (img.src.includes("4.png")) {
        alert("Game over!");
        clearInterval(global.timeoutId);
        img.style.display = "none";
    }

    global.score++;
    score.textContent = global.score;

    moveImage();
    changeImage();
})

const reset = () => {
    global.score = 0;
    score.textContent = global.score;

    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(gameLoop, global.MOVE_DELAY);

    img.style.display = "block";
}

const getRandomPosition = () => {
    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;

    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY
    }
}

const moveImage = () => {
    let pos = getRandomPosition();
    img.style.left = pos.x + 'px';
    img.style.top = pos.y + 'px';
}

const changeImage = () => {
    let randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);

    img.src = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
}

const gameLoop = () => {
    moveImage();
    changeImage();
}

window.addEventListener("load", setup);