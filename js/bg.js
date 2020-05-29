import refreshIcon from '../img/refresh.svg';

const IMG_NUM = 5;
const BG_NUM = "bgNumber";
const body = document.querySelector('body');

function paintImage() {
    const image = new Image();
    image.src = `img/1.jpg`;
    image.classList.add("bg-image");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function getBGImage() {
    const number = localStorage.getItem(BG_NUM) === null ? genRandom() : localStorage.getItem(BG_NUM);
    localStorage.setItem(BG_NUM, number);
    return number;
}

function removePrevImage() {
    const prevIMG = document.querySelector(".bg-image");
    prevIMG.remove();
}

function refreshHandler() {
    if(confirm('배경을 변경하시겠습니까?')) {
        const number = genRandom();
        localStorage.setItem(BG_NUM, number);
        removePrevImage();
        paintImage(number);  
    };
}

function imgSetting() {
    refreshIMG.src = `./public/${refreshIcon}`;
}

function init() {
    paintImage();
}

init();
