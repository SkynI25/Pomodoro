const today = new Date();
const day = today.getDate() < 10 ? `0${today.getDate()+1}` : today.getDate()+1;
const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;
const year = today.getFullYear();
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfWeek = week[today.getDay()];
document.querySelector('#date').innerHTML = `${year}. ${month}. ${day}. (${dayOfWeek})`;

function clickHandler() {
    if(sessionStorage.getItem('timeSetting') !== null) {
        window.location.href='pomodoro.html';
    }
    alert("Please set the times in the Setting before you start Pomodoro.")
}

document.querySelector('.buttonLocation > button').addEventListener('click', clickHandler);