const USER_NAME = 'username';
const name_input = 'name-input';
const name_sector = document.querySelector('.username');
const name_form = name_sector.querySelector('form');

function inputHandler(evt) {
    evt.preventDefault();
    const user = evt.target.children[0].value;
    localStorage.setItem(USER_NAME, user);
    hello2User();
    name_form.remove();
}

function appendInputTag() {
    const inputName = document.createElement('input');
    inputName.placeholder = "What is your name? (Type here and enter)";
    inputName.classList.add(name_input);
    name_form.appendChild(inputName);
    name_form.addEventListener('submit', inputHandler);
}

function greetingMSG() {
    let greeting = "";
    const now = new Date().getHours();
    if(now < 12) {
        greeting = "Good morning";
    } else if(now >= 12 && now < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    return greeting;
}

function hello2User() {
    const h2 = document.createElement('h2');
    h2.textContent = `${greetingMSG()} ${localStorage.getItem(USER_NAME)}!`;
    name_sector.appendChild(h2);
}

function getUserName() {
    if(localStorage.getItem(USER_NAME) === null) {
        appendInputTag();
    } else {
        hello2User();
    }
}

function init() {
    getUserName();
}

init();