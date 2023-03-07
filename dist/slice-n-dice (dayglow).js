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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketches/slice-n-dice/js/dayglow.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/sketches/slice-n-dice/scss/dayglow.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/sketches/slice-n-dice/scss/dayglow.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/noise-bg.gif */ "./src/sketches/slice-n-dice/img/noise-bg.gif"));

// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n  display: none; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100svw;\n  height: 100svh; }\n\n.panel,\n.panel__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100svw;\n  height: 100svh; }\n\n.panel {\n  -webkit-transform: scale(0.02, 1);\n          transform: scale(0.02, 1);\n  overflow: hidden;\n  z-index: 2; }\n\n.panel__inner {\n  -webkit-transform: scale(50, 1);\n          transform: scale(50, 1); }\n\n.panel__animater {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100svw;\n  height: 100svh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100svw;\n  height: 100svh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1; }\n\n/*\n=====================\nPOSITIONING\n=====================\n*/\n.panel:nth-child(1),\n.panel:nth-child(1) .panel__inner {\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%; }\n\n.panel:nth-child(2),\n.panel:nth-child(2) .panel__inner {\n  -webkit-transform-origin: 2.04082% 50%;\n          transform-origin: 2.04082% 50%; }\n\n.panel:nth-child(3),\n.panel:nth-child(3) .panel__inner {\n  -webkit-transform-origin: 4.08163% 50%;\n          transform-origin: 4.08163% 50%; }\n\n.panel:nth-child(4),\n.panel:nth-child(4) .panel__inner {\n  -webkit-transform-origin: 6.12245% 50%;\n          transform-origin: 6.12245% 50%; }\n\n.panel:nth-child(5),\n.panel:nth-child(5) .panel__inner {\n  -webkit-transform-origin: 8.16327% 50%;\n          transform-origin: 8.16327% 50%; }\n\n.panel:nth-child(6),\n.panel:nth-child(6) .panel__inner {\n  -webkit-transform-origin: 10.20408% 50%;\n          transform-origin: 10.20408% 50%; }\n\n.panel:nth-child(7),\n.panel:nth-child(7) .panel__inner {\n  -webkit-transform-origin: 12.2449% 50%;\n          transform-origin: 12.2449% 50%; }\n\n.panel:nth-child(8),\n.panel:nth-child(8) .panel__inner {\n  -webkit-transform-origin: 14.28571% 50%;\n          transform-origin: 14.28571% 50%; }\n\n.panel:nth-child(9),\n.panel:nth-child(9) .panel__inner {\n  -webkit-transform-origin: 16.32653% 50%;\n          transform-origin: 16.32653% 50%; }\n\n.panel:nth-child(10),\n.panel:nth-child(10) .panel__inner {\n  -webkit-transform-origin: 18.36735% 50%;\n          transform-origin: 18.36735% 50%; }\n\n.panel:nth-child(11),\n.panel:nth-child(11) .panel__inner {\n  -webkit-transform-origin: 20.40816% 50%;\n          transform-origin: 20.40816% 50%; }\n\n.panel:nth-child(12),\n.panel:nth-child(12) .panel__inner {\n  -webkit-transform-origin: 22.44898% 50%;\n          transform-origin: 22.44898% 50%; }\n\n.panel:nth-child(13),\n.panel:nth-child(13) .panel__inner {\n  -webkit-transform-origin: 24.4898% 50%;\n          transform-origin: 24.4898% 50%; }\n\n.panel:nth-child(14),\n.panel:nth-child(14) .panel__inner {\n  -webkit-transform-origin: 26.53061% 50%;\n          transform-origin: 26.53061% 50%; }\n\n.panel:nth-child(15),\n.panel:nth-child(15) .panel__inner {\n  -webkit-transform-origin: 28.57143% 50%;\n          transform-origin: 28.57143% 50%; }\n\n.panel:nth-child(16),\n.panel:nth-child(16) .panel__inner {\n  -webkit-transform-origin: 30.61224% 50%;\n          transform-origin: 30.61224% 50%; }\n\n.panel:nth-child(17),\n.panel:nth-child(17) .panel__inner {\n  -webkit-transform-origin: 32.65306% 50%;\n          transform-origin: 32.65306% 50%; }\n\n.panel:nth-child(18),\n.panel:nth-child(18) .panel__inner {\n  -webkit-transform-origin: 34.69388% 50%;\n          transform-origin: 34.69388% 50%; }\n\n.panel:nth-child(19),\n.panel:nth-child(19) .panel__inner {\n  -webkit-transform-origin: 36.73469% 50%;\n          transform-origin: 36.73469% 50%; }\n\n.panel:nth-child(20),\n.panel:nth-child(20) .panel__inner {\n  -webkit-transform-origin: 38.77551% 50%;\n          transform-origin: 38.77551% 50%; }\n\n.panel:nth-child(21),\n.panel:nth-child(21) .panel__inner {\n  -webkit-transform-origin: 40.81633% 50%;\n          transform-origin: 40.81633% 50%; }\n\n.panel:nth-child(22),\n.panel:nth-child(22) .panel__inner {\n  -webkit-transform-origin: 42.85714% 50%;\n          transform-origin: 42.85714% 50%; }\n\n.panel:nth-child(23),\n.panel:nth-child(23) .panel__inner {\n  -webkit-transform-origin: 44.89796% 50%;\n          transform-origin: 44.89796% 50%; }\n\n.panel:nth-child(24),\n.panel:nth-child(24) .panel__inner {\n  -webkit-transform-origin: 46.93878% 50%;\n          transform-origin: 46.93878% 50%; }\n\n.panel:nth-child(25),\n.panel:nth-child(25) .panel__inner {\n  -webkit-transform-origin: 48.97959% 50%;\n          transform-origin: 48.97959% 50%; }\n\n.panel:nth-child(26),\n.panel:nth-child(26) .panel__inner {\n  -webkit-transform-origin: 51.02041% 50%;\n          transform-origin: 51.02041% 50%; }\n\n.panel:nth-child(27),\n.panel:nth-child(27) .panel__inner {\n  -webkit-transform-origin: 53.06122% 50%;\n          transform-origin: 53.06122% 50%; }\n\n.panel:nth-child(28),\n.panel:nth-child(28) .panel__inner {\n  -webkit-transform-origin: 55.10204% 50%;\n          transform-origin: 55.10204% 50%; }\n\n.panel:nth-child(29),\n.panel:nth-child(29) .panel__inner {\n  -webkit-transform-origin: 57.14286% 50%;\n          transform-origin: 57.14286% 50%; }\n\n.panel:nth-child(30),\n.panel:nth-child(30) .panel__inner {\n  -webkit-transform-origin: 59.18367% 50%;\n          transform-origin: 59.18367% 50%; }\n\n.panel:nth-child(31),\n.panel:nth-child(31) .panel__inner {\n  -webkit-transform-origin: 61.22449% 50%;\n          transform-origin: 61.22449% 50%; }\n\n.panel:nth-child(32),\n.panel:nth-child(32) .panel__inner {\n  -webkit-transform-origin: 63.26531% 50%;\n          transform-origin: 63.26531% 50%; }\n\n.panel:nth-child(33),\n.panel:nth-child(33) .panel__inner {\n  -webkit-transform-origin: 65.30612% 50%;\n          transform-origin: 65.30612% 50%; }\n\n.panel:nth-child(34),\n.panel:nth-child(34) .panel__inner {\n  -webkit-transform-origin: 67.34694% 50%;\n          transform-origin: 67.34694% 50%; }\n\n.panel:nth-child(35),\n.panel:nth-child(35) .panel__inner {\n  -webkit-transform-origin: 69.38776% 50%;\n          transform-origin: 69.38776% 50%; }\n\n.panel:nth-child(36),\n.panel:nth-child(36) .panel__inner {\n  -webkit-transform-origin: 71.42857% 50%;\n          transform-origin: 71.42857% 50%; }\n\n.panel:nth-child(37),\n.panel:nth-child(37) .panel__inner {\n  -webkit-transform-origin: 73.46939% 50%;\n          transform-origin: 73.46939% 50%; }\n\n.panel:nth-child(38),\n.panel:nth-child(38) .panel__inner {\n  -webkit-transform-origin: 75.5102% 50%;\n          transform-origin: 75.5102% 50%; }\n\n.panel:nth-child(39),\n.panel:nth-child(39) .panel__inner {\n  -webkit-transform-origin: 77.55102% 50%;\n          transform-origin: 77.55102% 50%; }\n\n.panel:nth-child(40),\n.panel:nth-child(40) .panel__inner {\n  -webkit-transform-origin: 79.59184% 50%;\n          transform-origin: 79.59184% 50%; }\n\n.panel:nth-child(41),\n.panel:nth-child(41) .panel__inner {\n  -webkit-transform-origin: 81.63265% 50%;\n          transform-origin: 81.63265% 50%; }\n\n.panel:nth-child(42),\n.panel:nth-child(42) .panel__inner {\n  -webkit-transform-origin: 83.67347% 50%;\n          transform-origin: 83.67347% 50%; }\n\n.panel:nth-child(43),\n.panel:nth-child(43) .panel__inner {\n  -webkit-transform-origin: 85.71429% 50%;\n          transform-origin: 85.71429% 50%; }\n\n.panel:nth-child(44),\n.panel:nth-child(44) .panel__inner {\n  -webkit-transform-origin: 87.7551% 50%;\n          transform-origin: 87.7551% 50%; }\n\n.panel:nth-child(45),\n.panel:nth-child(45) .panel__inner {\n  -webkit-transform-origin: 89.79592% 50%;\n          transform-origin: 89.79592% 50%; }\n\n.panel:nth-child(46),\n.panel:nth-child(46) .panel__inner {\n  -webkit-transform-origin: 91.83673% 50%;\n          transform-origin: 91.83673% 50%; }\n\n.panel:nth-child(47),\n.panel:nth-child(47) .panel__inner {\n  -webkit-transform-origin: 93.87755% 50%;\n          transform-origin: 93.87755% 50%; }\n\n.panel:nth-child(48),\n.panel:nth-child(48) .panel__inner {\n  -webkit-transform-origin: 95.91837% 50%;\n          transform-origin: 95.91837% 50%; }\n\n.panel:nth-child(49),\n.panel:nth-child(49) .panel__inner {\n  -webkit-transform-origin: 97.95918% 50%;\n          transform-origin: 97.95918% 50%; }\n\n.panel:nth-child(50),\n.panel:nth-child(50) .panel__inner {\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%; }\n\n/*\n=====================\nANIMATIONS\n=====================\n*/\n/*\nif the total duration is 3 seconds,\nand the delay per panel is 0.1s,\nand there are 50 panels,\nthe 50th panel begins 5s after the first one. \n\nso if i want the wave to go across the entire screen,\nthen wait t seconds, what do all the various pieces have to be?\n\nthe wave moving across the screen should take 3s, let's say.\nthe means the $delay * $numberOfPanels + $waveDuration = 3\n\nThen we should wait 3s before looping...\n\nso the totalDuration should be...\n$waitTime + $waveDurtion + $delay * $numberOfPanels\n*/\n.panel__animater {\n  -webkit-animation-name: shake;\n          animation-name: shake;\n  -webkit-animation-duration: 13s;\n          animation-duration: 13s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n.panel:nth-child(1) .panel__animater {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s; }\n\n.panel:nth-child(2) .panel__animater {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n\n.panel:nth-child(3) .panel__animater {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n\n.panel:nth-child(4) .panel__animater {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s; }\n\n.panel:nth-child(5) .panel__animater {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.panel:nth-child(6) .panel__animater {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; }\n\n.panel:nth-child(7) .panel__animater {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s; }\n\n.panel:nth-child(8) .panel__animater {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s; }\n\n.panel:nth-child(9) .panel__animater {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s; }\n\n.panel:nth-child(10) .panel__animater {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.panel:nth-child(11) .panel__animater {\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s; }\n\n.panel:nth-child(12) .panel__animater {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s; }\n\n.panel:nth-child(13) .panel__animater {\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s; }\n\n.panel:nth-child(14) .panel__animater {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s; }\n\n.panel:nth-child(15) .panel__animater {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s; }\n\n.panel:nth-child(16) .panel__animater {\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s; }\n\n.panel:nth-child(17) .panel__animater {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s; }\n\n.panel:nth-child(18) .panel__animater {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s; }\n\n.panel:nth-child(19) .panel__animater {\n  -webkit-animation-delay: 1.9s;\n          animation-delay: 1.9s; }\n\n.panel:nth-child(20) .panel__animater {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\n.panel:nth-child(21) .panel__animater {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s; }\n\n.panel:nth-child(22) .panel__animater {\n  -webkit-animation-delay: 2.2s;\n          animation-delay: 2.2s; }\n\n.panel:nth-child(23) .panel__animater {\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s; }\n\n.panel:nth-child(24) .panel__animater {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s; }\n\n.panel:nth-child(25) .panel__animater {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s; }\n\n.panel:nth-child(26) .panel__animater {\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s; }\n\n.panel:nth-child(27) .panel__animater {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s; }\n\n.panel:nth-child(28) .panel__animater {\n  -webkit-animation-delay: 2.8s;\n          animation-delay: 2.8s; }\n\n.panel:nth-child(29) .panel__animater {\n  -webkit-animation-delay: 2.9s;\n          animation-delay: 2.9s; }\n\n.panel:nth-child(30) .panel__animater {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n\n.panel:nth-child(31) .panel__animater {\n  -webkit-animation-delay: 3.1s;\n          animation-delay: 3.1s; }\n\n.panel:nth-child(32) .panel__animater {\n  -webkit-animation-delay: 3.2s;\n          animation-delay: 3.2s; }\n\n.panel:nth-child(33) .panel__animater {\n  -webkit-animation-delay: 3.3s;\n          animation-delay: 3.3s; }\n\n.panel:nth-child(34) .panel__animater {\n  -webkit-animation-delay: 3.4s;\n          animation-delay: 3.4s; }\n\n.panel:nth-child(35) .panel__animater {\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s; }\n\n.panel:nth-child(36) .panel__animater {\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s; }\n\n.panel:nth-child(37) .panel__animater {\n  -webkit-animation-delay: 3.7s;\n          animation-delay: 3.7s; }\n\n.panel:nth-child(38) .panel__animater {\n  -webkit-animation-delay: 3.8s;\n          animation-delay: 3.8s; }\n\n.panel:nth-child(39) .panel__animater {\n  -webkit-animation-delay: 3.9s;\n          animation-delay: 3.9s; }\n\n.panel:nth-child(40) .panel__animater {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n\n.panel:nth-child(41) .panel__animater {\n  -webkit-animation-delay: 4.1s;\n          animation-delay: 4.1s; }\n\n.panel:nth-child(42) .panel__animater {\n  -webkit-animation-delay: 4.2s;\n          animation-delay: 4.2s; }\n\n.panel:nth-child(43) .panel__animater {\n  -webkit-animation-delay: 4.3s;\n          animation-delay: 4.3s; }\n\n.panel:nth-child(44) .panel__animater {\n  -webkit-animation-delay: 4.4s;\n          animation-delay: 4.4s; }\n\n.panel:nth-child(45) .panel__animater {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s; }\n\n.panel:nth-child(46) .panel__animater {\n  -webkit-animation-delay: 4.6s;\n          animation-delay: 4.6s; }\n\n.panel:nth-child(47) .panel__animater {\n  -webkit-animation-delay: 4.7s;\n          animation-delay: 4.7s; }\n\n.panel:nth-child(48) .panel__animater {\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s; }\n\n.panel:nth-child(49) .panel__animater {\n  -webkit-animation-delay: 4.9s;\n          animation-delay: 4.9s; }\n\n.panel:nth-child(50) .panel__animater {\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s; }\n\n@-webkit-keyframes shake {\n  1% {\n    -webkit-transform: translateY(-2.44772%);\n            transform: translateY(-2.44772%); }\n  2% {\n    -webkit-transform: translateY(-4.87911%);\n            transform: translateY(-4.87911%); }\n  3% {\n    -webkit-transform: translateY(-7.27798%);\n            transform: translateY(-7.27798%); }\n  4% {\n    -webkit-transform: translateY(-9.62831%);\n            transform: translateY(-9.62831%); }\n  5% {\n    -webkit-transform: translateY(-11.91444%);\n            transform: translateY(-11.91444%); }\n  6% {\n    -webkit-transform: translateY(-14.12112%);\n            transform: translateY(-14.12112%); }\n  7% {\n    -webkit-transform: translateY(-16.23364%);\n            transform: translateY(-16.23364%); }\n  8% {\n    -webkit-transform: translateY(-18.23791%);\n            transform: translateY(-18.23791%); }\n  9% {\n    -webkit-transform: translateY(-20.12057%);\n            transform: translateY(-20.12057%); }\n  10% {\n    -webkit-transform: translateY(-21.86906%);\n            transform: translateY(-21.86906%); }\n  11% {\n    -webkit-transform: translateY(-23.47172%);\n            transform: translateY(-23.47172%); }\n  12% {\n    -webkit-transform: translateY(-24.91788%);\n            transform: translateY(-24.91788%); }\n  13% {\n    -webkit-transform: translateY(-26.19787%);\n            transform: translateY(-26.19787%); }\n  14% {\n    -webkit-transform: translateY(-27.30318%);\n            transform: translateY(-27.30318%); }\n  15% {\n    -webkit-transform: translateY(-28.22642%);\n            transform: translateY(-28.22642%); }\n  16% {\n    -webkit-transform: translateY(-28.96145%);\n            transform: translateY(-28.96145%); }\n  17% {\n    -webkit-transform: translateY(-29.50336%);\n            transform: translateY(-29.50336%); }\n  18% {\n    -webkit-transform: translateY(-29.84853%);\n            transform: translateY(-29.84853%); }\n  19% {\n    -webkit-transform: translateY(-29.99467%);\n            transform: translateY(-29.99467%); }\n  20% {\n    -webkit-transform: translateY(-29.9408%);\n            transform: translateY(-29.9408%); }\n  21% {\n    -webkit-transform: translateY(-29.68728%);\n            transform: translateY(-29.68728%); }\n  22% {\n    -webkit-transform: translateY(-29.23581%);\n            transform: translateY(-29.23581%); }\n  23% {\n    -webkit-transform: translateY(-28.58938%);\n            transform: translateY(-28.58938%); }\n  24% {\n    -webkit-transform: translateY(-27.75232%);\n            transform: translateY(-27.75232%); }\n  25% {\n    -webkit-transform: translateY(-26.7302%);\n            transform: translateY(-26.7302%); }\n  26% {\n    -webkit-transform: translateY(-25.52983%);\n            transform: translateY(-25.52983%); }\n  27% {\n    -webkit-transform: translateY(-24.15924%);\n            transform: translateY(-24.15924%); }\n  28% {\n    -webkit-transform: translateY(-22.62754%);\n            transform: translateY(-22.62754%); }\n  29% {\n    -webkit-transform: translateY(-20.94496%);\n            transform: translateY(-20.94496%); }\n  30% {\n    -webkit-transform: translateY(-19.12272%);\n            transform: translateY(-19.12272%); }\n  31% {\n    -webkit-transform: translateY(-17.17296%);\n            transform: translateY(-17.17296%); }\n  32% {\n    -webkit-transform: translateY(-15.1087%);\n            transform: translateY(-15.1087%); }\n  33% {\n    -webkit-transform: translateY(-12.94368%);\n            transform: translateY(-12.94368%); }\n  34% {\n    -webkit-transform: translateY(-10.69236%);\n            transform: translateY(-10.69236%); }\n  35% {\n    -webkit-transform: translateY(-8.36973%);\n            transform: translateY(-8.36973%); }\n  36% {\n    -webkit-transform: translateY(-5.9913%);\n            transform: translateY(-5.9913%); }\n  37% {\n    -webkit-transform: translateY(-3.57291%);\n            transform: translateY(-3.57291%); }\n  38% {\n    -webkit-transform: translateY(-1.13071%);\n            transform: translateY(-1.13071%); }\n  39% {\n    -webkit-transform: translateY(1.31904%);\n            transform: translateY(1.31904%); } }\n\n@keyframes shake {\n  1% {\n    -webkit-transform: translateY(-2.44772%);\n            transform: translateY(-2.44772%); }\n  2% {\n    -webkit-transform: translateY(-4.87911%);\n            transform: translateY(-4.87911%); }\n  3% {\n    -webkit-transform: translateY(-7.27798%);\n            transform: translateY(-7.27798%); }\n  4% {\n    -webkit-transform: translateY(-9.62831%);\n            transform: translateY(-9.62831%); }\n  5% {\n    -webkit-transform: translateY(-11.91444%);\n            transform: translateY(-11.91444%); }\n  6% {\n    -webkit-transform: translateY(-14.12112%);\n            transform: translateY(-14.12112%); }\n  7% {\n    -webkit-transform: translateY(-16.23364%);\n            transform: translateY(-16.23364%); }\n  8% {\n    -webkit-transform: translateY(-18.23791%);\n            transform: translateY(-18.23791%); }\n  9% {\n    -webkit-transform: translateY(-20.12057%);\n            transform: translateY(-20.12057%); }\n  10% {\n    -webkit-transform: translateY(-21.86906%);\n            transform: translateY(-21.86906%); }\n  11% {\n    -webkit-transform: translateY(-23.47172%);\n            transform: translateY(-23.47172%); }\n  12% {\n    -webkit-transform: translateY(-24.91788%);\n            transform: translateY(-24.91788%); }\n  13% {\n    -webkit-transform: translateY(-26.19787%);\n            transform: translateY(-26.19787%); }\n  14% {\n    -webkit-transform: translateY(-27.30318%);\n            transform: translateY(-27.30318%); }\n  15% {\n    -webkit-transform: translateY(-28.22642%);\n            transform: translateY(-28.22642%); }\n  16% {\n    -webkit-transform: translateY(-28.96145%);\n            transform: translateY(-28.96145%); }\n  17% {\n    -webkit-transform: translateY(-29.50336%);\n            transform: translateY(-29.50336%); }\n  18% {\n    -webkit-transform: translateY(-29.84853%);\n            transform: translateY(-29.84853%); }\n  19% {\n    -webkit-transform: translateY(-29.99467%);\n            transform: translateY(-29.99467%); }\n  20% {\n    -webkit-transform: translateY(-29.9408%);\n            transform: translateY(-29.9408%); }\n  21% {\n    -webkit-transform: translateY(-29.68728%);\n            transform: translateY(-29.68728%); }\n  22% {\n    -webkit-transform: translateY(-29.23581%);\n            transform: translateY(-29.23581%); }\n  23% {\n    -webkit-transform: translateY(-28.58938%);\n            transform: translateY(-28.58938%); }\n  24% {\n    -webkit-transform: translateY(-27.75232%);\n            transform: translateY(-27.75232%); }\n  25% {\n    -webkit-transform: translateY(-26.7302%);\n            transform: translateY(-26.7302%); }\n  26% {\n    -webkit-transform: translateY(-25.52983%);\n            transform: translateY(-25.52983%); }\n  27% {\n    -webkit-transform: translateY(-24.15924%);\n            transform: translateY(-24.15924%); }\n  28% {\n    -webkit-transform: translateY(-22.62754%);\n            transform: translateY(-22.62754%); }\n  29% {\n    -webkit-transform: translateY(-20.94496%);\n            transform: translateY(-20.94496%); }\n  30% {\n    -webkit-transform: translateY(-19.12272%);\n            transform: translateY(-19.12272%); }\n  31% {\n    -webkit-transform: translateY(-17.17296%);\n            transform: translateY(-17.17296%); }\n  32% {\n    -webkit-transform: translateY(-15.1087%);\n            transform: translateY(-15.1087%); }\n  33% {\n    -webkit-transform: translateY(-12.94368%);\n            transform: translateY(-12.94368%); }\n  34% {\n    -webkit-transform: translateY(-10.69236%);\n            transform: translateY(-10.69236%); }\n  35% {\n    -webkit-transform: translateY(-8.36973%);\n            transform: translateY(-8.36973%); }\n  36% {\n    -webkit-transform: translateY(-5.9913%);\n            transform: translateY(-5.9913%); }\n  37% {\n    -webkit-transform: translateY(-3.57291%);\n            transform: translateY(-3.57291%); }\n  38% {\n    -webkit-transform: translateY(-1.13071%);\n            transform: translateY(-1.13071%); }\n  39% {\n    -webkit-transform: translateY(1.31904%);\n            transform: translateY(1.31904%); } }\n\n/*\n=====================\nCOLOR CODING\n=====================\n*/\n.container {\n  background: black; }\n\n/*\n=====================\nTYPOGRAPHY\n=====================\n*/\n.container {\n  font-family: sans-serif;\n  text-align: center; }\n\nh1 {\n  font-size: 13.5vw;\n  font-weight: bold; }\n\nh3 {\n  font-size: 5vw;\n  font-weight: bold; }\n\np {\n  font-size: 14px;\n  padding: 1em;\n  font-weight: bold;\n  color: white; }\n\nspan {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  padding: 0.23em 0.35em 0; }\n\n.bar {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  text-align: center; }\n  .bar:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    left: 0;\n    display: block;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n.bar--top {\n  top: 0; }\n  .bar--top:after {\n    bottom: -2px; }\n\n.bar--bottom {\n  bottom: 0; }\n  .bar--bottom:after {\n    top: -2px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/sketches/slice-n-dice/img/noise-bg.gif":
/*!****************************************************!*\
  !*** ./src/sketches/slice-n-dice/img/noise-bg.gif ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./noise-bg.gif";

/***/ }),

