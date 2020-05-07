import refreshIcon from '../img/refresh.svg';

const IMG_NUM = 6;
const BG_NUM = "bgNumber";
const infoSector = document.querySelector('.infoSect');
const refreshIMG = document.querySelector('.refresh-img');

function paintImage(num) {
    const image = new Image();
    image.src = `img/${num+1}.jpg`;
    image.classList.add("bg-image");
    infoSector.prepend(image);
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
    if(confirm('Do you want to change the background image?')) {
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
    imgSetting();
    refreshIMG.addEventListener('click', refreshHandler);
    const bg_number = parseInt(getBGImage());
    paintImage(bg_number);
}

init();
