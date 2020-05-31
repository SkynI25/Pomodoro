
import menuIcon from '../img/menu.svg';
const USER_NAME = 'username';
const TIME = 'timeSetting';
const infoSect = document.querySelector('.infoSect');
const topSect = document.querySelector('.topSect');
const startBtn = document.querySelector('.buttonLocation button');
const menu_img = document.querySelector('.menu-img');

function startBtnHandler() {
    if(localStorage.getItem(TIME) === null) {
        localStorage.setItem(TIME, 30);
    }
    window.location.href='pomodoro.html';
}

function imgHandler() {
    window.location.href = './index.html';
}

function imgSetting() {
    menu_img.src = `./public/${menuIcon}`;
}

function greetingMSG() {
    let greeting = "";
    const now = new Date().getHours();
    if(now < 12) {
        greeting = "Good morning";
    } else if(now >= 12 && now < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    return greeting;
}

function hello2User() {
    const h1 = infoSect.querySelector('h1');
    h1.textContent = `${greetingMSG()}, ${localStorage.getItem(USER_NAME)}`;
}

function getUserName() {
    if(localStorage.getItem(USER_NAME)) {
        hello2User();
        welcomeBar();
    }
}

function welcomeBar() {
    const cover = document.createElement('div');
    cover.textContent = `Welcome ${localStorage.getItem(USER_NAME)}`;
    cover.classList.add("topSect-cover");
    topSect.prepend(cover);
}

function init() {
    imgSetting();
    getUserName();
    menu_img.addEventListener('click', imgHandler);
    startBtn.addEventListener('click', startBtnHandler);
}

init();