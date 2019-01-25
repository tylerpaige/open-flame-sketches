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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketches/plur/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/sketches/plur/scss/styles.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/sketches/plur/scss/styles.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n  display: none; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbody {\n  height: 100vh; }\n\nbody {\n  background: #60B28F;\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-aspect-ratio: 1 / 1) {\n  body {\n    flex-direction: column; } }\n\n.grid {\n  flex: 1 1 75%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: hidden; }\n  .row:first-child {\n    height: 60.52632%; }\n  .row:last-child {\n    height: 39.47368%; }\n\n.cell {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 11%;\n  position: relative;\n  margin: 0 5px;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate; }\n\n.cell--n {\n  margin-right: 25px; }\n\n.cell--f {\n  margin-left: 25px; }\n\n.letter {\n  position: absolute;\n  left: 0;\n  width: 100%; }\n  .row:first-child .letter {\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    top: 0; }\n  .row:last-child .letter {\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom;\n    bottom: 0; }\n\n.row .cell {\n  -webkit-animation-duration: 20s;\n          animation-duration: 20s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate; }\n\n.row:first-child .cell {\n  -webkit-animation-name: squishTop;\n          animation-name: squishTop;\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.row:last-child .cell {\n  -webkit-animation-name: squishBottom;\n          animation-name: squishBottom;\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.letter svg path {\n  fill: #F5BF41;\n  stroke: #6EF17E;\n  stroke-width: 1px; }\n\n.row:first-child .cell:nth-child(1) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.row:last-child .cell:nth-child(1) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.row:first-child .cell:nth-child(2) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.row:last-child .cell:nth-child(2) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.row:first-child .cell:nth-child(3) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s; }\n\n.row:last-child .cell:nth-child(3) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s; }\n\n.row:first-child .cell:nth-child(4) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\n.row:last-child .cell:nth-child(4) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\n.row:first-child .cell:nth-child(5) {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s; }\n\n.row:last-child .cell:nth-child(5) {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s; }\n\n.row:first-child .cell:nth-child(6) {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n\n.row:last-child .cell:nth-child(6) {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n\n.row:first-child .cell:nth-child(7) {\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s; }\n\n.row:last-child .cell:nth-child(7) {\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s; }\n\n.row:first-child .cell:nth-child(8) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n\n.row:last-child .cell:nth-child(8) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n\n.row:first-child .cell:nth-child(9) {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s; }\n\n.row:last-child .cell:nth-child(9) {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s; }\n\n@-webkit-keyframes squishTop {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  25% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1); }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@keyframes squishTop {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  25% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1); }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@-webkit-keyframes squishBottom {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  75% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1); }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@keyframes squishBottom {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  75% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1); }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\nmain {\n  flex: 1 1 25%;\n  padding: 10px;\n  background: #F5BF41;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center; }\n\n@media screen and (max-aspect-ratio: 1 / 1) {\n  main {\n    flex-grow: 0;\n    flex-shrink: 0; } }\n\nh1 {\n  font-size: 20px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 1em; }\n\nh1 img {\n  width: 100%;\n  max-width: 320px; }\n\np.dek {\n  font-style: italic;\n  font-weight: bold; }\n\np {\n  font-size: 19px;\n  margin-bottom: 1em; }\n\n@media screen and (min-width: 450px) {\n  p {\n    font-size: 24px; } }\n\na,\na:link,\na:visited {\n  color: black;\n  text-decoration: none;\n  border-bottom: 2px dashed black; }\n\n/*\n\nrepeating-linear-gradient(45deg, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 8px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 8px)\n\n*/\nbody.flames {\n  background: #ebede6;\n  /*\n    Top row will be warm hues\n  */\n  /*\n    Bottom row will be warm hues\n  */ }\n  body.flames .row:first-child .cell:nth-child(1) .letter svg path {\n    fill: #EF9124;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(1) .letter svg path {\n    fill: #74b6d0;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(2) .letter svg path {\n    fill: #d0b443;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(2) .letter svg path {\n    fill: #17a576;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(3) .letter svg path {\n    fill: #e5cad1;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(3) .letter svg path {\n    fill: #a5c69c;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(4) .letter svg path {\n    fill: #e29f8f;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(4) .letter svg path {\n    fill: #8493b1;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(5) .letter svg path {\n    fill: #BA4848;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(5) .letter svg path {\n    fill: #c9c7ed;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(6) .letter svg path {\n    fill: #EF9124;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(6) .letter svg path {\n    fill: #064bd3;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(7) .letter svg path {\n    fill: #d0b443;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(7) .letter svg path {\n    fill: #74b6d0;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(8) .letter svg path {\n    fill: #e5cad1;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(8) .letter svg path {\n    fill: #17a576;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:first-child .cell:nth-child(9) .letter svg path {\n    fill: #e29f8f;\n    stroke-width: 2px;\n    stroke: #333; }\n  body.flames .row:last-child .cell:nth-child(9) .letter svg path {\n    fill: #a5c69c;\n    stroke-width: 2px;\n    stroke: #333; }\n\nbody.red-and-blue main {\n  background: #c1b6fd;\n  color: #000da4; }\n\nbody.red-and-blue .grid {\n  background-color: #c9431f; }\n\nbody.red-and-blue .letter svg path {\n  fill: #c3c1e5;\n  stroke: #000da4; }\n\nbody.red-and-blue .letter svg path {\n  -webkit-animation-name: shimmerText;\n          animation-name: shimmerText;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  stroke-width: 0.6px; }\n\nbody.red-and-blue .cell:nth-child(1) .letter svg path {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\nbody.red-and-blue .cell:nth-child(2) .letter svg path {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n\nbody.red-and-blue .cell:nth-child(3) .letter svg path {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n\nbody.red-and-blue .cell:nth-child(4) .letter svg path {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n\nbody.red-and-blue .cell:nth-child(5) .letter svg path {\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s; }\n\nbody.red-and-blue .cell:nth-child(6) .letter svg path {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s; }\n\nbody.red-and-blue .cell:nth-child(7) .letter svg path {\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s; }\n\nbody.red-and-blue .cell:nth-child(8) .letter svg path {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s; }\n\nbody.red-and-blue .cell:nth-child(9) .letter svg path {\n  -webkit-animation-delay: 9s;\n          animation-delay: 9s; }\n\nbody.red-and-blue .grid {\n  -webkit-animation-name: shimmerArtBackground;\n          animation-name: shimmerArtBackground;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes shimmerText {\n  0% {\n    fill: #c3c1e5; }\n  100% {\n    fill: #C1B5FF; } }\n\n@keyframes shimmerText {\n  0% {\n    fill: #c3c1e5; }\n  100% {\n    fill: #C1B5FF; } }\n\n@-webkit-keyframes shimmerArtBackground {\n  0% {\n    background-color: #c9431f; }\n  100% {\n    background-color: #BC4745; } }\n\n@keyframes shimmerArtBackground {\n  0% {\n    background-color: #c9431f; }\n  100% {\n    background-color: #BC4745; } }\n", ""]);



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

/***/ "./src/sketches/plur/js/index.js":
/*!***************************************!*\
  !*** ./src/sketches/plur/js/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/sketches/plur/js/util.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

__webpack_require__(/*! ../scss/styles.scss */ "./src/sketches/plur/scss/styles.scss");



var init = function init() {
  var container = document.querySelector('.grid');
  var containerBBox = container.getBoundingClientRect();
  var letters = document.querySelectorAll('.letter');
  var letterBBox = letters[0].getBoundingClientRect();
  var scaleY = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["roundTo"])(containerBBox.height / letterBBox.height, 2);

  _toConsumableArray(letters).forEach(function (letter) {
    letter.style.transform = "scaleY(".concat(scaleY, ")");
  });
};

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/sketches/plur/js/util.js":
/*!**************************************!*\
  !*** ./src/sketches/plur/js/util.js ***!
  \**************************************/
/*! exports provided: roundTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundTo", function() { return roundTo; });
var roundTo = function roundTo(number) {
  var numOfDecPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var power = Math.pow(10, 2);
  return Math.round(number * power) / power;
};



/***/ }),

/***/ "./src/sketches/plur/scss/styles.scss":
/*!********************************************!*\
  !*** ./src/sketches/plur/scss/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/sketches/plur/scss/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=plur (candy flames).js.map