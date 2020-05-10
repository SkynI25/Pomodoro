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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/setting.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/setting.css":
/*!*************************!*\
  !*** ./css/setting.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./setting.css */ \"./node_modules/css-loader/dist/cjs.js!./css/setting.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/setting.css?");

/***/ }),

/***/ "./img/back.svg":
/*!**********************!*\
  !*** ./img/back.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"da21225bcf530088451874c9e21c215a.svg\");\n\n//# sourceURL=webpack:///./img/back.svg?");

/***/ }),

/***/ "./js/setting.js":
/*!***********************!*\
  !*** ./js/setting.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_back_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/back.svg */ \"./img/back.svg\");\n/* harmony import */ var _css_setting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/setting.css */ \"./css/setting.css\");\n/* harmony import */ var _css_setting_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_setting_css__WEBPACK_IMPORTED_MODULE_1__);\n﻿\r\n\r\n\r\nconst TIME = \"timeSetting\";\r\nconst TYPE = \"mode\";\r\nconst wrongInput = `wrong-input`;\r\nconst backIMG = document.querySelector('.back-img');\r\nconst pomoTime = document.querySelector('.pomoTime');\r\nconst modeType = document.querySelectorAll('.radio-button label');\r\n// const breakTime = document.querySelector('.breakTime');\r\n// const bigbreakTime = document.querySelector('.bigbreakTime');\r\nconst timesArr = [\r\n    {type: pomoTime, range: 120},\r\n    // {type: breakTime, range: 30},\r\n    // {type: bigbreakTime, range: 60},\r\n];\r\n\r\nfunction pointWrongInput(data) {\r\n    const value = data.type.value;\r\n    const range = data.range;\r\n    const type = data.type;\r\n    if(!valiCheck(value, range)) {\r\n        type.classList.add(wrongInput);\r\n    } else if(valiCheck(value, range) && type.classList.contains(wrongInput)) {\r\n        type.classList.remove(wrongInput);\r\n    }\r\n}\r\n\r\nfunction setData2LS(listVal) {\r\n    [...modeType].forEach(el => {\r\n        if(el.children[0].checked) {\r\n            localStorage.setItem(TYPE, el.children[0].value);\r\n        }\r\n    })\r\n    localStorage.setItem(TIME, listVal);\r\n    window.location.href='index.html';\r\n}\r\n\r\nfunction setChildValue() {\r\n    const listVal = [];\r\n    const val1 = timesArr[0].type.value;\r\n    // const val2 = timesArr[1].type.value;\r\n    // const val3 = timesArr[2].type.value;\r\n\r\n    listVal.push(val1);\r\n    // listVal.push(val2);\r\n    // listVal.push(val3);\r\n\r\n    if(valiCheck(val1, timesArr[0].range)) { // && valiCheck(val2, timesArr[1].range) && valiCheck(val3, timesArr[2].range)) {\r\n        if(confirm(\"Save the times?\")) {\r\n            setData2LS(listVal);\r\n        }\r\n    } else {\r\n        pointWrongInput(timesArr[0]);\r\n        // pointWrongInput(timesArr[1]);\r\n        // pointWrongInput(timesArr[2]);\r\n        alert(`Please setting the time with a valid number.`);\r\n    }\r\n}\r\n\r\nfunction valiCheck(data,range) {\r\n    return (!/\\D/.test(data) || /\\d\\.\\d/.test(data)) && Number(data) > 0 && Number(data) <= range; \r\n}\r\n\r\nfunction initInput() {\r\n    if(localStorage.getItem('timeSetting')) {\r\n        const values = localStorage.getItem('timeSetting').split(\",\");\r\n        pomoTime.value = values[0] ? values[0] : 0;\r\n        // breakTime.value = values[1] ? values[1] : 0;\r\n        // bigbreakTime.value = values[2];\r\n    }\r\n}\r\n\r\nfunction imgHandler() {\r\n    window.location.href='./index.html';\r\n}\r\n\r\nfunction imgSetting() {\r\n    backIMG.src = `./public/${_img_back_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`;\r\n    backIMG.addEventListener('click', imgHandler);\r\n}\r\n\r\nfunction init() {\r\n    imgSetting();\r\n    initInput();\r\n    document.querySelector('#setTimeValue').addEventListener('click', setChildValue);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack:///./js/setting.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/setting.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/setting.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    margin: 0;\\r\\n    background: #ededed;\\r\\n}\\r\\np {\\r\\n    font-size: 15px;\\r\\n}\\r\\n.menubar {\\r\\n    margin-top: 10px;\\r\\n    position: relative;\\r\\n    box-shadow: 0px 6px 6px -6px #666;\\r\\n}\\r\\n.back-img {\\r\\n    width: 30px;\\r\\n    height : 30px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.page-title {\\r\\n    position: absolute;\\r\\n    top: 5px;\\r\\n    left: 60px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.notice {\\r\\n    font-size:12px;\\r\\n    margin-top:25px;\\r\\n    margin-bottom: 10px;\\r\\n    color:#8a2be2;\\r\\n}\\r\\n.select-type {\\r\\n    margin-top: 10px;\\r\\n}\\r\\n.mode {\\r\\n    margin-top: 5px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.radio-button label {\\r\\n    cursor: pointer;\\r\\n}\\r\\n.mode-text {\\r\\n    margin-left: 10px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.info-text {\\r\\n    color: #666;\\r\\n    font-size: 12px;\\r\\n}\\r\\n.setPomoTime ul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n.setPomoTime ul li {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n    border-bottom: 1px solid #eee;\\r\\n}\\r\\n.setPomoTime {\\r\\n    background: #fff;\\r\\n}\\r\\n.input-time {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.input-time span {\\r\\n    color: #666;\\r\\n}\\r\\n.pomoTime, .breakTime, .bigbreakTime {\\r\\n    width: 50px;\\r\\n}\\r\\n.explainText {\\r\\n    font-size: 12px;\\r\\n    color: #666;\\r\\n}\\r\\n.wrong-input {\\r\\n    border: 2px solid red;\\r\\n}\\r\\n.setTimeNum {\\r\\n    margin-top : 10px;\\r\\n}\\r\\n\\r\\n.menu-content, .set-mode, .setTimeNum {\\r\\n    margin-left: 15px;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n.menubar, .set-mode, .set-time, .btn-location {\\r\\n    width: 1000px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/setting.css?./node_modules/css-loader/dist/cjs.js");

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