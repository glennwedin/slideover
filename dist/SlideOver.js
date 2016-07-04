/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	//import "!style!css!sass!./style.scss";

	var SlideOver = function SlideOver(el) {
	  this.el = el;

	  var maxwidth = 0;

	  //Generate html
	  var comparison = document.createElement('div'),
	      figure = document.createElement('figure'),
	      divisor = document.createElement('div'),
	      dragger = document.createElement('div');

	  comparison.id = "comparison";
	  divisor.id = "divisor";
	  dragger.className = "dragger";

	  figure.appendChild(divisor);
	  comparison.appendChild(figure);
	  comparison.appendChild(dragger);

	  this.el.appendChild(comparison);

	  //Set events
	  this.init = function () {
	    var _this = this;

	    var settings = arguments.length <= 0 || arguments[0] === undefined ? {
	      imageOne: null,
	      imageTwo: null
	    } : arguments[0];


	    if (!settings.imageOne || !settings.imageTwo) {
	      throw 'Nei';
	    }

	    this.pos = 50;
	    var th = this;

	    var p1 = new Promise(function (resolve, reject) {
	      var img1 = new Image();
	      img1.onload = function () {
	        resolve(img1);
	      };
	      img1.src = settings.imageOne;
	    });
	    var p2 = new Promise(function (resolve, reject) {
	      var img2 = new Image();
	      img2.onload = function () {
	        resolve(img2);
	      };
	      img2.src = settings.imageTwo;
	    });

	    Promise.all([p1, p2]).then(function (img) {
	      divisor.appendChild(img[0]);
	      figure.appendChild(img[1]);
	      maxwidth = _this.el.offsetWidth;
	      img[0].style.width = maxwidth + 'px';
	      //Mousedrag
	      dragger.addEventListener('mousedown', function (e) {
	        //moveDivisor(e);
	        document.body.addEventListener('mousemove', moveDivisor);
	      });
	      document.body.addEventListener('mouseup', function (e) {
	        document.body.removeEventListener('mousemove', moveDivisor);
	      });

	      //Touch
	      dragger.addEventListener('touchstart', function (e) {
	        //moveDivisor(e);
	        document.body.addEventListener('touchmove', moveDivisor);
	      });
	      document.body.addEventListener('touchend', function (e) {
	        document.body.removeEventListener('touchmove', moveDivisor);
	      });

	      //window resize
	      document.body.addEventListener('resize', function () {
	        //reset
	        divisor.style.width = this.pos + "%";
	        dragger.style.left = this.pos + "%";
	      });

	      divisor.style.width = _this.pos + "%";
	      dragger.style.left = _this.pos + "%";
	      comparison.style.opacity = "1";
	    });
	  };

	  var moveDivisor = function moveDivisor(e) {
	    var divisor = document.getElementById('divisor');
	    if (e.touches) {
	      this.pos = (e.touches[0].clientX - 4) / maxwidth * 100;
	    } else {
	      this.pos = (e.clientX - 4) / maxwidth * 100;
	    }
	    if (this.pos > 100) {
	      this.pos = 100;
	    }
	    if (this.pos < 0) {
	      this.pos = 0;
	    }

	    divisor.style.width = this.pos + "%";
	    dragger.style.left = this.pos + "%";
	  };
	};

	//export default SlideOver;

	/*
	var Slideover = require('slideover');
	var s = new Slideover(el);
	*/

/***/ }
/******/ ]);