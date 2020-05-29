import '../css/pomodoro.css';

let seconds = 0;
let timerHour = 0;
let currSetNum = 1;
let timerMinute = 0;
let nTimes4Compute = 0;
let isConcMode = true;

const SET_NUM = 'currSetNum';
const SET_CONC = 'concNum';
const TYPE = "mode";

const tids = [];
const xMark = document.querySelector('.top-area i');
const startBtn = document.querySelector('#startbtn');
const numOfSet = document.querySelector('#numOfset');
const setPomoNum = document.querySelector('#setPomoNum');
const timerZone = document.querySelector('.timer-zone');
const concZone = document.querySelector('.conc-zone');
const concInput = concZone.querySelector('input');
const concButton = concZone.querySelector('button');
const lsValue = localStorage.getItem('timeSetting') === null ? 30 : Number(parseFloat(localStorage.getItem('timeSetting')).toFixed(1));
const concAVG = document.querySelector('.conc-avg');
const totalTime = document.querySelector('.total-time');
const congratsWords = [
    `Great job!`,
    `Nice work!`,
    `Well done!`
]

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let countDownDate4Display = new Date().getTime() + lsValue * 60000;
let distance4Display = countDownDate4Display - new Date();
let hours4Display = Math.floor((distance4Display % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes4Display = Math.floor((distance4Display % (1000 * 60 * 60)) / (1000 * 60));
let seconds4Display = Math.floor((distance4Display % (1000 * 60)) / 1000);

function initInputValue() {
    concInput.value = 5;
    const h2 = document.querySelector('.conc-zone .rating-num');
    h2.textContent = 5;
}

function displayConcZone() {
    if(timerZone.classList.contains('display-on')) {
        timerZone.classList.remove('display-on');
    }
    if(!timerZone.classList.contains('display-off')) {
        timerZone.classList.add('display-off');
    }
    if(concZone.classList.contains('display-off')) {
        concZone.classList.remove('display-off');
    }
    if(!concZone.classList.contains('display-on')) {
        concZone.classList.add('display-on');
    }
    chooseWords();
    setTimeout(() => {
        timerZone.style.display = "none";
        concZone.style.display = "flex";
    }, 500);
}

function displayTimezone() {
    if(timerZone.classList.contains('display-off')) {
        timerZone.classList.remove('display-off');
    }
    if(!timerZone.classList.contains('display-on')) {
        timerZone.classList.add('display-on');
    }
    if(concZone.classList.contains('display-on')) {
        concZone.classList.remove('display-on');
    }
    if(!concZone.classList.contains('display-off')) {
        concZone.classList.add('display-off');
    }
    
    setTimeout(() => {
        concZone.style.display = "none";
        timerZone.style.display = "block";
        initInputValue();
    }, 500);
}

function sumConcTime() {
    let concTotal = (lsValue * 60000) * localStorage.getItem(SET_NUM);
    let hour = Math.floor((concTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((concTotal % (1000 * 60 * 60)) / (1000 * 60));
    totalTime.textContent = `${hour}h ${minute}m`;
}

function displayOnOff() {
    return new Promise(function(res, rej) {
        if(isConcMode) {
            setTimeout(() => {
                displayConcZone();
                res();
            }, 1000);
        } else {
            res();
        }
    });
}

function stateChanged(evt) {
    setTimeout(() => {
        evt.target.textContent = "Start";
        currSetNum = localStorage.getItem(SET_NUM);
        numOfSet.textContent = `${currSetNum} 세트`;
        settingPomoTime();
        addStartHandler();
    }, 1000);
}

function startTimer(evt) {
    const nTimes4Count = lsValue;
    seconds = seconds === 0 ? nTimes4Count * 60 : seconds;
    timerHour = timerHour === 0 ? hours4Display : timerHour;
    timerMinute = timerMinute === 0 ? minutes4Display : timerMinute;
    nTimes4Compute = nTimes4Compute === 0 ? /\d\.\d/.test(lsValue+'') ? Math.floor(lsValue) : parseInt(lsValue) : nTimes4Compute;

    evt.target.textContent = "Stop";
    addStopHandler();

    return new Promise(function(res, rej) {
        for(let i = seconds; i >= 0; i--) {
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
                seconds = i;
                if(seconds === 0) {
                    sumConcTime();
                    currSetNum++;
                    localStorage.setItem(SET_NUM, currSetNum);
                    res();
                }
            }, (seconds - i) * 1000));
        }
    }).then(displayOnOff).then(_ => stateChanged(evt));
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

function xMarkHandler() {
    window.location.href='./main.html';
}

function chooseWords() {
    const h1 = concZone.querySelector('h1');
    const random = Math.floor(Math.random() * congratsWords.length);
    h1.textContent = congratsWords[random];
}

function calcConcentration() {
    const setConc = localStorage.getItem(SET_CONC);
    let concArr = JSON.parse(setConc);
    let avg = (concArr.reduce((a,h) => a += h)/concArr.length).toFixed(2);
    concAVG.textContent = avg;
}

function concBtnHandler() {
    const rate = Number(concInput.value);
    const setConc = localStorage.getItem(SET_CONC);
    let concArr = JSON.parse(setConc);
    if(concArr !== null) {
        concArr.push(rate);
        localStorage.setItem(SET_CONC, JSON.stringify(concArr));
    }
    calcConcentration();
    displayTimezone();
}

function concInputHandler(evt) {
    const h2 = document.querySelector('.conc-zone .rating-num');
    h2.textContent = evt.target.value;
}

function imgSetting() {
    xMark.addEventListener('click', xMarkHandler);
}

function modeSetting() {
    const avgConcent = document.querySelector('.avgConcent');
    let modeType = localStorage.getItem(TYPE);
    if(modeType !== null) {
        if(modeType == 2) {
            avgConcent.style.display = "none";
            isConcMode = false;
        }
    }
}

function init() {
    imgSetting();
    modeSetting();
    concInput.addEventListener('input', concInputHandler);
    concButton.addEventListener('click', concBtnHandler);
    if(!isNaN(lsValue)) {
        settingPomoTime();
        startBtn.addEventListener('click', startTimer);
    }
    localStorage.setItem(SET_NUM, currSetNum);
    localStorage.setItem(SET_CONC, JSON.stringify([]));
}

init();