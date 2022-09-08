var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dynamicPalette.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/blend/blend.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/blend/blend.js ***!
  \*****************************************************************************/
/*! exports provided: Blend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blend", function() { return Blend; });
/* harmony import */ var _hct_cam16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/cam16 */ "./node_modules/@material/material-color-utilities/dist/hct/cam16.js");
/* harmony import */ var _hct_hct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hct/hct */ "./node_modules/@material/material-color-utilities/dist/hct/hct.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.




// libmonet is designed to have a consistent API across platforms
// and modular components that can be moved around easily. Using a class as a
// namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Functions for blending in HCT and CAM16.
 */
class Blend {
    /**
     * Blend the design color's HCT hue towards the key color's HCT
     * hue, in a way that leaves the original color recognizable and
     * recognizably shifted towards the key color.
     *
     * @param designColor ARGB representation of an arbitrary color.
     * @param sourceColor ARGB representation of the main theme color.
     * @return The design color with a hue shifted towards the
     * system's color, a slightly warmer/cooler variant of the design
     * color's hue.
     */
    static harmonize(designColor, sourceColor) {
        const fromHct = _hct_hct__WEBPACK_IMPORTED_MODULE_1__["Hct"].fromInt(designColor);
        const toHct = _hct_hct__WEBPACK_IMPORTED_MODULE_1__["Hct"].fromInt(sourceColor);
        const differenceDegrees = _utils_math_utils__WEBPACK_IMPORTED_MODULE_3__["differenceDegrees"](fromHct.hue, toHct.hue);
        const rotationDegrees = Math.min(differenceDegrees * 0.5, 15.0);
        const outputHue = _utils_math_utils__WEBPACK_IMPORTED_MODULE_3__["sanitizeDegreesDouble"](fromHct.hue +
            rotationDegrees * _utils_math_utils__WEBPACK_IMPORTED_MODULE_3__["rotationDirection"](fromHct.hue, toHct.hue));
        return _hct_hct__WEBPACK_IMPORTED_MODULE_1__["Hct"].from(outputHue, fromHct.chroma, fromHct.tone).toInt();
    }
    /**
     * Blends hue from one color into another. The chroma and tone of
     * the original color are maintained.
     *
     * @param from ARGB representation of color
     * @param to ARGB representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, with a hue blended towards to. Chroma and tone
     * are constant.
     */
    static hctHue(from, to, amount) {
        const ucs = Blend.cam16Ucs(from, to, amount);
        const ucsCam = _hct_cam16__WEBPACK_IMPORTED_MODULE_0__["Cam16"].fromInt(ucs);
        const fromCam = _hct_cam16__WEBPACK_IMPORTED_MODULE_0__["Cam16"].fromInt(from);
        const blended = _hct_hct__WEBPACK_IMPORTED_MODULE_1__["Hct"].from(ucsCam.hue, fromCam.chroma, _utils_color_utils__WEBPACK_IMPORTED_MODULE_2__["lstarFromArgb"](from));
        return blended.toInt();
    }
    /**
     * Blend in CAM16-UCS space.
     *
     * @param from ARGB representation of color
     * @param to ARGB representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, blended towards to. Hue, chroma, and tone will
     * change.
     */
    static cam16Ucs(from, to, amount) {
        const fromCam = _hct_cam16__WEBPACK_IMPORTED_MODULE_0__["Cam16"].fromInt(from);
        const toCam = _hct_cam16__WEBPACK_IMPORTED_MODULE_0__["Cam16"].fromInt(to);
        const fromJ = fromCam.jstar;
        const fromA = fromCam.astar;
        const fromB = fromCam.bstar;
        const toJ = toCam.jstar;
        const toA = toCam.astar;
        const toB = toCam.bstar;
        const jstar = fromJ + (toJ - fromJ) * amount;
        const astar = fromA + (toA - fromA) * amount;
        const bstar = fromB + (toB - fromB) * amount;
        return _hct_cam16__WEBPACK_IMPORTED_MODULE_0__["Cam16"].fromUcs(jstar, astar, bstar).toInt();
    }
}
//# sourceMappingURL=blend.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/hct/cam16.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/hct/cam16.js ***!
  \***************************************************************************/
/*! exports provided: Cam16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cam16", function() { return Cam16; });
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/* harmony import */ var _viewing_conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewing_conditions */ "./node_modules/@material/material-color-utilities/dist/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */
class Cam16 {
    /**
     * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
     * the following combinations:
     *      -  {j or q} and {c, m, or s} and hue
     *      - jstar, astar, bstar
     * Prefer using a static method that constructs from 3 of those dimensions.
     * This constructor is intended for those methods to use to return all
     * possible dimensions.
     *
     * @param hue
     * @param chroma informally, colorfulness / color intensity. like saturation
     *     in HSL, except perceptually accurate.
     * @param j lightness
     * @param q brightness; ratio of lightness to white point's lightness
     * @param m colorfulness
     * @param s saturation; ratio of chroma to white point's chroma
     * @param jstar CAM16-UCS J coordinate
     * @param astar CAM16-UCS a coordinate
     * @param bstar CAM16-UCS b coordinate
     */
    constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
        this.hue = hue;
        this.chroma = chroma;
        this.j = j;
        this.q = q;
        this.m = m;
        this.s = s;
        this.jstar = jstar;
        this.astar = astar;
        this.bstar = bstar;
    }
    /**
     * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
     * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
     * specification, and is used to measure distances between colors.
     */
    distance(other) {
        const dJ = this.jstar - other.jstar;
        const dA = this.astar - other.astar;
        const dB = this.bstar - other.bstar;
        const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
        const dE = 1.41 * Math.pow(dEPrime, 0.63);
        return dE;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return CAM16 color, assuming the color was viewed in default viewing
     *     conditions.
     */
    static fromInt(argb) {
        return Cam16.fromIntInViewingConditions(argb, _viewing_conditions__WEBPACK_IMPORTED_MODULE_2__["ViewingConditions"].DEFAULT);
    }
    /**
     * @param argb ARGB representation of a color.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     * @return CAM16 color.
     */
    static fromIntInViewingConditions(argb, viewingConditions) {
        const red = (argb & 0x00ff0000) >> 16;
        const green = (argb & 0x0000ff00) >> 8;
        const blue = (argb & 0x000000ff);
        const redL = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["linearized"](red);
        const greenL = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["linearized"](green);
        const blueL = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["linearized"](blue);
        const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
        const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
        const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        const rAF = Math.pow((viewingConditions.fl * Math.abs(rD)) / 100.0, 0.42);
        const gAF = Math.pow((viewingConditions.fl * Math.abs(gD)) / 100.0, 0.42);
        const bAF = Math.pow((viewingConditions.fl * Math.abs(bD)) / 100.0, 0.42);
        const rA = (_utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](rD) * 400.0 * rAF) / (rAF + 27.13);
        const gA = (_utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](gD) * 400.0 * gAF) / (gAF + 27.13);
        const bA = (_utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](bD) * 400.0 * bAF) / (bAF + 27.13);
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        const b = (rA + gA - 2.0 * bA) / 9.0;
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        const atan2 = Math.atan2(b, a);
        const atanDegrees = (atan2 * 180.0) / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360.0 :
                atanDegrees;
        const hueRadians = (hue * Math.PI) / 180.0;
        const ac = p2 * viewingConditions.nbb;
        const j = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const huePrime = hue < 20.14 ? hue + 360 : hue;
        const eHue = 0.25 * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8);
        const p1 = (50000.0 / 13.0) * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const c = alpha * Math.sqrt(j / 100.0);
        const m = c * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     */
    static fromJch(j, c, h) {
        return Cam16.fromJchInViewingConditions(j, c, h, _viewing_conditions__WEBPACK_IMPORTED_MODULE_2__["ViewingConditions"].DEFAULT);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromJchInViewingConditions(j, c, h, viewingConditions) {
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const m = c * viewingConditions.fLRoot;
        const alpha = c / Math.sqrt(j / 100.0);
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const hueRadians = (h * Math.PI) / 180.0;
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     */
    static fromUcs(jstar, astar, bstar) {
        return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, _viewing_conditions__WEBPACK_IMPORTED_MODULE_2__["ViewingConditions"].DEFAULT);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
        const a = astar;
        const b = bstar;
        const m = Math.sqrt(a * a + b * b);
        const M = (Math.exp(m * 0.0228) - 1.0) / 0.0228;
        const c = M / viewingConditions.fLRoot;
        let h = Math.atan2(b, a) * (180.0 / Math.PI);
        if (h < 0.0) {
            h += 360.0;
        }
        const j = jstar / (1 - (jstar - 100) * 0.007);
        return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
    }
    /**
     *  @return ARGB representation of color, assuming the color was viewed in
     *     default viewing conditions, which are near-identical to the default
     *     viewing conditions for sRGB.
     */
    toInt() {
        return this.viewed(_viewing_conditions__WEBPACK_IMPORTED_MODULE_2__["ViewingConditions"].DEFAULT);
    }
    /**
     * @param viewingConditions Information about the environment where the color
     *     will be viewed.
     * @return ARGB representation of color
     */
    viewed(viewingConditions) {
        const alpha = this.chroma === 0.0 || this.j === 0.0 ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = (this.hue * Math.PI) / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = ac / viewingConditions.nbb;
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = (23.0 * (p2 + 0.305) * t) /
            (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
        const argb = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["argbFromXyz"](x, y, z);
        return argb;
    }
}
//# sourceMappingURL=cam16.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/hct/hct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/hct/hct.js ***!
  \*************************************************************************/
/*! exports provided: Hct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hct", function() { return Hct; });
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _cam16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam16 */ "./node_modules/@material/material-color-utilities/dist/hct/cam16.js");
/* harmony import */ var _hct_solver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hct_solver */ "./node_modules/@material/material-color-utilities/dist/hct/hct_solver.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */



/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
class Hct {
    constructor(argb) {
        this.argb = argb;
        const cam = _cam16__WEBPACK_IMPORTED_MODULE_1__["Cam16"].fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["lstarFromArgb"](argb);
        this.argb = argb;
    }
    static from(hue, chroma, tone) {
        return new Hct(_hct_solver__WEBPACK_IMPORTED_MODULE_2__["HctSolver"].solveToInt(hue, chroma, tone));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return HCT representation of a color in default viewing conditions
     */
    static fromInt(argb) {
        return new Hct(argb);
    }
    toInt() {
        return this.argb;
    }
    /**
     * A number, in degrees, representing ex. red, orange, yellow, etc.
     * Ranges from 0 <= hue < 360.
     */
    get hue() {
        return this.internalHue;
    }
    /**
     * @param newHue 0 <= newHue < 360; invalid values are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set hue(newHue) {
        this.setInternalState(_hct_solver__WEBPACK_IMPORTED_MODULE_2__["HctSolver"].solveToInt(newHue, this.internalChroma, this.internalTone));
    }
    get chroma() {
        return this.internalChroma;
    }
    /**
     * @param newChroma 0 <= newChroma < ?
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set chroma(newChroma) {
        this.setInternalState(_hct_solver__WEBPACK_IMPORTED_MODULE_2__["HctSolver"].solveToInt(this.internalHue, newChroma, this.internalTone));
    }
    /** Lightness. Ranges from 0 to 100. */
    get tone() {
        return this.internalTone;
    }
    /**
     * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set tone(newTone) {
        this.setInternalState(_hct_solver__WEBPACK_IMPORTED_MODULE_2__["HctSolver"].solveToInt(this.internalHue, this.internalChroma, newTone));
    }
    setInternalState(argb) {
        const cam = _cam16__WEBPACK_IMPORTED_MODULE_1__["Cam16"].fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["lstarFromArgb"](argb);
        this.argb = argb;
    }
}
//# sourceMappingURL=hct.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/hct/hct_solver.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/hct/hct_solver.js ***!
  \********************************************************************************/
/*! exports provided: HctSolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HctSolver", function() { return HctSolver; });
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/* harmony import */ var _cam16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam16 */ "./node_modules/@material/material-color-utilities/dist/hct/cam16.js");
/* harmony import */ var _viewing_conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewing_conditions */ "./node_modules/@material/material-color-utilities/dist/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.




// libmonet is designed to have a consistent API across platforms
// and modular components that can be moved around easily. Using a class as a
// namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * A class that solves the HCT equation.
 */
class HctSolver {
    /**
     * Sanitizes a small enough angle in radians.
     *
     * @param angle An angle in radians; must not deviate too much
     * from 0.
     * @return A coterminal angle between 0 and 2pi.
     */
    static sanitizeRadians(angle) {
        return (angle + Math.PI * 8) % (Math.PI * 2);
    }
    /**
     * Delinearizes an RGB component, returning a floating-point
     * number.
     *
     * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
     * linear R/G/B channel
     * @return 0.0 <= output <= 255.0, color channel converted to
     * regular RGB space
     */
    static trueDelinearized(rgbComponent) {
        const normalized = rgbComponent / 100.0;
        let delinearized = 0.0;
        if (normalized <= 0.0031308) {
            delinearized = normalized * 12.92;
        }
        else {
            delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
        }
        return delinearized * 255.0;
    }
    static chromaticAdaptation(component) {
        const af = Math.pow(Math.abs(component), 0.42);
        return _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](component) * 400.0 * af / (af + 27.13);
    }
    /**
     * Returns the hue of a linear RGB color in CAM16.
     *
     * @param linrgb The linear RGB coordinates of a color.
     * @return The hue of the color in CAM16, in radians.
     */
    static hueOf(linrgb) {
        const scaledDiscount = _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["matrixMultiply"](linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
        const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
        const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
        const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
        // redness-greenness
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        return Math.atan2(b, a);
    }
    static areInCyclicOrder(a, b, c) {
        const deltaAB = HctSolver.sanitizeRadians(b - a);
        const deltaAC = HctSolver.sanitizeRadians(c - a);
        return deltaAB < deltaAC;
    }
    /**
     * Solves the lerp equation.
     *
     * @param source The starting number.
     * @param mid The number in the middle.
     * @param target The ending number.
     * @return A number t such that lerp(source, target, t) = mid.
     */
    static intercept(source, mid, target) {
        return (mid - source) / (target - source);
    }
    static lerpPoint(source, t, target) {
        return [
            source[0] + (target[0] - source[0]) * t,
            source[1] + (target[1] - source[1]) * t,
            source[2] + (target[2] - source[2]) * t,
        ];
    }
    /**
     * Intersects a segment with a plane.
     *
     * @param source The coordinates of point A.
     * @param coordinate The R-, G-, or B-coordinate of the plane.
     * @param target The coordinates of point B.
     * @param axis The axis the plane is perpendicular with. (0: R, 1:
     * G, 2: B)
     * @return The intersection point of the segment AB with the plane
     * R=coordinate, G=coordinate, or B=coordinate
     */
    static setCoordinate(source, coordinate, target, axis) {
        const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
        return HctSolver.lerpPoint(source, t, target);
    }
    static isBounded(x) {
        return 0.0 <= x && x <= 100.0;
    }
    /**
     * Returns the nth possible vertex of the polygonal intersection.
     *
     * @param y The Y value of the plane.
     * @param n The zero-based index of the point. 0 <= n <= 11.
     * @return The nth possible vertex of the polygonal intersection
     * of the y plane and the RGB cube, in linear RGB coordinates, if
     * it exists. If this possible vertex lies outside of the cube,
     * [-1.0, -1.0, -1.0] is returned.
     */
    static nthVertex(y, n) {
        const kR = HctSolver.Y_FROM_LINRGB[0];
        const kG = HctSolver.Y_FROM_LINRGB[1];
        const kB = HctSolver.Y_FROM_LINRGB[2];
        const coordA = n % 4 <= 1 ? 0.0 : 100.0;
        const coordB = n % 2 === 0 ? 0.0 : 100.0;
        if (n < 4) {
            const g = coordA;
            const b = coordB;
            const r = (y - g * kG - b * kB) / kR;
            if (HctSolver.isBounded(r)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
        else if (n < 8) {
            const b = coordA;
            const r = coordB;
            const g = (y - r * kR - b * kB) / kG;
            if (HctSolver.isBounded(g)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
        else {
            const r = coordA;
            const g = coordB;
            const b = (y - r * kR - g * kG) / kB;
            if (HctSolver.isBounded(b)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
    }
    /**
     * Finds the segment containing the desired color.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return A list of two sets of linear RGB coordinates, each
     * corresponding to an endpoint of the segment containing the
     * desired color.
     */
    static bisectToSegment(y, targetHue) {
        let left = [-1.0, -1.0, -1.0];
        let right = left;
        let leftHue = 0.0;
        let rightHue = 0.0;
        let initialized = false;
        let uncut = true;
        for (let n = 0; n < 12; n++) {
            const mid = HctSolver.nthVertex(y, n);
            if (mid[0] < 0) {
                continue;
            }
            const midHue = HctSolver.hueOf(mid);
            if (!initialized) {
                left = mid;
                right = mid;
                leftHue = midHue;
                rightHue = midHue;
                initialized = true;
                continue;
            }
            if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
                uncut = false;
                if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                    right = mid;
                    rightHue = midHue;
                }
                else {
                    left = mid;
                    leftHue = midHue;
                }
            }
        }
        return [left, right];
    }
    static midpoint(a, b) {
        return [
            (a[0] + b[0]) / 2,
            (a[1] + b[1]) / 2,
            (a[2] + b[2]) / 2,
        ];
    }
    static criticalPlaneBelow(x) {
        return Math.floor(x - 0.5);
    }
    static criticalPlaneAbove(x) {
        return Math.ceil(x - 0.5);
    }
    /**
     * Finds a color with the given Y and hue on the boundary of the
     * cube.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return The desired color, in linear RGB coordinates.
     */
    static bisectToLimit(y, targetHue) {
        const segment = HctSolver.bisectToSegment(y, targetHue);
        let left = segment[0];
        let leftHue = HctSolver.hueOf(left);
        let right = segment[1];
        for (let axis = 0; axis < 3; axis++) {
            if (left[axis] !== right[axis]) {
                let lPlane = -1;
                let rPlane = 255;
                if (left[axis] < right[axis]) {
                    lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
                }
                else {
                    lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
                }
                for (let i = 0; i < 8; i++) {
                    if (Math.abs(rPlane - lPlane) <= 1) {
                        break;
                    }
                    else {
                        const mPlane = Math.floor((lPlane + rPlane) / 2.0);
                        const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
                        const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
                        const midHue = HctSolver.hueOf(mid);
                        if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                            right = mid;
                            rPlane = mPlane;
                        }
                        else {
                            left = mid;
                            leftHue = midHue;
                            lPlane = mPlane;
                        }
                    }
                }
            }
        }
        return HctSolver.midpoint(left, right);
    }
    static inverseChromaticAdaptation(adapted) {
        const adaptedAbs = Math.abs(adapted);
        const base = Math.max(0, 27.13 * adaptedAbs / (400.0 - adaptedAbs));
        return _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["signum"](adapted) * Math.pow(base, 1.0 / 0.42);
    }
    /**
     * Finds a color with the given hue, chroma, and Y.
     *
     * @param hueRadians The desired hue in radians.
     * @param chroma The desired chroma.
     * @param y The desired Y.
     * @return The desired color as a hexadecimal integer, if found; 0
     * otherwise.
     */
    static findResultByJ(hueRadians, chroma, y) {
        // Initial estimate of j.
        let j = Math.sqrt(y) * 11.0;
        // ===========================================================
        // Operations inlined from Cam16 to avoid repeated calculation
        // ===========================================================
        const viewingConditions = _viewing_conditions__WEBPACK_IMPORTED_MODULE_3__["ViewingConditions"].DEFAULT;
        const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const eHue = 0.25 * (Math.cos(hueRadians + 2.0) + 3.8);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const hSin = Math.sin(hueRadians);
        const hCos = Math.cos(hueRadians);
        for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            const jNormalized = j / 100.0;
            const alpha = chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(jNormalized);
            const t = Math.pow(alpha * tInnerCoeff, 1.0 / 0.9);
            const ac = viewingConditions.aw *
                Math.pow(jNormalized, 1.0 / viewingConditions.c / viewingConditions.z);
            const p2 = ac / viewingConditions.nbb;
            const gamma = 23.0 * (p2 + 0.305) * t /
                (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
            const a = gamma * hCos;
            const b = gamma * hSin;
            const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
            const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
            const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
            const rCScaled = HctSolver.inverseChromaticAdaptation(rA);
            const gCScaled = HctSolver.inverseChromaticAdaptation(gA);
            const bCScaled = HctSolver.inverseChromaticAdaptation(bA);
            const linrgb = _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["matrixMultiply"]([rCScaled, gCScaled, bCScaled], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
                return 0;
            }
            const kR = HctSolver.Y_FROM_LINRGB[0];
            const kG = HctSolver.Y_FROM_LINRGB[1];
            const kB = HctSolver.Y_FROM_LINRGB[2];
            const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
            if (fnj <= 0) {
                return 0;
            }
            if (iterationRound === 4 || Math.abs(fnj - y) < 0.002) {
                if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
                    return 0;
                }
                return _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["argbFromLinrgb"](linrgb);
            }
            // Iterates with Newton method,
            // Using 2 * fn(j) / j as the approximation of fn'(j)
            j = j - (fnj - y) * j / (2 * fnj);
        }
        return 0;
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return A hexadecimal representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToInt(hueDegrees, chroma, lstar) {
        if (chroma < 0.0001 || lstar < 0.0001 || lstar > 99.9999) {
            return _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["argbFromLstar"](lstar);
        }
        hueDegrees = _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["sanitizeDegreesDouble"](hueDegrees);
        const hueRadians = hueDegrees / 180 * Math.PI;
        const y = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["yFromLstar"](lstar);
        const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
        if (exactAnswer !== 0) {
            return exactAnswer;
        }
        const linrgb = HctSolver.bisectToLimit(y, hueRadians);
        return _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["argbFromLinrgb"](linrgb);
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return An CAM16 object representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToCam(hueDegrees, chroma, lstar) {
        return _cam16__WEBPACK_IMPORTED_MODULE_2__["Cam16"].fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
    }
}
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
    [
        0.001200833568784504,
        0.002389694492170889,
        0.0002795742885861124,
    ],
    [
        0.0005891086651375999,
        0.0029785502573438758,
        0.0003270666104008398,
    ],
    [
        0.00010146692491640572,
        0.0005364214359186694,
        0.0032979401770712076,
    ],
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
    [
        1373.2198709594231,
        -1100.4251190754821,
        -7.278681089101213,
    ],
    [
        -271.815969077903,
        559.6580465940733,
        -32.46047482791194,
    ],
    [
        1.9622899599665666,
        -57.173814538844006,
        308.7233197812385,
    ],
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
    0.015176349177441876, 0.045529047532325624, 0.07588174588720938,
    0.10623444424209313, 0.13658714259697685, 0.16693984095186062,
    0.19729253930674434, 0.2276452376616281, 0.2579979360165119,
    0.28835063437139563, 0.3188300904430532, 0.350925934958123,
    0.3848314933096426, 0.42057480301049466, 0.458183274052838,
    0.4976837250274023, 0.5391024159806381, 0.5824650784040898,
    0.6277969426914107, 0.6751227633498623, 0.7244668422128921,
    0.775853049866786, 0.829304845476233, 0.8848452951698498,
    0.942497089126609, 1.0022825574869039, 1.0642236851973577,
    1.1283421258858297, 1.1946592148522128, 1.2631959812511864,
    1.3339731595349034, 1.407011200216447, 1.4823302800086415,
    1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
    1.8068114625156377, 1.8938294463134073, 1.9832442801866852,
    2.075074464868551, 2.1693382909216234, 2.2660538449872063,
    2.36523901573795, 2.4669114995532007, 2.5710888059345764,
    2.6777882626779785, 2.7870270208169257, 2.898822059350997,
    3.0131901897720907, 3.1301480604002863, 3.2497121605402226,
    3.3718988244681087, 3.4967242352587946, 3.624204428461639,
    3.754355295633311, 3.887192587735158, 4.022731918402185,
    4.160988767090289, 4.301978482107941, 4.445716283538092,
    4.592217266055746, 4.741496401646282, 4.893568542229298,
    5.048448422192488, 5.20615066083972, 5.3666897647573375,
    5.5300801301023865, 5.696336044816294, 5.865471690767354,
    6.037501145825082, 6.212438385869475, 6.390297286737924,
    6.571091626112461, 6.7548350853498045, 6.941541251256611,
    7.131223617812143, 7.323895587840543, 7.5195704746346665,
    7.7182615035334345, 7.919981813454504, 8.124744458384042,
    8.332562408825165, 8.543448553206703, 8.757415699253682,
    8.974476575321063, 9.194643831691977, 9.417930041841839,
    9.644347703669503, 9.873909240696694, 10.106627003236781,
    10.342513269534024, 10.58158024687427, 10.8238400726681,
    11.069304815507364, 11.317986476196008, 11.569896988756009,
    11.825048221409341, 12.083451977536606, 12.345119996613247,
    12.610063955123938, 12.878295467455942, 13.149826086772048,
    13.42466730586372, 13.702830557985108, 13.984327217668513,
    14.269168601521828, 14.55736596900856, 14.848930523210871,
    15.143873411576273, 15.44220572664832, 15.743938506781891,
    16.04908273684337, 16.35764934889634, 16.66964922287304,
    16.985093187232053, 17.30399201960269, 17.62635644741625,
    17.95219714852476, 18.281524751807332, 18.614349837764564,
    18.95068293910138, 19.290534541298456, 19.633915083172692,
    19.98083495742689, 20.331304511189067, 20.685334046541502,
    21.042933821039977, 21.404114048223256, 21.76888489811322,
    22.137256497705877, 22.50923893145328, 22.884842241736916,
    23.264076429332462, 23.6469514538663, 24.033477234264016,
    24.42366364919083, 24.817520537484558, 25.21505769858089,
    25.61628489293138, 26.021211842414342, 26.429848230738664,
    26.842203703840827, 27.258287870275353, 27.678110301598522,
    28.10168053274597, 28.529008062403893, 28.96010235337422,
    29.39497283293396, 29.83362889318845, 30.276079891419332,
    30.722335150426627, 31.172403958865512, 31.62629557157785,
    32.08401920991837, 32.54558406207592, 33.010999283389665,
    33.4802739966603, 33.953417292456834, 34.430438229418264,
    34.911345834551085, 35.39614910352207, 35.88485700094671,
    36.37747846067349, 36.87402238606382, 37.37449765026789,
    37.87891309649659, 38.38727753828926, 38.89959975977785,
    39.41588851594697, 39.93615253289054, 40.460400508064545,
    40.98864111053629, 41.520882981230194, 42.05713473317016,
    42.597404951718396, 43.141702194811224, 43.6900349931913,
    44.24241185063697, 44.798841244188324, 45.35933162437017,
    45.92389141541209, 46.49252901546552, 47.065252796817916,
    47.64207110610409, 48.22299226451468, 48.808024568002054,
    49.3971762874833, 49.9904556690408, 50.587870934119984,
    51.189430279724725, 51.79514187861014, 52.40501387947288,
    53.0190544071392, 53.637271562750364, 54.259673423945976,
    54.88626804504493, 55.517063457223934, 56.15206766869424,
    56.79128866487574, 57.43473440856916, 58.08241284012621,
    58.734331877617365, 59.39049941699807, 60.05092333227251,
    60.715611475655585, 61.38457167773311, 62.057811747619894,
    62.7353394731159, 63.417162620860914, 64.10328893648692,
    64.79372614476921, 65.48848194977529, 66.18756403501224,
    66.89098006357258, 67.59873767827808, 68.31084450182222,
    69.02730813691093, 69.74813616640164, 70.47333615344107,
    71.20291564160104, 71.93688215501312, 72.67524319850172,
    73.41800625771542, 74.16517879925733, 74.9167682708136,
    75.67278210128072, 76.43322770089146, 77.1981124613393,
    77.96744375590167, 78.74122893956174, 79.51947534912904,
    80.30219030335869, 81.08938110306934, 81.88105503125999,
    82.67721935322541, 83.4778813166706, 84.28304815182372,
    85.09272707154808, 85.90692527145302, 86.72564993000343,
    87.54890820862819, 88.3767072518277, 89.2090541872801,
    90.04595612594655, 90.88742016217518, 91.73345337380438,
    92.58406282226491, 93.43925555268066, 94.29903859396902,
    95.16341895893969, 96.03240364439274, 96.9059996312159,
    97.78421388448044, 98.6670533535366, 99.55452497210776,
];
//# sourceMappingURL=hct_solver.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/hct/viewing_conditions.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/hct/viewing_conditions.js ***!
  \****************************************************************************************/
/*! exports provided: ViewingConditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewingConditions", function() { return ViewingConditions; });
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 *
 * This class caches intermediate values of the CAM16 conversion process that
 * depend only on viewing conditions, enabling speed ups.
 */
class ViewingConditions {
    /**
     * Parameters are intermediate values of the CAM16 conversion process. Their
     * names are shorthand for technical color science terminology, this class
     * would not benefit from documenting them individually. A brief overview
     * is available in the CAM16 specification, and a complete overview requires
     * a color science textbook, such as Fairchild's Color Appearance Models.
     */
    constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
        this.n = n;
        this.aw = aw;
        this.nbb = nbb;
        this.ncb = ncb;
        this.c = c;
        this.nc = nc;
        this.rgbD = rgbD;
        this.fl = fl;
        this.fLRoot = fLRoot;
        this.z = z;
    }
    /**
     * Create ViewingConditions from a simple, physically relevant, set of
     * parameters.
     *
     * @param whitePoint White point, measured in the XYZ color space.
     *     default = D65, or sunny day afternoon
     * @param adaptingLuminance The luminance of the adapting field. Informally,
     *     how bright it is in the room where the color is viewed. Can be
     *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
     *     or 200 lux.
     * @param backgroundLstar The lightness of the area surrounding the color.
     *     measured by L* in L*a*b*. default = 50.0
     * @param surround A general description of the lighting surrounding the
     *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
     *     dimly light room, like watching TV at home at night. 2.0 means there
     *     is no difference between the lighting on the color and around it.
     *     default = 2.0
     * @param discountingIlluminant Whether the eye accounts for the tint of the
     *     ambient lighting, such as knowing an apple is still red in green light.
     *     default = false, the eye does not perform this process on
     *       self-luminous objects like displays.
     */
    static make(whitePoint = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["whitePointD65"](), adaptingLuminance = (200.0 / Math.PI) * _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["yFromLstar"](50.0) / 100.0, backgroundLstar = 50.0, surround = 2.0, discountingIlluminant = false) {
        const xyz = whitePoint;
        const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
        const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
        const bW = xyz[0] * -0.002079 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
        const f = 0.8 + surround / 10.0;
        const c = f >= 0.9 ? _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["lerp"](0.59, 0.69, (f - 0.9) * 10.0) :
            _utils_math_utils__WEBPACK_IMPORTED_MODULE_1__["lerp"](0.525, 0.59, (f - 0.8) * 10.0);
        let d = discountingIlluminant ?
            1.0 :
            f * (1.0 - (1.0 / 3.6) * Math.exp((-adaptingLuminance - 42.0) / 92.0));
        d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d;
        const nc = f;
        const rgbD = [
            d * (100.0 / rW) + 1.0 - d,
            d * (100.0 / gW) + 1.0 - d,
            d * (100.0 / bW) + 1.0 - d,
        ];
        const k = 1.0 / (5.0 * adaptingLuminance + 1.0);
        const k4 = k * k * k * k;
        const k4F = 1.0 - k4;
        const fl = k4 * adaptingLuminance +
            0.1 * k4F * k4F * Math.cbrt(5.0 * adaptingLuminance);
        const n = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["yFromLstar"](backgroundLstar) / whitePoint[1];
        const z = 1.48 + Math.sqrt(n);
        const nbb = 0.725 / Math.pow(n, 0.2);
        const ncb = nbb;
        const rgbAFactors = [
            Math.pow((fl * rgbD[0] * rW) / 100.0, 0.42),
            Math.pow((fl * rgbD[1] * gW) / 100.0, 0.42),
            Math.pow((fl * rgbD[2] * bW) / 100.0, 0.42),
        ];
        const rgbA = [
            (400.0 * rgbAFactors[0]) / (rgbAFactors[0] + 27.13),
            (400.0 * rgbAFactors[1]) / (rgbAFactors[1] + 27.13),
            (400.0 * rgbAFactors[2]) / (rgbAFactors[2] + 27.13),
        ];
        const aw = (2.0 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
        return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
    }
}
/** sRGB-like viewing conditions.  */
ViewingConditions.DEFAULT = ViewingConditions.make();
//# sourceMappingURL=viewing_conditions.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/index.js ***!
  \***********************************************************************/
/*! exports provided: Blend, Cam16, Hct, ViewingConditions, CorePalette, TonalPalette, QuantizerCelebi, QuantizerMap, QuantizerWsmeans, QuantizerWu, Scheme, SchemeAndroid, Score, argbFromRgb, argbFromLinrgb, alphaFromArgb, redFromArgb, greenFromArgb, blueFromArgb, isOpaque, argbFromXyz, xyzFromArgb, argbFromLab, labFromArgb, argbFromLstar, lstarFromArgb, yFromLstar, linearized, delinearized, whitePointD65, signum, lerp, clampInt, clampDouble, sanitizeDegreesInt, sanitizeDegreesDouble, rotationDirection, differenceDegrees, matrixMultiply, hexFromArgb, argbFromHex, sourceColorFromImage, themeFromSourceColor, themeFromImage, customColor, applyTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blend_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blend/blend */ "./node_modules/@material/material-color-utilities/dist/blend/blend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blend", function() { return _blend_blend__WEBPACK_IMPORTED_MODULE_0__["Blend"]; });

/* harmony import */ var _hct_cam16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hct/cam16 */ "./node_modules/@material/material-color-utilities/dist/hct/cam16.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cam16", function() { return _hct_cam16__WEBPACK_IMPORTED_MODULE_1__["Cam16"]; });

/* harmony import */ var _hct_hct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hct/hct */ "./node_modules/@material/material-color-utilities/dist/hct/hct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hct", function() { return _hct_hct__WEBPACK_IMPORTED_MODULE_2__["Hct"]; });

/* harmony import */ var _hct_viewing_conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hct/viewing_conditions */ "./node_modules/@material/material-color-utilities/dist/hct/viewing_conditions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewingConditions", function() { return _hct_viewing_conditions__WEBPACK_IMPORTED_MODULE_3__["ViewingConditions"]; });

