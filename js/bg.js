const IMG_NUM = 6;
const infoSector = document.querySelector('.infoSect');

function paintImage(num) {
    const image = new Image();
    image.src = `img/${num+1}.jpg`;
    image.classList.add("bg-image")
    infoSector.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const random_number = genRandom();
    paintImage(random_number);
}

init();
