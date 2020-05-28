import '../css/setting.css';
import "./username.js";

const TYPE = "mode";
const TIME = "timeSetting";
const USER_NAME = "username";
const wrongInput = "wrong-input";
const xMark = document.querySelector('.left-side i');
const pomoTime = document.querySelector('.pomoTime');
const modeType = document.querySelectorAll('.radio-button label');
const saveSetting = document.querySelector('.save-setting');
const username = document.querySelector('.username');

function valiCheck(data) {
    return (!/\D/.test(data) || /\d(\.?)[1-9]/.test(data)) && Number(data) > 0;
}

function pointWrongInput(data) {
    const value = data.value;
    if(!valiCheck(value)) {
        data.classList.add(wrongInput);
        saveSetting.style.color = "#988E8E";
    } else if(valiCheck(value) && data.classList.contains(wrongInput)) {
        data.classList.remove(wrongInput);
        saveSetting.style.color = "#000";
    }
}

function setData2LS(listVal) {
    [...modeType].forEach(el => {
        if(el.children[0].checked) {
            localStorage.setItem(TYPE, el.children[0].value);
        }
    });
    localStorage.setItem(TIME, listVal);
    window.location.href='./index.html';
}

function setChildValue() {
    const listVal = [];
    const val1 = pomoTime.value;
    const user = username.value;

    listVal.push(val1);

    if(valiCheck(val1)) {
        setData2LS(listVal);
        localStorage.setItem(USER_NAME, user);
        window.location.href='./main.html';
    } else {
        saveSetting.style.color = "#988E8E";
        pointWrongInput(pomoTime);
    }
}

function initInput() {
    if(localStorage.getItem(TIME)) {
        const values = localStorage.getItem(TIME).split(",");
        pomoTime.value = values[0] ? values[0] : 0;        
    }
    pointWrongInput(pomoTime);
    if(localStorage.getItem(TYPE)) {
        [...modeType].forEach(el => {
            if(el.children[0].value == localStorage.getItem(TYPE)) {
                el.children[0].checked = true;
            } else {
                el.children[0].checked = false;
            }
        });
    }
    if(localStorage.getItem(USER_NAME)) {
        username.value = localStorage.getItem(USER_NAME);
    }
}

function init() {
    initInput();
    saveSetting.addEventListener('click', setChildValue);
    pomoTime.addEventListener('focusout', () => pointWrongInput(pomoTime));
    xMark.addEventListener('click', () => window.location.href='./main.html');
}

init();