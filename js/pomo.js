function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let value = sessionStorage.getItem('timeSetting') == null ? [] : sessionStorage.getItem('timeSetting').split(',');

let timer = sessionStorage.getItem('timeSetting') == null ? 0 : null,
    setNum = isNaN(parseInt(sessionStorage.getItem('setNum'))) ? 0 : parseInt(sessionStorage.getItem('setNum')),
    pomoNum = isNaN(parseInt(sessionStorage.getItem('pomoNum'))) ? 0 : parseInt(sessionStorage.getItem('pomoNum'));

let timer2 = null,
    countDownDate2;

let timer3 = null,
    countDownDate3;

let isBeginning = 0;
let distance = 0;

let countDownDate4Display = new Date().getTime() + parseFloat(value[0]) * 60000;
let now4Display = new Date().getTime();
let distance4Display = countDownDate4Display - now4Display;
let hours4Display = Math.floor((distance4Display % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes4Display = Math.floor((distance4Display % (1000 * 60 * 60)) / (1000 * 60));
let seconds4Display = Math.floor((distance4Display % (1000 * 60)) / 1000);

window.onload = _ => {
    if(timer !== null) {
        alert('Please set the times first in the setting')
        return;
    }
    document.getElementById('setPomoNum').innerHTML = pad(hours4Display, 2) + ":" + pad(minutes4Display, 2) + ":" + pad(seconds4Display, 2);
    if(!isNaN(parseInt(sessionStorage.getItem('pomoNum')))) {
        document.getElementById('numOfset').innerHTML = parseInt(sessionStorage.getItem('pomoNum')) + ` POMO Concentration`;
        document.getElementById('setNum').innerHTML = sessionStorage.getItem('pomoNum') + " POMO " + sessionStorage.getItem('setNum') + " SET";
    }
}

function start_timer() {
    if (timer !== null) {
        alert('Please set the times first in the setting')
        return;
    }
    let countDownDate = new Date().getTime() + parseFloat(value[0]) * 60000;

    timer = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('setPomoNum').innerHTML = pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
        if (distance < 0) {
            pomoNum += 1;
            sessionStorage.setItem("pomoNum", pomoNum);
            sessionStorage.setItem("setNum", setNum);
            if (pomoNum > 4) {
                setNum += 1;
                pomoNum = 0;
                sessionStorage.setItem("setNum", setNum);
                sessionStorage.setItem("pomoNum", pomoNum);
                stop_timer();
                //bigbreak_timer();
            } else {
                stop_timer();
                //break_timer();
            }
            document.getElementById('numOfset').innerHTML = parseInt(sessionStorage.getItem('pomoNum')) + ` POMO Concentration`;
        } else {
            triggerResumeTimer(distance);
        }
    }, 1000);
}

function triggerResumeTimer(countNum) {
    document.getElementById('startbtn').innerHTML = `Pause`;
    document.getElementById('startbtn').onclick = () => { stop_timer(countNum) };
}

function resume_timer(countNum) {
    let countDownDate = new Date().getTime() + countNum;
    timer = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("setPomoNum").innerHTML = pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
        if (distance < 0) {
            pomoNum += 1;
            sessionStorage.setItem("pomoNum", pomoNum);
            if (pomoNum > 4) {
                setNum += 1;
                pomoNum = 0;
                sessionStorage.setItem("setNum", setNum);
                sessionStorage.setItem("pomoNum", pomoNum);
                stop_timer();
                //bigbreak_timer();
            } else {
                stop_timer();
                //break_timer();
            }
        } else {
            triggerResumeTimer(distance);
        }
    }, 1000);
}

function stop_timer(countNum) {
    if(isValid(countNum)) {
        clearInterval(timer);
        document.getElementById('startbtn').innerHTML = `Resume`;
        document.getElementById('startbtn').onclick = () => { resume_timer(countNum) };
    } else {
        clearInterval(timer);
        isBeginning = 1;
        timer = null;
        document.getElementById('setPomoNum').innerHTML = pad(hours4Display, 2) + ":" + pad(minutes4Display, 2) + ":" + pad(seconds4Display, 2);
        document.getElementById('startbtn').innerHTML = `Start`;
        document.getElementById('setNum').innerHTML = sessionStorage.getItem('pomoNum') + " POMO " + sessionStorage.getItem('setNum') + " SET";
        document.getElementById('startbtn').onclick = () => { start_timer() };
    }
}

function isValid(value) {
    if(value !== undefined && value !== null && value !== '') {
        return true;
    }
    return false;
}

document.querySelector('#startbtn').addEventListener('click', start_timer);