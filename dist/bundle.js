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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Calculate.js":
/*!**************************!*\
  !*** ./app/Calculate.js ***!
  \**************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calculator\", function() { return Calculator; });\nvar x;\nvar Calculator = {\n  variables: {\n    num1: document.getElementById(\"num1-js\"),\n    num2: document.getElementById(\"num2-js\"),\n    operand: document.getElementById(\"operand-js\"),\n    numberPad: document.getElementById(\"number-pad-js\"),\n    operandPad: document.getElementById(\"operand-pad-js\"),\n    answer: document.getElementById(\"answer-js\"),\n    equals: document.getElementById(\"submit-js\"),\n    reset: document.getElementById(\"ac-js\"),\n    decimal: document.getElementById(\"decimal-js\")\n  },\n  init: function init() {\n    x = this.variables;\n    this.calculator();\n  },\n  calculator: function calculator() {\n    //booleons to check status of clicks\n    var isSecondOperand = false;\n    var hasAnswer = false;\n    var answer = 0; //GENERAL FUNCTIONS\n    //calculation functions\n\n    var multiply = function multiply(num1, num2) {\n      return Number(num1) * Number(num2);\n    };\n\n    var subtract = function subtract(num1, num2) {\n      return Number(num1) - Number(num2);\n    };\n\n    var divide = function divide(num1, num2) {\n      return Number(num1) / Number(num2);\n    };\n\n    var add = function add(num1, num2) {\n      return Number(num1) + Number(num2);\n    }; //reset function to revert everything back to default\n\n\n    var reset = function reset() {\n      x.num1.textContent = \"\";\n      x.num2.textContent = \"\";\n      x.operand.textContent = \"\";\n      x.answer.textContent = \"\";\n      isSecondOperand = false;\n      x.decimal.disabled = false;\n      answer = 0;\n    }; //disables decimals\n\n\n    var disableDecimal = function disableDecimal(btn) {\n      if (btn.target.textContent === '.') {\n        x.decimal.disabled = true;\n      }\n    };\n\n    function formatNumber(num) {\n      return num.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n    } //HANDLER FUNCTIONS\n\n\n    var handleNumberpad = function handleNumberpad(e) {\n      //if answer is already on display and btn on number pad is pressed, begin new calculation\n      if (hasAnswer) {\n        x.num1.textContent = \"\";\n        hasAnswer = false;\n      } // if an operand has been clicked, enter number as 2nd number else 1st, also disable decimal if more than one\n\n\n      if (isSecondOperand) {\n        x.num2.textContent += e.target.textContent;\n        disableDecimal(e);\n      } else {\n        x.num1.textContent += e.target.textContent;\n        disableDecimal(e);\n      }\n    };\n\n    var handleOperand = function handleOperand(e) {\n      //prevent operand being pressed as first click\n      if (x.num1.textContent !== '') {\n        //toggles operand bool to indicate 1st number cannot be altered\n        isSecondOperand = true; //resets answer to allow for new calculation otherwise new 1st value will not remain on display\n\n        hasAnswer = false; //enable decimal for second value\n\n        x.decimal.disabled = false;\n        x.operand.textContent = e.target.textContent;\n      }\n    };\n\n    var handleEquals = function handleEquals() {\n      hasAnswer = true;\n      isSecondOperand = false;\n      x.decimal.disabled = false; // if statements to determine which calculation to use\n\n      if (x.operand.textContent === 'x') {\n        answer = multiply(x.num1.textContent, x.num2.textContent);\n      }\n\n      if (x.operand.textContent === '+') {\n        answer = add(x.num1.textContent, x.num2.textContent);\n      }\n\n      if (x.operand.textContent === '-') {\n        answer = subtract(x.num1.textContent, x.num2.textContent);\n      }\n\n      if (x.operand.textContent === '/') {\n        answer = divide(x.num1.textContent, x.num2.textContent);\n      } //prints final answer to display and add to 1st number for additional calculations\n\n\n      x.answer.textContent = formatNumber(answer.toFixed(1));\n      x.num1.textContent = formatNumber(answer.toFixed(1)); //clears 2nd number and operand for new calculations\n\n      x.num2.textContent = \"\";\n      x.operand.textContent = \"\";\n    }; //event listeners on buttons\n\n\n    x.numberPad.addEventListener('click', handleNumberpad);\n    x.operandPad.addEventListener('click', handleOperand);\n    x.equals.addEventListener('click', handleEquals);\n    x.reset.addEventListener('click', reset);\n  }\n};\n\n\n//# sourceURL=webpack:///./app/Calculate.js?");

/***/ }),

/***/ "./app/Csv.js":
/*!********************!*\
  !*** ./app/Csv.js ***!
  \********************/
/*! exports provided: Csv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Csv\", function() { return Csv; });\nvar c;\nvar Csv = {\n  variables: {\n    save: document.getElementById(\"save-js\"),\n    answer: document.getElementById(\"answer-js\")\n  },\n  init: function init() {\n    c = this.variables;\n    this.toCSV();\n  },\n  toCSV: function toCSV() {\n    //Fetch IP from third part\n    var getIP = fetch('https://api.ipify.org?format=json').then(function (response) {\n      return response.json();\n    }); //Create date string\n\n    var getDate = new Date();\n    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n    var date = \"\".concat(getDate.getDate(), \"/\").concat(months[getDate.getMonth()], \"/\").concat(getDate.getFullYear()); //get info from navigator obj  \n\n    var usrAgent = navigator.userAgent;\n    var browser = \"\"; //array to store csv values\n\n    var arr = []; //if statements to get first match of browser in user agent, (order is important for chrome and safari)\n\n    if (usrAgent.indexOf(\"Firefox\") > -1) {\n      browser = \"Mozilla Firefox\";\n    } else if (usrAgent.indexOf(\"Opera\") > -1 || usrAgent.indexOf(\"OPR\") > -1) {\n      browser = \"Opera\";\n    } else if (usrAgent.indexOf(\"Trident\") > -1) {\n      browser = \"Microsoft Internet Explorer\";\n    } else if (usrAgent.indexOf(\"Edge\") > -1) {\n      browser = \"Microsoft Edge\";\n    } else if (usrAgent.indexOf(\"Chrome\") > -1) {\n      browser = \"Google Chrome\";\n    } else if (usrAgent.indexOf(\"Safari\") > -1) {\n      browser = \"Apple Safari\";\n    } else {\n      browser = \"unknown\";\n    } //resolve promise from fetch\n\n\n    Promise.all([getIP]).then(function (data) {\n      c.save.addEventListener('click', function (e) {\n        var ip = data[0].ip;\n        var sum = Number(c.answer.textContent); //push object containing value to array\n\n        arr.push({\n          sum: sum,\n          ip: ip,\n          date: date,\n          browser: browser\n        });\n        console.log(arr);\n      });\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./app/Csv.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculate */ \"./app/Calculate.js\");\n/* harmony import */ var _Csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Csv */ \"./app/Csv.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  _Calculate__WEBPACK_IMPORTED_MODULE_0__[\"Calculator\"].init();\n  _Csv__WEBPACK_IMPORTED_MODULE_1__[\"Csv\"].init();\n}());\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/main.js */\"./app/main.js\");\n\n\n//# sourceURL=webpack:///multi_./app/main.js?");

/***/ })

/******/ });