/* harmony import */ var _palettes_core_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palettes/core_palette */ "./node_modules/@material/material-color-utilities/dist/palettes/core_palette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorePalette", function() { return _palettes_core_palette__WEBPACK_IMPORTED_MODULE_4__["CorePalette"]; });

/* harmony import */ var _palettes_tonal_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palettes/tonal_palette */ "./node_modules/@material/material-color-utilities/dist/palettes/tonal_palette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TonalPalette", function() { return _palettes_tonal_palette__WEBPACK_IMPORTED_MODULE_5__["TonalPalette"]; });

/* harmony import */ var _quantize_quantizer_celebi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quantize/quantizer_celebi */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_celebi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuantizerCelebi", function() { return _quantize_quantizer_celebi__WEBPACK_IMPORTED_MODULE_6__["QuantizerCelebi"]; });

/* harmony import */ var _quantize_quantizer_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantize/quantizer_map */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuantizerMap", function() { return _quantize_quantizer_map__WEBPACK_IMPORTED_MODULE_7__["QuantizerMap"]; });

/* harmony import */ var _quantize_quantizer_wsmeans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantize/quantizer_wsmeans */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wsmeans.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuantizerWsmeans", function() { return _quantize_quantizer_wsmeans__WEBPACK_IMPORTED_MODULE_8__["QuantizerWsmeans"]; });

/* harmony import */ var _quantize_quantizer_wu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quantize/quantizer_wu */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuantizerWu", function() { return _quantize_quantizer_wu__WEBPACK_IMPORTED_MODULE_9__["QuantizerWu"]; });

/* harmony import */ var _scheme_scheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scheme/scheme */ "./node_modules/@material/material-color-utilities/dist/scheme/scheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheme", function() { return _scheme_scheme__WEBPACK_IMPORTED_MODULE_10__["Scheme"]; });

/* harmony import */ var _scheme_scheme_android__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheme/scheme_android */ "./node_modules/@material/material-color-utilities/dist/scheme/scheme_android.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemeAndroid", function() { return _scheme_scheme_android__WEBPACK_IMPORTED_MODULE_11__["SchemeAndroid"]; });

/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./score/score */ "./node_modules/@material/material-color-utilities/dist/score/score.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return _score_score__WEBPACK_IMPORTED_MODULE_12__["Score"]; });

