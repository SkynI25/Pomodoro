import homeIcon from '../img/home.svg';
import '../css/pomodoro.css';

let minutes = 0;
let timerHour = 0;
let currSetNum = 1;
let timerMinute = 0;
let nTimes4Compute = 0;

const SET_NUM = 'currSetNum';

const tids = [];
const homeIMG = document.querySelector('.home-img');
const startBtn = document.querySelector('#startbtn');
const numOfSet = document.querySelector('#numOfset');
const setPomoNum = document.querySelector('#setPomoNum');
const sessionValue = localStorage.getItem('timeSetting') === null ? [] : localStorage.getItem('timeSetting').split(',');

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let now4Display = new Date().getTime();
let countDownDate4Display = new Date().getTime() + parseFloat(sessionValue[0]) * 60000;
let distance4Display = countDownDate4Display - now4Display;
let hours4Display = Math.floor((distance4Display % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes4Display = Math.floor((distance4Display % (1000 * 60 * 60)) / (1000 * 60));
let seconds4Display = Math.floor((distance4Display % (1000 * 60)) / 1000);

function stateChanged(evt) {
    setTimeout(() => {
        evt.target.textContent = "Start";
        currSetNum = localStorage.getItem(SET_NUM);
        numOfSet.textContent = `${currSetNum} POMO`;
        settingPomoTime();
        addStartHandler();
    }, 1000);
}

function startTimer(evt) {
    const nTimes4Count = parseFloat(sessionValue[0]);
    minutes = minutes === 0 ? nTimes4Count * 60 : minutes;
    timerHour = timerHour === 0 ? hours4Display : timerHour;
    timerMinute = timerMinute === 0 ? minutes4Display : timerMinute;
    nTimes4Compute = nTimes4Compute === 0 ? /\d\.\d/.test(sessionValue[0]) ? Math.floor(sessionValue[0]) : parseInt(sessionValue[0]) : nTimes4Compute;

    evt.target.textContent = "Stop";
    addStopHandler();

    return new Promise(function(res, rej) {
        for(let i = minutes; i >= 0; i--) {
            tids.push(setTimeout(function() {
                const computedNum = i >= 60 ? i - (nTimes4Compute) * 60 : i;
                if(computedNum !== 60) {
                    setPomoNum.textContent = `${pad(timerHour, 2)}:${pad(timerMinute, 2)}:${pad(computedNum, 2)}`;
                }
                if(i <= nTimes4Compute * 60) {
                    if(timerHour > 0) {
                        timerHour--;
                        if(timerMinute > 0) {
                            timerMinute--;
                        } else {
                            timerMinute = 59;
                        }
                    } else if(timerMinute > 0) {
                        timerMinute--;
                    }
                    nTimes4Compute = timerHour * 60 + timerMinute;
                }
                minutes = i;
                if(minutes === 0) {
                    currSetNum++;
                    localStorage.setItem(SET_NUM, currSetNum);
                    res();
                }
            }, (minutes - i) * 1000));
        }
    }).then(_ => stateChanged(evt));
}

function addStartHandler() {
    startBtn.removeEventListener('click', stopTimer);
    startBtn.addEventListener('click', startTimer);
}

function addStopHandler() {
    startBtn.removeEventListener('click', startTimer);
    startBtn.addEventListener('click', stopTimer);
}

function stopTimer(evt) {
    tids.forEach(clearTimeout);
    evt.target.textContent = "Resume";
    addStartHandler();
}

function settingPomoTime() {
    setPomoNum.innerHTML = `${pad(hours4Display, 2)}:${pad(minutes4Display, 2)}:${pad(seconds4Display, 2)}`;
}

function imgHandler() {
    window.location.href='./index.html';
}

function imgSetting() {
    homeIMG.src = `public/${homeIcon}`;
    homeIMG.addEventListener('click', imgHandler);
}

function init() {
    imgSetting();
    if(!isNaN(parseInt(sessionValue[0]))) {
        settingPomoTime();
        startBtn.addEventListener('click', startTimer);
    } else {
        numOfSet.innerHTML = "Before you start, please set the times in the setting page first."
    }
    localStorage.setItem(SET_NUM, currSetNum);
}

init();