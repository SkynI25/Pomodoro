const todayText = document.querySelector('#date');
const startBtn = document.querySelector('.buttonLocation > button');

const today = new Date();
const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;
const year = today.getFullYear();
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfWeek = week[today.getDay()];
todayText.innerHTML = `${year}. ${month}. ${day}. (${dayOfWeek})`;

function clickHandler() {
    if(sessionStorage.getItem('timeSetting') !== null) {
        window.location.href='pomodoro.html';
    } else {
        alert("Please set the times in the Setting before you start Pomodoro.")
    }
}

function init() {
    startBtn.addEventListener('click', clickHandler);
}

init();