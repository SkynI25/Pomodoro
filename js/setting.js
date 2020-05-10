import backIcon from '../img/back.svg';
import '../css/setting.css';

const TIME = "timeSetting";
const TYPE = "mode";
const wrongInput = `wrong-input`;
const backIMG = document.querySelector('.back-img');
const pomoTime = document.querySelector('.pomoTime');
const modeType = document.querySelectorAll('.radio-button');
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

function setData2LS(listVal) {
    [...modeType].forEach(el => {
        if(el.children[0].checked) {
            localStorage.setItem(TYPE, el.children[0].value);
        }
    })
    localStorage.setItem(TIME, listVal);
    window.location.href='index.html';
}

function setChildValue() {
    const listVal = [];
    const val1 = timesArr[0].type.value;
    // const val2 = timesArr[1].type.value;
    // const val3 = timesArr[2].type.value;

    listVal.push(val1);
    // listVal.push(val2);
    // listVal.push(val3);

    if(valiCheck(val1, timesArr[0].range)) { // && valiCheck(val2, timesArr[1].range) && valiCheck(val3, timesArr[2].range)) {
        if(confirm("Save the times?")) {
            setData2LS(listVal);
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
        pomoTime.value = values[0] ? values[0] : 0;
        // breakTime.value = values[1] ? values[1] : 0;
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