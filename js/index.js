import '../css/setting.css';
import "../css/common.css";

const TYPE = "mode";
const TIME = "timeSetting";
const USER_NAME = "username";
const IS_NEW = 'newUser';
const wrongInput = "wrong-input";
const xMark = document.querySelector('.left-side i');
const pomoTime = document.querySelector('.pomoTime');
const modeType = document.querySelectorAll('.radio-button label');
const saveSetting = document.querySelector('.save-setting');
const username = document.querySelector('.username');
const intro = document.querySelector('.intro');
const introCloseBtn = intro.querySelector('.intro-inner .closeBtn button');
const questionMark = document.querySelector('.copyright i');

function valiCheck(data) {
    return (!/\D/.test(data) || /\d\.[1-9]{1}/.test(data)) && Number(data) > 0;
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
        let value = localStorage.getItem(TIME);
        if(parseFloat(value) < 0.1) {
            value = 30;
            localStorage.setItem(TIME, value);
        }
        pomoTime.value = value;
    } else {
        pomoTime.value = 30;
    }
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

function isIntroNeeded() {
    if(localStorage.getItem(IS_NEW) === "checked") {
        intro.style.display = "none";
    } else {
        localStorage.setItem(IS_NEW, "checked");
    }
    introCloseBtn.addEventListener('click', () => intro.style.display = "none");
}

function init() {
    initInput();
    saveSetting.addEventListener('click', setChildValue);
    pomoTime.addEventListener('focusout', () => pointWrongInput(pomoTime));
    xMark.addEventListener('click', () => window.location.href='./main.html');
    questionMark.addEventListener('click', () => intro.style.display = "block");
    isIntroNeeded();
}

init();