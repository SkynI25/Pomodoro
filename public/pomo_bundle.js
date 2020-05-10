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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/pomo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/pomodoro.css":
/*!**************************!*\
  !*** ./css/pomodoro.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./pomodoro.css */ \"./node_modules/css-loader/dist/cjs.js!./css/pomodoro.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/pomodoro.css?");

/***/ }),

/***/ "./img/home.svg":
/*!**********************!*\
  !*** ./img/home.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4d2a4b5839f224cf112f1d64d21f29d1.svg\");\n\n//# sourceURL=webpack:///./img/home.svg?");

/***/ }),

/***/ "./js/pomo.js":
/*!********************!*\
  !*** ./js/pomo.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/home.svg */ \"./img/home.svg\");\n/* harmony import */ var _css_pomodoro_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/pomodoro.css */ \"./css/pomodoro.css\");\n/* harmony import */ var _css_pomodoro_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_pomodoro_css__WEBPACK_IMPORTED_MODULE_1__);\n﻿\r\n\r\n\r\nlet minutes = 0;\r\nlet timerHour = 0;\r\nlet currSetNum = 1;\r\nlet timerMinute = 0;\r\nlet nTimes4Compute = 0;\r\nlet isConcMode = true;\r\n\r\nconst SET_NUM = 'currSetNum';\r\nconst SET_CONC = 'concNum';\r\nconst TYPE = \"mode\";\r\n\r\nconst tids = [];\r\nconst homeIMG = document.querySelector('.home-img');\r\nconst startBtn = document.querySelector('#startbtn');\r\nconst numOfSet = document.querySelector('#numOfset');\r\nconst setPomoNum = document.querySelector('#setPomoNum');\r\nconst timerZone = document.querySelector('.timer-zone');\r\nconst concZone = document.querySelector('.conc-zone');\r\nconst concInput = concZone.querySelector('input');\r\nconst concButton = concZone.querySelector('button');\r\nconst sessionValue = localStorage.getItem('timeSetting') === null ? [] : localStorage.getItem('timeSetting').split(',');\r\nconst concAVG = document.querySelector('.conc-avg');\r\nconst totalTime = document.querySelector('.total-time');\r\nconst congratsWords = [\r\n    `Great job!`,\r\n    `Nice work!`,\r\n    `Well done!`,\r\n    `Keep up!`\r\n]\r\n\r\nfunction pad(n, width, z) {\r\n    z = z || '0';\r\n    n = n + '';\r\n    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;\r\n}\r\n\r\nlet countDownDate4Display = new Date().getTime() + parseFloat(sessionValue[0]) * 60000;\r\nlet distance4Display = countDownDate4Display - new Date();\r\nlet hours4Display = Math.floor((distance4Display % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\nlet minutes4Display = Math.floor((distance4Display % (1000 * 60 * 60)) / (1000 * 60));\r\nlet seconds4Display = Math.floor((distance4Display % (1000 * 60)) / 1000);\r\n\r\nfunction initInputValue() {\r\n    concInput.value = 5;\r\n    const h2 = document.querySelector('.conc-zone .rating-num');\r\n    h2.textContent = 5;\r\n}\r\n\r\nfunction displayConcZone() {\r\n    if(timerZone.classList.contains('display-on')) {\r\n        timerZone.classList.remove('display-on');\r\n    }\r\n    if(!timerZone.classList.contains('display-off')) {\r\n        timerZone.classList.add('display-off');\r\n    }\r\n    if(concZone.classList.contains('display-off')) {\r\n        concZone.classList.remove('display-off');\r\n    }\r\n    if(!concZone.classList.contains('display-on')) {\r\n        concZone.classList.add('display-on');\r\n    }\r\n    chooseWords();\r\n    setTimeout(() => {\r\n        timerZone.style.display = \"none\";\r\n        concZone.style.display = \"flex\";\r\n    }, 500);\r\n}\r\n\r\nfunction displayTimezone() {\r\n    if(timerZone.classList.contains('display-off')) {\r\n        timerZone.classList.remove('display-off');\r\n    }\r\n    if(!timerZone.classList.contains('display-on')) {\r\n        timerZone.classList.add('display-on');\r\n    }\r\n    if(concZone.classList.contains('display-on')) {\r\n        concZone.classList.remove('display-on');\r\n    }\r\n    if(!concZone.classList.contains('display-off')) {\r\n        concZone.classList.add('display-off');\r\n    }\r\n    \r\n    setTimeout(() => {\r\n        concZone.style.display = \"none\";\r\n        timerZone.style.display = \"block\";\r\n        initInputValue();\r\n    }, 500);\r\n}\r\n\r\nfunction sumConcTime() {\r\n    let concTotal = (parseFloat(sessionValue[0]) * 60000) * localStorage.getItem(SET_NUM);\r\n    let hour = Math.floor((concTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n    let minute = Math.floor((concTotal % (1000 * 60 * 60)) / (1000 * 60));\r\n    totalTime.textContent = `${hour}h ${minute}m`;\r\n}\r\n\r\nfunction stateChanged(evt) {\r\n    setTimeout(() => {\r\n        evt.target.textContent = \"Start\";\r\n        currSetNum = localStorage.getItem(SET_NUM);\r\n        numOfSet.textContent = `${currSetNum} POMO`;\r\n        settingPomoTime();\r\n        addStartHandler();\r\n        if(isConcMode) {\r\n            displayConcZone();\r\n        }\r\n    }, 1000);\r\n}\r\n\r\nfunction startTimer(evt) {\r\n    const nTimes4Count = parseFloat(sessionValue[0]);\r\n    minutes = minutes === 0 ? nTimes4Count * 60 : minutes;\r\n    timerHour = timerHour === 0 ? hours4Display : timerHour;\r\n    timerMinute = timerMinute === 0 ? minutes4Display : timerMinute;\r\n    nTimes4Compute = nTimes4Compute === 0 ? /\\d\\.\\d/.test(sessionValue[0]) ? Math.floor(sessionValue[0]) : parseInt(sessionValue[0]) : nTimes4Compute;\r\n\r\n    evt.target.textContent = \"Stop\";\r\n    addStopHandler();\r\n\r\n    return new Promise(function(res, rej) {\r\n        for(let i = minutes; i >= 0; i--) {\r\n            tids.push(setTimeout(function() {\r\n                const computedNum = i >= 60 ? i - (nTimes4Compute) * 60 : i;\r\n                if(computedNum !== 60) {\r\n                    setPomoNum.textContent = `${pad(timerHour, 2)}:${pad(timerMinute, 2)}:${pad(computedNum, 2)}`;\r\n                }\r\n                if(i <= nTimes4Compute * 60) {\r\n                    if(timerHour > 0) {\r\n                        timerHour--;\r\n                        if(timerMinute > 0) {\r\n                            timerMinute--;\r\n                        } else {\r\n                            timerMinute = 59;\r\n                        }\r\n                    } else if(timerMinute > 0) {\r\n                        timerMinute--;\r\n                    }\r\n                    nTimes4Compute = timerHour * 60 + timerMinute;\r\n                }\r\n                minutes = i;\r\n                if(minutes === 0) {\r\n                    sumConcTime();\r\n                    currSetNum++;\r\n                    localStorage.setItem(SET_NUM, currSetNum);\r\n                    res();\r\n                }\r\n            }, (minutes - i) * 1000));\r\n        }\r\n    }).then(_ => stateChanged(evt));\r\n}\r\n\r\nfunction addStartHandler() {\r\n    startBtn.removeEventListener('click', stopTimer);\r\n    startBtn.addEventListener('click', startTimer);\r\n}\r\n\r\nfunction addStopHandler() {\r\n    startBtn.removeEventListener('click', startTimer);\r\n    startBtn.addEventListener('click', stopTimer);\r\n}\r\n\r\nfunction stopTimer(evt) {\r\n    tids.forEach(clearTimeout);\r\n    evt.target.textContent = \"Resume\";\r\n    addStartHandler();\r\n}\r\n\r\nfunction settingPomoTime() {\r\n    setPomoNum.innerHTML = `${pad(hours4Display, 2)}:${pad(minutes4Display, 2)}:${pad(seconds4Display, 2)}`;\r\n}\r\n\r\nfunction imgHandler() {\r\n    window.location.href='./index.html';\r\n}\r\n\r\nfunction chooseWords() {\r\n    const h1 = concZone.querySelector('h1');\r\n    const random = Math.floor(Math.random() * congratsWords.length);\r\n    h1.textContent = congratsWords[random];\r\n}\r\n\r\nfunction calcConcentration() {\r\n    const setConc = localStorage.getItem(SET_CONC);\r\n    let concArr = JSON.parse(setConc);\r\n    let avg = (concArr.reduce((a,h) => a += h)/concArr.length).toFixed(2);\r\n    concAVG.textContent = avg;\r\n}\r\n\r\nfunction concBtnHandler() {\r\n    if(confirm('Save the score?')) {\r\n        const rate = Number(concInput.value);\r\n        const setConc = localStorage.getItem(SET_CONC);\r\n        let concArr = JSON.parse(setConc);\r\n        if(concArr !== null) {\r\n            concArr.push(rate);\r\n            localStorage.setItem(SET_CONC, JSON.stringify(concArr));\r\n        }\r\n        calcConcentration();\r\n        displayTimezone();\r\n    }\r\n}\r\n\r\nfunction concInputHandler(evt) {\r\n    const h2 = document.querySelector('.conc-zone .rating-num');\r\n    h2.textContent = evt.target.value;\r\n}\r\n\r\nfunction imgSetting() {\r\n    homeIMG.src = `public/${_img_home_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`;\r\n    homeIMG.addEventListener('click', imgHandler);\r\n}\r\n\r\nfunction modeSetting() {\r\n    const avgConcent = document.querySelector('.avgConcent');\r\n    let modeType = localStorage.getItem(TYPE);\r\n    if(modeType !== null) {\r\n        if(modeType == 2) {\r\n            avgConcent.style.display = \"none\";\r\n            isConcMode = false;\r\n        }\r\n    }\r\n}\r\n\r\nfunction init() {\r\n    imgSetting();\r\n    modeSetting();\r\n    concInput.addEventListener('input', concInputHandler);\r\n    concButton.addEventListener('click', concBtnHandler);\r\n    if(!isNaN(parseInt(sessionValue[0]))) {\r\n        settingPomoTime();\r\n        startBtn.addEventListener('click', startTimer);\r\n    } else {\r\n        numOfSet.innerHTML = \"Before you start, please set the times in the setting page first.\"\r\n    }\r\n    localStorage.setItem(SET_NUM, currSetNum);\r\n    localStorage.setItem(SET_CONC, JSON.stringify([]));\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack:///./js/pomo.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/pomodoro.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/pomodoro.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html {\\r\\n    height: 100%;\\r\\n}\\r\\nbody {\\r\\n    margin: 0;\\r\\n    background: linear-gradient(180deg, rgb(0, 204, 153), rgb(204, 153, 255)); /* Standard syntax (must be last) */\\r\\n}\\r\\np {\\r\\n    margin: 10px;\\r\\n}\\r\\n.home-img {\\r\\n    cursor: pointer;\\r\\n    width: 60px;\\r\\n    height : 60px;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n@keyframes fadeIn {\\r\\n    from {\\r\\n        opacity: 0;\\r\\n    }\\r\\n    to {\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n@keyframes fadeOut {\\r\\n    from {\\r\\n        opacity: 1;\\r\\n    }\\r\\n    to {\\r\\n        opacity: 0;\\r\\n    }\\r\\n}\\r\\n.display-on {\\r\\n    animation: fadeIn 0.5s;\\r\\n    opacity: 1;\\r\\n}\\r\\n.display-off {\\r\\n    animation: fadeOut 0.5s;\\r\\n    opacity: 0;\\r\\n}\\r\\n.conc-zone {\\r\\n    display: none;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.conc-zone h1 {\\r\\n    color: #fff;\\r\\n    font-size: 60px;\\r\\n}\\r\\n\\r\\n.conc-zone div {\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.conc-zone div h2 {\\r\\n    color: #fff;\\r\\n    display: inline;\\r\\n}\\r\\n\\r\\n.conc-zone .rating-num {\\r\\n    position: absolute;\\r\\n    margin: 0 7px;\\r\\n}\\r\\n\\r\\n.conc-zone button {\\r\\n    margin-top: 20px;\\r\\n}\\r\\n\\r\\n.conc-rate {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.conc-rate h3 {\\r\\n    margin-left: 10px;\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n#numOfset{\\r\\n    color: #fff;\\r\\n    text-align: center;\\r\\n    font-size: 20px;\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n.buttonLocation {\\r\\n    margin : 2%;\\r\\n    text-align: center;\\r\\n}\\r\\n#startbtn {\\r\\n    width: 150px;\\r\\n    height: 40px;\\r\\n    color: #fff;\\r\\n    background: none;\\r\\n    border-radius: 5%;\\r\\n    border: 1px solid #fff;\\r\\n}\\r\\n#setPomoNum{\\r\\n    color: #fff;\\r\\n    text-align: center;\\r\\n    font-size: 60px;\\r\\n    margin:0;\\r\\n}\\r\\n.time-table {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    color: #fff;\\r\\n    margin-top : 250px;\\r\\n}\\r\\n.totalTime {\\r\\n    text-align: center;\\r\\n    font-size: 30px;\\r\\n}\\r\\n.avgConcent {\\r\\n    text-align: center;\\r\\n    font-size: 30px;\\r\\n}\\r\\n.breakSect {\\r\\n    color: #fff;\\r\\n}\\r\\n.time-info {\\r\\n    width: 1000px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/pomodoro.css?./node_modules/css-loader/dist/cjs.js");

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