/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromRgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["argbFromRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromLinrgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["argbFromLinrgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alphaFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["alphaFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["redFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greenFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["greenFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blueFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["blueFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOpaque", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["isOpaque"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromXyz", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["argbFromXyz"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xyzFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["xyzFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromLab", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["argbFromLab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["labFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromLstar", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["argbFromLstar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lstarFromArgb", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["lstarFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yFromLstar", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["yFromLstar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linearized", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["linearized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delinearized", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["delinearized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whitePointD65", function() { return _utils_color_utils__WEBPACK_IMPORTED_MODULE_13__["whitePointD65"]; });

/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signum", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["signum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["lerp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clampInt", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["clampInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clampDouble", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["clampDouble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitizeDegreesInt", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["sanitizeDegreesInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitizeDegreesDouble", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["sanitizeDegreesDouble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotationDirection", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["rotationDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differenceDegrees", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["differenceDegrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrixMultiply", function() { return _utils_math_utils__WEBPACK_IMPORTED_MODULE_14__["matrixMultiply"]; });

/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/string_utils */ "./node_modules/@material/material-color-utilities/dist/utils/string_utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexFromArgb", function() { return _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__["hexFromArgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argbFromHex", function() { return _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__["argbFromHex"]; });

/* harmony import */ var _utils_image_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/image_utils */ "./node_modules/@material/material-color-utilities/dist/utils/image_utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sourceColorFromImage", function() { return _utils_image_utils__WEBPACK_IMPORTED_MODULE_16__["sourceColorFromImage"]; });

/* harmony import */ var _utils_theme_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/theme_utils */ "./node_modules/@material/material-color-utilities/dist/utils/theme_utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themeFromSourceColor", function() { return _utils_theme_utils__WEBPACK_IMPORTED_MODULE_17__["themeFromSourceColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themeFromImage", function() { return _utils_theme_utils__WEBPACK_IMPORTED_MODULE_17__["themeFromImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customColor", function() { return _utils_theme_utils__WEBPACK_IMPORTED_MODULE_17__["customColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyTheme", function() { return _utils_theme_utils__WEBPACK_IMPORTED_MODULE_17__["applyTheme"]; });

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/palettes/core_palette.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/palettes/core_palette.js ***!
  \***************************************************************************************/
/*! exports provided: CorePalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorePalette", function() { return CorePalette; });
/* harmony import */ var _hct_hct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct */ "./node_modules/@material/material-color-utilities/dist/hct/hct.js");
/* harmony import */ var _tonal_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tonal_palette */ "./node_modules/@material/material-color-utilities/dist/palettes/tonal_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */
class CorePalette {
    constructor(argb, isContent) {
        const hct = _hct_hct__WEBPACK_IMPORTED_MODULE_0__["Hct"].fromInt(argb);
        const hue = hct.hue;
        const chroma = hct.chroma;
        if (isContent) {
            this.a1 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, chroma);
            this.a2 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, chroma / 3);
            this.a3 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue + 60, chroma / 2);
            this.n1 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, Math.min(chroma / 12, 4));
            this.n2 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, Math.min(chroma / 6, 8));
        }
        else {
            this.a1 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, Math.max(48, chroma));
            this.a2 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, 16);
            this.a3 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue + 60, 24);
            this.n1 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, 4);
            this.n2 = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(hue, 8);
        }
        this.error = _tonal_palette__WEBPACK_IMPORTED_MODULE_1__["TonalPalette"].fromHueAndChroma(25, 84);
    }
    /**
     * @param argb ARGB representation of a color
     */
    static of(argb) {
        return new CorePalette(argb, false);
    }
    /**
     * @param argb ARGB representation of a color
     */
    static contentOf(argb) {
        return new CorePalette(argb, true);
    }
}
//# sourceMappingURL=core_palette.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/palettes/tonal_palette.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/palettes/tonal_palette.js ***!
  \****************************************************************************************/
/*! exports provided: TonalPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TonalPalette", function() { return TonalPalette; });
/* harmony import */ var _hct_hct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct */ "./node_modules/@material/material-color-utilities/dist/hct/hct.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  A convenience class for retrieving colors that are constant in hue and
 *  chroma, but vary in tone.
 */
class TonalPalette {
    constructor(hue, chroma) {
        this.hue = hue;
        this.chroma = chroma;
        this.cache = new Map();
    }
    /**
     * @param argb ARGB representation of a color
     * @return Tones matching that color's hue and chroma.
     */
    static fromInt(argb) {
        const hct = _hct_hct__WEBPACK_IMPORTED_MODULE_0__["Hct"].fromInt(argb);
        return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
    }
    /**
     * @param hue HCT hue
     * @param chroma HCT chroma
     * @return Tones matching hue and chroma.
     */
    static fromHueAndChroma(hue, chroma) {
        return new TonalPalette(hue, chroma);
    }
    /**
     * @param tone HCT tone, measured from 0 to 100.
     * @return ARGB representation of a color with that tone.
     */
    tone(tone) {
        let argb = this.cache.get(tone);
        if (argb === undefined) {
            argb = _hct_hct__WEBPACK_IMPORTED_MODULE_0__["Hct"].from(this.hue, this.chroma, tone).toInt();
            this.cache.set(tone, argb);
        }
        return argb;
    }
}
//# sourceMappingURL=tonal_palette.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/quantize/lab_point_provider.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/quantize/lab_point_provider.js ***!
  \*********************************************************************************************/
/*! exports provided: LabPointProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabPointProvider", function() { return LabPointProvider; });
/* harmony import */ var _point_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point_provider */ "./node_modules/@material/material-color-utilities/dist/quantize/point_provider.js");
/* harmony import */ var _point_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_point_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Provides conversions needed for K-Means quantization. Converting input to
 * points, and converting the final state of the K-Means algorithm to colors.
 */
class LabPointProvider {
    /**
     * Convert a color represented in ARGB to a 3-element array of L*a*b*
     * coordinates of the color.
     */
    fromInt(argb) {
        return _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__["labFromArgb"](argb);
    }
    /**
     * Convert a 3-element array to a color represented in ARGB.
     */
    toInt(point) {
        return _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__["argbFromLab"](point[0], point[1], point[2]);
    }
    /**
     * Standard CIE 1976 delta E formula also takes the square root, unneeded
     * here. This method is used by quantization algorithms to compare distance,
     * and the relative ordering is the same, with or without a square root.
     *
     * This relatively minor optimization is helpful because this method is
     * called at least once for each pixel in an image.
     */
    distance(from, to) {
        const dL = from[0] - to[0];
        const dA = from[1] - to[1];
        const dB = from[2] - to[2];
        return dL * dL + dA * dA + dB * dB;
    }
}
//# sourceMappingURL=lab_point_provider.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/quantize/point_provider.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/quantize/point_provider.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=point_provider.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_celebi.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/quantize/quantizer_celebi.js ***!
  \*******************************************************************************************/
/*! exports provided: QuantizerCelebi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantizerCelebi", function() { return QuantizerCelebi; });
/* harmony import */ var _quantizer_wsmeans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantizer_wsmeans */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wsmeans.js");
/* harmony import */ var _quantizer_wu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantizer_wu */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wu.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An image quantizer that improves on the quality of a standard K-Means
 * algorithm by setting the K-Means initial state to the output of a Wu
 * quantizer, instead of random centroids. Improves on speed by several
 * optimizations, as implemented in Wsmeans, or Weighted Square Means, K-Means
 * with those optimizations.
 *
 * This algorithm was designed by M. Emre Celebi, and was found in their 2011
 * paper, Improving the Performance of K-Means for Color Quantization.
 * https://arxiv.org/abs/1101.0395
 */
// libmonet is designed to have a consistent API across platforms
// and modular components that can be moved around easily. Using a class as a
// namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerCelebi {
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Map with keys of colors in ARGB format, and values of number of
     *     pixels in the original image that correspond to the color in the
     *     quantized image.
     */
    static quantize(pixels, maxColors) {
        const wu = new _quantizer_wu__WEBPACK_IMPORTED_MODULE_1__["QuantizerWu"]();
        const wuResult = wu.quantize(pixels, maxColors);
        return _quantizer_wsmeans__WEBPACK_IMPORTED_MODULE_0__["QuantizerWsmeans"].quantize(pixels, wuResult, maxColors);
    }
}
//# sourceMappingURL=quantizer_celebi.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_map.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/quantize/quantizer_map.js ***!
  \****************************************************************************************/
/*! exports provided: QuantizerMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantizerMap", function() { return QuantizerMap; });
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Quantizes an image into a map, with keys of ARGB colors, and values of the
 * number of times that color appears in the image.
 */
// libmonet is designed to have a consistent API across platforms
// and modular components that can be moved around easily. Using a class as a
// namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerMap {
    /**
     * @param pixels Colors in ARGB format.
     * @return A Map with keys of ARGB colors, and values of the number of times
     *     the color appears in the image.
     */
    static quantize(pixels) {
        var _a;
        const countByColor = new Map();
        for (let i = 0; i < pixels.length; i++) {
            const pixel = pixels[i];
            const alpha = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["alphaFromArgb"](pixel);
            if (alpha < 255) {
                continue;
            }
            countByColor.set(pixel, ((_a = countByColor.get(pixel)) !== null && _a !== void 0 ? _a : 0) + 1);
        }
        return countByColor;
    }
}
//# sourceMappingURL=quantizer_map.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wsmeans.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wsmeans.js ***!
  \********************************************************************************************/
/*! exports provided: QuantizerWsmeans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantizerWsmeans", function() { return QuantizerWsmeans; });
/* harmony import */ var _lab_point_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lab_point_provider */ "./node_modules/@material/material-color-utilities/dist/quantize/lab_point_provider.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MAX_ITERATIONS = 10;
const MIN_MOVEMENT_DISTANCE = 3.0;
/**
 * An image quantizer that improves on the speed of a standard K-Means algorithm
 * by implementing several optimizations, including deduping identical pixels
 * and a triangle inequality rule that reduces the number of comparisons needed
 * to identify which cluster a point should be moved to.
 *
 * Wsmeans stands for Weighted Square Means.
 *
 * This algorithm was designed by M. Emre Celebi, and was found in their 2011
 * paper, Improving the Performance of K-Means for Color Quantization.
 * https://arxiv.org/abs/1101.0395
 */
// libmonet is designed to have a consistent API across platforms
// and modular components that can be moved around easily. Using a class as a
// namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerWsmeans {
    /**
     * @param inputPixels Colors in ARGB format.
     * @param startingClusters Defines the initial state of the quantizer. Passing
     *     an empty array is fine, the implementation will create its own initial
     *     state that leads to reproducible results for the same inputs.
     *     Passing an array that is the result of Wu quantization leads to higher
     *     quality results.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    static quantize(inputPixels, startingClusters, maxColors) {
        const pixelToCount = new Map();
        const points = new Array();
        const pixels = new Array();
        const pointProvider = new _lab_point_provider__WEBPACK_IMPORTED_MODULE_0__["LabPointProvider"]();
        let pointCount = 0;
        for (let i = 0; i < inputPixels.length; i++) {
            const inputPixel = inputPixels[i];
            const pixelCount = pixelToCount.get(inputPixel);
            if (pixelCount === undefined) {
                pointCount++;
                points.push(pointProvider.fromInt(inputPixel));
                pixels.push(inputPixel);
                pixelToCount.set(inputPixel, 1);
            }
            else {
                pixelToCount.set(inputPixel, pixelCount + 1);
            }
        }
        const counts = new Array();
        for (let i = 0; i < pointCount; i++) {
            const pixel = pixels[i];
            const count = pixelToCount.get(pixel);
            if (count !== undefined) {
                counts[i] = count;
            }
        }
        let clusterCount = Math.min(maxColors, pointCount);
        if (startingClusters.length > 0) {
            clusterCount = Math.min(clusterCount, startingClusters.length);
        }
        const clusters = new Array();
        for (let i = 0; i < startingClusters.length; i++) {
            clusters.push(pointProvider.fromInt(startingClusters[i]));
        }
        const additionalClustersNeeded = clusterCount - clusters.length;
        if (startingClusters.length === 0 && additionalClustersNeeded > 0) {
            for (let i = 0; i < additionalClustersNeeded; i++) {
                const l = Math.random() * 100.0;
                const a = Math.random() * (100.0 - (-100.0) + 1) + -100;
                const b = Math.random() * (100.0 - (-100.0) + 1) + -100;
                clusters.push(new Array(l, a, b));
            }
        }
        const clusterIndices = new Array();
        for (let i = 0; i < pointCount; i++) {
            clusterIndices.push(Math.floor(Math.random() * clusterCount));
        }
        const indexMatrix = new Array();
        for (let i = 0; i < clusterCount; i++) {
            indexMatrix.push(new Array());
            for (let j = 0; j < clusterCount; j++) {
                indexMatrix[i].push(0);
            }
        }
        const distanceToIndexMatrix = new Array();
        for (let i = 0; i < clusterCount; i++) {
            distanceToIndexMatrix.push(new Array());
            for (let j = 0; j < clusterCount; j++) {
                distanceToIndexMatrix[i].push(new DistanceAndIndex());
            }
        }
        const pixelCountSums = new Array();
        for (let i = 0; i < clusterCount; i++) {
            pixelCountSums.push(0);
        }
        for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
            for (let i = 0; i < clusterCount; i++) {
                for (let j = i + 1; j < clusterCount; j++) {
                    const distance = pointProvider.distance(clusters[i], clusters[j]);
                    distanceToIndexMatrix[j][i].distance = distance;
                    distanceToIndexMatrix[j][i].index = i;
                    distanceToIndexMatrix[i][j].distance = distance;
                    distanceToIndexMatrix[i][j].index = j;
                }
                distanceToIndexMatrix[i].sort();
                for (let j = 0; j < clusterCount; j++) {
                    indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
                }
            }
            let pointsMoved = 0;
            for (let i = 0; i < pointCount; i++) {
                const point = points[i];
                const previousClusterIndex = clusterIndices[i];
                const previousCluster = clusters[previousClusterIndex];
                const previousDistance = pointProvider.distance(point, previousCluster);
                let minimumDistance = previousDistance;
                let newClusterIndex = -1;
                for (let j = 0; j < clusterCount; j++) {
                    if (distanceToIndexMatrix[previousClusterIndex][j].distance >=
                        4 * previousDistance) {
                        continue;
                    }
                    const distance = pointProvider.distance(point, clusters[j]);
                    if (distance < minimumDistance) {
                        minimumDistance = distance;
                        newClusterIndex = j;
                    }
                }
                if (newClusterIndex !== -1) {
                    const distanceChange = Math.abs((Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)));
                    if (distanceChange > MIN_MOVEMENT_DISTANCE) {
                        pointsMoved++;
                        clusterIndices[i] = newClusterIndex;
                    }
                }
            }
            if (pointsMoved === 0 && iteration !== 0) {
                break;
            }
            const componentASums = new Array(clusterCount).fill(0);
            const componentBSums = new Array(clusterCount).fill(0);
            const componentCSums = new Array(clusterCount).fill(0);
            for (let i = 0; i < clusterCount; i++) {
                pixelCountSums[i] = 0;
            }
            for (let i = 0; i < pointCount; i++) {
                const clusterIndex = clusterIndices[i];
                const point = points[i];
                const count = counts[i];
                pixelCountSums[clusterIndex] += count;
                componentASums[clusterIndex] += (point[0] * count);
                componentBSums[clusterIndex] += (point[1] * count);
                componentCSums[clusterIndex] += (point[2] * count);
            }
            for (let i = 0; i < clusterCount; i++) {
                const count = pixelCountSums[i];
                if (count === 0) {
                    clusters[i] = [0.0, 0.0, 0.0];
                    continue;
                }
                const a = componentASums[i] / count;
                const b = componentBSums[i] / count;
                const c = componentCSums[i] / count;
                clusters[i] = [a, b, c];
            }
        }
        const argbToPopulation = new Map();
        for (let i = 0; i < clusterCount; i++) {
            const count = pixelCountSums[i];
            if (count === 0) {
                continue;
            }
            const possibleNewCluster = pointProvider.toInt(clusters[i]);
            if (argbToPopulation.has(possibleNewCluster)) {
                continue;
            }
            argbToPopulation.set(possibleNewCluster, count);
        }
        return argbToPopulation;
    }
}
/**
 *  A wrapper for maintaining a table of distances between K-Means clusters.
 */
class DistanceAndIndex {
    constructor() {
        this.distance = -1;
        this.index = -1;
    }
}
//# sourceMappingURL=quantizer_wsmeans.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wu.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/quantize/quantizer_wu.js ***!
  \***************************************************************************************/
/*! exports provided: QuantizerWu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantizerWu", function() { return QuantizerWu; });
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _quantizer_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantizer_map */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_map.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const INDEX_BITS = 5;
const SIDE_LENGTH = 33; // ((1 << INDEX_INDEX_BITS) + 1)
const TOTAL_SIZE = 35937; // SIDE_LENGTH * SIDE_LENGTH * SIDE_LENGTH
const directions = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
};
/**
 * An image quantizer that divides the image's pixels into clusters by
 * recursively cutting an RGB cube, based on the weight of pixels in each area
 * of the cube.
 *
 * The algorithm was described by Xiaolin Wu in Graphic Gems II, published in
 * 1991.
 */
class QuantizerWu {
    constructor(weights = [], momentsR = [], momentsG = [], momentsB = [], moments = [], cubes = []) {
        this.weights = weights;
        this.momentsR = momentsR;
        this.momentsG = momentsG;
        this.momentsB = momentsB;
        this.moments = moments;
        this.cubes = cubes;
    }
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    quantize(pixels, maxColors) {
        this.constructHistogram(pixels);
        this.computeMoments();
        const createBoxesResult = this.createBoxes(maxColors);
        const results = this.createResult(createBoxesResult.resultCount);
        return results;
    }
    constructHistogram(pixels) {
        var _a;
        this.weights = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsR = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsG = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsB = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.moments = Array.from({ length: TOTAL_SIZE }).fill(0);
        const countByColor = _quantizer_map__WEBPACK_IMPORTED_MODULE_1__["QuantizerMap"].quantize(pixels);
        for (const [pixel, count] of countByColor.entries()) {
            const red = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["redFromArgb"](pixel);
            const green = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["greenFromArgb"](pixel);
            const blue = _utils_color_utils__WEBPACK_IMPORTED_MODULE_0__["blueFromArgb"](pixel);
            const bitsToRemove = 8 - INDEX_BITS;
            const iR = (red >> bitsToRemove) + 1;
            const iG = (green >> bitsToRemove) + 1;
            const iB = (blue >> bitsToRemove) + 1;
            const index = this.getIndex(iR, iG, iB);
            this.weights[index] = ((_a = this.weights[index]) !== null && _a !== void 0 ? _a : 0) + count;
            this.momentsR[index] += count * red;
            this.momentsG[index] += count * green;
            this.momentsB[index] += count * blue;
            this.moments[index] += count * (red * red + green * green + blue * blue);
        }
    }
    computeMoments() {
        for (let r = 1; r < SIDE_LENGTH; r++) {
            const area = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaR = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaG = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaB = Array.from({ length: SIDE_LENGTH }).fill(0);
            const area2 = Array.from({ length: SIDE_LENGTH }).fill(0.0);
            for (let g = 1; g < SIDE_LENGTH; g++) {
                let line = 0;
                let lineR = 0;
                let lineG = 0;
                let lineB = 0;
                let line2 = 0.0;
                for (let b = 1; b < SIDE_LENGTH; b++) {
                    const index = this.getIndex(r, g, b);
                    line += this.weights[index];
                    lineR += this.momentsR[index];
                    lineG += this.momentsG[index];
                    lineB += this.momentsB[index];
                    line2 += this.moments[index];
                    area[b] += line;
                    areaR[b] += lineR;
                    areaG[b] += lineG;
                    areaB[b] += lineB;
                    area2[b] += line2;
                    const previousIndex = this.getIndex(r - 1, g, b);
                    this.weights[index] = this.weights[previousIndex] + area[b];
                    this.momentsR[index] = this.momentsR[previousIndex] + areaR[b];
                    this.momentsG[index] = this.momentsG[previousIndex] + areaG[b];
                    this.momentsB[index] = this.momentsB[previousIndex] + areaB[b];
                    this.moments[index] = this.moments[previousIndex] + area2[b];
                }
            }
        }
    }
    createBoxes(maxColors) {
        this.cubes =
            Array.from({ length: maxColors }).fill(0).map(() => new Box());
        const volumeVariance = Array.from({ length: maxColors }).fill(0.0);
        this.cubes[0].r0 = 0;
        this.cubes[0].g0 = 0;
        this.cubes[0].b0 = 0;
        this.cubes[0].r1 = SIDE_LENGTH - 1;
        this.cubes[0].g1 = SIDE_LENGTH - 1;
        this.cubes[0].b1 = SIDE_LENGTH - 1;
        let generatedColorCount = maxColors;
        let next = 0;
        for (let i = 1; i < maxColors; i++) {
            if (this.cut(this.cubes[next], this.cubes[i])) {
                volumeVariance[next] =
                    this.cubes[next].vol > 1 ? this.variance(this.cubes[next]) : 0.0;
                volumeVariance[i] =
                    this.cubes[i].vol > 1 ? this.variance(this.cubes[i]) : 0.0;
            }
            else {
                volumeVariance[next] = 0.0;
                i--;
            }
            next = 0;
            let temp = volumeVariance[0];
            for (let j = 1; j <= i; j++) {
                if (volumeVariance[j] > temp) {
                    temp = volumeVariance[j];
                    next = j;
                }
            }
            if (temp <= 0.0) {
                generatedColorCount = i + 1;
                break;
            }
        }
        return new CreateBoxesResult(maxColors, generatedColorCount);
    }
    createResult(colorCount) {
        const colors = [];
        for (let i = 0; i < colorCount; ++i) {
            const cube = this.cubes[i];
            const weight = this.volume(cube, this.weights);
            if (weight > 0) {
                const r = Math.round(this.volume(cube, this.momentsR) / weight);
                const g = Math.round(this.volume(cube, this.momentsG) / weight);
                const b = Math.round(this.volume(cube, this.momentsB) / weight);
                const color = (255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) |
                    (b & 0x0ff);
                colors.push(color);
            }
        }
        return colors;
    }
    variance(cube) {
        const dr = this.volume(cube, this.momentsR);
        const dg = this.volume(cube, this.momentsG);
        const db = this.volume(cube, this.momentsB);
        const xx = this.moments[this.getIndex(cube.r1, cube.g1, cube.b1)] -
            this.moments[this.getIndex(cube.r1, cube.g1, cube.b0)] -
            this.moments[this.getIndex(cube.r1, cube.g0, cube.b1)] +
            this.moments[this.getIndex(cube.r1, cube.g0, cube.b0)] -
            this.moments[this.getIndex(cube.r0, cube.g1, cube.b1)] +
            this.moments[this.getIndex(cube.r0, cube.g1, cube.b0)] +
            this.moments[this.getIndex(cube.r0, cube.g0, cube.b1)] -
            this.moments[this.getIndex(cube.r0, cube.g0, cube.b0)];
        const hypotenuse = dr * dr + dg * dg + db * db;
        const volume = this.volume(cube, this.weights);
        return xx - hypotenuse / volume;
    }
    cut(one, two) {
        const wholeR = this.volume(one, this.momentsR);
        const wholeG = this.volume(one, this.momentsG);
        const wholeB = this.volume(one, this.momentsB);
        const wholeW = this.volume(one, this.weights);
        const maxRResult = this.maximize(one, directions.RED, one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW);
        const maxGResult = this.maximize(one, directions.GREEN, one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW);
        const maxBResult = this.maximize(one, directions.BLUE, one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
        let direction;
        const maxR = maxRResult.maximum;
        const maxG = maxGResult.maximum;
        const maxB = maxBResult.maximum;
        if (maxR >= maxG && maxR >= maxB) {
            if (maxRResult.cutLocation < 0) {
                return false;
            }
            direction = directions.RED;
        }
        else if (maxG >= maxR && maxG >= maxB) {
            direction = directions.GREEN;
        }
        else {
            direction = directions.BLUE;
        }
        two.r1 = one.r1;
        two.g1 = one.g1;
        two.b1 = one.b1;
        switch (direction) {
            case directions.RED:
                one.r1 = maxRResult.cutLocation;
                two.r0 = one.r1;
                two.g0 = one.g0;
                two.b0 = one.b0;
                break;
            case directions.GREEN:
                one.g1 = maxGResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g1;
                two.b0 = one.b0;
                break;
            case directions.BLUE:
                one.b1 = maxBResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g0;
                two.b0 = one.b1;
                break;
            default:
                throw new Error('unexpected direction ' + direction);
        }
        one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
        two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
        return true;
    }
    maximize(cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
        const bottomR = this.bottom(cube, direction, this.momentsR);
        const bottomG = this.bottom(cube, direction, this.momentsG);
        const bottomB = this.bottom(cube, direction, this.momentsB);
        const bottomW = this.bottom(cube, direction, this.weights);
        let max = 0.0;
        let cut = -1;
        let halfR = 0;
        let halfG = 0;
        let halfB = 0;
        let halfW = 0;
        for (let i = first; i < last; i++) {
            halfR = bottomR + this.top(cube, direction, i, this.momentsR);
            halfG = bottomG + this.top(cube, direction, i, this.momentsG);
            halfB = bottomB + this.top(cube, direction, i, this.momentsB);
            halfW = bottomW + this.top(cube, direction, i, this.weights);
            if (halfW === 0) {
                continue;
            }
            let tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1.0;
            let tempDenominator = halfW * 1.0;
            let temp = tempNumerator / tempDenominator;
            halfR = wholeR - halfR;
            halfG = wholeG - halfG;
            halfB = wholeB - halfB;
            halfW = wholeW - halfW;
            if (halfW === 0) {
                continue;
            }
            tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1.0;
            tempDenominator = halfW * 1.0;
            temp += tempNumerator / tempDenominator;
            if (temp > max) {
                max = temp;
                cut = i;
            }
        }
        return new MaximizeResult(cut, max);
    }
    volume(cube, moment) {
        return (moment[this.getIndex(cube.r1, cube.g1, cube.b1)] -
            moment[this.getIndex(cube.r1, cube.g1, cube.b0)] -
            moment[this.getIndex(cube.r1, cube.g0, cube.b1)] +
            moment[this.getIndex(cube.r1, cube.g0, cube.b0)] -
            moment[this.getIndex(cube.r0, cube.g1, cube.b1)] +
            moment[this.getIndex(cube.r0, cube.g1, cube.b0)] +
            moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
            moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
    }
    bottom(cube, direction, moment) {
        switch (direction) {
            case directions.RED:
                return (-moment[this.getIndex(cube.r0, cube.g1, cube.b1)] +
                    moment[this.getIndex(cube.r0, cube.g1, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            case directions.GREEN:
                return (-moment[this.getIndex(cube.r1, cube.g0, cube.b1)] +
                    moment[this.getIndex(cube.r1, cube.g0, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            case directions.BLUE:
                return (-moment[this.getIndex(cube.r1, cube.g1, cube.b0)] +
                    moment[this.getIndex(cube.r1, cube.g0, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g1, cube.b0)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            default:
                throw new Error('unexpected direction $direction');
        }
    }
    top(cube, direction, position, moment) {
        switch (direction) {
            case directions.RED:
                return (moment[this.getIndex(position, cube.g1, cube.b1)] -
                    moment[this.getIndex(position, cube.g1, cube.b0)] -
                    moment[this.getIndex(position, cube.g0, cube.b1)] +
                    moment[this.getIndex(position, cube.g0, cube.b0)]);
            case directions.GREEN:
                return (moment[this.getIndex(cube.r1, position, cube.b1)] -
                    moment[this.getIndex(cube.r1, position, cube.b0)] -
                    moment[this.getIndex(cube.r0, position, cube.b1)] +
                    moment[this.getIndex(cube.r0, position, cube.b0)]);
            case directions.BLUE:
                return (moment[this.getIndex(cube.r1, cube.g1, position)] -
                    moment[this.getIndex(cube.r1, cube.g0, position)] -
                    moment[this.getIndex(cube.r0, cube.g1, position)] +
                    moment[this.getIndex(cube.r0, cube.g0, position)]);
            default:
                throw new Error('unexpected direction $direction');
        }
    }
    getIndex(r, g, b) {
        return (r << (INDEX_BITS * 2)) + (r << (INDEX_BITS + 1)) + r +
            (g << INDEX_BITS) + g + b;
    }
}
/**
 * Keeps track of the state of each box created as the Wu  quantization
 * algorithm progresses through dividing the image's pixels as plotted in RGB.
 */
class Box {
    constructor(r0 = 0, r1 = 0, g0 = 0, g1 = 0, b0 = 0, b1 = 0, vol = 0) {
        this.r0 = r0;
        this.r1 = r1;
        this.g0 = g0;
        this.g1 = g1;
        this.b0 = b0;
        this.b1 = b1;
        this.vol = vol;
    }
}
/**
 * Represents final result of Wu algorithm.
 */
class CreateBoxesResult {
    /**
     * @param requestedCount how many colors the caller asked to be returned from
     *     quantization.
     * @param resultCount the actual number of colors achieved from quantization.
     *     May be lower than the requested count.
     */
    constructor(requestedCount, resultCount) {
        this.requestedCount = requestedCount;
        this.resultCount = resultCount;
    }
}
/**
 * Represents the result of calculating where to cut an existing box in such
 * a way to maximize variance between the two new boxes created by a cut.
 */
class MaximizeResult {
    constructor(cutLocation, maximum) {
        this.cutLocation = cutLocation;
        this.maximum = maximum;
    }
}
//# sourceMappingURL=quantizer_wu.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/scheme/scheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/scheme/scheme.js ***!
  \*******************************************************************************/
/*! exports provided: Scheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheme", function() { return Scheme; });
/* harmony import */ var _palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/core_palette */ "./node_modules/@material/material-color-utilities/dist/palettes/core_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.

/**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
class Scheme {
    constructor(props) {
        this.props = props;
    }
    get primary() {
        return this.props.primary;
    }
    get onPrimary() {
        return this.props.onPrimary;
    }
    get primaryContainer() {
        return this.props.primaryContainer;
    }
    get onPrimaryContainer() {
        return this.props.onPrimaryContainer;
    }
    get secondary() {
        return this.props.secondary;
    }
    get onSecondary() {
        return this.props.onSecondary;
    }
    get secondaryContainer() {
        return this.props.secondaryContainer;
    }
    get onSecondaryContainer() {
        return this.props.onSecondaryContainer;
    }
    get tertiary() {
        return this.props.tertiary;
    }
    get onTertiary() {
        return this.props.onTertiary;
    }
    get tertiaryContainer() {
        return this.props.tertiaryContainer;
    }
    get onTertiaryContainer() {
        return this.props.onTertiaryContainer;
    }
    get error() {
        return this.props.error;
    }
    get onError() {
        return this.props.onError;
    }
    get errorContainer() {
        return this.props.errorContainer;
    }
    get onErrorContainer() {
        return this.props.onErrorContainer;
    }
    get background() {
        return this.props.background;
    }
    get onBackground() {
        return this.props.onBackground;
    }
    get surface() {
        return this.props.surface;
    }
    get onSurface() {
        return this.props.onSurface;
    }
    get surfaceVariant() {
        return this.props.surfaceVariant;
    }
    get onSurfaceVariant() {
        return this.props.onSurfaceVariant;
    }
    get outline() {
        return this.props.outline;
    }
    get outlineVariant() {
        return this.props.outlineVariant;
    }
    get shadow() {
        return this.props.shadow;
    }
    get scrim() {
        return this.props.scrim;
    }
    get inverseSurface() {
        return this.props.inverseSurface;
    }
    get inverseOnSurface() {
        return this.props.inverseOnSurface;
    }
    get inversePrimary() {
        return this.props.inversePrimary;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        return Scheme.lightFromCorePalette(_palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        return Scheme.darkFromCorePalette(_palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material content color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        return Scheme.lightFromCorePalette(_palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].contentOf(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material content color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        return Scheme.darkFromCorePalette(_palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].contentOf(argb));
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(40),
            onPrimary: core.a1.tone(100),
            primaryContainer: core.a1.tone(90),
            onPrimaryContainer: core.a1.tone(10),
            secondary: core.a2.tone(40),
            onSecondary: core.a2.tone(100),
            secondaryContainer: core.a2.tone(90),
            onSecondaryContainer: core.a2.tone(10),
            tertiary: core.a3.tone(40),
            onTertiary: core.a3.tone(100),
            tertiaryContainer: core.a3.tone(90),
            onTertiaryContainer: core.a3.tone(10),
            error: core.error.tone(40),
            onError: core.error.tone(100),
            errorContainer: core.error.tone(90),
            onErrorContainer: core.error.tone(10),
            background: core.n1.tone(99),
            onBackground: core.n1.tone(10),
            surface: core.n1.tone(99),
            onSurface: core.n1.tone(10),
            surfaceVariant: core.n2.tone(90),
            onSurfaceVariant: core.n2.tone(30),
            outline: core.n2.tone(50),
            outlineVariant: core.n2.tone(80),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(20),
            inverseOnSurface: core.n1.tone(95),
            inversePrimary: core.a1.tone(80)
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(80),
            onPrimary: core.a1.tone(20),
            primaryContainer: core.a1.tone(30),
            onPrimaryContainer: core.a1.tone(90),
            secondary: core.a2.tone(80),
            onSecondary: core.a2.tone(20),
            secondaryContainer: core.a2.tone(30),
            onSecondaryContainer: core.a2.tone(90),
            tertiary: core.a3.tone(80),
            onTertiary: core.a3.tone(20),
            tertiaryContainer: core.a3.tone(30),
            onTertiaryContainer: core.a3.tone(90),
            error: core.error.tone(80),
            onError: core.error.tone(20),
            errorContainer: core.error.tone(30),
            onErrorContainer: core.error.tone(80),
            background: core.n1.tone(10),
            onBackground: core.n1.tone(90),
            surface: core.n1.tone(10),
            onSurface: core.n1.tone(90),
            surfaceVariant: core.n2.tone(30),
            onSurfaceVariant: core.n2.tone(80),
            outline: core.n2.tone(60),
            outlineVariant: core.n2.tone(30),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(90),
            inverseOnSurface: core.n1.tone(20),
            inversePrimary: core.a1.tone(40)
        });
    }
    toJSON() {
        return Object.assign({}, this.props);
    }
}
//# sourceMappingURL=scheme.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/scheme/scheme_android.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/scheme/scheme_android.js ***!
  \***************************************************************************************/
/*! exports provided: SchemeAndroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeAndroid", function() { return SchemeAndroid; });
/* harmony import */ var _palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/core_palette */ "./node_modules/@material/material-color-utilities/dist/palettes/core_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents an Android 12 color scheme, a mapping of color roles to colors.
 */
class SchemeAndroid {
    constructor(props) {
        this.props = props;
    }
    get colorAccentPrimary() {
        return this.props.colorAccentPrimary;
    }
    get colorAccentPrimaryVariant() {
        return this.props.colorAccentPrimaryVariant;
    }
    get colorAccentSecondary() {
        return this.props.colorAccentSecondary;
    }
    get colorAccentSecondaryVariant() {
        return this.props.colorAccentSecondaryVariant;
    }
    get colorAccentTertiary() {
        return this.props.colorAccentTertiary;
    }
    get colorAccentTertiaryVariant() {
        return this.props.colorAccentTertiaryVariant;
    }
    get textColorPrimary() {
        return this.props.textColorPrimary;
    }
    get textColorSecondary() {
        return this.props.textColorSecondary;
    }
    get textColorTertiary() {
        return this.props.textColorTertiary;
    }
    get textColorPrimaryInverse() {
        return this.props.textColorPrimaryInverse;
    }
    get textColorSecondaryInverse() {
        return this.props.textColorSecondaryInverse;
    }
    get textColorTertiaryInverse() {
        return this.props.textColorTertiaryInverse;
    }
    get colorBackground() {
        return this.props.colorBackground;
    }
    get colorBackgroundFloating() {
        return this.props.colorBackgroundFloating;
    }
    get colorSurface() {
        return this.props.colorSurface;
    }
    get colorSurfaceVariant() {
        return this.props.colorSurfaceVariant;
    }
    get colorSurfaceHighlight() {
        return this.props.colorSurfaceHighlight;
    }
    get surfaceHeader() {
        return this.props.surfaceHeader;
    }
    get underSurface() {
        return this.props.underSurface;
    }
    get offState() {
        return this.props.offState;
    }
    get accentSurface() {
        return this.props.accentSurface;
    }
    get textPrimaryOnAccent() {
        return this.props.textPrimaryOnAccent;
    }
    get textSecondaryOnAccent() {
        return this.props.textSecondaryOnAccent;
    }
    get volumeBackground() {
        return this.props.volumeBackground;
    }
    get scrim() {
        return this.props.scrim;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        const core = _palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].of(argb);
        return SchemeAndroid.lightFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        const core = _palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].of(argb);
        return SchemeAndroid.darkFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Android color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        const core = _palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].contentOf(argb);
        return SchemeAndroid.lightFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Android color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        const core = _palettes_core_palette__WEBPACK_IMPORTED_MODULE_0__["CorePalette"].contentOf(argb);
        return SchemeAndroid.darkFromCorePalette(core);
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new SchemeAndroid({
            colorAccentPrimary: core.a1.tone(90),
            colorAccentPrimaryVariant: core.a1.tone(40),
            colorAccentSecondary: core.a2.tone(90),
            colorAccentSecondaryVariant: core.a2.tone(40),
            colorAccentTertiary: core.a3.tone(90),
            colorAccentTertiaryVariant: core.a3.tone(40),
            textColorPrimary: core.n1.tone(10),
            textColorSecondary: core.n2.tone(30),
            textColorTertiary: core.n2.tone(50),
            textColorPrimaryInverse: core.n1.tone(95),
            textColorSecondaryInverse: core.n1.tone(80),
            textColorTertiaryInverse: core.n1.tone(60),
            colorBackground: core.n1.tone(95),
            colorBackgroundFloating: core.n1.tone(98),
            colorSurface: core.n1.tone(98),
            colorSurfaceVariant: core.n1.tone(90),
            colorSurfaceHighlight: core.n1.tone(100),
            surfaceHeader: core.n1.tone(90),
            underSurface: core.n1.tone(0),
            offState: core.n1.tone(20),
            accentSurface: core.a2.tone(95),
            textPrimaryOnAccent: core.n1.tone(10),
            textSecondaryOnAccent: core.n2.tone(30),
            volumeBackground: core.n1.tone(25),
            scrim: core.n1.tone(80),
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new SchemeAndroid({
            colorAccentPrimary: core.a1.tone(90),
            colorAccentPrimaryVariant: core.a1.tone(70),
            colorAccentSecondary: core.a2.tone(90),
            colorAccentSecondaryVariant: core.a2.tone(70),
            colorAccentTertiary: core.a3.tone(90),
            colorAccentTertiaryVariant: core.a3.tone(70),
            textColorPrimary: core.n1.tone(95),
            textColorSecondary: core.n2.tone(80),
            textColorTertiary: core.n2.tone(60),
            textColorPrimaryInverse: core.n1.tone(10),
            textColorSecondaryInverse: core.n1.tone(30),
            textColorTertiaryInverse: core.n1.tone(50),
            colorBackground: core.n1.tone(10),
            colorBackgroundFloating: core.n1.tone(10),
            colorSurface: core.n1.tone(20),
            colorSurfaceVariant: core.n1.tone(30),
            colorSurfaceHighlight: core.n1.tone(35),
            surfaceHeader: core.n1.tone(30),
            underSurface: core.n1.tone(0),
            offState: core.n1.tone(20),
            accentSurface: core.a2.tone(95),
            textPrimaryOnAccent: core.n1.tone(10),
            textSecondaryOnAccent: core.n2.tone(30),
            volumeBackground: core.n1.tone(25),
            scrim: core.n1.tone(80),
        });
    }
    toJSON() {
        return Object.assign({}, this.props);
    }
}
//# sourceMappingURL=scheme_android.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/score/score.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/score/score.js ***!
  \*****************************************************************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony import */ var _hct_cam16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/cam16 */ "./node_modules/@material/material-color-utilities/dist/hct/cam16.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 *  Given a large set of colors, remove colors that are unsuitable for a UI
 *  theme, and rank the rest based on suitability.
 *
 *  Enables use of a high cluster count for image quantization, thus ensuring
 *  colors aren't muddied, while curating the high cluster count to a much
 *  smaller number of appropriate choices.
 */
class Score {
    constructor() { }
    /**
     * Given a map with keys of colors and values of how often the color appears,
     * rank the colors based on suitability for being used for a UI theme.
     *
     * @param colorsToPopulation map with keys of colors and values of how often
     *     the color appears, usually from a source image.
     * @return Colors sorted by suitability for a UI theme. The most suitable
     *     color is the first item, the least suitable is the last. There will
     *     always be at least one color returned. If all the input colors
     *     were not suitable for a theme, a default fallback color will be
     *     provided, Google Blue.
     */
    static score(colorsToPopulation, contentColor = false) {
        // Determine the total count of all colors.
        let populationSum = 0;
        for (const population of colorsToPopulation.values()) {
            populationSum += population;
        }
        // Turn the count of each color into a proportion by dividing by the total
        // count. Also, fill a cache of CAM16 colors representing each color, and
        // record the proportion of colors for each CAM16 hue.
        const colorsToProportion = new Map();
        const colorsToCam = new Map();
        const hueProportions = new Array(360).fill(0);
        for (const [color, population] of colorsToPopulation.entries()) {
            const proportion = population / populationSum;
            colorsToProportion.set(color, proportion);
            const cam = _hct_cam16__WEBPACK_IMPORTED_MODULE_0__["Cam16"].fromInt(color);
            colorsToCam.set(color, cam);
            const hue = Math.round(cam.hue);
            hueProportions[hue] += proportion;
        }
        // Determine the proportion of the colors around each color, by summing the
        // proportions around each color's hue.
        const colorsToExcitedProportion = new Map();
        for (const [color, cam] of colorsToCam.entries()) {
            const hue = Math.round(cam.hue);
            let excitedProportion = 0;
            for (let i = (hue - 15); i < (hue + 15); i++) {
                const neighborHue = _utils_math_utils__WEBPACK_IMPORTED_MODULE_2__["sanitizeDegreesInt"](i);
                excitedProportion += hueProportions[neighborHue];
            }
            colorsToExcitedProportion.set(color, excitedProportion);
        }
        // Score the colors by their proportion, as well as how chromatic they are.
        const colorsToScore = new Map();
        for (const [color, cam] of colorsToCam.entries()) {
            const proportion = colorsToExcitedProportion.get(color);
            const proportionScore = proportion * 100.0 * Score.WEIGHT_PROPORTION;
            const chromaWeight = cam.chroma < Score.TARGET_CHROMA ?
                Score.WEIGHT_CHROMA_BELOW :
                Score.WEIGHT_CHROMA_ABOVE;
            const chromaScore = (cam.chroma - Score.TARGET_CHROMA) * chromaWeight;
            const score = proportionScore + chromaScore;
            colorsToScore.set(color, score);
        }
        // Remove colors that are unsuitable, ex. very dark or unchromatic colors.
        // Also, remove colors that are very similar in hue.
        const filteredColors = contentColor ?
            Score.filterContent(colorsToCam) :
            Score.filter(colorsToExcitedProportion, colorsToCam);
        const dedupedColorsToScore = new Map();
        for (const color of filteredColors) {
            let duplicateHue = false;
            const hue = colorsToCam.get(color).hue;
            for (const [alreadyChosenColor,] of dedupedColorsToScore) {
                const alreadyChosenHue = colorsToCam.get(alreadyChosenColor).hue;
                if (_utils_math_utils__WEBPACK_IMPORTED_MODULE_2__["differenceDegrees"](hue, alreadyChosenHue) < 15) {
                    duplicateHue = true;
                    break;
                }
            }
            if (duplicateHue) {
                continue;
            }
            dedupedColorsToScore.set(color, colorsToScore.get(color));
        }
        // Ensure the list of colors returned is sorted such that the first in the
        // list is the most suitable, and the last is the least suitable.
        const colorsByScoreDescending = Array.from(dedupedColorsToScore.entries());
        colorsByScoreDescending.sort((first, second) => {
            return second[1] - first[1];
        });
        const answer = colorsByScoreDescending.map((entry) => {
            return entry[0];
        });
        // Ensure that at least one color is returned.
        if (answer.length === 0) {
            answer.push(0xff4285F4); // Google Blue
        }
        return answer;
    }
    static filter(colorsToExcitedProportion, colorsToCam) {
        const filtered = new Array();
        for (const [color, cam] of colorsToCam.entries()) {
            const proportion = colorsToExcitedProportion.get(color);
            if (cam.chroma >= Score.CUTOFF_CHROMA &&
                _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__["lstarFromArgb"](color) >= Score.CUTOFF_TONE &&
                proportion >= Score.CUTOFF_EXCITED_PROPORTION) {
                filtered.push(color);
            }
        }
        return filtered;
    }
    static filterContent(colorsToCam) {
        return Array.from(colorsToCam.keys());
    }
}
Score.TARGET_CHROMA = 48.0;
Score.WEIGHT_PROPORTION = 0.7;
Score.WEIGHT_CHROMA_ABOVE = 0.3;
Score.WEIGHT_CHROMA_BELOW = 0.1;
Score.CUTOFF_CHROMA = 15.0;
Score.CUTOFF_TONE = 10.0;
Score.CUTOFF_EXCITED_PROPORTION = 0.01;
//# sourceMappingURL=score.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/utils/color_utils.js ***!
  \***********************************************************************************/
/*! exports provided: argbFromRgb, argbFromLinrgb, alphaFromArgb, redFromArgb, greenFromArgb, blueFromArgb, isOpaque, argbFromXyz, xyzFromArgb, argbFromLab, labFromArgb, argbFromLstar, lstarFromArgb, yFromLstar, linearized, delinearized, whitePointD65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromRgb", function() { return argbFromRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromLinrgb", function() { return argbFromLinrgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaFromArgb", function() { return alphaFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redFromArgb", function() { return redFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenFromArgb", function() { return greenFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueFromArgb", function() { return blueFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpaque", function() { return isOpaque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromXyz", function() { return argbFromXyz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xyzFromArgb", function() { return xyzFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromLab", function() { return argbFromLab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labFromArgb", function() { return labFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromLstar", function() { return argbFromLstar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lstarFromArgb", function() { return lstarFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yFromLstar", function() { return yFromLstar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearized", function() { return linearized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delinearized", function() { return delinearized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitePointD65", function() { return whitePointD65; });
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math_utils */ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.

/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */
const SRGB_TO_XYZ = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
];
const XYZ_TO_SRGB = [
    [
        3.2413774792388685,
        -1.5376652402851851,
        -0.49885366846268053,
    ],
    [
        -0.9691452513005321,
        1.8758853451067872,
        0.04156585616912061,
    ],
    [
        0.05562093689691305,
        -0.20395524564742123,
        1.0571799111220335,
    ],
];
const WHITE_POINT_D65 = [95.047, 100.0, 108.883];
/**
 * Converts a color from RGB components to ARGB format.
 */
function argbFromRgb(red, green, blue) {
    return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>>
        0;
}
/**
 * Converts a color from linear RGB components to ARGB format.
 */
function argbFromLinrgb(linrgb) {
    const r = delinearized(linrgb[0]);
    const g = delinearized(linrgb[1]);
    const b = delinearized(linrgb[2]);
    return argbFromRgb(r, g, b);
}
/**
 * Returns the alpha component of a color in ARGB format.
 */
function alphaFromArgb(argb) {
    return argb >> 24 & 255;
}
/**
 * Returns the red component of a color in ARGB format.
 */
function redFromArgb(argb) {
    return argb >> 16 & 255;
}
/**
 * Returns the green component of a color in ARGB format.
 */
function greenFromArgb(argb) {
    return argb >> 8 & 255;
}
/**
 * Returns the blue component of a color in ARGB format.
 */
function blueFromArgb(argb) {
    return argb & 255;
}
/**
 * Returns whether a color in ARGB format is opaque.
 */
function isOpaque(argb) {
    return alphaFromArgb(argb) >= 255;
}
/**
 * Converts a color from ARGB to XYZ.
 */
function argbFromXyz(x, y, z) {
    const matrix = XYZ_TO_SRGB;
    const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
    const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
    const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
    const r = delinearized(linearR);
    const g = delinearized(linearG);
    const b = delinearized(linearB);
    return argbFromRgb(r, g, b);
}
/**
 * Converts a color from XYZ to ARGB.
 */
function xyzFromArgb(argb) {
    const r = linearized(redFromArgb(argb));
    const g = linearized(greenFromArgb(argb));
    const b = linearized(blueFromArgb(argb));
    return _math_utils__WEBPACK_IMPORTED_MODULE_0__["matrixMultiply"]([r, g, b], SRGB_TO_XYZ);
}
/**
 * Converts a color represented in Lab color space into an ARGB
 * integer.
 */
function argbFromLab(l, a, b) {
    const whitePoint = WHITE_POINT_D65;
    const fy = (l + 16.0) / 116.0;
    const fx = a / 500.0 + fy;
    const fz = fy - b / 200.0;
    const xNormalized = labInvf(fx);
    const yNormalized = labInvf(fy);
    const zNormalized = labInvf(fz);
    const x = xNormalized * whitePoint[0];
    const y = yNormalized * whitePoint[1];
    const z = zNormalized * whitePoint[2];
    return argbFromXyz(x, y, z);
}
/**
 * Converts a color from ARGB representation to L*a*b*
 * representation.
 *
 * @param argb the ARGB representation of a color
 * @return a Lab object representing the color
 */
function labFromArgb(argb) {
    const linearR = linearized(redFromArgb(argb));
    const linearG = linearized(greenFromArgb(argb));
    const linearB = linearized(blueFromArgb(argb));
    const matrix = SRGB_TO_XYZ;
    const x = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
    const y = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
    const z = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
    const whitePoint = WHITE_POINT_D65;
    const xNormalized = x / whitePoint[0];
    const yNormalized = y / whitePoint[1];
    const zNormalized = z / whitePoint[2];
    const fx = labF(xNormalized);
    const fy = labF(yNormalized);
    const fz = labF(zNormalized);
    const l = 116.0 * fy - 16;
    const a = 500.0 * (fx - fy);
    const b = 200.0 * (fy - fz);
    return [l, a, b];
}
/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
function argbFromLstar(lstar) {
    const y = yFromLstar(lstar);
    const component = delinearized(y);
    return argbFromRgb(component, component, component);
}
/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
function lstarFromArgb(argb) {
    const y = xyzFromArgb(argb)[1];
    return 116.0 * labF(y / 100.0) - 16.0;
}
/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
function yFromLstar(lstar) {
    return 100.0 * labInvf((lstar + 16.0) / 116.0);
}
/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
function linearized(rgbComponent) {
    const normalized = rgbComponent / 255.0;
    if (normalized <= 0.040449936) {
        return normalized / 12.92 * 100.0;
    }
    else {
        return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0;
    }
}
/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
function delinearized(rgbComponent) {
    const normalized = rgbComponent / 100.0;
    let delinearized = 0.0;
    if (normalized <= 0.0031308) {
        delinearized = normalized * 12.92;
    }
    else {
        delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
    }
    return _math_utils__WEBPACK_IMPORTED_MODULE_0__["clampInt"](0, 255, Math.round(delinearized * 255.0));
}
/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
function whitePointD65() {
    return WHITE_POINT_D65;
}
function labF(t) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    if (t > e) {
        return Math.pow(t, 1.0 / 3.0);
    }
    else {
        return (kappa * t + 16) / 116;
    }
}
function labInvf(ft) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    const ft3 = ft * ft * ft;
    if (ft3 > e) {
        return ft3;
    }
    else {
        return (116 * ft - 16) / kappa;
    }
}
//# sourceMappingURL=color_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/utils/image_utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/utils/image_utils.js ***!
  \***********************************************************************************/
/*! exports provided: sourceColorFromImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceColorFromImage", function() { return sourceColorFromImage; });
/* harmony import */ var _quantize_quantizer_celebi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quantize/quantizer_celebi */ "./node_modules/@material/material-color-utilities/dist/quantize/quantizer_celebi.js");
/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score/score */ "./node_modules/@material/material-color-utilities/dist/score/score.js");
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Get the source color from an image.
 *
 * @param image The image element
 * @return Source color - the color most suitable for creating a UI theme
 */
async function sourceColorFromImage(image) {
    // Convert Image data to Pixel Array
    const imageBytes = await new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
            return reject(new Error('Could not get canvas context'));
        }
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            resolve(context.getImageData(0, 0, image.width, image.height).data);
        };
    });
    // Convert Image data to Pixel Array
    const pixels = [];
    for (let i = 0; i < imageBytes.length; i += 4) {
        const r = imageBytes[i];
        const g = imageBytes[i + 1];
        const b = imageBytes[i + 2];
        const a = imageBytes[i + 3];
        if (a < 255) {
            continue;
        }
        const argb = Object(_color_utils__WEBPACK_IMPORTED_MODULE_2__["argbFromRgb"])(r, g, b);
        pixels.push(argb);
    }
    // Convert Pixels to Material Colors
    const result = _quantize_quantizer_celebi__WEBPACK_IMPORTED_MODULE_0__["QuantizerCelebi"].quantize(pixels, 128);
    const ranked = _score_score__WEBPACK_IMPORTED_MODULE_1__["Score"].score(result);
    const top = ranked[0];
    return top;
}
//# sourceMappingURL=image_utils.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/promise/index.js */ "./node_modules/@skpm/promise/index.js")))

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/utils/math_utils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/utils/math_utils.js ***!
  \**********************************************************************************/
/*! exports provided: signum, lerp, clampInt, clampDouble, sanitizeDegreesInt, sanitizeDegreesDouble, rotationDirection, differenceDegrees, matrixMultiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signum", function() { return signum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampInt", function() { return clampInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampDouble", function() { return clampDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeDegreesInt", function() { return sanitizeDegreesInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeDegreesDouble", function() { return sanitizeDegreesDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationDirection", function() { return rotationDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceDegrees", function() { return differenceDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixMultiply", function() { return matrixMultiply; });
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
/**
 * Utility methods for mathematical operations.
 */
/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
function signum(num) {
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return 1;
    }
}
/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
function lerp(start, stop, amount) {
    return (1.0 - amount) * start + amount * stop;
}
/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampInt(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampDouble(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Sanitizes a degree measure as an integer.
 *
 * @return a degree measure between 0 (inclusive) and 360
 * (exclusive).
 */
function sanitizeDegreesInt(degrees) {
    degrees = degrees % 360;
    if (degrees < 0) {
        degrees = degrees + 360;
    }
    return degrees;
}
/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
function sanitizeDegreesDouble(degrees) {
    degrees = degrees % 360.0;
    if (degrees < 0) {
        degrees = degrees + 360.0;
    }
    return degrees;
}
/**
 * Sign of direction change needed to travel from one angle to
 * another.
 *
 * For angles that are 180 degrees apart from each other, both
 * directions have the same travel distance, so either direction is
 * shortest. The value 1.0 is returned in this case.
 *
 * @param from The angle travel starts from, in degrees.
 * @param to The angle travel ends at, in degrees.
 * @return -1 if decreasing from leads to the shortest travel
 * distance, 1 if increasing from leads to the shortest travel
 * distance.
 */
function rotationDirection(from, to) {
    const increasingDifference = sanitizeDegreesDouble(to - from);
    return increasingDifference <= 180.0 ? 1.0 : -1.0;
}
/**
 * Distance of two points on a circle, represented using degrees.
 */
function differenceDegrees(a, b) {
    return 180.0 - Math.abs(Math.abs(a - b) - 180.0);
}
/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
function matrixMultiply(row, matrix) {
    const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
    const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
    const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
    return [a, b, c];
}
//# sourceMappingURL=math_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/utils/string_utils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/utils/string_utils.js ***!
  \************************************************************************************/
/*! exports provided: hexFromArgb, argbFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexFromArgb", function() { return hexFromArgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argbFromHex", function() { return argbFromHex; });
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color_utils */ "./node_modules/@material/material-color-utilities/dist/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Utility methods for hexadecimal representations of colors.
 */
/**
 * @param argb ARGB representation of a color.
 * @return Hex string representing color, ex. #ff0000 for red.
 */
const hexFromArgb = (argb) => {
    const r = _color_utils__WEBPACK_IMPORTED_MODULE_0__["redFromArgb"](argb);
    const g = _color_utils__WEBPACK_IMPORTED_MODULE_0__["greenFromArgb"](argb);
    const b = _color_utils__WEBPACK_IMPORTED_MODULE_0__["blueFromArgb"](argb);
    const outParts = [r.toString(16), g.toString(16), b.toString(16)];
    // Pad single-digit output values
    for (const [i, part] of outParts.entries()) {
        if (part.length === 1) {
            outParts[i] = '0' + part;
        }
    }
    return '#' + outParts.join('');
};
/**
 * @param hex String representing color as hex code. Accepts strings with or
 *     without leading #, and string representing the color using 3, 6, or 8
 *     hex characters.
 * @return ARGB representation of color.
 */
const argbFromHex = (hex) => {
    hex = hex.replace('#', '');
    const isThree = hex.length === 3;
    const isSix = hex.length === 6;
    const isEight = hex.length === 8;
    if (!isThree && !isSix && !isEight) {
        throw new Error('unexpected hex ' + hex);
    }
    let r = 0;
    let g = 0;
    let b = 0;
    if (isThree) {
        r = parseIntHex(hex.slice(0, 1).repeat(2));
        g = parseIntHex(hex.slice(1, 2).repeat(2));
        b = parseIntHex(hex.slice(2, 3).repeat(2));
    }
    else if (isSix) {
        r = parseIntHex(hex.slice(0, 2));
        g = parseIntHex(hex.slice(2, 4));
        b = parseIntHex(hex.slice(4, 6));
    }
    else if (isEight) {
        r = parseIntHex(hex.slice(2, 4));
        g = parseIntHex(hex.slice(4, 6));
        b = parseIntHex(hex.slice(6, 8));
    }
    return (((255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) | (b & 0x0ff)) >>>
        0);
};
function parseIntHex(value) {
    // tslint:disable-next-line:ban
    return parseInt(value, 16);
}
//# sourceMappingURL=string_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dist/utils/theme_utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dist/utils/theme_utils.js ***!
  \***********************************************************************************/
/*! exports provided: themeFromSourceColor, themeFromImage, customColor, applyTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeFromSourceColor", function() { return themeFromSourceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeFromImage", function() { return themeFromImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customColor", function() { return customColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTheme", function() { return applyTheme; });
/* harmony import */ var _blend_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blend/blend */ "./node_modules/@material/material-color-utilities/dist/blend/blend.js");
/* harmony import */ var _palettes_core_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/core_palette */ "./node_modules/@material/material-color-utilities/dist/palettes/core_palette.js");
/* harmony import */ var _scheme_scheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheme/scheme */ "./node_modules/@material/material-color-utilities/dist/scheme/scheme.js");
/* harmony import */ var _image_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_utils */ "./node_modules/@material/material-color-utilities/dist/utils/image_utils.js");
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string_utils */ "./node_modules/@material/material-color-utilities/dist/utils/string_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * Generate a theme from a source color
 *
 * @param source Source color
 * @param customColors Array of custom colors
 * @return Theme object
 */
