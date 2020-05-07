import backIcon from '../img/back.svg';
import '../css/setting.css';

const val1N = "Pomo Time";
const val2N = "Break Time";
const val3N = "Big Break Time";
const TIME = "timeSetting";
const wrongInput = `wrong-input`;
const backIMG = document.querySelector('.back-img');
const pomoTime = document.querySelector('.pomoTime');
// const breakTime = document.querySelector('.breakTime');
// const bigbreakTime = document.querySelector('.bigbreakTime');
const timesArr = [
    {type: pomoTime, range: 120},
    // {type: breakTime, range: 30},
    // {type: bigbreakTime, range: 60},
];

function pointWrongInput(data) {
    const value = data.type.value;
    const range = data.range;
    const type = data.type;
    if(!valiCheck(value, range)) {
        type.classList.add(wrongInput);
    } else if(valiCheck(value, range) && type.classList.contains(wrongInput)) {
        type.classList.remove(wrongInput);
    }
}

function setChildValue() {
    let listVal = [];
    const val1 = timesArr[0].type.value;
    // const val2 = timesArr[1].type.value;
    // const val3 = timesArr[2].type.value;

    listVal.push(val1);
    // listVal.push(val2);
    // listVal.push(val3);

    if(valiCheck(val1, timesArr[0].range)) { // && valiCheck(val2, timesArr[1].range) && valiCheck(val3, timesArr[2].range)) {
        if(confirm("Save the times?")) {
            localStorage.setItem(TIME, listVal);
            window.location.href='index.html';
        }
    } else {
        pointWrongInput(timesArr[0]);
        // pointWrongInput(timesArr[1]);
        // pointWrongInput(timesArr[2]);
        alert(`Please setting the time with a valid number.`);
    }
}

function valiCheck(data,range) {
    return (!/\D/.test(data) || /\d\.\d/.test(data)) && Number(data) > 0 && Number(data) <= range; 
}

function initInput() {
    if(localStorage.getItem('timeSetting')) {
        const values = localStorage.getItem('timeSetting').split(",");
        pomoTime.value = values[0];
        // breakTime.value = values[1];
        // bigbreakTime.value = values[2];
    }
}

function imgHandler() {
    window.location.href='./index.html';
}

function imgSetting() {
    backIMG.src = `./public/${backIcon}`;
    backIMG.addEventListener('click', imgHandler);
}

function init() {
    imgSetting();
    initInput();
    document.querySelector('#setTimeValue').addEventListener('click', setChildValue);
}

init();