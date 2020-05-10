/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/main.css?");

/***/ }),

/***/ "./img/menu.svg":
/*!**********************!*\
  !*** ./img/menu.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"07d183c3b8d888c925e70b47ca66893e.svg\");\n\n//# sourceURL=webpack:///./img/menu.svg?");

/***/ }),

/***/ "./img/refresh.svg":
/*!*************************!*\
  !*** ./img/refresh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7c5595b8cf2961857e330d6d3083f833.svg\");\n\n//# sourceURL=webpack:///./img/refresh.svg?");

/***/ }),

/***/ "./js/bg.js":
/*!******************!*\
  !*** ./js/bg.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_refresh_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/refresh.svg */ \"./img/refresh.svg\");\n\r\n\r\nconst IMG_NUM = 6;\r\nconst BG_NUM = \"bgNumber\";\r\nconst infoSector = document.querySelector('.infoSect');\r\nconst refreshIMG = document.querySelector('.refresh-img');\r\n\r\nfunction paintImage(num) {\r\n    const image = new Image();\r\n    image.src = `img/${num+1}.jpg`;\r\n    image.classList.add(\"bg-image\");\r\n    infoSector.prepend(image);\r\n}\r\n\r\nfunction genRandom() {\r\n    const number = Math.floor(Math.random() * IMG_NUM);\r\n    return number;\r\n}\r\n\r\nfunction getBGImage() {\r\n    const number = localStorage.getItem(BG_NUM) === null ? genRandom() : localStorage.getItem(BG_NUM);\r\n    localStorage.setItem(BG_NUM, number);\r\n    return number;\r\n}\r\n\r\nfunction removePrevImage() {\r\n    const prevIMG = document.querySelector(\".bg-image\");\r\n    prevIMG.remove();\r\n}\r\n\r\nfunction refreshHandler() {\r\n    if(confirm('Do you want to change the background image?')) {\r\n        const number = genRandom();\r\n        localStorage.setItem(BG_NUM, number);\r\n        removePrevImage();\r\n        paintImage(number);  \r\n    };\r\n}\r\n\r\nfunction imgSetting() {\r\n    refreshIMG.src = `./public/${_img_refresh_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`;\r\n}\r\n\r\nfunction init() {\r\n    imgSetting();\r\n    refreshIMG.addEventListener('click', refreshHandler);\r\n    const bg_number = parseInt(getBGImage());\r\n    paintImage(bg_number);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack:///./js/bg.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bg.js */ \"./js/bg.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ \"./js/weather.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_weather_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _username_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./username.js */ \"./js/username.js\");\n/* harmony import */ var _username_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_username_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.js */ \"./js/todo.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todo_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu.svg */ \"./img/menu.svg\");\n\r\n\r\nconst todayText = document.querySelector('#date');\r\nconst startBtn = document.querySelector('.buttonLocation > button');\r\nconst menu_img = document.querySelector('.menu-img');\r\n\r\nconst today = new Date();\r\nconst day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();\r\nconst month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;\r\nconst year = today.getFullYear();\r\nconst week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\r\nconst dayOfWeek = week[today.getDay()];\r\ntodayText.innerHTML = `${year}. ${month}. ${day}. (${dayOfWeek})`;\r\n\r\nfunction clickHandler() {\r\n    if(localStorage.getItem('timeSetting') !== null) {\r\n        window.location.href='pomodoro.html';\r\n    } else {\r\n        alert(\"Please set the times in the Setting before you start Pomodoro.\")\r\n    }\r\n}\r\n\r\nfunction imgHandler() {\r\n    window.location.href = './setting.html';\r\n}\r\n\r\nfunction imgSetting() {\r\n    menu_img.src = `./public/${_img_menu_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`;\r\n}\r\n\r\nfunction init() {\r\n    imgSetting();\r\n    menu_img.addEventListener('click', imgHandler);\r\n    startBtn.addEventListener('click', clickHandler);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/todo.js":
