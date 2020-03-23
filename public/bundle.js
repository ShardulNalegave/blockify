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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/Blockify.js":
/*!**************************!*\
  !*** ./dist/Blockify.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Vector_1 = __webpack_require__(/*! ./utils/Vector */ \"./dist/utils/Vector.js\");\r\nvar Blockify = (function () {\r\n    function Blockify(canvasSelector, width, height) {\r\n        this.canvas = null;\r\n        this.gl = null;\r\n        this.size = new Vector_1.Vector(300, 300);\r\n        this.size = new Vector_1.Vector(width, height);\r\n        this.getCanvas(canvasSelector);\r\n    }\r\n    Blockify.prototype.getCanvas = function (canvasSelector) {\r\n        this.canvas = document.querySelector(canvasSelector);\r\n        if (this.canvas) {\r\n            this.canvas.setAttribute(\"width\", String(this.size.x));\r\n            this.canvas.setAttribute(\"height\", String(this.size.y));\r\n            this.gl = this.canvas.getContext(\"webgl2\");\r\n        }\r\n    };\r\n    Blockify.prototype.render = function () {\r\n        if (this.gl) {\r\n            this.gl.clearColor(0, 0, 0, 1);\r\n            this.gl.clear(this.gl.COLOR_BUFFER_BIT);\r\n        }\r\n    };\r\n    return Blockify;\r\n}());\r\nexports.Blockify = Blockify;\r\n//# sourceMappingURL=Blockify.js.map\n\n//# sourceURL=webpack:///./dist/Blockify.js?");

/***/ }),

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Blockify_1 = __webpack_require__(/*! ./Blockify */ \"./dist/Blockify.js\");\r\nvar blockify = new Blockify_1.Blockify(\"canvas#mainCanvas\", 600, 600);\r\nblockify.render();\r\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack:///./dist/main.js?");

/***/ }),

/***/ "./dist/utils/Vector.js":
/*!******************************!*\
  !*** ./dist/utils/Vector.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Vector = (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Vector.prototype.add = function (vec) {\r\n        var x_ = this.x + vec.x;\r\n        var y_ = this.y + vec.y;\r\n        return new Vector(x_, y_);\r\n    };\r\n    Vector.prototype.minus = function (vec) {\r\n        var x_ = this.x - vec.x;\r\n        var y_ = this.y - vec.y;\r\n        return new Vector(x_, y_);\r\n    };\r\n    Vector.prototype.multiply = function (vec) {\r\n        var x_ = this.x * vec.x;\r\n        var y_ = this.y * vec.y;\r\n        return new Vector(x_, y_);\r\n    };\r\n    Vector.prototype.divide = function (vec) {\r\n        var x_ = this.x / vec.x;\r\n        var y_ = this.y / vec.y;\r\n        return new Vector(x_, y_);\r\n    };\r\n    Vector.prototype.magnitude = function () {\r\n        var mag = Math.sqrt((this.x) ^ 2 + (this.y) ^ 2);\r\n        return mag;\r\n    };\r\n    return Vector;\r\n}());\r\nexports.Vector = Vector;\r\n//# sourceMappingURL=Vector.js.map\n\n//# sourceURL=webpack:///./dist/utils/Vector.js?");

/***/ })

/******/ });