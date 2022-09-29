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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/webview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/webview.js":
/*!******************************!*\
  !*** ./resources/webview.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Disable the context menu (eg. the right click menu) to have a more native feel
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });
// Enter Key = Click on Create Button button
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("step_4_div").click();
  }
});
document.getElementById("step_4_div").addEventListener("click", function () {
  console.log("Confirm button clicked");
  var parameters = {
    submit: "submit"
  };
  window.postMessage("nativeLog", parameters);
}); // document.getElementById("step_1_div").addEventListener("click", (event) => {
//     console.log("Load webtool clicked");
//     event.preventDefault();
//     var parameters = {
//         submit: "webtool",
//     };
//     window.postMessage("nativeLog", parameters);
// });

function interceptClickEvent(event) {
  var target = event.target.closest("a");

  if (target && target.getAttribute("target") === "_blank") {
    event.preventDefault();
    window.postMessage("externalLinkClicked", target.href);
  }

  console.log("done");
} // listen for link click events at the document level


document.addEventListener("click", interceptClickEvent);
var step_1 = document.getElementById("step_1");
var step_1_hover = document.getElementById("step_1_hover");
var step_4 = document.getElementById("step_4");
var step_4_hover = document.getElementById("step_4_hover");
step_1.addEventListener("mouseover", function () {
  hoverImg(step_1, step_1_hover);
});
step_1_hover.addEventListener("mouseout", function () {
  hoverImg(step_1_hover, step_1);
});
step_4.addEventListener("mouseover", function () {
  hoverImg(step_4, step_4_hover);
});
step_4_hover.addEventListener("mouseout", function () {
  hoverImg(step_4_hover, step_4);
});

function hoverImg(currentItem, hoverItem) {
  currentItem.setAttribute("hidden", "");
  hoverItem.removeAttribute("hidden");
}

/***/ })

/******/ });
//# sourceMappingURL=resources_webview.js.map