/*!********************!*\
  !*** ./js/todo.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let pendingToDos = [];\r\nlet finishedToDos = [];\r\nconst PENDING = \"PENDING\";\r\nconst FINISHED = \"FINISHED\";\r\nconst form = document.querySelector(\".todo-form\");\r\nconst addTask = form.querySelector(\".add-task\");\r\nconst pendingList = document.querySelector(\".pending ul\");\r\nconst finishedList = document.querySelector(\".finished ul\");\r\n\r\nfunction store2LS(state, toDos) {\r\n  localStorage.setItem(state, JSON.stringify(toDos));\r\n}\r\n\r\nfunction deleteBtnHandler(evt) {\r\n  const btn = evt.target;\r\n  const li = btn.parentNode;\r\n  const className = evt.target.parentNode.parentNode.parentNode.className;\r\n  const state = className.toUpperCase();\r\n\r\n  if (state === PENDING) {\r\n    pendingList.removeChild(li);\r\n    pendingToDos = pendingToDos.filter(todo => `${todo.id}` !== li.id);\r\n    store2LS(state, pendingToDos);\r\n  } else {\r\n    finishedList.removeChild(li);\r\n    finishedToDos = finishedToDos.filter(todo => `${todo.id}` !== li.id);\r\n    store2LS(state, finishedToDos);\r\n  }\r\n}\r\n\r\nfunction okayBtnHandler(evt) {\r\n  const objID = evt.target.parentNode.id;\r\n  const className = evt.target.parentNode.parentNode.parentNode.className;\r\n  const state = className.toUpperCase();\r\n  if (state === PENDING) {\r\n    [...pendingList.children].forEach(el => {\r\n      if (el.id === objID) {\r\n        evt.target.innerHTML = \"🔄\";\r\n        finishedList.appendChild(el);\r\n        finishedToDos.push(pendingToDos.find(obj => `${obj.id}` === objID));\r\n        store2LS(FINISHED, finishedToDos);\r\n        pendingToDos = pendingToDos.filter(todo => `${todo.id}` !== objID);\r\n        store2LS(PENDING, pendingToDos);\r\n      }\r\n    });\r\n  } else {\r\n    [...finishedList.children].forEach(el => {\r\n      if (el.id === objID) {\r\n        evt.target.innerHTML = \"✅\";\r\n        pendingList.appendChild(el);\r\n        pendingToDos.push(finishedToDos.find(obj => `${obj.id}` === objID));\r\n        store2LS(PENDING, pendingToDos);\r\n        finishedToDos = finishedToDos.filter(todo => `${todo.id}` !== objID);\r\n        store2LS(FINISHED, finishedToDos);\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction paintToDo(todo, state) {\r\n  const li = document.createElement(\"li\");\r\n  const span = document.createElement(\"span\");\r\n  const delBtn = document.createElement(\"button\");\r\n  const okayBtn = document.createElement(\"button\");\r\n  const textValue = typeof todo === \"string\" ? todo : todo.text;\r\n  const newId =\r\n    typeof textValue === \"string\"\r\n      ? Math.random() * 100000000000000000\r\n      : todo.id;\r\n\r\n  span.innerText = textValue;\r\n  delBtn.innerHTML = \"❌\";\r\n  okayBtn.innerHTML = state === FINISHED ? \"🔄\" : \"✅\";\r\n  delBtn.addEventListener(\"click\", deleteBtnHandler);\r\n  okayBtn.addEventListener(\"click\", okayBtnHandler);\r\n  li.id = newId;\r\n  li.appendChild(span);\r\n  li.appendChild(delBtn);\r\n  li.appendChild(okayBtn);\r\n  if (state === FINISHED) {\r\n    finishedList.appendChild(li);\r\n  } else {\r\n    pendingList.appendChild(li);\r\n  }\r\n\r\n  const toDoObj = { id: newId, text: textValue };\r\n  if (state === FINISHED) {\r\n    finishedToDos.push(toDoObj);\r\n    store2LS(state, finishedToDos);\r\n  } else {\r\n    pendingToDos.push(toDoObj);\r\n    store2LS(state, pendingToDos);\r\n  }\r\n}\r\n\r\nfunction handleSubmit(evt) {\r\n  evt.preventDefault();\r\n  paintToDo(addTask.value, PENDING);\r\n  addTask.value = \"\";\r\n}\r\n\r\nfunction loadToDos() {\r\n  const loadedPENDING = localStorage.getItem(PENDING);\r\n  const loadedFINISHED = localStorage.getItem(FINISHED);\r\n  if (loadedPENDING !== null) {\r\n    const parsedPENDING = JSON.parse(loadedPENDING);\r\n    parsedPENDING.forEach(function(todo) {\r\n      paintToDo(todo, PENDING);\r\n    });\r\n  }\r\n  if (loadedFINISHED !== null) {\r\n    const parsedFINISHED = JSON.parse(loadedFINISHED);\r\n    parsedFINISHED.forEach(function(todo) {\r\n      paintToDo(todo, FINISHED);\r\n    });\r\n  }\r\n}\r\n\r\nfunction init() {\r\n  loadToDos();\r\n  form.addEventListener(\"submit\", handleSubmit);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack:///./js/todo.js?");

/***/ }),

