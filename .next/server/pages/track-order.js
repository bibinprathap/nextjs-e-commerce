module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("INhS");


/***/ }),

/***/ "INhS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gOg4");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("efsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application




function Page() {
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "bmw parts in dubai|Ras Al Khaimah|sharjah|abudhabi|umm al quwain",
    description: "Royal Auto parts Market is one of the superior car auto spare parts online trade uae and all over the world.We provide genuine products for the users."
  }), __jsx(_components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    layout: "after-header"
  }), __jsx("div", {
    className: "block"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4"
  }, __jsx("div", {
    className: "card ml-md-3 mr-md-3"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h1", {
    className: "card-title card-title--lg"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "HEADER_TRACK_ORDER"
  })), __jsx("p", {
    className: "mb-4"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "TEXT_TRACK_ORDER_HELP"
  })), __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "track-order-id"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "INPUT_ORDER_ID_LABEL"
  })), __jsx("input", {
    id: "track-order-id",
    type: "text",
    className: "form-control",
    placeholder: intl.formatMessage({
      id: 'INPUT_ORDER_ID_PLACEHOLDER'
    })
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "track-email"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "INPUT_EMAIL_ADDRESS_LABEL"
  })), __jsx("input", {
    id: "track-email",
    type: "email",
    className: "form-control",
    placeholder: intl.formatMessage({
      id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER'
    })
  })), __jsx("div", {
    className: "form-group pt-4 mb-1"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-primary btn-lg btn-block"
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "BUTTON_TRACK"
  })))))))))), __jsx(_components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    layout: "before-footer"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "gOg4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party



function BlockSpace(props) {
  const {
    layout,
    className
  } = props,
        rootProps = _objectWithoutProperties(props, ["layout", "className"]);

  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-space', `block-space--layout--${layout}`, className);
  return __jsx("div", _extends({
    className: rootClasses
  }, rootProps));
}

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BlockSpace));

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ })

/******/ });