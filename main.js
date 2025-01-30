/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/funcoes/debounce.js":
/*!********************************!*\
  !*** ./js/funcoes/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://curriculo/./js/funcoes/debounce.js?");

/***/ }),

/***/ "./js/funcoes/nome_e_profissoes.js":
/*!*****************************************!*\
  !*** ./js/funcoes/nome_e_profissoes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nomeEProfissoes)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/funcoes/debounce.js\");\n\nfunction nomeEProfissoes() {\n  var nomeLeoSelecao = document.getElementById('nomeLeo'),\n    nomeDevSelecao = document.getElementById('nomeDev'),\n    nomeDsgSelecao = document.getElementById('nomeDsg');\n  var eventos = ['DOMContentLoaded', 'resize'],\n    nomeLeoMesmaLinha = \"Leonardo Rodrigues da Silva\",\n    nomeLeoQuebrado = \"Leonardo Rodrigues<br>da Silva\",\n    nomeDevMesmaLinha = \"Desenvolvedor Web Front End\",\n    nomeDevQuebrado = \"Desenvolvedor Web<br>Front End\",\n    nomeDsgMesmaLinha = \"Web Designer\",\n    nomeDsgQuebrado = \"Web<br>Designer\";\n  function quebrarRecuperarLinhas() {\n    var larguraTela = window.innerWidth;\n    if (larguraTela < 880) {\n      nomeLeoSelecao.innerHTML = nomeLeoQuebrado;\n      nomeDevSelecao.innerHTML = nomeDevQuebrado;\n      nomeDsgSelecao.innerHTML = nomeDsgQuebrado;\n    }\n    if (larguraTela >= 880) {\n      nomeLeoSelecao.innerHTML = nomeLeoMesmaLinha;\n      nomeDevSelecao.innerHTML = nomeDevMesmaLinha;\n      nomeDsgSelecao.innerHTML = nomeDsgMesmaLinha;\n    }\n    if (larguraTela >= 1000) {\n      nomeDevSelecao.innerHTML = nomeDevQuebrado;\n      nomeDsgSelecao.innerHTML = nomeDsgQuebrado;\n    }\n  }\n  function addWindowEvents() {\n    var formatarNome = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(quebrarRecuperarLinhas, 200);\n    eventos.forEach(function (evento) {\n      window.addEventListener(evento, formatarNome);\n    });\n  }\n  addWindowEvents();\n}\n\n//# sourceURL=webpack://curriculo/./js/funcoes/nome_e_profissoes.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes_nome_e_profissoes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes/nome_e_profissoes.js */ \"./js/funcoes/nome_e_profissoes.js\");\n\n(0,_funcoes_nome_e_profissoes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://curriculo/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;