/***/ "./src/sketches/slice-n-dice/js/dayglow.js":
/*!*************************************************!*\
  !*** ./src/sketches/slice-n-dice/js/dayglow.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movement */ "./src/sketches/slice-n-dice/js/movement.js");
__webpack_require__(/*! ../scss/dayglow.scss */ "./src/sketches/slice-n-dice/scss/dayglow.scss");


document.addEventListener('DOMContentLoaded', _movement__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/sketches/slice-n-dice/js/movement.js":
/*!**************************************************!*\
  !*** ./src/sketches/slice-n-dice/js/movement.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util */ "./src/util/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var a = window.innerWidth * 0.9 / 2;
var A = window.innerWidth;
var b = window.innerHeight * 0.9 / 2;
var B = window.innerHeight;

var getPointAlongEllipse = function getPointAlongEllipse() {
  var iteration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  /*
    (h, k) = center
    a = horizontal radius
    b = vertical radius
  */
  var angle = iteration % 360 * (Math.PI / 180);
  var x = (a * Math.cos(angle) + a) / A + 0.05;
  var y = (b * Math.sin(angle) + b) / B + 0.05;
  return {
    x: x,
    y: y
  };
};

var pointToPositions = function pointToPositions(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var topLeftScale = [x, y];
  var topRightScale = [1 - x, y];
  var bottomRightScale = [1 - x, 1 - y];
  var bottomLeftScale = [x, 1 - y];
  var inverseScales = [topLeftScale, topRightScale, bottomRightScale, bottomLeftScale].map(function (s) {
    return s.map(function (p) {
      return 1 / p;
    });
  });

  var _inverseScales = _slicedToArray(inverseScales, 4),
      topLeftInverseScale = _inverseScales[0],
      topRightInverseScale = _inverseScales[1],
      bottomRightInverseScale = _inverseScales[2],
      bottomLeftInverseScale = _inverseScales[3];

  return [[topLeftScale, topLeftInverseScale], [topRightScale, topRightInverseScale], [bottomLeftScale, bottomLeftInverseScale], [bottomRightScale, bottomRightInverseScale]];
};

var pointToScales = function pointToScales(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      scaleArr = _ref3[0],
      inverseScaleArr = _ref3[1];

  return {
    scale: scaleArr.map(function (s) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 4);
    }).join(', '),
    inverseScale: inverseScaleArr.map(function (s) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(s, 4);
    }).join(', ')
  };
};

