let pendingToDos = [];
const PENDING = "PENDING";
const form = document.querySelector(".todo-form");
const addTask = form.querySelector(".add-task");
const pendingList = document.querySelector(".pending ul");
const iTag = form.querySelector("i");

function store2LS(state, toDos) {
  localStorage.setItem(state, JSON.stringify(toDos));
}

function deleteBtnHandler(evt) {
  const btn = evt.target;
  const li = btn.parentNode;
  const className = evt.target.parentNode.parentNode.parentNode.className;
  const state = className.toUpperCase();

  if (state === PENDING) {
    pendingList.removeChild(li);
    pendingToDos = pendingToDos.filter(todo => `${todo.id}` !== li.id);
    store2LS(state, pendingToDos);
  }
}

function paintToDo(todo, state) {
  if((typeof todo === "string" && todo.length > 0) || (typeof todo.text === "string" && todo.text.length > 0)) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("i");
    const textValue = typeof todo === "string"  ? todo : todo.text;
    const newId =
      typeof textValue === "string"
        ? Math.random() * 100000000000000000
        : todo.id;
    const toDoObj = { id: newId, text: textValue };
  
    span.innerText = textValue;
    delBtn.classList.add("fas", "fa-times-circle");
    delBtn.addEventListener("click", deleteBtnHandler);
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    if (state === PENDING) {
      pendingList.appendChild(li);
      pendingToDos.push(toDoObj);
      store2LS(state, pendingToDos);
    }
  }
}

function handleSubmit(evt) {
  evt.preventDefault();
  paintToDo(addTask.value, PENDING);
  addTask.value = "";
}

function loadToDos() {
  const loadedPENDING = localStorage.getItem(PENDING);
  if (loadedPENDING !== null) {
    const parsedPENDING = JSON.parse(loadedPENDING);
    parsedPENDING.forEach(function(todo) {
      paintToDo(todo, PENDING);
    });
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
  iTag.addEventListener("click", handleSubmit);
}

init();