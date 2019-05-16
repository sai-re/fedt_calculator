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

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var x;\nvar FedtCalculator = {\n  variables: {\n    num1: document.getElementById(\"num1-js\"),\n    num2: document.getElementById(\"num2-js\"),\n    operand: document.getElementById(\"operand-js\"),\n    numberPad: document.getElementById(\"number-pad-js\"),\n    operandPad: document.getElementById(\"operand-pad-js\"),\n    answer: document.getElementById(\"answer-js\"),\n    equals: document.getElementById(\"submit-js\"),\n    reset: document.getElementById(\"ac-js\"),\n    save: document.getElementById(\"save-js\"),\n    decimal: document.getElementById(\"decimal-js\"),\n    zero: document.getElementById(\"zero-js\"),\n    allOperand: document.querySelectorAll('.pad__operand')\n  },\n  init: function init() {\n    x = this.variables;\n    this.calculator();\n    this.toCSV();\n  },\n  calculator: function calculator() {\n    //booleons to check status\n    var isSecondOperand = false;\n    var hasAnswer = false;\n    var click = 0;\n    var answer = 0; //calculation functions\n\n    var multiply = function multiply(num1, num2) {\n      return Number(num1) * Number(num2);\n    };\n\n    var subtract = function subtract(num1, num2) {\n      return Number(num1) - Number(num2);\n    };\n\n    var divide = function divide(num1, num2) {\n      return Number(num1) / Number(num2);\n    };\n\n    var add = function add(num1, num2) {\n      return Number(num1) + Number(num2);\n    }; //reset function to revert everything back to default\n\n\n    var reset = function reset() {\n      x.num1.textContent = \"\";\n      x.num2.textContent = \"\";\n      x.operand.textContent = \"\";\n      x.answer.textContent = \"\";\n      isDisabled = false;\n      isSecondOperand = false;\n      click = 0;\n    };\n\n    var handleNumberpad = function handleNumberpad(e) {\n      click++;\n      console.log(click); //if answer is already on display and btn on number pad is pressed, begin new calculation \n\n      if (hasAnswer) {\n        x.num1.textContent = \"\";\n        hasAnswer = false;\n      } // if an operand has been clicked, enter number as 2nd number else 1st\n\n\n      if (isSecondOperand) {\n        x.num2.textContent += e.target.textContent;\n      } else {\n        x.num1.textContent += e.target.textContent;\n      }\n    };\n\n    var handleOperand = function handleOperand(e) {\n      if (click > 0) {\n        //toggles operand bool to indicate 1st number cannot be altered \n        isSecondOperand = true; //resets answer to allow for new calculation\n\n        hasAnswer = false;\n        x.operand.textContent = e.target.textContent;\n      }\n    };\n\n    var handleEquals = function handleEquals() {\n      hasAnswer = true;\n      isSecondOperand = false;\n      x.decimal.disabled = false; // if statements to determine which calculation to use\n\n      if (x.operand.textContent === 'x') {\n        answer = multiply(x.num1.textContent, x.num2.textContent);\n      }\n\n      if (x.operand.textContent === '+') {\n        answer = add(x.num1.textContent, x.num2.textContent);\n      }\n\n      if (x.operand.textContent === '-') {\n        answer = subtract(x.num1.textContent, x.num2.textContent);\n      }\n\n      if (x.operand.textContent === '/') {\n        answer = divide(x.num1.textContent, x.num2.textContent);\n      } //prints final answer to display and add to 1st number for additional calculations\n\n\n      x.answer.textContent = answer.toLocaleString();\n      x.num1.textContent = answer; //clears 2nd number and operand for new calculations \n\n      x.num2.textContent = \"\";\n      x.operand.textContent = \"\";\n    }; //event listeners on buttons\n\n\n    x.numberPad.addEventListener('click', handleNumberpad);\n    x.operandPad.addEventListener('click', handleOperand);\n    x.equals.addEventListener('click', handleEquals); //runs reset functions and clears all data\n\n    x.reset.addEventListener('click', function () {\n      reset();\n    });\n  },\n  toCSV: function toCSV() {\n    var getIP = fetch('https://api.ipify.org?format=json').then(function (response) {\n      return response.json();\n    });\n    var getDate = new Date();\n    var date = \"\".concat(getDate.getDate(), \", \").concat(getDate.getMonth(), \", \").concat(getDate.getFullYear());\n    console.log(date);\n    Promise.all([getIP]).then(function (data) {\n      console.log(data[0].ip);\n    });\n  }\n};\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  FedtCalculator.init();\n}());\n\n//# sourceURL=webpack:///./app/main.js?");

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