function themeFromSourceColor(source, customColors = []) {
    const palette = _palettes_core_palette__WEBPACK_IMPORTED_MODULE_1__["CorePalette"].of(source);
    return {
        source,
        schemes: {
            light: _scheme_scheme__WEBPACK_IMPORTED_MODULE_2__["Scheme"].light(source),
            dark: _scheme_scheme__WEBPACK_IMPORTED_MODULE_2__["Scheme"].dark(source),
        },
        palettes: {
            primary: palette.a1,
            secondary: palette.a2,
            tertiary: palette.a3,
            neutral: palette.n1,
            neutralVariant: palette.n2,
            error: palette.error,
        },
        customColors: customColors.map((c) => customColor(source, c)),
    };
}
/**
 * Generate a theme from an image source
 *
 * @param image Image element
 * @param customColors Array of custom colors
 * @return Theme object
 */
async function themeFromImage(image, customColors = []) {
    const source = await Object(_image_utils__WEBPACK_IMPORTED_MODULE_3__["sourceColorFromImage"])(image);
    return themeFromSourceColor(source, customColors);
}
/**
 * Generate custom color group from source and target color
 *
 * @param source Source color
 * @param color Custom color
 * @return Custom color group
 *
 * @link https://m3.material.io/styles/color/the-color-system/color-roles
 */
function customColor(source, color) {
    let value = color.value;
    const from = value;
    const to = source;
    if (color.blend) {
        value = _blend_blend__WEBPACK_IMPORTED_MODULE_0__["Blend"].harmonize(from, to);
    }
    const palette = _palettes_core_palette__WEBPACK_IMPORTED_MODULE_1__["CorePalette"].of(value);
    const tones = palette.a1;
    return {
        color,
        value,
        light: {
            color: tones.tone(40),
            onColor: tones.tone(100),
            colorContainer: tones.tone(90),
            onColorContainer: tones.tone(10),
        },
        dark: {
            color: tones.tone(80),
            onColor: tones.tone(20),
            colorContainer: tones.tone(30),
            onColorContainer: tones.tone(90),
        },
    };
}
/**
 * Apply a theme to an element
 *
 * @param theme Theme object
 * @param options Options
 */
function applyTheme(theme, options) {
    var _a, _b;
    const target = (options === null || options === void 0 ? void 0 : options.target) || document.body;
    const isDark = (_a = options === null || options === void 0 ? void 0 : options.dark) !== null && _a !== void 0 ? _a : false;
    const scheme = isDark ? theme.schemes.dark : theme.schemes.light;
    setSchemeProperties(target, scheme);
    if (options === null || options === void 0 ? void 0 : options.brightnessSuffix) {
        setSchemeProperties(target, theme.schemes.dark, '-dark');
        setSchemeProperties(target, theme.schemes.light, '-light');
    }
    if (options === null || options === void 0 ? void 0 : options.paletteTones) {
        const tones = (_b = options === null || options === void 0 ? void 0 : options.paletteTones) !== null && _b !== void 0 ? _b : [];
        for (const [key, palette] of Object.entries(theme.palettes)) {
            const paletteKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            for (const tone of tones) {
                const token = `--md-ref-palette-${paletteKey}-${paletteKey}${tone}`;
                const color = Object(_string_utils__WEBPACK_IMPORTED_MODULE_4__["hexFromArgb"])(palette.tone(tone));
                target.style.setProperty(token, color);
            }
        }
    }
}
function setSchemeProperties(target, scheme, suffix = '') {
    for (const [key, value] of Object.entries(scheme.toJSON())) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const color = Object(_string_utils__WEBPACK_IMPORTED_MODULE_4__["hexFromArgb"])(value);
        target.style.setProperty(`--md-sys-color-${token}${suffix}`, color);
    }
}
//# sourceMappingURL=theme_utils.js.map

/***/ }),

/***/ "./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: async. Should probably be done with NSFileHandle and some notifications
// TODO: file descriptor. Needs to be done with NSFileHandle
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer;
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/fs/utils.js");
var parseStat = utils.parseStat;
var fsError = utils.fsError;
var fsErrorForPath = utils.fsErrorForPath;
var encodingFromOptions = utils.encodingFromOptions;
var NOT_IMPLEMENTED = utils.NOT_IMPLEMENTED;

module.exports.constants = {
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
};

module.exports.access = NOT_IMPLEMENTED("access");

module.exports.accessSync = function (path, mode) {
  mode = mode | 0;
  var fileManager = NSFileManager.defaultManager();

  switch (mode) {
    case 0:
      canAccess = module.exports.existsSync(path);
      break;
    case 1:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 2:
      canAccess = Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 3:
      canAccess =
        Boolean(Number(fileManager.isExecutableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 4:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path)));
      break;
    case 5:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 6:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 7:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
  }

  if (!canAccess) {
    throw new Error("Can't access " + String(path));
  }
};

module.exports.appendFile = NOT_IMPLEMENTED("appendFile");

module.exports.appendFileSync = function (file, data, options) {
  if (!module.exports.existsSync(file)) {
    return module.exports.writeFileSync(file, data, options);
  }

  var handle = NSFileHandle.fileHandleForWritingAtPath(file);
  handle.seekToEndOfFile();

  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  handle.writeData(nsdata);
};

module.exports.chmod = NOT_IMPLEMENTED("chmod");

module.exports.chmodSync = function (path, mode) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFilePosixPermissions: mode,
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.chown = NOT_IMPLEMENTED("chown");
module.exports.chownSync = NOT_IMPLEMENTED("chownSync");

module.exports.close = NOT_IMPLEMENTED("close");
module.exports.closeSync = NOT_IMPLEMENTED("closeSync");

module.exports.copyFile = NOT_IMPLEMENTED("copyFile");

module.exports.copyFileSync = function (path, dest, flags) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.copyItemAtPath_toPath_error(path, dest, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.createReadStream = NOT_IMPLEMENTED("createReadStream");
module.exports.createWriteStream = NOT_IMPLEMENTED("createWriteStream");

module.exports.exists = NOT_IMPLEMENTED("exists");

module.exports.existsSync = function (path) {
  var fileManager = NSFileManager.defaultManager();
  return Boolean(Number(fileManager.fileExistsAtPath(path)));
};

module.exports.fchmod = NOT_IMPLEMENTED("fchmod");
module.exports.fchmodSync = NOT_IMPLEMENTED("fchmodSync");
module.exports.fchown = NOT_IMPLEMENTED("fchown");
module.exports.fchownSync = NOT_IMPLEMENTED("fchownSync");
module.exports.fdatasync = NOT_IMPLEMENTED("fdatasync");
module.exports.fdatasyncSync = NOT_IMPLEMENTED("fdatasyncSync");
module.exports.fstat = NOT_IMPLEMENTED("fstat");
module.exports.fstatSync = NOT_IMPLEMENTED("fstatSync");
module.exports.fsync = NOT_IMPLEMENTED("fsync");
module.exports.fsyncSync = NOT_IMPLEMENTED("fsyncSync");
module.exports.ftruncate = NOT_IMPLEMENTED("ftruncate");
module.exports.ftruncateSync = NOT_IMPLEMENTED("ftruncateSync");
module.exports.futimes = NOT_IMPLEMENTED("futimes");
module.exports.futimesSync = NOT_IMPLEMENTED("futimesSync");

module.exports.lchmod = NOT_IMPLEMENTED("lchmod");
module.exports.lchmodSync = NOT_IMPLEMENTED("lchmodSync");
module.exports.lchown = NOT_IMPLEMENTED("lchown");
module.exports.lchownSync = NOT_IMPLEMENTED("lchownSync");

module.exports.link = NOT_IMPLEMENTED("link");

module.exports.linkSync = function (existingPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.linkItemAtPath_toPath_error(existingPath, newPath, err);

  if (err.value() !== null) {
    throw fsErrorForPath(existingPath, undefined, err.value());
  }
};

module.exports.lstat = NOT_IMPLEMENTED("lstat");

module.exports.lstatSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.attributesOfItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return parseStat(result);
};

module.exports.mkdir = NOT_IMPLEMENTED("mkdir");

module.exports.mkdirSync = function (path, options) {
  var mode = 0o777;
  var recursive = false;
  if (options && options.mode) {
    mode = options.mode;
  }
  if (options && options.recursive) {
    recursive = options.recursive;
  }
  if (typeof options === "number") {
    mode = options;
  }
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(
    path,
    recursive,
    {
      NSFilePosixPermissions: mode,
    },
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.mkdtemp = NOT_IMPLEMENTED("mkdtemp");

module.exports.mkdtempSync = function (path) {
  function makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var tempPath = path + makeid();
  module.exports.mkdirSync(tempPath);
  return tempPath;
};

module.exports.open = NOT_IMPLEMENTED("open");
module.exports.openSync = NOT_IMPLEMENTED("openSync");

module.exports.read = NOT_IMPLEMENTED("read");

module.exports.readdir = NOT_IMPLEMENTED("readdir");

module.exports.readdirSync = function (path, options) {
  var encoding = encodingFromOptions(options, "utf8");
  var fileManager = NSFileManager.defaultManager();
  var paths = fileManager.subpathsAtPath(path);
  var arr = [];
  for (var i = 0; i < paths.length; i++) {
    var pathName = paths[i];
    arr.push(encoding === "buffer" ? Buffer.from(pathName) : String(pathName));
  }
  return arr;
};

module.exports.readFile = NOT_IMPLEMENTED("readFile");

module.exports.readFileSync = function (path, options) {
  var encoding = encodingFromOptions(options, "buffer");
  var fileManager = NSFileManager.defaultManager();
  var data = fileManager.contentsAtPath(path);
  if (!data) {
    throw fsErrorForPath(path, false);
  }

  var buffer = Buffer.from(data);

  if (encoding === "buffer") {
    return buffer;
  } else if (encoding === "NSData") {
    return buffer.toNSData();
  } else {
    return buffer.toString(encoding);
  }
};

module.exports.readlink = NOT_IMPLEMENTED("readlink");

module.exports.readlinkSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.destinationOfSymbolicLinkAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return String(result);
};

module.exports.readSync = NOT_IMPLEMENTED("readSync");

module.exports.realpath = NOT_IMPLEMENTED("realpath");
module.exports.realpath.native = NOT_IMPLEMENTED("realpath.native");

module.exports.realpathSync = function (path) {
  return String(
    NSString.stringWithString(path).stringByResolvingSymlinksInPath()
  );
};

module.exports.realpathSync.native = NOT_IMPLEMENTED("realpathSync.native");

module.exports.rename = NOT_IMPLEMENTED("rename");

module.exports.renameSync = function (oldPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.moveItemAtPath_toPath_error(oldPath, newPath, err);

  var error = err.value();

  if (error !== null) {
    // if there is already a file, we need to overwrite it
    if (
      String(error.domain()) === "NSCocoaErrorDomain" &&
      Number(error.code()) === 516
    ) {
      var err2 = MOPointer.alloc().init();
      fileManager.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(
        NSURL.fileURLWithPath(newPath),
        NSURL.fileURLWithPath(oldPath),
        null,
        NSFileManagerItemReplacementUsingNewMetadataOnly,
        null,
        err2
      );
      if (err2.value() !== null) {
        throw fsErrorForPath(oldPath, undefined, err2.value());
      }
    } else {
      throw fsErrorForPath(oldPath, undefined, error);
    }
  }
};

module.exports.rmdir = NOT_IMPLEMENTED("rmdir");

module.exports.rmdirSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (!isDirectory) {
    throw fsError("ENOTDIR", {
      path: path,
      syscall: "rmdir",
    });
  }
  fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, true, err.value(), "rmdir");
  }
};

module.exports.stat = NOT_IMPLEMENTED("stat");

// the only difference with lstat is that we resolve symlinks
//
// > lstat() is identical to stat(), except that if pathname is a symbolic
// > link, then it returns information about the link itself, not the file
// > that it refers to.
// http://man7.org/linux/man-pages/man2/lstat.2.html
module.exports.statSync = function (path) {
  return module.exports.lstatSync(module.exports.realpathSync(path));
};

module.exports.symlink = NOT_IMPLEMENTED("symlink");

module.exports.symlinkSync = function (target, path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.createSymbolicLinkAtPath_withDestinationPath_error(
    path,
    target,
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.truncate = NOT_IMPLEMENTED("truncate");

module.exports.truncateSync = function (path, len) {
  var hFile = NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);
  hFile.truncateFileAtOffset(len || 0);
  hFile.closeFile();
};

module.exports.unlink = NOT_IMPLEMENTED("unlink");

module.exports.unlinkSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (isDirectory) {
    throw fsError("EPERM", {
      path: path,
      syscall: "unlink",
    });
  }
  var result = fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.unwatchFile = NOT_IMPLEMENTED("unwatchFile");

module.exports.utimes = NOT_IMPLEMENTED("utimes");

module.exports.utimesSync = function (path, aTime, mTime) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFileModificationDate: aTime,
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.watch = NOT_IMPLEMENTED("watch");
module.exports.watchFile = NOT_IMPLEMENTED("watchFile");

module.exports.write = NOT_IMPLEMENTED("write");

module.exports.writeFile = NOT_IMPLEMENTED("writeFile");

module.exports.writeFileSync = function (path, data, options) {
  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  nsdata.writeToFile_atomically(path, true);
};

module.exports.writeSync = NOT_IMPLEMENTED("writeSync");


/***/ }),

/***/ "./node_modules/@skpm/fs/utils.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.parseStat = function parseStat(result) {
  return {
    dev: String(result.NSFileDeviceIdentifier),
    // ino: 48064969, The file system specific "Inode" number for the file.
    mode: result.NSFileType | result.NSFilePosixPermissions,
    nlink: Number(result.NSFileReferenceCount),
    uid: String(result.NSFileOwnerAccountID),
    gid: String(result.NSFileGroupOwnerAccountID),
    // rdev: 0, A numeric device identifier if the file is considered "special".
    size: Number(result.NSFileSize),
    // blksize: 4096, The file system block size for i/o operations.
    // blocks: 8, The number of blocks allocated for this file.
    atimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    mtimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    ctimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    birthtimeMs:
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000,
    atime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ), // the 0.5 comes from the node source. Not sure why it's added but in doubt...
    mtime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    ctime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    birthtime: new Date(
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    isBlockDevice: function () {
      return result.NSFileType === NSFileTypeBlockSpecial;
    },
    isCharacterDevice: function () {
      return result.NSFileType === NSFileTypeCharacterSpecial;
    },
    isDirectory: function () {
      return result.NSFileType === NSFileTypeDirectory;
    },
    isFIFO: function () {
      return false;
    },
    isFile: function () {
      return result.NSFileType === NSFileTypeRegular;
    },
    isSocket: function () {
      return result.NSFileType === NSFileTypeSocket;
    },
    isSymbolicLink: function () {
      return result.NSFileType === NSFileTypeSymbolicLink;
    },
  };
};

var ERRORS = {
  EPERM: {
    message: "operation not permitted",
    errno: -1,
  },
  ENOENT: {
    message: "no such file or directory",
    errno: -2,
  },
  EACCES: {
    message: "permission denied",
    errno: -13,
  },
  ENOTDIR: {
    message: "not a directory",
    errno: -20,
  },
  EISDIR: {
    message: "illegal operation on a directory",
    errno: -21,
  },
};

function fsError(code, options) {
  var error = new Error(
    code +
      ": " +
      ERRORS[code].message +
      ", " +
      (options.syscall || "") +
      (options.path ? " '" + options.path + "'" : "")
  );

  Object.keys(options).forEach(function (k) {
    error[k] = options[k];
  });

  error.code = code;
  error.errno = ERRORS[code].errno;

  return error;
}

module.exports.fsError = fsError;

module.exports.fsErrorForPath = function fsErrorForPath(
  path,
  shouldBeDir,
  err,
  syscall
) {
  var fileManager = NSFileManager.defaultManager();
  var doesExist = fileManager.fileExistsAtPath(path);
  if (!doesExist) {
    return fsError("ENOENT", {
      path: path,
      syscall: syscall || "open",
    });
  }
  var isReadable = fileManager.isReadableFileAtPath(path);
  if (!isReadable) {
    return fsError("EACCES", {
      path: path,
      syscall: syscall || "open",
    });
  }
  if (typeof shouldBeDir !== "undefined") {
    var isDirectory = __webpack_require__(/*! ./index */ "./node_modules/@skpm/fs/index.js").lstatSync(path).isDirectory();
    if (isDirectory && !shouldBeDir) {
      return fsError("EISDIR", {
        path: path,
        syscall: syscall || "read",
      });
    } else if (!isDirectory && shouldBeDir) {
      return fsError("ENOTDIR", {
        path: path,
        syscall: syscall || "read",
      });
    }
  }
  return new Error(err || "Unknown error while manipulating " + path);
};

module.exports.encodingFromOptions = function encodingFromOptions(
  options,
  defaultValue
) {
  return options && options.encoding
    ? String(options.encoding)
    : options
    ? String(options)
    : defaultValue;
};

module.exports.NOT_IMPLEMENTED = function NOT_IMPLEMENTED(name) {
  return function () {
    throw new Error(
      "fs." +
        name +
        " is not implemented yet. If you feel like implementing it, any contribution will be gladly accepted on https://github.com/skpm/fs"
    );
  };
};


/***/ }),

/***/ "./node_modules/@skpm/promise/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@skpm/promise/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* from https://github.com/taylorhakes/promise-polyfill */

function promiseFinally(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

function noop() {}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError("Promises must be constructed via new");
  if (typeof fn !== "function") throw new TypeError("not a function");
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (
      newValue &&
      (typeof newValue === "object" || typeof newValue === "function")
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === "function") {
        doResolve(then.bind(newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value, self);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) {
          Promise._multipleResolvesFn("resolve", self, value);
          return;
        }
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) {
          Promise._multipleResolvesFn("reject", self, reason);
          return;
        }
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) {
      Promise._multipleResolvesFn("reject", self, ex);
      return;
    }
    done = true;
    reject(self, ex);
  }
}

Promise.prototype["catch"] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype["finally"] = promiseFinally;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.all accepts an array"));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === "object" || typeof val === "function")) {
          var then = val.then;
          if (typeof then === "function") {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === "object" && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.race accepts an array"));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn = setImmediate;

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err, promise) {
  if (
    typeof process !== "undefined" &&
    process.listenerCount &&
    (process.listenerCount("unhandledRejection") ||
      process.listenerCount("uncaughtException"))
  ) {
    process.emit("unhandledRejection", err, promise);
    process.emit("uncaughtException", err, "unhandledRejection");
  } else if (typeof console !== "undefined" && console) {
    console.warn("Possible Unhandled Promise Rejection:", err);
  }
};

Promise._multipleResolvesFn = function _multipleResolvesFn(
  type,
  promise,
  value
) {
  if (typeof process !== "undefined" && process.emit) {
    process.emit("multipleResolves", type, promise, value);
  }
};

module.exports = Promise;


/***/ }),

/***/ "./node_modules/color-difference/lib/compare.js":
/*!******************************************************!*\
  !*** ./node_modules/color-difference/lib/compare.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return compare; })();

var HexRgb   = __webpack_require__(/*! color-model */ "./node_modules/color-model/index.js").HexRgb,
    methods = {
        'EuclideanDistance' : __webpack_require__(/*! ./method/euclidean-distance */ "./node_modules/color-difference/lib/method/euclidean-distance.js")
      , 'CIE76Difference'   : __webpack_require__(/*! ./method/cie-76-difference */ "./node_modules/color-difference/lib/method/cie-76-difference.js")
    };

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {String} color1
 * @param {String} color2
 * @param {String} method Default method is best from currently implemented
 * @return {Number} difference
 */
function compare(color1, color2, method) {
  var methodName = method || 'CIE76Difference';

  if (undefined === methods[methodName]) {
    throw new Error('Method "' + methodName + '" is unknown. See implemented methods in ./lib/method directory.');
  }

  /** @type Abstract */
  var methodObj = new methods[methodName];

  return methodObj.compare(new HexRgb(color1), new HexRgb(color2));
};


/***/ }),

/***/ "./node_modules/color-difference/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/color-difference/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports  = {
  compare       : __webpack_require__(/*! ./compare */ "./node_modules/color-difference/lib/compare.js")
  , method      : {
      'EuclideanDistance' : __webpack_require__(/*! ./method/euclidean-distance */ "./node_modules/color-difference/lib/method/euclidean-distance.js")
    , 'CIE76Difference'   : __webpack_require__(/*! ./method/cie-76-difference */ "./node_modules/color-difference/lib/method/cie-76-difference.js")
  }
};


/***/ }),

/***/ "./node_modules/color-difference/lib/method/abstract.js":
/*!**************************************************************!*\
  !*** ./node_modules/color-difference/lib/method/abstract.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() { return Abstract; })();

function Abstract() {
};

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {Rgb} color1
 * @param {Rgb} color2
 * @return {Number} difference
 */
