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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_base_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_develop_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_develop_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dist_develop_html__);
// Js Files
/* import './js/scripts.js'; */

// Scss Files


// Html Files


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"tr\">\n\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n\t<title>Document</title>\n\t<link rel=\"stylesheet\" href=\"assets/libs/bootstrap/css/bootstrap.min.css\">\n\t<link rel=\"stylesheet\" href=\"assets/libs/wow/animate.css\">\n\t<link rel=\"stylesheet\" href=\"assets/libs/swiper/swiper.min.css\">\n\t<link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n\t<header>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<nav class=\"navbar navbar-default nav-menu\" role=\"navigation\">\n\t\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"#\">\n\t\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t\t\t<img class=\"static-logo\" src=\"assets/images/logo.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<img class=\"moving-logo\" src=\"assets/images/logo-umbrella.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t\t<div class=\"collapse navbar-collapse navbar-ex1-collapse text-center\">\n\t\t\t\t\t\t\t<ul id=\"blue\" class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"index.html\" class=\"blue\">Anasayfa</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"about.html\" class=\"yellow\">Hakkımızda</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"education.html\" class=\"red\">Eğitim</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"guidance.html\" class=\"green\">Rehberlik</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"contact.html\" class=\"purple\">İletişim</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"language\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">EN</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 pad-0\">\n\t\t\t\t\t<div class=\"header-image border-red\" style=\"background-image: url(assets/images/about-header.jpg);\">\n\t\t\t\t\t\t<h1>Başarımızın sırrıs\n\t\t\t\t\t\t\t<br>detaylarda saklıdır.</h1>\n\t\t\t\t\t\t<img src=\"assets/images/header-arrow.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<main id=\"about\"></main>\n\t<footer>\n\t\t<a href=\"#\">\n\t\t\t<img class=\"scrol-up\" src=\"assets/images/index-arrow.png\" alt=\"\">\n\t\t</a>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<ul class=\"list\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Anasayfa</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-padding\">\n\t\t\t\t\t\t\t<a href=\"#\">Hakkımızda</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-padding\">\n\t\t\t\t\t\t\t<a href=\"#\">Eğitim</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-padding\">\n\t\t\t\t\t\t\t<a href=\"#\">Rehberlik</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">İletişim</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<span>© 2017 Tüm hakları saklıdır. Designed By Mandal AJANS</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-5 col-sm-offset-1\">\n\t\t\t\t\t<div class=\"footer-logos\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/footer-recycling.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer-logos\">\n\t\t\t\t\t\t<img src=\"assets/images/footer-clean.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer-logos\">\n\t\t\t\t\t\t<img src=\"assets/images/footer-tree.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t\t</div>\n\t</footer>\n\t<script src=\"assets/libs/jquery/js/jquery-3.2.1.min.js\"></script>\n\t<script src=\"assets/libs/bootstrap/js/bootstrap.min.js\"></script>\n\t<script src=\"assets/libs/swiper/swiper.min.js\"></script>\n\t<script src=\"assets/libs/wow/wow.min.js\"></script>\n\t<script src=\"../src/js/script.js\"></script>\n\t<script>\n\t\tnew WOW().init();\n\t</script>\n</body>\n\n</html>"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);