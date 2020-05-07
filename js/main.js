import menuIcon from '../img/menu.svg';

const todayText = document.querySelector('#date');
const startBtn = document.querySelector('.buttonLocation > button');
const menu_img = document.querySelector('.menu-img');

const today = new Date();
const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;
const year = today.getFullYear();
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfWeek = week[today.getDay()];
todayText.innerHTML = `${year}. ${month}. ${day}. (${dayOfWeek})`;

function clickHandler() {
    if(localStorage.getItem('timeSetting') !== null) {
        window.location.href='pomodoro.html';
    } else {
        alert("Please set the times in the Setting before you start Pomodoro.")
    }
}

function imgHandler() {
    window.location.href = './setting.html';
}

function imgSetting() {
    menu_img.src = `./public/${menuIcon}`;
}

function init() {
    imgSetting();
    menu_img.addEventListener('click', imgHandler);
    startBtn.addEventListener('click', clickHandler);
}

init();