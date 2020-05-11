import menuIcon from '../img/menu.svg';

const todayText = document.querySelector('#date');
const startBtn = document.querySelector('.buttonLocation button');
const clearBtn = document.querySelector('.buttonLocation h1');
const menu_img = document.querySelector('.menu-img');
const questionMark = document.querySelector('.buttonLocation h2');

const today = new Date();
const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;
const year = today.getFullYear();
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfWeek = week[today.getDay()];
todayText.innerHTML = `${year}. ${month}. ${day}. (${dayOfWeek})`;

function startBtnHandler() {
    if(localStorage.getItem('timeSetting') !== null) {
        window.location.href='pomodoro.html';
    } else {
        alert("시작하시기 전에 세팅 화면에서 시간을 설정해주세요.")
    }
}

function clearBtnHandler() {
    if(confirm('설정한 모든 값을 지우시겠습니까?')) {
        localStorage.clear();
        window.location.reload();
    }
}

function coverHandler() {
    const body = document.querySelector('body');
    const cover = body.querySelector('div');

    if(cover.classList.contains('instruction-cover')) {
        cover.classList.remove('instruction-cover');
    };
}

function instructionHandler() {
    const body = document.querySelector('body');
    const cover = body.querySelector('div');

    body.removeEventListener('click', coverHandler);
    if(!cover.classList.contains('instruction-cover')) {
        cover.classList.add('instruction-cover');
        setTimeout(() => {
            body.addEventListener('click', coverHandler);
        });
    } else {
        cover.classList.remove('instruction-cover');
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
    startBtn.addEventListener('click', startBtnHandler);
    clearBtn.addEventListener('click', clearBtnHandler);
    questionMark.addEventListener('click', instructionHandler);
}

init();