Abstract.prototype.compare = function(color1, color2) {
  throw new Error('Compare method unimplemented!');
};


/***/ }),

/***/ "./node_modules/color-difference/lib/method/cie-76-difference.js":
/*!***********************************************************************!*\
  !*** ./node_modules/color-difference/lib/method/cie-76-difference.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return CIE76Difference; })();

/**
 * @extends Abstract
 */
function CIE76Difference() {
};

__webpack_require__(/*! util */ "util").inherits(CIE76Difference, __webpack_require__(/*! ./abstract */ "./node_modules/color-difference/lib/method/abstract.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Rgb} color1
 * @param {Rgb} color2
 */
CIE76Difference.prototype.compare = function(color1, color2) {
  if (color1.equals(color2)) {
    return 0;
  }

  function squaredDelta(v1, v2) {
    return Math.pow(v1 - v2, 2);
  }

  var lab1 = color1.toLab(),
      lab2 = color2.toLab(),
      sum  = 0;

  sum += squaredDelta(lab1.lightness(), lab2.lightness());
  sum += squaredDelta(lab1.a(), lab2.a());
  sum += squaredDelta(lab1.b(), lab2.b());

  return Math.max(Math.min(Math.sqrt(sum), 100), 0)
};


/***/ }),

/***/ "./node_modules/color-difference/lib/method/euclidean-distance.js":
/*!************************************************************************!*\
  !*** ./node_modules/color-difference/lib/method/euclidean-distance.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return EuclideanDistance; })();

/**
 * @extends Abstract
 */
function EuclideanDistance() {
};

__webpack_require__(/*! util */ "util").inherits(EuclideanDistance, __webpack_require__(/*! ./abstract */ "./node_modules/color-difference/lib/method/abstract.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Rgb} color1
 * @param {Rgb} color2
 */
EuclideanDistance.prototype.compare = function(color1, color2) {
  if (color1.equals(color2)) {
    return 0;
  }

  function squaredDelta(v1, v2) {
    return Math.pow(v1 - v2, 2);
  }

  var sum = 0;
  sum += squaredDelta(color1.red(),   color2.red());
  sum += squaredDelta(color1.green(), color2.green());
  sum += squaredDelta(color1.blue(),  color2.blue());

  var conversionIndex = 19.5075;

  return Math.sqrt(sum / conversionIndex);
};


/***/ }),

/***/ "./node_modules/color-model/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-model/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (process.env.COLOR_MODEL_COVERAGE) {
  eval('module.exports = require("./.coverage/lib");');
} else {
  module.exports = __webpack_require__(/*! ./lib */ "./node_modules/color-model/lib/index.js");
}


/***/ }),

/***/ "./node_modules/color-model/lib/abstract-model.js":
/*!********************************************************!*\
  !*** ./node_modules/color-model/lib/abstract-model.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return AbstractModel; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');

/**
 * Abstract color model
 */
function AbstractModel() {
  this._name       = null;
  this._components = [];
};

/**
 * @returns {String}
 */
AbstractModel.prototype.toString = function () {
  var v = [];
  for (var i = 0, iMax = this._components.length; i < iMax; i++) {
    v.push(this['_' + this._components[i]].get());
  }
  return this._name + '(' + v.join(', ') + ')';
};

/**
 * @param {AbstractModel} that
 * @returns {Boolean}
 */
AbstractModel.prototype.equals = function (that) {
  if (!(that instanceof AbstractModel) || this._name !== that._name) {
    return false;
  }
  for (var i = 0, cs = this._components, iMax = cs.length; i < iMax; i++) {
    var key = '_' + cs[i];
    if (!this[key].equals(that[key])) {
      return false;
    }
  }
  return true;
};

/**
 * @abstract
 * @returns {Xyz}
 */
AbstractModel.prototype.toXyz = function () {
  throw new Error('Model ' + this._name + ' has not implemented Xyz conversion!');
};

/**
 * @returns {Lab}
 */
AbstractModel.prototype.toLab = function () {
  return this.toXyz().toLab();
};

/**
 * Getter/chainable setter in one place
 *
 * @param {String} name
 * @param {Number} value
 * @returns {AbstractModel}
 */
AbstractModel.prototype.component = function (name, value) {
  var component = this['_' + name];
  if (undefined === component || !(component instanceof Component)) {
    throw new Error('Component "' + name + '" is not exists');
  }

  if (1 == arguments.length) {
    return component.get();
  }

  component.set(value);
  return this;
};

/**
 * @param {String} name
 * @param {Array} args
 * @returns {AbstractModel}
 */
AbstractModel.prototype._component = function (name, args) {
  /** @type Component */
  var component = this['_' + name];

  if (0 == args.length) {
    return component.get();
  }

  component.set(args[0]);
  return this;
};


/***/ }),

/***/ "./node_modules/color-model/lib/component.js":
/*!***************************************************!*\
  !*** ./node_modules/color-model/lib/component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() { return Component; })();

/**
 * Color model Component
 * @param {String} name
 * @param {Number} from
 * @param {Number} to
 */
function Component(name, from, to) {
  if (!name) {
    throw new Error('Name not set');
  }
  this._name = name;

  from = parseFloat(from);
  to   = parseFloat(to);
  if (!(from < to)) {
    throw new Error('From must be less than to');
  }
  this._from = from;
  this._to   = to;

  this._value = null;
};

/**
 * @param {Number} value
 * @returns {Component}
 */
Component.prototype.set = function (value) {
  value = value ? parseFloat(value) : 0;
  if (isNaN(value)) {
    throw new Error('Value for ' + this._name + ' must be numeric');
  }

  if (value < this._from || value > this._to) {
    throw new Error('Value for ' + this._name + ' (' + value + ') must be between ' + this._from + ' and ' + this._to);
  }

  this._value = value;
  return this;
};

/**
 * @returns {Number}
 */
Component.prototype.get = function () {
  return this._value;
};

/**
 * @param {Component} that
 * @returns {Boolean}
 */
Component.prototype.equals = function (that) {
  return (that instanceof Component)
    && this._name  === that._name
    && this._value === that._value;
};


/***/ }),

/***/ "./node_modules/color-model/lib/hex-rgb.js":
/*!*************************************************!*\
  !*** ./node_modules/color-model/lib/hex-rgb.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return HexRgb; })();

var _r = __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js"); eval('var Rgb = _r');

/**
 * Rgb color model, that created from HEX string and formatted as HEX
 * @extends Rgb
 * @param {String} hex
 */
function HexRgb(hex) {
  if (undefined === hex) {
    return HexRgb.super_.apply(this, args);
  }

  var c  = '([a-f0-9]{1,2})',
      re = new RegExp('^#?' + c + c + c + '$', 'i'),
      m  = hex.match(re);

  if (null === m) {
    throw new Error('Value "' + hex + '" is unknown hex color');
  }

  var args = [
    this._parseIntFromHex(m[1]),
    this._parseIntFromHex(m[2]),
    this._parseIntFromHex(m[3])
  ];
  HexRgb.super_.apply(this, args);
};

__webpack_require__(/*! util */ "util").inherits(HexRgb, __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js")); 'code' ? 'completion' : undefined;

/**
 * @param {String} hex
 * @returns {Number}
 */
HexRgb.prototype._parseIntFromHex = function(hex) {
  if (1 == hex.length) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
};

/**
 * @returns {String}
 */
HexRgb.prototype.toString = function() {
  return '#' + this._formatIntAsHex(this.red()) + this._formatIntAsHex(this.green()) + this._formatIntAsHex(this.blue());
};

/**
 * @param {Number} intValue
 * @returns {String}
 */
HexRgb.prototype._formatIntAsHex = function(intValue) {
  intValue = Math.round(intValue);
  strValue = '' + intValue;
  if (1 == strValue.length) {
    strValue = strValue + strValue;
  }
  return (intValue < 16 ? '0' : '') + intValue.toString(16);
};

/**
 * @returns {Rgb}
 */
HexRgb.prototype.toRgb = function () {
  return new Rgb(this._red.get(), this._green.get(), this._blue.get());
};


/***/ }),

/***/ "./node_modules/color-model/lib/hsl.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/hsl.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Hsl; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');
var _r = __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js");       eval('var Rgb       = _r');

/**
 * Hue, saturation, lightness color space
 * @extends AbstractModel
 * @param {Number} h
 * @param {Number} s
 * @param {Number} l
 */
function Hsl(h, s, l) {
  this._name       = 'hsl';
  this._components = ['hue', 'saturation', 'lightness'];
  this._hue        = new Component('hue',        0, 360); this._hue.set(h);
  this._saturation = new Component('saturation', 0, 1  ); this._saturation.set(s);
  this._lightness  = new Component('lightness',  0, 1  ); this._lightness.set(l);
};

__webpack_require__(/*! util */ "util").inherits(Hsl, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value from 0 to 360
 * @returns {Hsl}
 */
Hsl.prototype.hue = function (value) {
  return this._component('hue', arguments);
};

/**
 * @param {Number} value from 0 to 1
 * @returns {Hsl}
 */
Hsl.prototype.saturation = function (value) {
  return this._component('saturation', arguments);
};

/**
 * @param {Number} value from 0 to 1
 * @returns {Hsl}
 */
Hsl.prototype.lightness = function (value) {
  return this._component('lightness', arguments);
};

/**
 * @returns {Xyz}
 */
Hsl.prototype.toXyz = function () {
  return this.toRgb().toXyz();
};

/**
 * @returns {Rgb}
 */
Hsl.prototype.toRgb = function () {
  var lightness  = this._lightness.get(),
      saturation = this._saturation.get();
  if (saturation == 0) {
    var light = 0;
    if (lightness < 0) {
      light = 0;
    } else if (lightness >= 1) {
      light = 255;
    } else {
      light = (lightness * (1 << 16)) >> 8;
    }
    return new Rgb(light, light, light);
  }

  var hue   = this._hue.get() / this._hue._to,
      temp2 = (lightness < 0.5) ?
                (lightness * (saturation + 1)) :
                (lightness + saturation) - (lightness * saturation),
      temp1 = 2 * lightness - temp2;

  return new Rgb(
    this._calcHue(temp1, temp2, hue + 1 / 3),
    this._calcHue(temp1, temp2, hue),
    this._calcHue(temp1, temp2, hue - 1 / 3)
  );
};

/**
 * @param {Number} temp1
 * @param {Number} temp2
 * @param {Number} hue
 * @returns {Number}
 */
Hsl.prototype._calcHue = function (temp1, temp2, hue) {
  if (hue < 0) {
    ++hue;
  } else if (hue > 1) {
    --hue;
  }

  result = temp1;
  if (hue * 6 < 1) {
    result = temp1 + (temp2 - temp1) * hue * 6;
  } else if (hue * 2 < 1) {
    result = temp2;
  } else if (hue * 3 < 2) {
    result = temp1 + (temp2 - temp1) * (2/3 - hue) * 6;
  }

  return (result * 255.99999999999997) >> 0;
};


/***/ }),

/***/ "./node_modules/color-model/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/color-model/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    Component     : __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js")
  , AbstractModel : __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")
  , Xyz           : __webpack_require__(/*! ./xyz */ "./node_modules/color-model/lib/xyz.js")
  , Rgb           : __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js")
  , HexRgb        : __webpack_require__(/*! ./hex-rgb */ "./node_modules/color-model/lib/hex-rgb.js")
  , Lab           : __webpack_require__(/*! ./lab */ "./node_modules/color-model/lib/lab.js")
  , Hsl           : __webpack_require__(/*! ./hsl */ "./node_modules/color-model/lib/hsl.js")
};


/***/ }),

/***/ "./node_modules/color-model/lib/lab.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/lab.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Lab; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');

/**
 * Lab color space
 *
 * CIE 1976 (L*, a*, b*) color space
 * @extends AbstractModel
 * @param {Number} l
 * @param {Number} a
 * @param {Number} b
 */
function Lab(l, a, b) {
  this._name       = 'lab';
  this._components = ['lightness', 'a', 'b'];
  this._lightness  = new Component('lightness',    0, 100); this._lightness.set(l);
  this._a          = new Component('a',          -87, 100); this._a.set(a);
  this._b          = new Component('b',         -108, 100); this._b.set(b);
};

__webpack_require__(/*! util */ "util").inherits(Lab, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value
 * @returns {Lab}
 */
Lab.prototype.lightness = function (value) {
  return this._component('lightness', arguments);
};

/**
 * @param {Number} value
 * @returns {Lab}
 */
Lab.prototype.a = function (value) {
  return this._component('a', arguments);
};

/**
 * @param {Number} value
 * @returns {Lab}
 */
Lab.prototype.b = function (value) {
  return this._component('b', arguments);
};


/***/ }),

/***/ "./node_modules/color-model/lib/rgb.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/rgb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Rgb; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');
var _r = __webpack_require__(/*! ./xyz */ "./node_modules/color-model/lib/xyz.js");       eval('var Xyz       = _r');
var _r = __webpack_require__(/*! ./hsl */ "./node_modules/color-model/lib/hsl.js");       eval('var Hsl       = _r');

/**
 * Rgb color model
 * @extends AbstractModel
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 */
function Rgb(r, g, b) {
  this._name       = 'rgb';
  this._components = ['red', 'green', 'blue'];
  this._red        = new Component('red',   0, 255); this._red.set(r);
  this._green      = new Component('green', 0, 255); this._green.set(g);
  this._blue       = new Component('blue',  0, 255); this._blue.set(b);
};

__webpack_require__(/*! util */ "util").inherits(Rgb, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value
 * @returns {Rgb}
 */
Rgb.prototype.red = function (value) {
  return this._component('red', arguments);
};

/**
 * @param {Number} value
 * @returns {Rgb}
 */
Rgb.prototype.green = function (value) {
  return this._component('green', arguments);
};

/**
 * @param {Number} value
 * @returns {Rgb}
 */
Rgb.prototype.blue = function (value) {
  return this._component('blue', arguments);
};

/**
 * @returns {HexRgb}
 */
Rgb.prototype.toHex = function () {
  var HexRgb = __webpack_require__(/*! ./hex-rgb */ "./node_modules/color-model/lib/hex-rgb.js");
  return new HexRgb()
    .red  (this._red  .get())
    .green(this._green.get())
    .blue (this._blue .get());
};

/**
 * @returns {String}
 */
Rgb.prototype.toHexString = function () {
  return this.toHex().toString();
};

/**
 * @param {Number} value
 * @returns {Number}
 */
Rgb.prototype._preparePreXyzValue = function(value) {
  value = value / 255;
  if (value > 0.04045) {
    value = (value + 0.055) / 1.055;
    value = Math.pow(value, 2.4);
  } else {
    value = value / 12.92;
  }
  return value * 100;
};

/**
 * @returns {Xyz}
 */
Rgb.prototype.toXyz = function () {
  var r = this._preparePreXyzValue(this._red  .get()),
      g = this._preparePreXyzValue(this._green.get()),
      b = this._preparePreXyzValue(this._blue .get());

  return new Xyz(
    this._finalizeXyzValue(r * 0.4124 + g * 0.3576 + b * 0.1805),
    this._finalizeXyzValue(r * 0.2126 + g * 0.7152 + b * 0.0722),
    this._finalizeXyzValue(r * 0.0193 + g * 0.1192 + b * 0.9505)
  );
};

/**
 * @param {Number} preXyzValue
 * @returns {Number}
 */
Rgb.prototype._finalizeXyzValue = function (preXyzValue) {
  return Math.round(preXyzValue * 10000) / 10000;
};

/**
 * @returns {Hsl}
 */
Rgb.prototype.toHsl = function () {
  var r = this._red  .get() / 255,
      g = this._green.get() / 255,
      b = this._blue .get() / 255,
      min   = Math.min(r, g, b),
      max   = Math.max(r, g, b),
      delta = max - min,
      lightness = (min + max) / 2;

  lightness = Math.round(lightness * 100) / 100;

  if (delta == 0) {
    return new Hsl(0, 0, lightness);
  }

  var saturation = 0;
  if (lightness < 0.5) {
    saturation = delta / (max + min);
  } else {
    saturation = delta / (2 - max - min);
  }
  saturation = Math.round(saturation * 100) / 100;

  var hue  = 0,
    deltaR = (((max - r) / 6 ) + (delta / 2)) / delta,
    deltaG = (((max - g) / 6 ) + (delta / 2)) / delta,
    deltaB = (((max - b) / 6 ) + (delta / 2)) / delta;

  if (r == max) {
    hue = deltaB - deltaG;
  } else if (g == max) {
    hue = ( 1 / 3 ) + deltaR - deltaB;
  } else {
    hue = ( 2 / 3 ) + deltaG - deltaR;
  }

  if (hue < 0) {
    ++hue;
  } else if (hue > 1) {
    --hue;
  }
  hue = (hue * 360.99999999999997) >> 0;
  if (360 == hue) {
    hue = 0;
  }

  return new Hsl(hue, saturation, lightness);
};


/***/ }),

/***/ "./node_modules/color-model/lib/xyz.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/xyz.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Xyz; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');
var _r = __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js");       eval('var Rgb       = _r');
var _r = __webpack_require__(/*! ./lab */ "./node_modules/color-model/lib/lab.js");       eval('var Lab       = _r');

/**
 * XYZ color model - base color model for others
 *
 * CIE 1931 color space
 * @extends AbstractModel
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 */
function Xyz(x, y, z) {
  this._name       = 'xyz';
  this._components = ['x', 'y', 'z'];
  this._x          = new Component('x', 0, 95.05); this._x.set(x);
  this._y          = new Component('y', 0, 100  ); this._y.set(y);
  this._z          = new Component('z', 0, 108.9); this._z.set(z);
};

