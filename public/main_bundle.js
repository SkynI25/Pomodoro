!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=15)}([function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function c(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function s(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var p=c(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:d,updater:h(u,e),references:1}),t.push(d)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,p=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,g=0;function h(n,e){var r,t,o;if(e.singleton){var i=g++;r=m||(m=l(e)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=l(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=s(n,e),l=0;l<r.length;l++){var d=c(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=i}}}},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,s;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(n,e,r){var t=r(0),o=r(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){(e=r(1)(!1)).push([n.i,"html {\r\n    font-family: 'Roboto', sans-serif;\r\n}",""]),n.exports=e},function(n,e){const r=document.querySelector(".js-weather"),t=document.createElement("p"),o=document.createElement("p"),i=document.createElement("img");function a(n,e){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${e}&appid=20034b8e902c02caf67c674cec7c3051&units=metric`).then((function(n){return n.json()})).then((function(n){const e=n.main.temp,a=n.weather[0].icon,c=n.weather[0].description;i.src=`https://openweathermap.org/img/wn/${a}.png`,o.textContent=e+"℃",t.textContent=""+c,r.appendChild(o),r.appendChild(i),r.appendChild(t)}))}function c(n){const e=n.coords.latitude,r=n.coords.longitude;!function(n){localStorage.setItem("coords",JSON.stringify(n))}({latitude:e,longitude:r}),a(e,r)}function s(){console.error("Cannot access to geo location")}function l(){const n=localStorage.getItem("coords");if(null===n)navigator.geolocation.getCurrentPosition(c,s);else{const e=JSON.parse(n);a(e.latitude,e.longitude)}}l()},function(n,e){let r=[];const t=document.querySelector(".todo-form"),o=t.querySelector(".add-task"),i=document.querySelector(".pending ul"),a=t.querySelector("i"),c=document.querySelector("body");function s(n,e){localStorage.setItem(n,JSON.stringify(e))}function l(n){const e=n.target.parentNode,t=n.target.parentNode.parentNode.parentNode.className.toUpperCase();"PENDING"===t&&(i.removeChild(e),r=r.filter(n=>""+n.id!==e.id),s(t,r))}function d(n,e){if("string"==typeof n&&n.length>0||"string"==typeof n.text&&n.text.length>0){const t=document.createElement("li"),o=document.createElement("span"),a=document.createElement("i"),c="string"==typeof n?n:n.text,d="string"==typeof c?1e17*Math.random():n.id,p={id:d,text:c};o.innerText=c,a.classList.add("fas","fa-times-circle"),a.addEventListener("click",l),t.id=d,t.appendChild(a),t.appendChild(o),"PENDING"===e&&(i.appendChild(t),r.push(p),s(e,r))}}function p(n){n.preventDefault(),d(o.value,"PENDING"),o.value=""}!function(){const n=localStorage.getItem("PENDING");null!==n&&JSON.parse(n).forEach((function(n){d(n,"PENDING")}))}(),t.addEventListener("submit",p),a.addEventListener("click",p),function(){let n=!1;var e;e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(n=!0),n&&(o.addEventListener("focus",()=>c.style.height="auto"),o.addEventListener("blur",setTimeout(c.style.height="100%",500)))}()},function(n,e,r){var t=r(0),o=r(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){(e=r(1)(!1)).push([n.i,"html, body {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n\r\n.menu-img {\r\n    cursor: pointer;\r\n    height : 100px;\r\n}\r\n\r\n.topSect {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 80px;\r\n}\r\n\r\n@keyframes cover-in-out {\r\n    0% { transform: translateY(0px); }\r\n    10% { transform: translateY(70px); }\r\n    90% { transform: translateY(70px); }\r\n    100% { transform: translateY(0px); }\r\n}\r\n\r\n.topSect-cover {\r\n    background: linear-gradient(90deg, #C4C4C4, #78CDDF);\r\n    border-radius: 0 0 4px 4px;\r\n    position: fixed;\r\n    top: -75px;\r\n    width: 100%;\r\n    padding: 20px;\r\n    animation: cover-in-out 5s ease-in-out forwards;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    vertical-align: baseline;\r\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.greeting {\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 50px;\r\n    font-weight: 500;\r\n}\r\n\r\n.js-weather {\r\n    display: flex;\r\n    margin-right: 20px;\r\n    align-items: center;\r\n}\r\n\r\n.js-weather p {\r\n    margin: 0;\r\n    margin-left: 5px;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.bg-image {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    animation: fadeIn .5s linear;\r\n}\r\n\r\n.todo-list {\r\n    margin: 10px;\r\n}\r\n\r\n.todo-form {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.todo-form i {\r\n    position: absolute;\r\n    right: 50px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pending ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    border-radius: 5px;\r\n    overflow-y: scroll;\r\n    height: 150px;\r\n}\r\n\r\n.pending ul::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n.pending ul::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n    border-radius: 10px;\r\n}\r\n\r\n.pending ul::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n.pending ul li {\r\n    background-color: rgba(70,63,63, 0.7);\r\n    font-size: 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 390px;\r\n    border-radius: 5px;\r\n    padding: 5px 15px;\r\n    margin: 15px 5px 15px 0;\r\n}\r\n\r\n.pending ul li span {\r\n    color: #fff;\r\n    margin-left: 10px;\r\n    word-break: break-all;\r\n}\r\n\r\n.fa-times-circle {\r\n    color: #f43127;\r\n    text-shadow: 3px 5px 3px rgba(44, 44, 44, 0.8);\r\n    cursor: pointer;\r\n}\r\n\r\n.add-task {\r\n    width: 350px;\r\n    height: 50px;\r\n    font-size: 30px;\r\n    border-radius: 4px;\r\n    background-color: #E4E2E2;\r\n    padding-left: 10px;\r\n    border-style: none;\r\n    outline: none;\r\n}\r\n\r\n.buttonLocation {\r\n    display: flex;\r\n    padding : 10px;\r\n    justify-content: center;\r\n}\r\n\r\n.start-btn {\r\n    background: rgba(65,159,245, 0.7);\r\n    color: #fff;\r\n    border: none;\r\n    position: relative;\r\n    height: 60px;\r\n    font-size: 1.6em;\r\n    padding: 0 2em;\r\n    cursor: pointer;\r\n    outline: none;\r\n    border-radius: 4px;\r\n}\r\n\r\n.start-btn:hover {\r\n    transition: 800ms ease all;\r\n    background: #eee;\r\n    color: rgba(65,159,245, 0.7);\r\n}\r\n\r\n.start-btn:before,\r\n.start-btn:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 2px;\r\n    width: 0;\r\n    background: rgba(65,159,245, 0.7);\r\n    transition: 400ms ease all;\r\n}\r\n\r\n.start-btn:after {\r\n    right: inherit;\r\n    top: inherit;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.start-btn:hover:before,\r\n.start-btn:hover:after {\r\n    width: 100%;\r\n    transition: 800ms ease all;\r\n}\r\n\r\n.infoSect {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 55%;\r\n}\r\n\r\n.todoSect {\r\n    width: 460px;\r\n}\r\n\r\n.infoSect, .todoSect {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@media(max-width: 549px) {\r\n    .js-weather {\r\n        padding-bottom: 20px;\r\n    }\r\n    .js-weather p {\r\n        font-size: 13px;\r\n    }\r\n    .topSect-cover {\r\n        font-size: 15px;\r\n    }\r\n    .menu-img {\r\n        height: 70px;\r\n    }\r\n    .greeting {\r\n        font-size: 30px;\r\n    }\r\n    .todoSect {\r\n        width: 400px;\r\n    }\r\n    .add-task {\r\n        width: 240px;\r\n        height: 35px;\r\n        font-size: 22px;\r\n    }\r\n    .todo-form i {\r\n        right: 75px;\r\n        top: 3px;\r\n    }\r\n    .pending ul li {\r\n        width: auto;\r\n        font-size: 22px;\r\n        padding: 3px 10px;\r\n        margin: 10px 0px;\r\n    }\r\n    .start-btn {\r\n        font-size: 16px;\r\n        height: 50px;\r\n    }\r\n}\r\n\r\n@media(max-width: 400px) {\r\n    .infoSect {\r\n        height: 50%;\r\n    }\r\n    .greeting {\r\n        font-size: 27px;\r\n    }\r\n    .todoSect {\r\n        width: 350px !important;\r\n    }\r\n    .todo-form i {\r\n        right: 50px;\r\n    }\r\n    .pending ul {\r\n        height: 100px;\r\n    }\r\n}\r\n\r\n@media(max-width: 460px) {\r\n    .topSect-cover {\r\n        padding: 20px 0;\r\n    }\r\n}\r\n\r\n@media(min-width: 550px) and (max-width: 998px) {\r\n    .greeting {\r\n        font-size: 40px;\r\n    }\r\n    .js-weather p {\r\n        font-size: 15px;\r\n    }\r\n}",""]),n.exports=e},,,,,,,,function(n,e,r){"use strict";r.r(e);r.p;const t=document.querySelector("body");function o(){const n=new Image;n.src="img/1.jpg",n.classList.add("bg-image"),t.prepend(n)}o();var i=r.p+"07d183c3b8d888c925e70b47ca66893e.svg";const a=document.querySelector(".infoSect"),c=document.querySelector(".topSect"),s=document.querySelector(".buttonLocation button"),l=document.querySelector(".menu-img");function d(){null===localStorage.getItem("timeSetting")&&localStorage.setItem("timeSetting",30),window.location.href="pomodoro.html"}function p(){window.location.href="./index.html"}function u(){a.querySelector("h1").textContent=`${function(){let n="";const e=(new Date).getHours();return n=e<12?"Good morning":e>=12&&e<17?"Good afternoon":"Good evening",n}()}, ${localStorage.getItem("username")}`}function f(){localStorage.getItem("username")&&(u(),function(){const n=document.createElement("div");n.textContent="Welcome "+localStorage.getItem("username"),n.classList.add("topSect-cover"),c.prepend(n)}())}l.src="./public/"+i,f(),l.addEventListener("click",p),s.addEventListener("click",d);r(4),r(5),r(6),r(2)}]);