/***/ "./js/username.js":
/*!************************!*\
  !*** ./js/username.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const USER_NAME = 'username';\r\nconst name_input = 'name-input';\r\nconst name_sector = document.querySelector('.username');\r\nconst name_form = name_sector.querySelector('form');\r\n\r\nfunction inputHandler(evt) {\r\n    evt.preventDefault();\r\n    const user = evt.target.children[0].value;\r\n    localStorage.setItem(USER_NAME, user);\r\n    hello2User();\r\n    name_form.remove();\r\n}\r\n\r\nfunction appendInputTag() {\r\n    const inputName = document.createElement('input');\r\n    inputName.placeholder = \"What is your name? (Type here and enter)\";\r\n    inputName.classList.add(name_input);\r\n    name_form.appendChild(inputName);\r\n    name_form.addEventListener('submit', inputHandler);\r\n}\r\n\r\nfunction greetingMSG() {\r\n    let greeting = \"\";\r\n    const now = new Date().getHours();\r\n    if(now < 12) {\r\n        greeting = \"Good morning\";\r\n    } else if(now >= 12 && now < 17) {\r\n        greeting = \"Good afternoon\";\r\n    } else {\r\n        greeting = \"Good evening\";\r\n    }\r\n    return greeting;\r\n}\r\n\r\nfunction hello2User() {\r\n    const h2 = document.createElement('h2');\r\n    h2.textContent = `${greetingMSG()} ${localStorage.getItem(USER_NAME)}!`;\r\n    name_sector.appendChild(h2);\r\n}\r\n\r\nfunction getUserName() {\r\n    if(localStorage.getItem(USER_NAME) === null) {\r\n        appendInputTag();\r\n    } else {\r\n        hello2User();\r\n    }\r\n}\r\n\r\nfunction init() {\r\n    getUserName();\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack:///./js/username.js?");

/***/ }),