var RAF;
var LOOPING = true;
var INTERVAL = 1000 / 60;

var animate = function animate(panels) {
  var iteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // debugger;
  var point = getPointAlongEllipse(iteration);
  var positions = pointToPositions(point);
  var scales = positions.map(pointToScales);
  requestAnimationFrame(function () {
    panels.forEach(function (_ref4, index) {
      var inner = _ref4.inner,
          outer = _ref4.outer;
      outer.style.transform = "scale(".concat(scales[index].scale, ")");
      inner.style.transform = "scale(".concat(scales[index].inverseScale, ")");
    });
  });

  if (LOOPING) {
    setTimeout(function () {
      animate(panels, iteration + 1);
    }, INTERVAL);
  }
};

var keyframesToAnimationDefinition = function keyframesToAnimationDefinition(name, keyframes) {
  return "@keyframes ".concat(name, " { ").concat(keyframes, " }");
};

var constructCSSAnimations = function constructCSSAnimations() {
  var numberOfKeyframes = 100;
  var baseObject = Array.from({
    length: 4
  }).map(function (_, index) {
    return {
      outerAnimationName: "scale".concat(index, "outer"),
      innerAnimationName: "scale".concat(index, "inner"),
      outerKeyframes: '',
      innerKeyframes: ''
    };
  });
  var keyframes = Array.from({
    length: numberOfKeyframes
  }).reduce(function (acc, _, keyframeIndex) {
    var percentageValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(keyframeIndex / (numberOfKeyframes - 1) * 100, 0);
    var point = getPointAlongEllipse(keyframeIndex / numberOfKeyframes * 360);
    var points = pointToPositions(point);
    var scales = points.map(pointToScales);
    scales.forEach(function (_ref5, scaleIndex) {
      var scale = _ref5.scale,
          inverseScale = _ref5.inverseScale;
      acc[scaleIndex].outerKeyframes += "".concat(percentageValue, "% { transform: scale(").concat(scale, "); }");
      acc[scaleIndex].innerKeyframes += "".concat(percentageValue, "% { transform: scale(").concat(inverseScale, "); }");
    });
    return acc;
  }, baseObject);
  var animationCSS = keyframes.map(function (config) {
    var outerAnimation = keyframesToAnimationDefinition(config.outerAnimationName, config.outerKeyframes);
    var innerAnimation = keyframesToAnimationDefinition(config.innerAnimationName, config.innerKeyframes);
    return outerAnimation + innerAnimation;
  }).join('');
  var style = document.createElement('style');
  style.innerHTML = animationCSS;
  document.body.appendChild(style);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var panels = Array.from(document.querySelectorAll('.panel')).map(function (outer) {
    var inner = outer.querySelector('.panel__inner');
    return {
      outer: outer,
      inner: inner
    };
  }); // animate(panels);

  constructCSSAnimations();
});

/***/ }),

/***/ "./src/sketches/slice-n-dice/scss/dayglow.scss":
/*!*****************************************************!*\
  !*** ./src/sketches/slice-n-dice/scss/dayglow.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/lib/loader.js!./dayglow.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/sketches/slice-n-dice/scss/dayglow.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: roundTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundTo", function() { return roundTo; });
var roundTo = function roundTo(number) {
  var numOfDecPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var power = Math.pow(10, numOfDecPlaces);
  return Math.round(number * power) / power;
};



/***/ })

/******/ });
//# sourceMappingURL=slice-n-dice (dayglow).js.map