__webpack_require__(/*! util */ "util").inherits(Xyz, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value
 * @returns {Xyz}
 */
Xyz.prototype.x = function (value) {
  return this._component('x', arguments);
};

/**
 * @param {Number} value
 * @returns {Xyz}
 */
Xyz.prototype.y = function (value) {
  return this._component('y', arguments);
};

/**
 * @param {Number} value
 * @returns {Xyz}
 */
Xyz.prototype.z = function (value) {
  return this._component('z', arguments);
};

/**
 * @returns {Xyz}
 */
Xyz.prototype.toXyz = function () {
  return new Xyz(this._x.get(), this._y.get(), this._z.get());
};

/**
 * @returns {Lab}
 */
Xyz.prototype.toLab = function () {
  var x = this._preparePreLabValue(this._x.get() /  95.047),
      y = this._preparePreLabValue(this._y.get() / 100.000),
      z = this._preparePreLabValue(this._z.get() / 108.883);

  return new Lab(
    this._finalizeLabValue((116 * y) - 16),
    this._finalizeLabValue(500 * (x - y)),
    this._finalizeLabValue(200 * (y - z))
  );
};

/**
 * @param {Number} preLabValue
 * @returns {Number}
 */
Xyz.prototype._preparePreLabValue = function (preLabValue) {
  if (preLabValue > 0.008856) {
    return Math.pow(preLabValue, 1/3);
  }
  return (7.787 * preLabValue) + (16 / 116);
};

/**
 * @param {Number} preLabValue
 * @returns {Number}
 */
Xyz.prototype._finalizeLabValue = function (preLabValue) {
  return Math.round(preLabValue * 10000) / 10000;
};

/**
 * @returns {Rgb}
 */
Xyz.prototype.toRgb = function () {
  var x = this._x.get() / 100,
      y = this._y.get() / 100,
      z = this._z.get() / 100,
      r = x *  3.2406 + y * -1.5372 + z * -0.4986,
      g = x * -0.9689 + y *  1.8758 + z *  0.0415,
      b = x *  0.0557 + y * -0.2040 + z *  1.0570;

  return new Rgb(this._finalizeRgbValue(r), this._finalizeRgbValue(g), this._finalizeRgbValue(b));
};

/**
 * @param {Number} preRgbValue
 * @returns {Number}
 */
Xyz.prototype._finalizeRgbValue = function (preRgbValue) {
  if (preRgbValue > 0.0031308 ) {
    preRgbValue = 1.055 * Math.pow(preRgbValue,  1/2.4) - 0.055;
  } else {
    preRgbValue = 12.92 * preRgbValue;
  }

  return Math.round(255 * preRgbValue);
};


/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/colorcolor/src/colorcolor.js":
/*!***************************************************!*\
  !*** ./node_modules/colorcolor/src/colorcolor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jshint esversion: 6 */

function colorcolor(color, newColor = "rgba", calculateOpacity = false) {
	color = color.toLowerCase();
	newColor = newColor.toLowerCase();
	var returnedColor = color;
	var namedColor = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
	var r,g,b,a;
	var roundTo = 4;
	var colorDefinitions = {
		rgb: {
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), 1
				];
			}
		},
		rgba: {
			re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
			example: [ "rgba(123, 234, 45, 1)", "rgba(255,234,245, 0.5)" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), parseFloat(bits[ 4 ])
				];
			}
		},
		hex: {
			re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			example: [ "00ff00", "336699" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), 1
				];
			}
		},
		hex3: {
			re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			example: [ "fb0", "f0f" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), 1
				];
			}
		},
		hexa: {
			re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			example: [ "00ff00ff", "336699a0" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), (parseInt(bits[ 4 ], 16) / 255)
				];
			}
		},
		hex4a: {
			re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			example: [ "fb0f", "f0f8" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), (parseInt(bits[ 4 ] + bits[ 4 ], 16) / 255)
				];
			}
		},
		hsl: {
			re: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsl(120, 100%, 25%)", "hsl(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				bits[ 4 ] = 1;
				var rgba = hslToRgb(bits);
				return [
					rgba.r, rgba.g, rgba.b, rgba.a
				];
			}
		},
		hsla: {
			re: /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
			example: [ "hsla(120, 100%, 25%, 1)", "hsla(0, 100%, 50%, 0.5)" ],
			toRGBA: function (bits) {
				var rgba = hslToRgb(bits);
				return [
					rgba.r, rgba.g, rgba.b, rgba.a
				];
			}
		},
		hsv: {
			re: /^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsv(120, 100%, 25%)", "hsv(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				var rgb = hsvToRgb(bits);
				return [
					rgb.r, rgb.g, rgb.b, 1
				];
			}
		},
		hsb: {
			re: /^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsb(120, 100%, 25%)", "hsb(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				var rgb = hsvToRgb(bits);
				return [
					rgb.r, rgb.g, rgb.b, 1
				];
			}
		}
	};

	// If this is a named color, convert it to hex
	if (namedColor.hasOwnProperty(color)) {
		color = namedColor[color];
		color.forEach(function(piece, index) {
			"use strict";
			color[index] = ("0" + piece.toString(16)).slice(-2);
		});
		color = "#" + color.join('');
	}

	// Search the color definitions for a match
	for (let colorDefinition in colorDefinitions) {
		let re = colorDefinitions[colorDefinition].re;
		let processor = colorDefinitions[colorDefinition].toRGBA;
		let bits = re.exec(color);
		if (bits) {
			let channels = processor(bits);
			r = channels[0];
			g = channels[1];
			b = channels[2];
			a = +(Math.round(channels[3] + ("e+" + roundTo)) + ("e-" + roundTo));
		}
	}
	r = Math.round( ( r < 0 || isNaN(r) ) ? 0 : ( ( r > 255 ) ? 255 : r ) );
	g = Math.round( ( g < 0 || isNaN(g) ) ? 0 : ( ( g > 255 ) ? 255 : g ) );
	b = Math.round( ( b < 0 || isNaN(b) ) ? 0 : ( ( b > 255 ) ? 255 : b ) );
	a = ( a < 0 || isNaN(a) ) ? 0 : ( ( a > 1 ) ? 1 : a );

	switch (newColor) {
		case "hex":
			returnedColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
			break;
		case "hexa":
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			returnedColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2) + ("0" + (Math.round(255 * a)).toString(16)).slice(-2);
			break;
		case "hsl":
			let hsl = rgbToHsl({ "r": r, "g": g, "b": b });
			returnedColor = `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
			break;
		case "hsla":
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			let hsla = rgbToHsl({ "r": r, "g": g, "b": b, "a": a });
			returnedColor = `hsla(${hsla.h},${hsla.s}%,${hsla.l}%,${hsla.a})`;
			break;
		case "hsb":
			/* Same as `hsv` */
			let hsb = rgbToHsv({ "r": r, "g": g, "b": b });
			returnedColor = `hsb(${hsb.h},${hsb.s}%,${hsb.v}%)`;
			break;
		case "hsv":
			let hsv = rgbToHsv({ "r": r, "g": g, "b": b });
			returnedColor = `hsv(${hsv.h},${hsv.s}%,${hsv.v}%)`;
			break;
		case "rgb":
			returnedColor = `rgb(${r},${g},${b})`;
			break;
		case "rgba":
		/* falls through */
		default:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			returnedColor = `rgba(${r},${g},${b},${a})`;
			break;
	}

	return returnedColor;
}

function calculateOpacityFromWhite(r, g, b, a) {
	"use strict";
	var min = 0;
	a = ( 255 - ( min = Math.min(r, g, b) ) ) / 255;
	r = (  false || ( r - min ) / a ).toFixed(0);
	g = (  false || ( g - min ) / a ).toFixed(0);
	b = (  false || ( b - min ) / a ).toFixed(0);
	a = parseFloat(a.toFixed(4));

	return [r, g, b, a];
}

function hslToRgb(bits) {
	var rgba = {}, hsl = {
		h: bits[1] / 360,
		s: bits[2] / 100,
		l: bits[3] / 100,
		a: parseFloat(bits[ 4 ])
	};
	if (hsl.s === 0) {
		let v = 255 * hsl.l;
		rgba = {
			r: v,
			g: v,
			b: v,
			a: hsl.a
		};
	} else {
		let q = hsl.l < 0.5 ? hsl.l * ( 1 + hsl.s ) : ( hsl.l + hsl.s ) - ( hsl.l * hsl.s );
		let p = 2 * hsl.l - q;
		rgba.r = hueToRgb(p, q, hsl.h + ( 1 / 3 ) ) * 255;
		rgba.g = hueToRgb(p, q, hsl.h) * 255;
		rgba.b = hueToRgb(p, q, hsl.h - ( 1 / 3 ) ) * 255;
		rgba.a = hsl.a;
	}

	return rgba;
}

function rgbToHsl(rgba) {
	rgba.r = rgba.r / 255;
	rgba.g = rgba.g / 255;
	rgba.b = rgba.b / 255;
	var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), hsl = [], d;
	hsl.a = rgba.a;
	hsl.l = ( max + min ) / 2;
	if (max === min) {
		hsl.h = 0;
		hsl.s = 0;
	} else {
		d = max - min;
		hsl.s = hsl.l >= 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
		switch (max) {
			case rgba.r:
				hsl.h = ( rgba.g - rgba.b ) / d + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsl.h = ( rgba.b - rgba.r ) / d + 2;
				break;
			case rgba.b:
				hsl.h = ( rgba.r - rgba.g ) / d + 4;
				break;
		}
		hsl.h /= 6;
	}
	hsl.h = parseInt(( hsl.h * 360 ).toFixed(0), 10);
	hsl.s = parseInt(( hsl.s * 100 ).toFixed(0), 10);
	hsl.l = parseInt(( hsl.l * 100 ).toFixed(0), 10);

	return hsl;
}

function hsvToRgb(bits) {
	var rgb = {}, hsv = {
		h: bits[1] / 360,
		s: bits[2] / 100,
		v: bits[3] / 100
	}, i = Math.floor(hsv.h * 6), f = hsv.h * 6 - i, p = hsv.v * ( 1 - hsv.s ), q = hsv.v * ( 1 - f * hsv.s ), t = hsv.v * ( 1 - ( 1 - f ) * hsv.s );
	switch (i % 6) {
		case 0:
			rgb.r = hsv.v;
			rgb.g = t;
			rgb.b = p;
			break;
		case 1:
			rgb.r = q;
			rgb.g = hsv.v;
			rgb.b = p;
			break;
		case 2:
			rgb.r = p;
			rgb.g = hsv.v;
			rgb.b = t;
			break;
		case 3:
			rgb.r = p;
			rgb.g = q;
			rgb.b = hsv.v;
			break;
		case 4:
			rgb.r = t;
			rgb.g = p;
			rgb.b = hsv.v;
			break;
		case 5:
			rgb.r = hsv.v;
			rgb.g = p;
			rgb.b = q;
			break;
	}
	rgb.r = rgb.r * 255;
	rgb.g = rgb.g * 255;
	rgb.b = rgb.b * 255;

	return rgb;
}

function rgbToHsv(rgba) {
	rgba.r = toPercent(parseInt(rgba.r, 10) % 256, 256);
	rgba.g = toPercent(parseInt(rgba.g, 10) % 256, 256);
	rgba.b = toPercent(parseInt(rgba.b, 10) % 256, 256);
	var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), d = max - min, hsv = {
		"h": 0,
		"s": max === 0 ? 0 : d / max,
		"v": max
	};
	if (max !== min) {
		switch (max) {
			case rgba.r:
				hsv.h = ( rgba.g - rgba.b ) / d + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsv.h = ( rgba.b - rgba.r ) / d + 2;
				break;
			case rgba.b:
				hsv.h = ( rgba.r - rgba.g ) / d + 4;
				break;
		}
		hsv.h /= 6;
	}
	hsv.h = parseInt(( hsv.h * 360 ).toFixed(0), 10);
	hsv.s = parseInt(( hsv.s * 100 ).toFixed(0), 10);
	hsv.v = parseInt(( hsv.v * 100 ).toFixed(0), 10);

	return hsv;
}

function hueToRgb(p, q, t) {
	if (t < 0) {
		t += 1;
	}
	if (t > 1) {
		t -= 1;
	}
	if (t < 1 / 6) {
		return p + ( q - p ) * 6 * t;
	}
	if (t < 1 / 2) {
		return q;
	}
	if (t < 2 / 3) {
		return p + ( q - p ) * ( ( 2 / 3 - t ) * 6 );
	}

	return p;
}

function toPercent(amount, limit) {
	return amount / limit;
}

module.exports = colorcolor;
global.colorcolor = module.exports; /* ew */


/***/ }),

/***/ "./node_modules/hex-color-regex/index.js":
/*!***********************************************!*\
  !*** ./node_modules/hex-color-regex/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * hex-color-regex <https://github.com/regexps/hex-color-regex>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */



module.exports = function hexColorRegex (opts) {
  opts = opts && typeof opts === 'object' ? opts : {}

  return opts.strict ? /^#([a-f0-9]{6}|[a-f0-9]{3})\b$/i : /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi
}


/***/ }),

/***/ "./node_modules/hex-rgb/index.js":
/*!***************************************!*\
  !*** ./node_modules/hex-rgb/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hexRgb; });
const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

function hexRgb(hex, options = {}) {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alphaFromHex = 1;

	if (hex.length === 8) {
		alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;
	const alpha = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

	if (options.format === 'array') {
		return [red, green, blue, alpha];
	}

	if (options.format === 'css') {
		const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
		return `rgb(${red} ${green} ${blue}${alphaString})`;
	}

	return {red, green, blue, alpha};
}


/***/ }),

/***/ "./node_modules/is-hexcolor/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-hexcolor/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-hexcolor <https://github.com/tunnckoCore/is-hexcolor>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */



var hexColorRegex = __webpack_require__(/*! hex-color-regex */ "./node_modules/hex-color-regex/index.js");

module.exports = function isHexcolor (hex) {
  return hexColorRegex({strict: true}).test(hex)
}


/***/ }),

/***/ "./node_modules/mocha-js-delegate/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mocha-js-delegate/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* globals MOClassDescription, NSObject, NSSelectorFromString, NSClassFromString, MOPropertyDescription */

module.exports = function MochaDelegate(definition, superclass) {
  var uniqueClassName =
    'MochaJSDelegate_DynamicClass_' + NSUUID.UUID().UUIDString()

  var delegateClassDesc = MOClassDescription.allocateDescriptionForClassWithName_superclass_(
    uniqueClassName,
    superclass || NSObject
  )

  // Storage
  var handlers = {}
  var ivars = {}

  // Define an instance method
  function setHandlerForSelector(selectorString, func) {
    var handlerHasBeenSet = selectorString in handlers
    var selector = NSSelectorFromString(selectorString)

    handlers[selectorString] = func

    /*
      For some reason, Mocha acts weird about arguments: https://github.com/logancollins/Mocha/issues/28
      We have to basically create a dynamic handler with a likewise dynamic number of predefined arguments.
    */
    if (!handlerHasBeenSet) {
      var args = []
      var regex = /:/g
      while (regex.exec(selectorString)) {
        args.push('arg' + args.length)
      }

      // eslint-disable-next-line no-eval
      var dynamicFunction = eval(
        '(function (' +
          args.join(', ') +
          ') { return handlers[selectorString].apply(this, arguments); })'
      )

      delegateClassDesc.addInstanceMethodWithSelector_function(
        selector,
        dynamicFunction
      )
    }
  }

  // define a property
  function setIvar(key, value) {
    var ivarHasBeenSet = key in handlers

    ivars[key] = value

    if (!ivarHasBeenSet) {
      delegateClassDesc.addInstanceVariableWithName_typeEncoding(key, '@')
      var description = MOPropertyDescription.new()
      description.name = key
      description.typeEncoding = '@'
      description.weak = true
      description.ivarName = key
      delegateClassDesc.addProperty(description)
    }
  }

  this.getClass = function() {
    return NSClassFromString(uniqueClassName)
  }

  this.getClassInstance = function(instanceVariables) {
    var instance = NSClassFromString(uniqueClassName).new()
    Object.keys(ivars).forEach(function(key) {
      instance[key] = ivars[key]
    })
    Object.keys(instanceVariables || {}).forEach(function(key) {
      instance[key] = instanceVariables[key]
    })
    return instance
  }
  // alias
  this.new = this.getClassInstance

  // Convenience
  if (typeof definition === 'object') {
    Object.keys(definition).forEach(
      function(key) {
        if (typeof definition[key] === 'function') {
          setHandlerForSelector(key, definition[key])
        } else {
          setIvar(key, definition[key])
        }
      }
    )
  }

  delegateClassDesc.registerClass()
}


/***/ }),

/***/ "./node_modules/rgb-hex/index.js":
/*!***************************************!*\
  !*** ./node_modules/rgb-hex/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-mixed-operators */
module.exports = (red, green, blue, alpha) => {
	const isPercent = (red + (alpha || '')).toString().includes('%');

	if (typeof red === 'string') {
		[red, green, blue, alpha] = red.match(/(0?\.?\d{1,3})%?\b/g).map(Number);
	} else if (alpha !== undefined) {
		alpha = parseFloat(alpha);
	}

	if (typeof red !== 'number' ||
		typeof green !== 'number' ||
		typeof blue !== 'number' ||
		red > 255 ||
		green > 255 ||
		blue > 255
	) {
		throw new TypeError('Expected three numbers below 256');
	}

	if (typeof alpha === 'number') {
		if (!isPercent && alpha >= 0 && alpha <= 1) {
			alpha = Math.round(255 * alpha);
		} else if (isPercent && alpha >= 0 && alpha <= 100) {
			alpha = Math.round(255 * alpha / 100);
		} else {
			throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
		}

		alpha = (alpha | 1 << 8).toString(16).slice(1);
	} else {
		alpha = '';
	}

	return ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1) + alpha;
};
/* eslint-enable no-mixed-operators */


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/browser-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/browser-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function parseHexColor(color) {
  // Check the string for incorrect formatting.
  if (!color || color[0] !== '#') {
    if (
      color &&
      typeof color.isKindOfClass === 'function' &&
      color.isKindOfClass(NSColor)
    ) {
      return color
    }
    throw new Error(
      'Incorrect color formating. It should be an hex color: #RRGGBBAA'
    )
  }

  // append FF if alpha channel is not specified.
  var source = color.substr(1)
  if (source.length === 3) {
    source += 'F'
  } else if (source.length === 6) {
    source += 'FF'
  }
  // Convert the string from #FFF format to #FFFFFF format.
  var hex
  if (source.length === 4) {
    for (var i = 0; i < 4; i += 1) {
      hex += source[i]
      hex += source[i]
    }
  } else if (source.length === 8) {
    hex = source
  } else {
    return NSColor.whiteColor()
  }

  var r = parseInt(hex.slice(0, 2), 16) / 255
  var g = parseInt(hex.slice(2, 4), 16) / 255
  var b = parseInt(hex.slice(4, 6), 16) / 255
  var a = parseInt(hex.slice(6, 8), 16) / 255

  return NSColor.colorWithSRGBRed_green_blue_alpha(r, g, b, a)
}

module.exports = function (browserWindow, panel, webview) {
  // keep reference to the subviews
  browserWindow._panel = panel
  browserWindow._webview = webview
  browserWindow._destroyed = false

  browserWindow.destroy = function () {
    return panel.close()
  }

  browserWindow.close = function () {
    if (panel.delegate().utils && panel.delegate().utils.parentWindow) {
      var shouldClose = true
      browserWindow.emit('close', {
        get defaultPrevented() {
          return !shouldClose
        },
        preventDefault: function () {
          shouldClose = false
        },
      })
      if (shouldClose) {
        panel.delegate().utils.parentWindow.endSheet(panel)
      }
      return
    }

    if (!browserWindow.isClosable()) {
      return
    }

    panel.performClose(null)
  }

  function focus(focused) {
    if (!browserWindow.isVisible()) {
      return
    }
    if (focused) {
      NSApplication.sharedApplication().activateIgnoringOtherApps(true)
      panel.makeKeyAndOrderFront(null)
    } else {
      panel.orderBack(null)
      NSApp.mainWindow().makeKeyAndOrderFront(null)
    }
  }

  browserWindow.focus = focus.bind(this, true)
  browserWindow.blur = focus.bind(this, false)

  browserWindow.isFocused = function () {
    return panel.isKeyWindow()
  }

  browserWindow.isDestroyed = function () {
    return browserWindow._destroyed
  }

  browserWindow.show = function () {
    // This method is supposed to put focus on window, however if the app does not
    // have focus then "makeKeyAndOrderFront" will only show the window.
    NSApp.activateIgnoringOtherApps(true)

    if (panel.delegate().utils && panel.delegate().utils.parentWindow) {
      return panel.delegate().utils.parentWindow.beginSheet_completionHandler(
        panel,
        __mocha__.createBlock_function('v16@?0q8', function () {
          browserWindow.emit('closed')
        })
      )
    }

    return panel.makeKeyAndOrderFront(null)
  }

  browserWindow.showInactive = function () {
    return panel.orderFrontRegardless()
  }

  browserWindow.hide = function () {
    return panel.orderOut(null)
  }

  browserWindow.isVisible = function () {
    return panel.isVisible()
  }

  browserWindow.isModal = function () {
    return false
  }

  browserWindow.maximize = function () {
    if (!browserWindow.isMaximized()) {
      panel.zoom(null)
    }
  }
  browserWindow.unmaximize = function () {
    if (browserWindow.isMaximized()) {
      panel.zoom(null)
    }
  }

  browserWindow.isMaximized = function () {
    if ((panel.styleMask() & NSResizableWindowMask) !== 0) {
      return panel.isZoomed()
    }
    var rectScreen = NSScreen.mainScreen().visibleFrame()
    var rectWindow = panel.frame()
    return (
      rectScreen.origin.x == rectWindow.origin.x &&
      rectScreen.origin.y == rectWindow.origin.y &&
      rectScreen.size.width == rectWindow.size.width &&
      rectScreen.size.height == rectWindow.size.height
    )
  }

  browserWindow.minimize = function () {
    return panel.miniaturize(null)
  }

  browserWindow.restore = function () {
    return panel.deminiaturize(null)
  }

  browserWindow.isMinimized = function () {
    return panel.isMiniaturized()
  }

  browserWindow.setFullScreen = function (fullscreen) {
    if (fullscreen !== browserWindow.isFullscreen()) {
      panel.toggleFullScreen(null)
    }
  }

  browserWindow.isFullscreen = function () {
    return panel.styleMask() & NSFullScreenWindowMask
  }

  browserWindow.setAspectRatio = function (aspectRatio /* , extraSize */) {
    // Reset the behaviour to default if aspect_ratio is set to 0 or less.
    if (aspectRatio > 0.0) {
      panel.setAspectRatio(NSMakeSize(aspectRatio, 1.0))
    } else {
      panel.setResizeIncrements(NSMakeSize(1.0, 1.0))
    }
  }

  browserWindow.setBounds = function (bounds, animate) {
    if (!bounds) {
      return
    }

    // Do nothing if in fullscreen mode.
    if (browserWindow.isFullscreen()) {
      return
    }

    const newBounds = Object.assign(browserWindow.getBounds(), bounds)

    // TODO: Check size constraints since setFrame does not check it.
    // var size = bounds.size
    // size.SetToMax(GetMinimumSize());
    // gfx::Size max_size = GetMaximumSize();
    // if (!max_size.IsEmpty())
    //   size.SetToMin(max_size);

    var cocoaBounds = NSMakeRect(
      newBounds.x,
      0,
      newBounds.width,
      newBounds.height
    )
    // Flip Y coordinates based on the primary screen
    var screen = NSScreen.screens().firstObject()
    cocoaBounds.origin.y = NSHeight(screen.frame()) - newBounds.y

    panel.setFrame_display_animate(cocoaBounds, true, animate)
  }

  browserWindow.getBounds = function () {
    const cocoaBounds = panel.frame()
    var mainScreenRect = NSScreen.screens().firstObject().frame()
    return {
      x: cocoaBounds.origin.x,
      y: Math.round(NSHeight(mainScreenRect) - cocoaBounds.origin.y),
      width: cocoaBounds.size.width,
      height: cocoaBounds.size.height,
    }
  }

  browserWindow.setContentBounds = function (bounds, animate) {
    // TODO:
    browserWindow.setBounds(bounds, animate)
  }

  browserWindow.getContentBounds = function () {
    // TODO:
    return browserWindow.getBounds()
  }

  browserWindow.setSize = function (width, height, animate) {
    // TODO: handle resizing around center
    return browserWindow.setBounds({ width: width, height: height }, animate)
  }

  browserWindow.getSize = function () {
    var bounds = browserWindow.getBounds()
    return [bounds.width, bounds.height]
  }

  browserWindow.setContentSize = function (width, height, animate) {
    // TODO: handle resizing around center
    return browserWindow.setContentBounds(
      { width: width, height: height },
      animate
    )
  }

  browserWindow.getContentSize = function () {
    var bounds = browserWindow.getContentBounds()
    return [bounds.width, bounds.height]
  }

  browserWindow.setMinimumSize = function (width, height) {
    const minSize = CGSizeMake(width, height)
    panel.setContentMinSize(minSize)
  }

  browserWindow.getMinimumSize = function () {
    const size = panel.contentMinSize()
    return [size.width, size.height]
  }

  browserWindow.setMaximumSize = function (width, height) {
    const maxSize = CGSizeMake(width, height)
    panel.setContentMaxSize(maxSize)
  }

  browserWindow.getMaximumSize = function () {
    const size = panel.contentMaxSize()
    return [size.width, size.height]
  }

  browserWindow.setResizable = function (resizable) {
    return browserWindow._setStyleMask(resizable, NSResizableWindowMask)
  }

  browserWindow.isResizable = function () {
    return panel.styleMask() & NSResizableWindowMask
  }

  browserWindow.setMovable = function (movable) {
    return panel.setMovable(movable)
  }
  browserWindow.isMovable = function () {
    return panel.isMovable()
  }

  browserWindow.setMinimizable = function (minimizable) {
    return browserWindow._setStyleMask(minimizable, NSMiniaturizableWindowMask)
  }

  browserWindow.isMinimizable = function () {
    return panel.styleMask() & NSMiniaturizableWindowMask
  }

  browserWindow.setMaximizable = function (maximizable) {
    if (panel.standardWindowButton(NSWindowZoomButton)) {
      panel.standardWindowButton(NSWindowZoomButton).setEnabled(maximizable)
    }
  }

  browserWindow.isMaximizable = function () {
    return (
      panel.standardWindowButton(NSWindowZoomButton) &&
      panel.standardWindowButton(NSWindowZoomButton).isEnabled()
    )
  }

  browserWindow.setFullScreenable = function (fullscreenable) {
    browserWindow._setCollectionBehavior(
      fullscreenable,
      NSWindowCollectionBehaviorFullScreenPrimary
    )
    // On EL Capitan this flag is required to hide fullscreen button.
    browserWindow._setCollectionBehavior(
      !fullscreenable,
      NSWindowCollectionBehaviorFullScreenAuxiliary
    )
  }

  browserWindow.isFullScreenable = function () {
    var collectionBehavior = panel.collectionBehavior()
    return collectionBehavior & NSWindowCollectionBehaviorFullScreenPrimary
  }

  browserWindow.setClosable = function (closable) {
    browserWindow._setStyleMask(closable, NSClosableWindowMask)
  }

  browserWindow.isClosable = function () {
    return panel.styleMask() & NSClosableWindowMask
  }

  browserWindow.setAlwaysOnTop = function (top, level, relativeLevel) {
    var windowLevel = NSNormalWindowLevel
    var maxWindowLevel = CGWindowLevelForKey(kCGMaximumWindowLevelKey)
    var minWindowLevel = CGWindowLevelForKey(kCGMinimumWindowLevelKey)

    if (top) {
      if (level === 'normal') {
        windowLevel = NSNormalWindowLevel
      } else if (level === 'torn-off-menu') {
        windowLevel = NSTornOffMenuWindowLevel
      } else if (level === 'modal-panel') {
        windowLevel = NSModalPanelWindowLevel
      } else if (level === 'main-menu') {
        windowLevel = NSMainMenuWindowLevel
      } else if (level === 'status') {
        windowLevel = NSStatusWindowLevel
      } else if (level === 'pop-up-menu') {
        windowLevel = NSPopUpMenuWindowLevel
      } else if (level === 'screen-saver') {
        windowLevel = NSScreenSaverWindowLevel
      } else if (level === 'dock') {
        // Deprecated by macOS, but kept for backwards compatibility
        windowLevel = NSDockWindowLevel
      } else {
        windowLevel = NSFloatingWindowLevel
      }
    }

    var newLevel = windowLevel + (relativeLevel || 0)
    if (newLevel >= minWindowLevel && newLevel <= maxWindowLevel) {
      panel.setLevel(newLevel)
    } else {
      throw new Error(
        'relativeLevel must be between ' +
          minWindowLevel +
          ' and ' +
          maxWindowLevel
      )
    }
  }

  browserWindow.isAlwaysOnTop = function () {
    return panel.level() !== NSNormalWindowLevel
  }

  browserWindow.moveTop = function () {
    return panel.orderFrontRegardless()
  }

  browserWindow.center = function () {
    panel.center()
  }

  browserWindow.setPosition = function (x, y, animate) {
    return browserWindow.setBounds({ x: x, y: y }, animate)
  }

  browserWindow.getPosition = function () {
    var bounds = browserWindow.getBounds()
    return [bounds.x, bounds.y]
  }

  browserWindow.setTitle = function (title) {
    panel.setTitle(title)
  }

  browserWindow.getTitle = function () {
    return String(panel.title())
  }

  var attentionRequestId = 0
  browserWindow.flashFrame = function (flash) {
    if (flash) {
      attentionRequestId = NSApp.requestUserAttention(NSInformationalRequest)
    } else {
      NSApp.cancelUserAttentionRequest(attentionRequestId)
      attentionRequestId = 0
    }
  }

  browserWindow.getNativeWindowHandle = function () {
    return panel
  }

  browserWindow.getNativeWebViewHandle = function () {
    return webview
  }

  browserWindow.loadURL = function (url) {
    // When frameLocation is a file, prefix it with the Sketch Resources path
    if (/^(?!https?|file).*\.html?$/.test(url)) {
      if (typeof __command !== 'undefined' && __command.pluginBundle()) {
        url =
          'file://' + __command.pluginBundle().urlForResourceNamed(url).path()
      }
    }

    if (/^file:\/\/.*\.html?$/.test(url)) {
      // ensure URLs containing spaces are properly handled
      url = NSString.alloc().initWithString(url)
      url = url.stringByAddingPercentEncodingWithAllowedCharacters(
        NSCharacterSet.URLQueryAllowedCharacterSet()
      )
      webview.loadFileURL_allowingReadAccessToURL(
        NSURL.URLWithString(url),
        NSURL.URLWithString('file:///')
      )
      return
    }

    const properURL = NSURL.URLWithString(url)
    const urlRequest = NSURLRequest.requestWithURL(properURL)

    webview.loadRequest(urlRequest)
  }

  browserWindow.reload = function () {
    webview.reload()
  }

  browserWindow.setHasShadow = function (hasShadow) {
    return panel.setHasShadow(hasShadow)
  }

  browserWindow.hasShadow = function () {
    return panel.hasShadow()
  }

  browserWindow.setOpacity = function (opacity) {
    return panel.setAlphaValue(opacity)
  }

  browserWindow.getOpacity = function () {
    return panel.alphaValue()
  }

  browserWindow.setVisibleOnAllWorkspaces = function (visible) {
    return browserWindow._setCollectionBehavior(
      visible,
      NSWindowCollectionBehaviorCanJoinAllSpaces
    )
  }

  browserWindow.isVisibleOnAllWorkspaces = function () {
    var collectionBehavior = panel.collectionBehavior()
    return collectionBehavior & NSWindowCollectionBehaviorCanJoinAllSpaces
  }

  browserWindow.setIgnoreMouseEvents = function (ignore) {
    return panel.setIgnoresMouseEvents(ignore)
  }

  browserWindow.setContentProtection = function (enable) {
    panel.setSharingType(enable ? NSWindowSharingNone : NSWindowSharingReadOnly)
  }

  browserWindow.setAutoHideCursor = function (autoHide) {
    panel.setDisableAutoHideCursor(autoHide)
  }

  browserWindow.setVibrancy = function (type) {
    var effectView = browserWindow._vibrantView

    if (!type) {
      if (effectView == null) {
        return
      }

      effectView.removeFromSuperview()
      panel.setVibrantView(null)
      return
    }

    if (effectView == null) {
      var contentView = panel.contentView()
      effectView = NSVisualEffectView.alloc().initWithFrame(
        contentView.bounds()
      )
      browserWindow._vibrantView = effectView

      effectView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)
      effectView.setBlendingMode(NSVisualEffectBlendingModeBehindWindow)
      effectView.setState(NSVisualEffectStateActive)
      effectView.setFrame(contentView.bounds())
      contentView.addSubview_positioned_relativeTo(
        effectView,
        NSWindowBelow,
        null
      )
    }

    var vibrancyType = NSVisualEffectMaterialLight

    if (type === 'appearance-based') {
      vibrancyType = NSVisualEffectMaterialAppearanceBased
    } else if (type === 'light') {
      vibrancyType = NSVisualEffectMaterialLight
    } else if (type === 'dark') {
      vibrancyType = NSVisualEffectMaterialDark
    } else if (type === 'titlebar') {
      vibrancyType = NSVisualEffectMaterialTitlebar
    } else if (type === 'selection') {
      vibrancyType = NSVisualEffectMaterialSelection
    } else if (type === 'menu') {
      vibrancyType = NSVisualEffectMaterialMenu
    } else if (type === 'popover') {
      vibrancyType = NSVisualEffectMaterialPopover
    } else if (type === 'sidebar') {
      vibrancyType = NSVisualEffectMaterialSidebar
    } else if (type === 'medium-light') {
      vibrancyType = NSVisualEffectMaterialMediumLight
    } else if (type === 'ultra-dark') {
      vibrancyType = NSVisualEffectMaterialUltraDark
    }

    effectView.setMaterial(vibrancyType)
  }

  browserWindow._setBackgroundColor = function (colorName) {
    var color = parseHexColor(colorName)
    webview.setValue_forKey(false, 'drawsBackground')
    panel.backgroundColor = color
  }

  browserWindow._invalidate = function () {
    panel.flushWindow()
    panel.contentView().setNeedsDisplay(true)
  }

  browserWindow._setStyleMask = function (on, flag) {
    var wasMaximizable = browserWindow.isMaximizable()
    if (on) {
      panel.setStyleMask(panel.styleMask() | flag)
    } else {
      panel.setStyleMask(panel.styleMask() & ~flag)
    }
    // Change style mask will make the zoom button revert to default, probably
    // a bug of Cocoa or macOS.
    browserWindow.setMaximizable(wasMaximizable)
  }

  browserWindow._setCollectionBehavior = function (on, flag) {
    var wasMaximizable = browserWindow.isMaximizable()
    if (on) {
      panel.setCollectionBehavior(panel.collectionBehavior() | flag)
    } else {
      panel.setCollectionBehavior(panel.collectionBehavior() & ~flag)
    }
    // Change collectionBehavior will make the zoom button revert to default,
    // probably a bug of Cocoa or macOS.
    browserWindow.setMaximizable(wasMaximizable)
  }

  browserWindow._showWindowButton = function (button) {
    var view = panel.standardWindowButton(button)
    view.superview().addSubview_positioned_relative(view, NSWindowAbove, null)
  }
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  JS_BRIDGE: '__skpm_sketchBridge',
  JS_BRIDGE_RESULT_SUCCESS: '__skpm_sketchBridge_success',
  JS_BRIDGE_RESULT_ERROR: '__skpm_sketchBridge_error',
  START_MOVING_WINDOW: '__skpm_startMovingWindow',
  EXECUTE_JAVASCRIPT: '__skpm_executeJS',
  EXECUTE_JAVASCRIPT_SUCCESS: '__skpm_executeJS_success_',
  EXECUTE_JAVASCRIPT_ERROR: '__skpm_executeJS_error_',
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/dispatch-first-click.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/dispatch-first-click.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tagsToFocus =
  '["text", "textarea", "date", "datetime-local", "email", "number", "month", "password", "search", "tel", "time", "url", "week" ]'

module.exports = function (webView, event) {
  var point = webView.convertPoint_fromView(event.locationInWindow(), null)
  return (
    'var el = document.elementFromPoint(' + // get the DOM element that match the event
    point.x +
    ', ' +
    point.y +
    '); ' +
    'if (el && el.tagName === "SELECT") {' + // select needs special handling
    '  var event = document.createEvent("MouseEvents");' +
    '  event.initMouseEvent("mousedown", true, true, window);' +
    '  el.dispatchEvent(event);' +
    '} else if (el && ' + // some tags need to be focused instead of clicked
    tagsToFocus +
    '.indexOf(el.type) >= 0 && ' +
    'el.focus' +
    ') {' +
    'el.focus();' + // so focus them
    '} else if (el) {' +
    'el.dispatchEvent(new Event("click", {bubbles: true}))' + // click the others
    '}'
  )
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/execute-javascript.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/execute-javascript.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function (webview, browserWindow) {
  function executeJavaScript(script, userGesture, callback) {
    if (typeof userGesture === 'function') {
      callback = userGesture
      userGesture = false
    }
    var fiber = coscript.createFiber()

    // if the webview is not ready yet, defer the execution until it is
    if (
      webview.navigationDelegate().state &&
      webview.navigationDelegate().state.wasReady == 0
    ) {
      return new Promise(function (resolve, reject) {
        browserWindow.once('ready-to-show', function () {
          executeJavaScript(script, userGesture, callback)
            .then(resolve)
            .catch(reject)
          fiber.cleanup()
        })
      })
    }

    return new Promise(function (resolve, reject) {
      var requestId = Math.random()

      browserWindow.webContents.on(
        CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS + requestId,
        function (res) {
          try {
            if (callback) {
              callback(null, res)
            }
            resolve(res)
          } catch (err) {
            reject(err)
          }
          fiber.cleanup()
        }
      )
      browserWindow.webContents.on(
        CONSTANTS.EXECUTE_JAVASCRIPT_ERROR + requestId,
        function (err) {
          try {
            if (callback) {
              callback(err)
              resolve()
            } else {
              reject(err)
            }
          } catch (err2) {
            reject(err2)
          }
          fiber.cleanup()
        }
      )

      webview.evaluateJavaScript_completionHandler(
        module.exports.wrapScript(script, requestId),
        null
      )
    })
  }

  return executeJavaScript
}

module.exports.wrapScript = function (script, requestId) {
  return (
    'window.' +
    CONSTANTS.EXECUTE_JAVASCRIPT +
    '(' +
    requestId +
    ', ' +
    JSON.stringify(script) +
    ')'
  )
}

module.exports.injectScript = function (webView) {
  var source =
    'window.' +
    CONSTANTS.EXECUTE_JAVASCRIPT +
    ' = function(id, script) {' +
    '  try {' +
    '    var res = eval(script);' +
    '    if (res && typeof res.then === "function" && typeof res.catch === "function") {' +
    '      res.then(function (res2) {' +
    '        window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS +
    '" + id, res2);' +
    '      })' +
    '      .catch(function (err) {' +
    '        window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_ERROR +
    '" + id, err);' +
    '      })' +
    '    } else {' +
    '      window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS +
    '" + id, res);' +
    '    }' +
    '  } catch (err) {' +
    '    window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_ERROR +
    '" + id, err);' +
    '  }' +
    '}'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView.configuration().userContentController().addUserScript(script)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/promise/index.js */ "./node_modules/@skpm/promise/index.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/fitSubview.js":
/*!***************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/fitSubview.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addEdgeConstraint(edge, subview, view, constant) {
  view.addConstraint(
    NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
      subview,
      edge,
      NSLayoutRelationEqual,
      view,
      edge,
      1,
      constant
    )
  )
}
module.exports = function fitSubviewToView(subview, view, constants) {
  constants = constants || []
  subview.setTranslatesAutoresizingMaskIntoConstraints(false)

  addEdgeConstraint(NSLayoutAttributeLeft, subview, view, constants[0] || 0)
  addEdgeConstraint(NSLayoutAttributeTop, subview, view, constants[1] || 0)
  addEdgeConstraint(NSLayoutAttributeRight, subview, view, constants[2] || 0)
  addEdgeConstraint(NSLayoutAttributeBottom, subview, view, constants[3] || 0)
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* let's try to match the API from Electron's Browser window
(https://github.com/electron/electron/blob/master/docs/api/browser-window.md) */
var EventEmitter = __webpack_require__(/*! events */ "events")
var buildBrowserAPI = __webpack_require__(/*! ./browser-api */ "./node_modules/sketch-module-web-view/lib/browser-api.js")
var buildWebAPI = __webpack_require__(/*! ./webview-api */ "./node_modules/sketch-module-web-view/lib/webview-api.js")
var fitSubviewToView = __webpack_require__(/*! ./fitSubview */ "./node_modules/sketch-module-web-view/lib/fitSubview.js")
var dispatchFirstClick = __webpack_require__(/*! ./dispatch-first-click */ "./node_modules/sketch-module-web-view/lib/dispatch-first-click.js")
var injectClientMessaging = __webpack_require__(/*! ./inject-client-messaging */ "./node_modules/sketch-module-web-view/lib/inject-client-messaging.js")
var movableArea = __webpack_require__(/*! ./movable-area */ "./node_modules/sketch-module-web-view/lib/movable-area.js")
var executeJavaScript = __webpack_require__(/*! ./execute-javascript */ "./node_modules/sketch-module-web-view/lib/execute-javascript.js")
var setDelegates = __webpack_require__(/*! ./set-delegates */ "./node_modules/sketch-module-web-view/lib/set-delegates.js")

function BrowserWindow(options) {
  options = options || {}

  var identifier = options.identifier || String(NSUUID.UUID().UUIDString())
  var threadDictionary = NSThread.mainThread().threadDictionary()

  var existingBrowserWindow = BrowserWindow.fromId(identifier)

  // if we already have a window opened, reuse it
  if (existingBrowserWindow) {
    return existingBrowserWindow
  }

  var browserWindow = new EventEmitter()
  browserWindow.id = identifier

  if (options.modal && !options.parent) {
    throw new Error('A modal needs to have a parent.')
  }

  // Long-running script
  var fiber = coscript.createFiber()

  // Window size
  var width = options.width || 800
  var height = options.height || 600
  var mainScreenRect = NSScreen.screens().firstObject().frame()
  var cocoaBounds = NSMakeRect(
    typeof options.x !== 'undefined'
      ? options.x
      : Math.round((NSWidth(mainScreenRect) - width) / 2),
    typeof options.y !== 'undefined'
      ? NSHeight(mainScreenRect) - options.y
      : Math.round((NSHeight(mainScreenRect) - height) / 2),
    width,
    height
  )

  if (options.titleBarStyle && options.titleBarStyle !== 'default') {
    options.frame = false
  }

  var useStandardWindow = options.windowType !== 'textured'
  var styleMask = NSTitledWindowMask

  // this is commented out because the toolbar doesn't appear otherwise :thinking-face:
  // if (!useStandardWindow || options.frame === false) {
  //   styleMask = NSFullSizeContentViewWindowMask
  // }
  if (options.minimizable !== false) {
    styleMask |= NSMiniaturizableWindowMask
  }
  if (options.closable !== false) {
    styleMask |= NSClosableWindowMask
  }
  if (options.resizable !== false) {
    styleMask |= NSResizableWindowMask
  }
  if (!useStandardWindow || options.transparent || options.frame === false) {
    styleMask |= NSTexturedBackgroundWindowMask
  }

  var panel = NSPanel.alloc().initWithContentRect_styleMask_backing_defer(
    cocoaBounds,
    styleMask,
    NSBackingStoreBuffered,
    true
  )

  // this would be nice but it's crashing on macOS 11.0
  // panel.releasedWhenClosed = true

  var wkwebviewConfig = WKWebViewConfiguration.alloc().init()
  var webView = WKWebView.alloc().initWithFrame_configuration(
    CGRectMake(0, 0, options.width || 800, options.height || 600),
    wkwebviewConfig
  )
  injectClientMessaging(webView)
  webView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)

  buildBrowserAPI(browserWindow, panel, webView)
  buildWebAPI(browserWindow, panel, webView)
  setDelegates(browserWindow, panel, webView, options)

  if (options.windowType === 'desktop') {
    panel.setLevel(kCGDesktopWindowLevel - 1)
    // panel.setCanBecomeKeyWindow(false)
    panel.setCollectionBehavior(
      NSWindowCollectionBehaviorCanJoinAllSpaces |
        NSWindowCollectionBehaviorStationary |
        NSWindowCollectionBehaviorIgnoresCycle
    )
  }

  if (
    typeof options.minWidth !== 'undefined' ||
    typeof options.minHeight !== 'undefined'
  ) {
    browserWindow.setMinimumSize(options.minWidth || 0, options.minHeight || 0)
  }

  if (
    typeof options.maxWidth !== 'undefined' ||
    typeof options.maxHeight !== 'undefined'
  ) {
    browserWindow.setMaximumSize(
      options.maxWidth || 10000,
      options.maxHeight || 10000
    )
  }

  // if (options.focusable === false) {
  //   panel.setCanBecomeKeyWindow(false)
  // }

  if (options.transparent || options.frame === false) {
    panel.titlebarAppearsTransparent = true
    panel.titleVisibility = NSWindowTitleHidden
    panel.setOpaque(0)
    panel.isMovableByWindowBackground = true
    var toolbar2 = NSToolbar.alloc().initWithIdentifier(
      'titlebarStylingToolbar'
    )
    toolbar2.setShowsBaselineSeparator(false)
    panel.setToolbar(toolbar2)
  }

  if (options.titleBarStyle === 'hiddenInset') {
    var toolbar = NSToolbar.alloc().initWithIdentifier('titlebarStylingToolbar')
    toolbar.setShowsBaselineSeparator(false)
    panel.setToolbar(toolbar)
  }

  if (options.frame === false || !options.useContentSize) {
    browserWindow.setSize(width, height)
  }

  if (options.center) {
    browserWindow.center()
  }

  if (options.alwaysOnTop) {
    browserWindow.setAlwaysOnTop(true)
  }

  if (options.fullscreen) {
    browserWindow.setFullScreen(true)
  }
  browserWindow.setFullScreenable(!!options.fullscreenable)

  let title = options.title
  if (options.frame === false) {
    title = undefined
  } else if (
    typeof title === 'undefined' &&
    typeof __command !== 'undefined' &&
    __command.pluginBundle()
  ) {
    title = __command.pluginBundle().name()
  }

  if (title) {
    browserWindow.setTitle(title)
  }

  var backgroundColor = options.backgroundColor
  if (options.transparent) {
    backgroundColor = NSColor.clearColor()
  }
  if (!backgroundColor && options.frame === false && options.vibrancy) {
    backgroundColor = NSColor.clearColor()
  }

  browserWindow._setBackgroundColor(
    backgroundColor || NSColor.windowBackgroundColor()
  )

  if (options.hasShadow === false) {
    browserWindow.setHasShadow(false)
  }

  if (typeof options.opacity !== 'undefined') {
    browserWindow.setOpacity(options.opacity)
  }

  options.webPreferences = options.webPreferences || {}

  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.devTools !== false,
      'developerExtrasEnabled'
    )
  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.javascript !== false,
      'javaScriptEnabled'
    )
  webView
    .configuration()
    .preferences()
    .setValue_forKey(!!options.webPreferences.plugins, 'plugInsEnabled')
  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.minimumFontSize || 0,
      'minimumFontSize'
    )

  if (options.webPreferences.zoomFactor) {
    webView.setMagnification(options.webPreferences.zoomFactor)
  }

  var contentView = panel.contentView()

  if (options.frame !== false) {
    webView.setFrame(contentView.bounds())
    contentView.addSubview(webView)
  } else {
    // In OSX 10.10, adding subviews to the root view for the NSView hierarchy
    // produces warnings. To eliminate the warnings, we resize the contentView
    // to fill the window, and add subviews to that.
    // http://crbug.com/380412
    contentView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)
    fitSubviewToView(contentView, contentView.superview())

    webView.setFrame(contentView.bounds())
    contentView.addSubview(webView)

    // The fullscreen button should always be hidden for frameless window.
    if (panel.standardWindowButton(NSWindowFullScreenButton)) {
      panel.standardWindowButton(NSWindowFullScreenButton).setHidden(true)
    }

    if (!options.titleBarStyle || options.titleBarStyle === 'default') {
      // Hide the window buttons.
      panel.standardWindowButton(NSWindowZoomButton).setHidden(true)
      panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true)
      panel.standardWindowButton(NSWindowCloseButton).setHidden(true)

      // Some third-party macOS utilities check the zoom button's enabled state to
      // determine whether to show custom UI on hover, so we disable it here to
      // prevent them from doing so in a frameless app window.
      panel.standardWindowButton(NSWindowZoomButton).setEnabled(false)
    }
  }

  if (options.vibrancy) {
    browserWindow.setVibrancy(options.vibrancy)
  }

  // Set maximizable state last to ensure zoom button does not get reset
  // by calls to other APIs.
  browserWindow.setMaximizable(options.maximizable !== false)

  panel.setHidesOnDeactivate(options.hidesOnDeactivate !== false)

  if (options.remembersWindowFrame) {
    panel.setFrameAutosaveName(identifier)
    panel.setFrameUsingName_force(panel.frameAutosaveName(), false)
  }

  if (options.acceptsFirstMouse) {
    browserWindow.on('focus', function (event) {
      if (event.type() === NSEventTypeLeftMouseDown) {
        browserWindow.webContents
          .executeJavaScript(dispatchFirstClick(webView, event))
          .catch(() => {})
      }
    })
  }

  executeJavaScript.injectScript(webView)
  movableArea.injectScript(webView)
  movableArea.setupHandler(browserWindow)

  if (options.show !== false) {
    browserWindow.show()
  }

  browserWindow.on('closed', function () {
    browserWindow._destroyed = true
    threadDictionary.removeObjectForKey(identifier)
    var observer = threadDictionary[identifier + '.themeObserver']
    if (observer) {
      NSApplication.sharedApplication().removeObserver_forKeyPath(
        observer,
        'effectiveAppearance'
      )
      threadDictionary.removeObjectForKey(identifier + '.themeObserver')
    }
    fiber.cleanup()
  })

  threadDictionary[identifier] = panel

  fiber.onCleanup(function () {
    if (!browserWindow._destroyed) {
      browserWindow.destroy()
    }
  })

  return browserWindow
}

BrowserWindow.fromId = function (identifier) {
  var threadDictionary = NSThread.mainThread().threadDictionary()

  if (threadDictionary[identifier]) {
    return BrowserWindow.fromPanel(threadDictionary[identifier], identifier)
  }

  return undefined
}

BrowserWindow.fromPanel = function (panel, identifier) {
  var browserWindow = new EventEmitter()
  browserWindow.id = identifier

  if (!panel || !panel.contentView) {
    throw new Error('needs to pass an NSPanel')
  }

  var webView = null
  var subviews = panel.contentView().subviews()
  for (var i = 0; i < subviews.length; i += 1) {
    if (
      !webView &&
      !subviews[i].isKindOfClass(WKInspectorWKWebView) &&
      subviews[i].isKindOfClass(WKWebView)
    ) {
      webView = subviews[i]
    }
  }

  if (!webView) {
    throw new Error('The panel needs to have a webview')
  }

  buildBrowserAPI(browserWindow, panel, webView)
  buildWebAPI(browserWindow, panel, webView)

  return browserWindow
}

module.exports = BrowserWindow


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/inject-client-messaging.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/inject-client-messaging.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function (webView) {
  var source =
    'window.originalPostMessage = window.postMessage;' +
    'window.postMessage = function(actionName) {' +
    '  if (!actionName) {' +
    "    throw new Error('missing action name')" +
    '  }' +
    '  var id = String(Math.random()).replace(".", "");' +
    '    var args = [].slice.call(arguments);' +
    '    args.unshift(id);' +
    '  return new Promise(function (resolve, reject) {' +
    '    window["' +
    CONSTANTS.JS_BRIDGE_RESULT_SUCCESS +
    '" + id] = resolve;' +
    '    window["' +
    CONSTANTS.JS_BRIDGE_RESULT_ERROR +
    '" + id] = reject;' +
    '    window.webkit.messageHandlers.' +
    CONSTANTS.JS_BRIDGE +
    '.postMessage(JSON.stringify(args));' +
    '  });' +
    '}'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView.configuration().userContentController().addUserScript(script)
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/movable-area.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/movable-area.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports.injectScript = function (webView) {
  var source =
    '(function () {' +
    "document.addEventListener('mousedown', onMouseDown);" +
    '' +
    'function shouldDrag(target) {' +
    '  if (!target || (target.dataset || {}).appRegion === "no-drag") { return false }' +
    '  if ((target.dataset || {}).appRegion === "drag") { return true }' +
    '  return shouldDrag(target.parentElement)' +
    '};' +
    '' +
    'function onMouseDown(e) {' +
    '  if (e.button !== 0 || !shouldDrag(e.target)) { return }' +
    '  window.postMessage("' +
    CONSTANTS.START_MOVING_WINDOW +
    '");' +
    '};' +
    '})()'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView.configuration().userContentController().addUserScript(script)
}

module.exports.setupHandler = function (browserWindow) {
  var initialMouseLocation = null
  var initialWindowPosition = null
  var interval = null

  function moveWindow() {
    // if the user released the button, stop moving the window
    if (!initialWindowPosition || NSEvent.pressedMouseButtons() !== 1) {
      clearInterval(interval)
      initialMouseLocation = null
      initialWindowPosition = null
      return
    }

    var mouse = NSEvent.mouseLocation()
    browserWindow.setPosition(
      initialWindowPosition.x + (mouse.x - initialMouseLocation.x),
      initialWindowPosition.y + (initialMouseLocation.y - mouse.y), // y is inverted
      false
    )
  }

  browserWindow.webContents.on(CONSTANTS.START_MOVING_WINDOW, function () {
    initialMouseLocation = NSEvent.mouseLocation()
    var position = browserWindow.getPosition()
    initialWindowPosition = {
      x: position[0],
      y: position[1],
    }

    interval = setInterval(moveWindow, 1000 / 60) // 60 fps
  })
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/parseWebArguments.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/parseWebArguments.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (webArguments) {
  var args = null
  try {
    args = JSON.parse(webArguments)
  } catch (e) {
    // malformed arguments
  }

  if (
    !args ||
    !args.constructor ||
    args.constructor !== Array ||
    args.length == 0
  ) {
    return null
  }

  return args
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/set-delegates.js":
/*!******************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/set-delegates.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var ObjCClass = __webpack_require__(/*! mocha-js-delegate */ "./node_modules/mocha-js-delegate/index.js")
var parseWebArguments = __webpack_require__(/*! ./parseWebArguments */ "./node_modules/sketch-module-web-view/lib/parseWebArguments.js")
var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

// We create one ObjC class for ourselves here
var WindowDelegateClass
var NavigationDelegateClass
var WebScriptHandlerClass
var ThemeObserverClass

// TODO: events
// - 'page-favicon-updated'
// - 'new-window'
// - 'did-navigate-in-page'
// - 'will-prevent-unload'
// - 'crashed'
// - 'unresponsive'
// - 'responsive'
// - 'destroyed'
// - 'before-input-event'
// - 'certificate-error'
// - 'found-in-page'
// - 'media-started-playing'
// - 'media-paused'
// - 'did-change-theme-color'
// - 'update-target-url'
// - 'cursor-changed'
// - 'context-menu'
// - 'select-bluetooth-device'
// - 'paint'
// - 'console-message'

module.exports = function (browserWindow, panel, webview, options) {
  if (!ThemeObserverClass) {
    ThemeObserverClass = new ObjCClass({
      utils: null,

      'observeValueForKeyPath:ofObject:change:context:': function (
        keyPath,
        object,
        change
      ) {
        const newAppearance = change[NSKeyValueChangeNewKey]
        const isDark =
          String(
            newAppearance.bestMatchFromAppearancesWithNames([
              'NSAppearanceNameAqua',
              'NSAppearanceNameDarkAqua',
            ])
          ) === 'NSAppearanceNameDarkAqua'

        this.utils.executeJavaScript(
          "document.body.classList.remove('__skpm-" +
            (isDark ? 'light' : 'dark') +
            "'); document.body.classList.add('__skpm-" +
            (isDark ? 'dark' : 'light') +
            "')"
        )
      },
    })
  }

  if (!WindowDelegateClass) {
    WindowDelegateClass = new ObjCClass({
      utils: null,
      panel: null,

      'windowDidResize:': function () {
        this.utils.emit('resize')
      },

      'windowDidMiniaturize:': function () {
        this.utils.emit('minimize')
      },

      'windowDidDeminiaturize:': function () {
        this.utils.emit('restore')
      },

      'windowDidEnterFullScreen:': function () {
        this.utils.emit('enter-full-screen')
      },

      'windowDidExitFullScreen:': function () {
        this.utils.emit('leave-full-screen')
      },

      'windowDidMove:': function () {
        this.utils.emit('move')
        this.utils.emit('moved')
      },

      'windowShouldClose:': function () {
        var shouldClose = 1
        this.utils.emit('close', {
          get defaultPrevented() {
            return !shouldClose
          },
          preventDefault: function () {
            shouldClose = 0
          },
        })
        return shouldClose
      },

      'windowWillClose:': function () {
        this.utils.emit('closed')
      },

      'windowDidBecomeKey:': function () {
        this.utils.emit('focus', this.panel.currentEvent())
      },

      'windowDidResignKey:': function () {
        this.utils.emit('blur')
      },
    })
  }

  if (!NavigationDelegateClass) {
    NavigationDelegateClass = new ObjCClass({
      state: {
        wasReady: 0,
      },
      utils: null,

      // // Called when the web view begins to receive web content.
      'webView:didCommitNavigation:': function (webView) {
        this.utils.emit('will-navigate', {}, String(String(webView.URL())))
      },

      // // Called when web content begins to load in a web view.
      'webView:didStartProvisionalNavigation:': function () {
        this.utils.emit('did-start-navigation')
        this.utils.emit('did-start-loading')
      },

      // Called when a web view receives a server redirect.
      'webView:didReceiveServerRedirectForProvisionalNavigation:': function () {
        this.utils.emit('did-get-redirect-request')
      },

      // // Called when the web view needs to respond to an authentication challenge.
      // 'webView:didReceiveAuthenticationChallenge:completionHandler:': function(
      //   webView,
      //   challenge,
      //   completionHandler
      // ) {
      //   function callback(username, password) {
      //     completionHandler(
      //       0,
      //       NSURLCredential.credentialWithUser_password_persistence(
      //         username,
      //         password,
      //         1
      //       )
      //     )
      //   }
      //   var protectionSpace = challenge.protectionSpace()
      //   this.utils.emit(
      //     'login',
      //     {},
      //     {
      //       method: String(protectionSpace.authenticationMethod()),
      //       url: 'not implemented', // TODO:
      //       referrer: 'not implemented', // TODO:
      //     },
      //     {
      //       isProxy: !!protectionSpace.isProxy(),
      //       scheme: String(protectionSpace.protocol()),
      //       host: String(protectionSpace.host()),
      //       port: Number(protectionSpace.port()),
      //       realm: String(protectionSpace.realm()),
      //     },
      //     callback
      //   )
      // },

      // Called when an error occurs during navigation.
      // 'webView:didFailNavigation:withError:': function(
      //   webView,
      //   navigation,
      //   error
      // ) {},

      // Called when an error occurs while the web view is loading content.
      'webView:didFailProvisionalNavigation:withError:': function (
        webView,
        navigation,
        error
      ) {
        this.utils.emit('did-fail-load', error)
      },

      // Called when the navigation is complete.
      'webView:didFinishNavigation:': function () {
        if (this.state.wasReady == 0) {
          this.state.wasReady = 1
          this.utils.emitBrowserEvent('ready-to-show')
        }
        this.utils.emit('did-navigate')
        this.utils.emit('did-frame-navigate')
        this.utils.emit('did-stop-loading')
        this.utils.emit('did-finish-load')
        this.utils.emit('did-frame-finish-load')
      },

      // Called when the web view’s web content process is terminated.
      'webViewWebContentProcessDidTerminate:': function () {
        this.utils.emit('dom-ready')
      },

      // Decides whether to allow or cancel a navigation.
      // webView:decidePolicyForNavigationAction:decisionHandler:

      // Decides whether to allow or cancel a navigation after its response is known.
      // webView:decidePolicyForNavigationResponse:decisionHandler:
    })
  }

  if (!WebScriptHandlerClass) {
    WebScriptHandlerClass = new ObjCClass({
      utils: null,
      'userContentController:didReceiveScriptMessage:': function (_, message) {
        var args = this.utils.parseWebArguments(String(message.body()))
        if (!args) {
          return
        }
        if (!args[0] || typeof args[0] !== 'string') {
          return
        }
        args[0] = String(args[0])

        this.utils.emit.apply(this, args)
      },
    })
  }

  var themeObserver = ThemeObserverClass.new({
    utils: {
      executeJavaScript(script) {
        webview.evaluateJavaScript_completionHandler(script, null)
      },
    },
  })

  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    "document.addEventListener('DOMContentLoaded', function() { document.body.classList.add('__skpm-" +
      (typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark()
        ? 'dark'
        : 'light') +
      "') }, false)",
    0,
    true
  )
  webview.configuration().userContentController().addUserScript(script)

  NSApplication.sharedApplication().addObserver_forKeyPath_options_context(
    themeObserver,
    'effectiveAppearance',
    NSKeyValueObservingOptionNew,
    null
  )

  var threadDictionary = NSThread.mainThread().threadDictionary()
  threadDictionary[browserWindow.id + '.themeObserver'] = themeObserver

  var navigationDelegate = NavigationDelegateClass.new({
    utils: {
      setTitle: browserWindow.setTitle.bind(browserWindow),
      emitBrowserEvent() {
        try {
          browserWindow.emit.apply(browserWindow, arguments)
        } catch (err) {
          if (
            typeof process !== 'undefined' &&
            process.listenerCount &&
            process.listenerCount('uncaughtException')
          ) {
            process.emit('uncaughtException', err, 'uncaughtException')
          } else {
            console.error(err)
            throw err
          }
        }
      },
      emit() {
        try {
          browserWindow.webContents.emit.apply(
            browserWindow.webContents,
            arguments
          )
        } catch (err) {
          if (
            typeof process !== 'undefined' &&
            process.listenerCount &&
            process.listenerCount('uncaughtException')
          ) {
            process.emit('uncaughtException', err, 'uncaughtException')
          } else {
            console.error(err)
            throw err
          }
        }
      },
    },
    state: {
      wasReady: 0,
    },
  })

  webview.setNavigationDelegate(navigationDelegate)

  var webScriptHandler = WebScriptHandlerClass.new({
    utils: {
      emit(id, type) {
        if (!type) {
          webview.evaluateJavaScript_completionHandler(
            CONSTANTS.JS_BRIDGE_RESULT_SUCCESS + id + '()',
            null
          )
          return
        }

        var args = []
        for (var i = 2; i < arguments.length; i += 1) args.push(arguments[i])

        var listeners = browserWindow.webContents.listeners(type)

        Promise.all(
          listeners.map(function (l) {
            return Promise.resolve().then(function () {
              return l.apply(l, args)
            })
          })
        )
          .then(function (res) {
            webview.evaluateJavaScript_completionHandler(
              CONSTANTS.JS_BRIDGE_RESULT_SUCCESS +
                id +
                '(' +
                JSON.stringify(res) +
                ')',
              null
            )
          })
          .catch(function (err) {
            webview.evaluateJavaScript_completionHandler(
              CONSTANTS.JS_BRIDGE_RESULT_ERROR +
                id +
                '(' +
                JSON.stringify(err) +
                ')',
              null
            )
          })
      },
      parseWebArguments: parseWebArguments,
    },
  })

  webview
    .configuration()
    .userContentController()
    .addScriptMessageHandler_name(webScriptHandler, CONSTANTS.JS_BRIDGE)

  var utils = {
    emit() {
      try {
        browserWindow.emit.apply(browserWindow, arguments)
      } catch (err) {
        if (
          typeof process !== 'undefined' &&
          process.listenerCount &&
          process.listenerCount('uncaughtException')
        ) {
          process.emit('uncaughtException', err, 'uncaughtException')
        } else {
          console.error(err)
          throw err
        }
      }
    },
  }
  if (options.modal) {
    // find the window of the document
    var msdocument
    if (options.parent.type === 'Document') {
      msdocument = options.parent.sketchObject
    } else {
      msdocument = options.parent
    }
    if (msdocument && String(msdocument.class()) === 'MSDocumentData') {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate()
    }
    utils.parentWindow = msdocument.windowForSheet()
  }

  var windowDelegate = WindowDelegateClass.new({
    utils: utils,
    panel: panel,
  })

  panel.setDelegate(windowDelegate)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/promise/index.js */ "./node_modules/@skpm/promise/index.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/webview-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/webview-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "events")
var executeJavaScript = __webpack_require__(/*! ./execute-javascript */ "./node_modules/sketch-module-web-view/lib/execute-javascript.js")

// let's try to match https://github.com/electron/electron/blob/master/docs/api/web-contents.md
module.exports = function buildAPI(browserWindow, panel, webview) {
  var webContents = new EventEmitter()

  webContents.loadURL = browserWindow.loadURL

  webContents.loadFile = function (/* filePath */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.downloadURL = function (/* filePath */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.getURL = function () {
    return String(webview.URL())
  }

  webContents.getTitle = function () {
    return String(webview.title())
  }

  webContents.isDestroyed = function () {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.focus = browserWindow.focus
  webContents.isFocused = browserWindow.isFocused

  webContents.isLoading = function () {
    return !!webview.loading()
  }

  webContents.isLoadingMainFrame = function () {
    // TODO:
    return !!webview.loading()
  }

  webContents.isWaitingForResponse = function () {
    return !webview.loading()
  }

  webContents.stop = function () {
    webview.stopLoading()
  }
  webContents.reload = function () {
    webview.reload()
  }
  webContents.reloadIgnoringCache = function () {
    webview.reloadFromOrigin()
  }
  webContents.canGoBack = function () {
    return !!webview.canGoBack()
  }
  webContents.canGoForward = function () {
    return !!webview.canGoForward()
  }
  webContents.canGoToOffset = function (offset) {
    return !!webview.backForwardList().itemAtIndex(offset)
  }
  webContents.clearHistory = function () {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.goBack = function () {
    webview.goBack()
  }
  webContents.goForward = function () {
    webview.goForward()
  }
  webContents.goToIndex = function (index) {
    var backForwardList = webview.backForwardList()
    var backList = backForwardList.backList()
    var backListLength = backList.count()
    if (backListLength > index) {
      webview.loadRequest(NSURLRequest.requestWithURL(backList[index]))
      return
    }
    var forwardList = backForwardList.forwardList()
    if (forwardList.count() > index - backListLength) {
      webview.loadRequest(
        NSURLRequest.requestWithURL(forwardList[index - backListLength])
      )
      return
    }
    throw new Error('Cannot go to index ' + index)
  }
  webContents.goToOffset = function (offset) {
    if (!webContents.canGoToOffset(offset)) {
      throw new Error('Cannot go to offset ' + offset)
    }
    webview.loadRequest(
      NSURLRequest.requestWithURL(webview.backForwardList().itemAtIndex(offset))
    )
  }
  webContents.isCrashed = function () {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setUserAgent = function (/* userAgent */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.getUserAgent = function () {
    const userAgent = webview.customUserAgent()
    return userAgent ? String(userAgent) : undefined
  }
  webContents.insertCSS = function (css) {
    var source =
      "var style = document.createElement('style'); style.innerHTML = " +
      css.replace(/"/, '\\"') +
      '; document.head.appendChild(style);'
    var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
      source,
      0,
      true
    )
    webview.configuration().userContentController().addUserScript(script)
  }
  webContents.insertJS = function (source) {
    var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
      source,
      0,
      true
    )
    webview.configuration().userContentController().addUserScript(script)
  }
  webContents.executeJavaScript = executeJavaScript(webview, browserWindow)
  webContents.setIgnoreMenuShortcuts = function () {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setAudioMuted = function (/* muted */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.isAudioMuted = function () {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setZoomFactor = function (factor) {
    webview.setMagnification_centeredAtPoint(factor, CGPointMake(0, 0))
  }
  webContents.getZoomFactor = function (callback) {
    callback(Number(webview.magnification()))
  }
  webContents.setZoomLevel = function (level) {
    // eslint-disable-next-line no-restricted-properties
    webContents.setZoomFactor(Math.pow(1.2, level))
  }
  webContents.getZoomLevel = function (callback) {
    // eslint-disable-next-line no-restricted-properties
    callback(Math.log(Number(webview.magnification())) / Math.log(1.2))
  }
  webContents.setVisualZoomLevelLimits = function (/* minimumLevel, maximumLevel */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setLayoutZoomLevelLimits = function (/* minimumLevel, maximumLevel */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  // TODO:
  // webContents.undo = function() {
  //   webview.undoManager().undo()
  // }
  // webContents.redo = function() {
  //   webview.undoManager().redo()
  // }
  // webContents.cut = webview.cut
  // webContents.copy = webview.copy
  // webContents.paste = webview.paste
  // webContents.pasteAndMatchStyle = webview.pasteAsRichText
  // webContents.delete = webview.delete
  // webContents.replace = webview.replaceSelectionWithText

  webContents.send = function () {
    const script =
      'window.postMessage({' +
      'isSketchMessage: true,' +
      "origin: '" +
      String(__command.identifier()) +
      "'," +
      'args: ' +
      JSON.stringify([].slice.call(arguments)) +
      '}, "*")'
    webview.evaluateJavaScript_completionHandler(script, null)
  }

  webContents.getNativeWebview = function () {
    return webview
  }

  browserWindow.webContents = webContents
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/remote.js":
/*!*******************************************************!*\
  !*** ./node_modules/sketch-module-web-view/remote.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSThread */
var threadDictionary = NSThread.mainThread().threadDictionary()

module.exports.getWebview = function (identifier) {
  return __webpack_require__(/*! ./lib */ "./node_modules/sketch-module-web-view/lib/index.js").fromId(identifier) // eslint-disable-line
}

module.exports.isWebviewPresent = function isWebviewPresent(identifier) {
  return !!threadDictionary[identifier]
}

module.exports.sendToWebview = function sendToWebview(identifier, evalString) {
  if (!module.exports.isWebviewPresent(identifier)) {
    return
  }

  var panel = threadDictionary[identifier]
  var webview = null
  var subviews = panel.contentView().subviews()
  for (var i = 0; i < subviews.length; i += 1) {
    if (
      !webview &&
      !subviews[i].isKindOfClass(WKInspectorWKWebView) &&
      subviews[i].isKindOfClass(WKWebView)
    ) {
      webview = subviews[i]
    }
  }

  if (!webview || !webview.evaluateJavaScript_completionHandler) {
    throw new Error('Webview ' + identifier + ' not found')
  }

  webview.evaluateJavaScript_completionHandler(evalString, null)
}


/***/ }),

/***/ "./resources/webview.html":
/*!********************************!*\
  !*** ./resources/webview.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "file://" + String(context.scriptPath).split(".sketchplugin/Contents/Sketch")[0] + ".sketchplugin/Contents/Resources/_webpack_resources/fb8fc0a1acb205f2facfdc5262277a78.html";

/***/ }),

/***/ "./src/dynamicPalette.js":
/*!*******************************!*\
  !*** ./src/dynamicPalette.js ***!
  \*******************************/
/*! exports provided: default, onShutdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch-module-web-view */ "./node_modules/sketch-module-web-view/lib/index.js");
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sketch-module-web-view/remote */ "./node_modules/sketch-module-web-view/remote.js");
/* harmony import */ var sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/dist/index.js");
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hex-rgb */ "./node_modules/hex-rgb/index.js");
/* harmony import */ var colorcolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! colorcolor */ "./node_modules/colorcolor/src/colorcolor.js");
/* harmony import */ var colorcolor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(colorcolor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var is_hexcolor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! is-hexcolor */ "./node_modules/is-hexcolor/index.js");
/* harmony import */ var is_hexcolor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_hexcolor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rgb_hex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rgb-hex */ "./node_modules/rgb-hex/index.js");
/* harmony import */ var rgb_hex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rgb_hex__WEBPACK_IMPORTED_MODULE_8__);

Mocha.sharedRuntime().loadFrameworkWithName("CoreFoundation");


var webviewIdentifier = "dynamicPalette.webview"; // #region Node modules




var cd = __webpack_require__(/*! color-difference */ "./node_modules/color-difference/lib/index.js");






var fs = __webpack_require__(/*! @skpm/fs */ "./node_modules/@skpm/fs/index.js");

var os = __webpack_require__(/*! os */ "os");

var path = __webpack_require__(/*! path */ "path");

var desktopDir = path.join(os.homedir(), "Desktop"); // #endregion Node modules
// #region Sketch Items

var sketch = __webpack_require__(/*! sketch */ "sketch");

var Swatch = sketch.Swatch;

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style; // Document variables


var doc = context.document;
var document = sketch.getSelectedDocument();
var firstSelectedLayer = document.selectedLayers.layers[0];
var artboard = sketch.Artboard;
var data = document.sketchObject.documentData(); // #endregion
// #region Styles Variables

var layerStyles = document.sharedLayerStyles;
var textStyles = document.sharedTextStyles;
var arrayLayerStyleIDs = layerStyles.map(function (sharedstyle) {
  return sharedstyle["id"];
});
var arrayLayerStyleNames = layerStyles.map(function (sharedstyle) {
  return sharedstyle["name"];
});
var arrayLayerStyleStyles = layerStyles.map(function (sharedstyle) {
  return sharedstyle["style"];
});

var layerStylesOrdered = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.sharedLayerStyles).sort(function (left, right) {
  return left.name > right.name;
});

var insertedLayerStyles = [];
var arrayTextStyleIDs = textStyles.map(function (sharedstyle) {
  return sharedstyle["id"];
});
var arrayTextStyleNames = textStyles.map(function (sharedstyle) {
  return sharedstyle["name"];
});
var arrayTextStyleStyles = textStyles.map(function (sharedstyle) {
  return sharedstyle["style"];
});

var textStylesOrdered = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.sharedTextStyles).sort(function (left, right) {
  return left.name > right.name;
});

var stylesString = JSON.stringify(layerStylesOrdered);
var textString = JSON.stringify(textStylesOrdered);
var insertedTextStyles = []; // #endregion

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Select your picture
  function getPath() {
    var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "~/Documents";
    var panel = NSOpenPanel.openPanel();
    panel.setCanChooseFiles(true);
    panel.setCanChooseDirectories(true);
    panel.setCanCreateDirectories(true);
    panel.setAllowsMultipleSelection(false);
    panel.setTitle("Select a file or folder");
    panel.setPrompt("Select");
    panel.setDirectoryURL(NSURL.fileURLWithPath(initialPath));
    var result = panel.runModal();

    if (result === NSFileHandlingPanelOKButton) {
      return panel.URL().path();
    } else {
      return null;
    }
  }

  var sourceImagePath = getPath();
  var fileExtension = sourceImagePath.split(".").pop();
  var availableExtensions = ["png", "jpg", "jpeg", "svg", "webp", "gif"]; // close the

  if (availableExtensions.indexOf(fileExtension) === -1) {
    sketch.UI.alert("File Extension not supported", "Please, select an image file");
    return;
  }

  sourceImagePath = sourceImagePath.toString();
  console.log(sourceImagePath);
  /* Create the webview with the sizes */

  var options = {
    identifier: webviewIdentifier,
    width: 421,
    height: 570,
    show: false
  };
  var browserWindow = new sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default.a(options); // only show the window when the page has loaded to avoid a white flash

  browserWindow.once("ready-to-show", function () {
    // Send the image path to the Webview
    try {
      // browserWindow.webContents
      //     .executeJavaScript(`imagePath(${sourceImagePath})`)
      //     .then(() => {
      //         // Once we're processing the styles on the webview, we can show it
      //         browserWindow.show();
      //     });
      browserWindow.show(); // browserWindow.loadURL(require("./resources/webview.html"));
    } catch (createWebViewErr) {
      console.log(createWebViewErr);
    }
  });
  var webContents = browserWindow.webContents; // add a handler for a call from web content's javascript

  webContents.on("nativeLog", function (parameters) {
    try {
      // #region Theme
      var theme;
      var value = rgb_hex__WEBPACK_IMPORTED_MODULE_8___default()(parameters.mainColor); // #region Theme

      theme = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["themeFromSourceColor"])(Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["argbFromHex"])(value), [// {
      //     name: "custom-1",
      //     value: argbFromHex("#ff0000"),
      //     blend: true,
      // },
      {}]); // #endregion Theme
      // #region Colors and palettes creation

      var primary = ["Primary", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.primary)];
      var secondary = ["Secondary", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.secondary)];
      var tertiary = ["Tertiary", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.tertiary)];
      var error = ["Error", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.error)];
      var neutral = ["Neutral", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.neutral)];
      var neutralVariant = ["Neutral Variant", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.neutralVariant)];
      var shadow = ["Shadow", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.shadow)];
      var scrim = ["Scrim", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.scrim)];
      var surface = ["Surface", Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.surface)];
      var primaryPalette = colorPalette(primary[1], primary[0]);
      paletteToColorVariables(primaryPalette, "Primary");
      var secondaryPalette = colorPalette(secondary[1], secondary[0]);
      paletteToColorVariables(secondaryPalette, "Secondary");
      var tertiaryPalette = colorPalette(tertiary[1], tertiary[0]);
      paletteToColorVariables(tertiaryPalette, "Tertiary");
      var errorPalette = colorPalette(error[1], error[0]);
      paletteToColorVariables(errorPalette, "Error");
      var neutralPalette = colorPalette(neutral[1], neutral[0]);
      paletteToColorVariables(neutralPalette, "Neutral");
      var neutralVariantPalette = colorPalette(neutralVariant[1], neutralVariant[0]);
      paletteToColorVariables(neutralVariantPalette, "Neutral Variant");
      var shadowPalette = colorPalette(shadow[1], shadow[0]);
      paletteToColorVariables(shadowPalette, "Shadow");
      var scrimPalette = colorPalette(scrim[1], scrim[0]);
      paletteToColorVariables(scrimPalette, "Scrim");
      var surfacePalette = colorPalette(surface[1], surface[0]);
      paletteToColorVariables(surfacePalette, "Surface"); // #endregion Colors and palettes creation
      // #region Light theme

      var lightTheme_primary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.primary);
      var lightTheme_onPrimary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onPrimary);
      var lightTheme_primaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.primaryContainer);
      var lightTheme_onPrimaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onPrimaryContainer);
      var lightTheme_secondary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.secondary);
      var lightTheme_onSecondary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onSecondary);
      var lightTheme_secondaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.secondaryContainer);
      var lightTheme_onSecondaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onSecondaryContainer);
      var lightTheme_tertiary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.tertiary);
      var lightTheme_onTertiary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onTertiary);
      var lightTheme_tertiaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.tertiaryContainer);
      var lightTheme_onTertiaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onTertiaryContainer);
      var lightTheme_error = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.error);
      var lightTheme_onError = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onError);
      var lightTheme_errorContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.errorContainer);
      var lightTheme_onErrorContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onErrorContainer);
      var lightTheme_background = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.background);
      var lightTheme_onbackground = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onbackground);
      var lightTheme_surface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.surface);
      var lightTheme_onSurface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onSurface);
      var lightTheme_outline = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onbackground);
      var lightTheme_surfacevariant = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.surfaceVariant);
      var lightTheme_onSurfaceVariant = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.onSurfaceVariant);
      var lightTheme_shadow = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.shadow);
      var lightTheme_scrim = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.scrim);
      var lightTheme_inverseSurface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.inverseSurface);
      var lightTheme_inverseOnSurface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.inverseOnSurface);
      var lightTheme_inversePrimary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.light.inversePrimary);
      var lightTheme = [["Primary", lightTheme_primary, true, false, true, true, false, "Primary"], ["onPrimary", lightTheme_onPrimary, true, false, true, true, true, "Neutral"], ["primaryContainer", lightTheme_primaryContainer, true, false, true, false, false, "Primary"], ["onPrimaryContainer", lightTheme_onPrimaryContainer, true, false, true, true, false, "Neutral"], ["secondary", lightTheme_secondary, true, false, true, true, false, "Secondary"], ["onSecondary", lightTheme_onSecondary, true, false, true, true, false, "Neutral"], ["secondaryContainer", lightTheme_secondaryContainer, true, false, true, false, false, "Secondary"], ["onSecondaryContainer", lightTheme_onSecondaryContainer, true, false, true, true, false, "Neutral"], ["tertiary", lightTheme_tertiary, true, false, true, true, false, "Tertiary"], ["onTertiary", lightTheme_onTertiary, true, false, true, true, false, "Neutral"], ["tertiaryContainer", lightTheme_tertiaryContainer, true, false, true, false, false, "Tertiary"], ["onTertiaryContainer", lightTheme_onTertiaryContainer, true, false, true, true, false, "Neutral"], ["error", lightTheme_error, true, false, true, true, false, "Error"], ["onError", lightTheme_onError, true, false, true, true, true, "Neutral"], ["errorContainer", lightTheme_errorContainer, true, false, true, false, false, "Error"], ["onErrorContainer", lightTheme_onErrorContainer, true, false, true, true, false, "Neutral"], ["background", lightTheme_background, true, false, true, false, false, "Neutral"], ["onbackground", lightTheme_onbackground, true, false, true, true, true, "Neutral"], ["surface", lightTheme_surface, true, false, true, false, false, "Surface"], ["onSurface", lightTheme_onSurface, true, false, true, true, true, "Surface"], ["outline", lightTheme_outline, false, true, true, false, false, "Neutral"], ["surfacevariant", lightTheme_surfacevariant, true, false, true, false, false, "Surface"], ["onSurfaceVariant", lightTheme_onSurfaceVariant, true, false, true, true, true, "Surface"], ["shadow", lightTheme_shadow, true, false, true, false, false, "Shadow"], // ["scrim", lightTheme_scrim,false],
      ["inverseSurface", lightTheme_inverseSurface, true, false, true, false, false, "Surface"], ["inverseOnSurface", lightTheme_inverseOnSurface, true, false, true, true, true, "Surface"], ["inversePrimary", lightTheme_inversePrimary, true, false, true, true, false, "Primary"]]; // #endregion Light Theme
      // #region Dark theme

      var darkTheme_primary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.primary);
      var darkTheme_onPrimary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onPrimary);
      var darkTheme_primaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.primaryContainer);
      var darkTheme_onPrimaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onPrimaryContainer);
      var darkTheme_secondary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.secondary);
      var darkTheme_onSecondary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onSecondary);
      var darkTheme_secondaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.secondaryContainer);
      var darkTheme_onSecondaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onSecondaryContainer);
      var darkTheme_tertiary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.tertiary);
      var darkTheme_onTertiary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onTertiary);
      var darkTheme_tertiaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.tertiaryContainer);
      var darkTheme_onTertiaryContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onTertiaryContainer);
      var darkTheme_error = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.error);
      var darkTheme_onError = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onError);
      var darkTheme_errorContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.errorContainer);
      var darkTheme_onErrorContainer = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onErrorContainer);
      var darkTheme_background = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.background);
      var darkTheme_onbackground = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onbackground);
      var darkTheme_surface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.surface);
      var darkTheme_onSurface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onSurface);
      var darkTheme_outline = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onbackground);
      var darkTheme_surfacevariant = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.surfaceVariant);
      var darkTheme_onSurfaceVariant = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.onSurfaceVariant);
      var darkTheme_shadow = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.shadow);
      var darkTheme_scrim = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.scrim);
      var darkTheme_inverseSurface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.inverseSurface);
      var darkTheme_inverseOnSurface = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.inverseOnSurface);
      var darkTheme_inversePrimary = Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(theme.schemes.dark.inversePrimary);
      var darkTheme = [["Primary", darkTheme_primary, true, false, true, true, false, "Primary"], ["onPrimary", darkTheme_onPrimary, true, false, true, true, true, "Neutral"], ["primaryContainer", darkTheme_primaryContainer, true, false, true, false, false, "Primary"], ["onPrimaryContainer", darkTheme_onPrimaryContainer, true, false, true, true, false, "Neutral"], ["secondary", darkTheme_secondary, true, false, true, true, false, "Secondary"], ["onSecondary", darkTheme_onSecondary, true, false, true, true, false, "Neutral"], ["secondaryContainer", darkTheme_secondaryContainer, true, false, true, false, false, "Secondary"], ["onSecondaryContainer", darkTheme_onSecondaryContainer, true, false, true, true, false, "Neutral"], ["tertiary", darkTheme_tertiary, true, false, true, true, false, "Tertiary"], ["onTertiary", darkTheme_onTertiary, true, false, true, true, false, "Neutral"], ["tertiaryContainer", darkTheme_tertiaryContainer, true, false, true, false, false, "Tertiary"], ["onTertiaryContainer", darkTheme_onTertiaryContainer, true, false, true, true, false, "Neutral"], ["error", darkTheme_error, true, false, true, true, false, "Error"], ["onError", darkTheme_onError, true, false, true, true, true, "Neutral"], ["errorContainer", darkTheme_errorContainer, true, false, true, false, false, "Error"], ["onErrorContainer", darkTheme_onErrorContainer, true, false, true, true, false, "Neutral"], ["background", darkTheme_background, true, false, true, false, false, "Neutral"], ["onbackground", darkTheme_onbackground, true, false, true, true, true, "Neutral"], ["surface", darkTheme_surface, true, false, true, false, false, "Surface"], ["onSurface", darkTheme_onSurface, true, false, true, true, true, "Surface"], ["outline", darkTheme_outline, false, true, true, false, false, "Neutral"], ["surfacevariant", darkTheme_surfacevariant, true, false, true, false, false, "Surface"], ["onSurfaceVariant", darkTheme_onSurfaceVariant, true, false, true, true, true, "Surface"], ["shadow", darkTheme_shadow, true, false, true, false, false, "Shadow"], // ["scrim", darkTheme_scrim,false],
      ["inverseSurface", darkTheme_inverseSurface, true, false, true, false, false, "Surface"], ["inverseOnSurface", darkTheme_inverseOnSurface, true, false, true, true, true, "Surface"], ["inversePrimary", darkTheme_inversePrimary, true, false, true, true, false, "Primary"]]; // #endregion Dark Theme
      // #region Create Styles
      // Light and Dark theme arrays presents:
      // 0 = styleName
      // 1 = color
      // 2 = fill
      // 3 = border
      // 4 = layer style
      // 5 = text style
      // 6 = titles
      // 7 = palette of reference

      lightTheme.forEach(function (style) {
        //  If layer style
        if (style[4]) {
          // Fill style
          if (style[2]) {
            createNewLayerStyle(style, "Light Theme/Fills/", false, style[7]);
          } //  Border Style


          if (style[3]) {
            createNewLayerStyle(style, "Light Theme/Borders/", true, style[7]);
          }
        } //  If text style


        if (style[5]) {
          createNewTextStyle(style, "Light Theme/", style[7]);
        }
      });
      darkTheme.forEach(function (style) {
        //  If layer style
        if (style[4]) {
          // Fill style
          if (style[2]) {
            createNewLayerStyle(style, "Dark Theme/Fills/", false, style[7]);
          } //  Border Style


          if (style[3]) {
            createNewLayerStyle(style, "Dark Theme/Borders/", true, style[7]);
          }
        } //  If text style


        if (style[5]) {
          createNewTextStyle(style, "Dark Theme/", style[7]);
        }
      }); // #endregion Create Styles
      // #region Connect Color Variables

      layerStyles.forEach(function (layerStyle) {
        var styleName = layerStyle.name;
        var stylePalette = "";

        for (var n = 0; n < insertedLayerStyles.length; n++) {
          if (insertedLayerStyles[n][0] === styleName) {
            stylePalette = insertedLayerStyles[n][1];
            return;
          }
        }

        var styleFillColor = "";

        if (layerStyle.style.fills[0] !== "" && layerStyle.style.fills[0] !== undefined) {
          styleFillColor = layerStyle.style.fills[0].color;
        }

        var styleBorderColor = "";

        if (layerStyle.style.borders[0] !== "" && layerStyle.style.borders[0] !== undefined) {
          styleBorderColor = layerStyle.style.borders[0].color;
        }

        var message = "Style Name: " + styleName;
        message = message + " - Fill Color: " + styleFillColor;
        message = message + " - Border Color: " + styleBorderColor; // console.log(message);

        if (styleFillColor !== undefined && styleFillColor !== "") {
          var colorVariable = matchColorVariables(styleFillColor, stylePalette);

          if (colorVariable !== undefined) {
            layerStyle.style.fills[0].color = colorVariable.referencingColor;
          } // console.log(colorVariable);

        }

        if (styleBorderColor !== undefined && styleBorderColor !== "") {
          var _colorVariable = matchColorVariables(styleBorderColor, styleName);

          if (_colorVariable !== undefined) {
            layerStyle.style.borders[0].color = _colorVariable.referencingColor;
          } // console.log(colorVariable);


          updateLayerStyles();
        }
      });
      textStyles.forEach(function (textStyle) {
        var styleName = textStyle.name;
        var stylePalette = "";

        for (var n = 0; n < insertedTextStyles.length; n++) {
          if (insertedTextStyles[n][0] === styleName) {
            stylePalette = insertedTextStyles[n][1];
            return;
          }
        }

        var styleTextColor = textStyle.style.textColor;
        var colorVariable = matchColorVariables(styleTextColor, stylePalette);

        if (colorVariable !== undefined) {
          textStyle.style.textColor = colorVariable.referencingColor;
        }

        updateTextStyles();
      }); // #endregion Connect Color Variables

      browserWindow.close();
    } catch (pluginErr) {
      console.log(pluginErr);
    }
  }); // console.log(JSON.stringify(theme, null, 2));

  function paletteToColorVariables(palette, name) {
    var arrayColorVarNames = document.swatches.map(function (Swatch) {
      return Swatch["name"];
    });
    palette.forEach(function (color) {
      var colorName = name + "/" + color[0];
      var newSwatch = Swatch.from({
        name: colorName,
        color: color[1]
      }); // Generate the new Color Variable if it doesn't exist

      if (arrayColorVarNames.length > 0) {
        if (arrayColorVarNames.indexOf(colorName) === -1) {
          document.swatches.push(newSwatch);
        } else {
          var existingSwatch = document.swatches[arrayColorVarNames.indexOf(colorName)];
          document.swatches[arrayColorVarNames.indexOf(colorName)].sketchObject.updateWithColor(MSColor.colorWithHex_alpha(color[1].slice(0, 7), 1));
          var swatchContainer = document.sketchObject.documentData().sharedSwatches(); // REFRESHES THE UI

          swatchContainer.updateReferencesToSwatch(existingSwatch.sketchObject);
        }
      } else {
        document.swatches.push(newSwatch);
      }
    });
  }

  browserWindow.loadURL(__webpack_require__(/*! ../resources/webview.html */ "./resources/webview.html"));
});

function colorPalette(color) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var tones = [100, 99, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]; // let palette = [[name, color]];

  var palette = [];

  for (var n = 0; n < tones.length; n++) {
    var valueName = name + " " + tones[n].toString();
    palette.push([valueName, Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["hexFromArgb"])(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["TonalPalette"].fromInt(Object(_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_3__["argbFromHex"])(color)).tone(tones[n]))]);
  }

  return palette;
} // ******************************************************************* //
// General Styles management functions                                 //
// ******************************************************************* //


function getLayerStyleNameFromID(id) {
  var styleName = "";

  for (var i = 0; i < arrayLayerStyleNames.length; i++) {
    if (arrayLayerStyleIDs[i] === id) {
      styleName = arrayLayerStyleNames[i];
    }
  }

  return styleName;
}

function getTextStyleNameFromID(id) {
  try {
    var textStyle = "";

    for (var i = 0; i < arrayTextStyleStyles.length; i++) {
      if (arrayTextStyleIDs[i] === id) {
        textStyle = arrayTextStyleStyles[i];
      }
    }

    return textStyle;
  } catch (getTextStylesStyleFromIDErr) {
    console.log(getTextStylesStyleFromIDErr);
  }
}

function getLayerStyleIDFromName(name) {
  var styleID = "";

  for (var i = 0; i < arrayLayerStyleIDs.length; i++) {
    if (arrayLayerStyleNames[i] === name) {
      styleID = arrayLayerStyleIDs[i];
    }
  }

  return styleID;
}

function getTextStyleIDFromName(name) {
  var styleID = "";

  for (var i = 0; i < arrayTextStyleIDs.length; i++) {
    if (arrayTextStyleNames[i] === name) {
      styleID = arrayTextStyleIDs[i];
    }
  }

  return styleID;
}

function matchColorVariables(color, name) {
  var newColorVariable;
  name = name.toUpperCase();
  var colorVariables = document.swatches;
  var colorVariablesNames = [];
  colorVariables.forEach(function (variable) {
    var variableName = variable.name.toString().toUpperCase();
    colorVariablesNames.push(variableName);
  }); // console.log(colorVariablesNames);

  colorVariables.forEach(function (variable) {
    var variableName = variable.name.toString().toUpperCase();
    var variableColor = variable.color.toString().toUpperCase();
    color = color.toString().toUpperCase();
    var variableColorHEX = colorcolor__WEBPACK_IMPORTED_MODULE_5___default()(variableColor, "hex");
    var colorHEX = colorcolor__WEBPACK_IMPORTED_MODULE_5___default()(color, "hex");
    var colorMatch = false;

    if (cd.compare(variableColorHEX, colorHEX) < 3) {
      colorMatch = true;
    }

    if (variableName.includes(name) && colorMatch) {
      newColorVariable = variable;
    }
  });
  return newColorVariable;
}

function checkSubString(str1, str2) {
  return str1.indexOf(str2);
}

function createNewLayerStyle() {
  var styleDetails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var folder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var border = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var palette = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  try {
    var styleName = folder + styleDetails[0];
    var styleColor = styleDetails[1];
    var borders = [];
    var fills = [];

    if (border) {
      borders = [{
        color: styleColor,
        fillType: Style.FillType.Color,
        position: Style.BorderPosition.Inside
      }];
    } else {
      fills = [{
        color: styleColor,
        fillType: Style.FillType.Color
      }];
    }

    if (arrayLayerStyleNames.indexOf(styleName) === -1) {
      // 1. If the style is new
      var sharedStyle = layerStyles.push({
        name: styleName,
        style: {
          fills: fills,
          borders: borders
        },
        document: document
      });
      insertedLayerStyles.push([sharedStyle.name, palette]);
      updateLayerStyles();
      return sharedStyle;
    } else {
      var existingStyleID = getLayerStyleIDFromName(styleName);

      if (existingStyleID !== "") {
        var localIndex = arrayLayerStyleIDs.indexOf(existingStyleID);
        var existingStyle = layerStyles[localIndex];

        if (fills.length > 0) {
          existingStyle.style.fills[0].color = fills[0].color;
        }

        if (borders.lengh > 0) {
          existingStyle.style.borders[0].color = borders[0].color;
        }

        insertedLayerStyles.push([existingStyle.name, palette]);
        updateLayerStyles();
      }
    }
  } catch (createLayerStyleErr) {
    console.log(createLayerStyleErr);
  }
}

function createNewTextStyle() {
  var styleDetails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var folder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var palette = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  try {
    var styleName = folder + styleDetails[0];
    var styleColor = styleDetails[1];

    if (arrayTextStyleNames.indexOf(styleName) === -1) {
      var sharedStyle = textStyles.push({
        name: styleName,
        style: {
          textColor: styleColor,
          fontSize: 16,
          fontFamily: "Roboto"
        },
        document: document
      });
      insertedTextStyles.push([sharedStyle.name, palette]);
      updateTextStyles(); // Titles

      if (styleDetails[6] === true) {
        console.log("Titles");
        styleName = folder + "H1/" + styleDetails[0];

        if (arrayTextStyleNames.indexOf(styleName) === -1) {
          var sharedTitleStyle = textStyles.push({
            name: styleName,
            style: {
              textColor: styleColor,
              fontSize: 28,
              fontFamily: "Roboto"
            },
            document: document
          });
          insertedTextStyles.push([sharedTitleStyle.name, palette]);
          updateTextStyles();
        }
      }

      return sharedStyle;
    } else {
      // Update styles
      var existingStyleID = getTextStyleIDFromName(styleName);

      if (existingStyleID !== "") {
        var localIndex = arrayTextStyleIDs.indexOf(existingStyleID);
        var existingStyle = textStyles[localIndex];
        existingStyle.style.textColor = styleColor;
        insertedLayerStyles.push([existingStyle.name, palette]);
        updateTextStyles();
        return existingStyle;
      } // Update titles


      styleName = folder + "H1/" + styleDetails[0];
      existingStyleID = getTextStyleIDFromName(styleName);

      if (existingStyleID !== "") {
        var _localIndex = arrayTextStyleIDs.indexOf(existingStyleID);

        var _existingStyle = textStyles[_localIndex];
        _existingStyle.style.textColor = styleColor;
        insertedLayerStyles.push([_existingStyle.name, palette]);
        updateTextStyles();
        return _existingStyle;
      }
    }
  } catch (createTextStyleErr) {
    console.log(createTextStyleErr);
  }
}

function updateLayerStyles() {
  layerStyles = document.sharedLayerStyles;
  arrayLayerStyleIDs = layerStyles.map(function (sharedstyle) {
    return sharedstyle["id"];
  });
  arrayLayerStyleNames = layerStyles.map(function (sharedstyle) {
    return sharedstyle["name"];
  });
  arrayLayerStyleStyles = layerStyles.map(function (sharedstyle) {
    return sharedstyle["style"];
  });
}

function updateTextStyles() {
  var textStyles = document.sharedTextStyles;
  arrayTextStyleIDs = textStyles.map(function (sharedstyle) {
    return sharedstyle["id"];
  });
  arrayTextStyleNames = textStyles.map(function (sharedstyle) {
    return sharedstyle["name"];
  });
  arrayTextStyleStyles = textStyles.map(function (sharedstyle) {
    return sharedstyle["style"];
  });
}

function getPath() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "~/Documents";
  var panel = NSOpenPanel.openPanel();
  panel.setCanChooseFiles(true);
  panel.setCanChooseDirectories(true);
  panel.setCanCreateDirectories(true);
  panel.setAllowsMultipleSelection(false);
  panel.setTitle("Select a file or folder");
  panel.setPrompt("Select");
  panel.setDirectoryURL(NSURL.fileURLWithPath(initialPath));
  var result = panel.runModal();

  if (result === NSFileHandlingPanelOKButton) {
    return panel.URL().path();
  } else {
    return null;
  }
} // ******************************************************************* //
// When the plugin is shutdown by Sketch (for example when the user    //
// disable the plugin) we need to close the webview if it's open       //
// ******************************************************************* //


function onShutdown() {
  var existingWebview = Object(sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2__["getWebview"])(webviewIdentifier);

  if (existingWebview) {
    existingWebview.close();
  }
}

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['onShutdown'] = __skpm_run.bind(this, 'onShutdown')

//# sourceMappingURL=__dynamicPalette.js.map