/***/ "./js/weather.js":
/*!***********************!*\
  !*** ./js/weather.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const jsWeather = document.querySelector('.js-weather');\r\nconst weatherDesc = document.createElement('p');\r\nconst weatherText = document.createElement('p');\r\nconst weatherIMG = document.createElement('img');\r\n\r\nconst API_KEY = '20034b8e902c02caf67c674cec7c3051';\r\nconst COORDS = 'coords';\r\n\r\nfunction createWeather() {\r\n    jsWeather.appendChild(weatherText);\r\n    jsWeather.appendChild(weatherIMG);\r\n    jsWeather.appendChild(weatherDesc);\r\n}\r\n\r\nfunction getWeather(lat, lng) {\r\n    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)\r\n    .then(function(res) {\r\n        return res.json();\r\n    })\r\n    .then(function(json) {\r\n        const temperature = json.main.temp;\r\n        const icon = json.weather[0].icon;\r\n        const description = json.weather[0].description;\r\n        weatherIMG.src = `https://openweathermap.org/img/wn/${icon}.png`;\r\n        weatherText.textContent = `${temperature}℃`;\r\n        weatherDesc.textContent = `${description}`;\r\n        createWeather();\r\n    });\r\n}\r\n\r\nfunction saveCoords(coordsObj) {\r\n    localStorage.setItem(COORDS, JSON.stringify(coordsObj));\r\n}\r\n\r\nfunction handleGeoSuccess(position) {\r\n    const latitude = position.coords.latitude;\r\n    const longitude = position.coords.longitude;\r\n    const coordsObj = {\r\n        latitude,\r\n        longitude,\r\n    }\r\n    saveCoords(coordsObj);\r\n    getWeather(latitude, longitude);\r\n}\r\n\r\nfunction handleGeoError() {\r\n    console.error(\"Cannot access to geo location\");\r\n}\r\n\r\nfunction askForCoords() {\r\n    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);\r\n}\r\n\r\nfunction loadCoords() {\r\n    const loadedCoords = localStorage.getItem(COORDS);\r\n    if(loadedCoords === null) {\r\n        askForCoords();\r\n    } else {\r\n        const parsedCoords = JSON.parse(loadedCoords);\r\n        getWeather(parsedCoords.latitude, parsedCoords.longitude)\r\n    }\r\n}\r\n\r\nfunction init() {\r\n    loadCoords();\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack:///./js/weather.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    margin: 0;\\r\\n    background: #f3f3f3;\\r\\n}\\r\\n\\r\\n.infoSect {\\r\\n    position: relative;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.upsideInfo {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.concentInfo {\\r\\n    height: 20%;\\r\\n}\\r\\n\\r\\n.buttonLocation {\\r\\n    padding : 10px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.menu-img {\\r\\n    cursor: pointer;\\r\\n    width : 60px;\\r\\n    height : 60px;\\r\\n}\\r\\n\\r\\n.refresh-img {\\r\\n    margin-left: 5px;\\r\\n    cursor: pointer;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\n.topSect {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.topSect div {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.js-weather {\\r\\n    display: flex;\\r\\n    margin-right: 10px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.js-weather p {\\r\\n    margin-left: 5px;\\r\\n    font-size: 15px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.dateInfo {\\r\\n    font-size: 20px;\\r\\n    font-weight: bold;\\r\\n    color: #353b48;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n@keyframes fadeIn {\\r\\n    from {\\r\\n        opacity: 0;\\r\\n    }\\r\\n    to {\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n\\r\\n.bg-image {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: -1;\\r\\n    animation: fadeIn .5s linear;\\r\\n}\\r\\n\\r\\n.username {\\r\\n    margin-top: 30px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.name-input {\\r\\n    width: 255px;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n/* .todoSect {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n} */\\r\\n\\r\\n.todo-list {\\r\\n    margin: 10px;\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n    width: 200px;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.concentAvgInfo {\\r\\n    box-sizing: content-box;\\r\\n    font-size: 30px;\\r\\n    display: inline-block;\\r\\n    color: #f3f3f3;\\r\\n    width: 50%;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.concentTimeInfo {\\r\\n    text-align: center;\\r\\n    box-sizing: content-box;\\r\\n    font-size: 30px;\\r\\n    display: inline-block;\\r\\n    color: #f3f3f3;\\r\\n    width: 49%;\\r\\n}\\r\\n\\r\\n/* button */\\r\\n.start-btn {\\r\\n    background: #1AAB8A;\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n    position: relative;\\r\\n    height: 60px;\\r\\n    font-size: 1.6em;\\r\\n    padding: 0 2em;\\r\\n    cursor: pointer;\\r\\n    transition: 800ms ease all;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.start-btn:hover {\\r\\n    background: #fff;\\r\\n    color: #1AAB8A;\\r\\n}\\r\\n\\r\\n.start-btn:before,\\r\\n.start-btn:after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    height: 2px;\\r\\n    width: 0;\\r\\n    background: #1AAB8A;\\r\\n    transition: 400ms ease all;\\r\\n}\\r\\n\\r\\n.start-btn:after {\\r\\n    right: inherit;\\r\\n    top: inherit;\\r\\n    left: 0;\\r\\n    bottom: 0;\\r\\n}\\r\\n\\r\\n.start-btn:hover:before,\\r\\n.start-btn:hover:after {\\r\\n    width: 100%;\\r\\n    transition: 800ms ease all;\\r\\n}\\r\\n\\r\\n.infoSect, .todoSect {\\r\\n    width: 1000px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });