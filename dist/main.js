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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setContactContent: () => (/* binding */ setContactContent)\n/* harmony export */ });\nfunction setContactContent() {\n    let previousContent = document.querySelector(\"main\");\n\n    if (previousContent != null) document.body.removeChild(previousContent);\n\n    const mainContent = document.createElement(\"main\");\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Contacts\";\n\n    const contactsList = document.createElement(\"ul\");\n\n    const ownerContact = document.createElement(\"li\");\n    ownerContact.textContent = \"Jim the owner: 012-3571113\";\n\n    const managerContact = document.createElement(\"li\");\n    managerContact.textContent = \"Timmy the manager: 012-3456789\";\n\n    contactsList.appendChild(ownerContact);\n    contactsList.appendChild(managerContact);\n    mainContent.appendChild(h1);\n    mainContent.appendChild(contactsList);\n    document.body.appendChild(mainContent);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setHomepageContent: () => (/* binding */ setHomepageContent)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n\n\nfunction setHomepageContent() {\n    let previousContent = document.querySelector(\"main\");\n\n    if (previousContent != null) document.body.removeChild(previousContent);\n\n    const mainContent = document.createElement(\"main\");\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"A restaurant title\";\n\n    const image = new Image();\n    image.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.width = 300;\n\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = \"Soft jazz at night, great food, reasonable prize, what not to love?\";\n\n    mainContent.appendChild(h1);\n    mainContent.appendChild(image);\n    mainContent.appendChild(paragraph);\n    document.body.appendChild(mainContent);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nfunction setNav() {\n    const nav = document.createElement(\"nav\");\n    const homepageBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const contactBtn = document.createElement(\"button\");\n\n    homepageBtn.textContent = \"Homepage\";\n    menuBtn.textContent = \"Menu\";\n    contactBtn.textContent = \"Contact\";\n\n    homepageBtn.addEventListener(\"click\", () => (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.setHomepageContent)());\n    menuBtn.addEventListener(\"click\", () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.setMenuContent)());\n    contactBtn.addEventListener(\"click\", () => (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.setContactContent)());\n\n    nav.appendChild(homepageBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    document.body.appendChild(nav);\n}\n\nsetNav();\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.setHomepageContent)();\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setMenuContent: () => (/* binding */ setMenuContent)\n/* harmony export */ });\nfunction setMenuContent() {\n    let previousContent = document.querySelector(\"main\");\n\n    if (previousContent != null) document.body.removeChild(previousContent);\n\n    const mainContent = document.createElement(\"main\");\n\n    const drinksHeader = document.createElement(\"h1\");\n    drinksHeader.textContent = \"Drinks\";\n    const drinksList = document.createElement(\"ul\");\n\n    const budweiser = document.createElement(\"li\");\n    budweiser.textContent = \"Budweiser\";\n\n    const asahiBreweries = document.createElement(\"li\");\n    asahiBreweries.textContent = \"Asahi\";\n\n    const guinness = document.createElement(\"li\");\n    guinness.textContent = \"Guinness\";\n\n    drinksList.appendChild(budweiser);\n    drinksList.appendChild(asahiBreweries);\n    drinksList.appendChild(guinness);\n    mainContent.appendChild(drinksHeader);\n    mainContent.appendChild(drinksList);\n\n    const foodsHeader = document.createElement(\"h1\");\n    foodsHeader.textContent = \"Foods\";\n    const foodsList = document.createElement(\"ul\");\n\n    const bbq = document.createElement(\"li\");\n    bbq.textContent = \"barbeque\";\n\n    const burger = document.createElement(\"li\");\n    burger.textContent = \"cheese burger\";\n\n    const pizza = document.createElement(\"li\");\n    pizza.textContent = \"pizza with some pineapple\";\n\n    foodsList.appendChild(bbq);\n    foodsList.appendChild(burger);\n    foodsList.appendChild(pizza);\n    mainContent.appendChild(foodsHeader);\n    mainContent.appendChild(foodsList);\n\n    document.body.appendChild(mainContent);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"504b46a96aa2e717f8fd.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/restaurant.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;