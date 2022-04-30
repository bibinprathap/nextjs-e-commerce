module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+L6p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_NAMESPACE; });
// application
const SHOP_NAMESPACE = 'shop';

/***/ }),

/***/ "0QaZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export applyClientState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useApplyClientState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withClientState; });
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Zlw4");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// third-party
// application

const APPLY_CLIENT_STATE = 'APPLY_CLIENT_STATE';

function isApplyClientStateAction(action) {
  return action.type === APPLY_CLIENT_STATE;
}

function applyClientState(state) {
  return {
    type: APPLY_CLIENT_STATE,
    state
  };
}
const useApplyClientState = () => Object(_store_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useAppAction */ "a"])(applyClientState);
function withClientState(reducer, namespace) {
  return (state, action) => {
    const childState = reducer(state, action);

    if (isApplyClientStateAction(action)) {
      return _objectSpread(_objectSpread({}, action.state[namespace] || childState), {}, {
        stateFrom: 'client'
      });
    }

    if ('stateFrom' in childState) {
      return childState;
    }

    return _objectSpread(_objectSpread({}, childState), {}, {
      stateFrom: 'server'
    });
  };
}

/***/ }),

/***/ "1Zh7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENQUIRY_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENQUIRY_CLOSE; });
// application
const ENQUIRY_OPEN = 'ENQUIRY_OPEN';
const ENQUIRY_CLOSE = 'ENQUIRY_CLOSE';

/***/ }),

/***/ "4PPU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optionsSetAll; });
/* harmony import */ var _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AZBb");
/* eslint-disable import/prefer-default-export */
// application

function optionsSetAll(options) {
  return {
    type: _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* OPTIONS_SET_ALL */ "b"],
    options
  };
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Hqnj");


/***/ }),

/***/ "9Rzb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataShopDefaultCurrency; });
// application
const dataShopCurrencies = [{
  code: 'EUR',
  symbol: '€',
  name: 'Euro',
  rate: 0.23
}, {
  code: 'GBP',
  symbol: '£',
  name: 'Pound Sterling',
  rate: 0.21
}, {
  code: 'USD',
  symbol: '$',
  name: 'US Dollar',
  rate: 3.67
}, {
  code: 'RUB',
  symbol: '₽',
  name: 'Russian Ruble',
  rate: 20.90
}, {
  code: 'AED',
  symbol: 'AED',
  name: 'AED',
  rate: 1
}];
const dataShopDefaultCurrencyCode = 'AED';
const dataShopDefaultCurrency = dataShopCurrencies.find(x => x.code === dataShopDefaultCurrencyCode);
/* harmony default export */ __webpack_exports__["b"] = (dataShopCurrencies);

/***/ }),

/***/ "AZBb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS_HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPTIONS_SET_ALL; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_options_optionsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ehF+");
// third-party
 // application


const OPTIONS_HYDRATE = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"];
const OPTIONS_SET_ALL = 'OPTIONS_SET_ALL';

/***/ }),

/***/ "AdE6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUICKVIEW_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return quickviewReducer; });
/* harmony import */ var _store_quickview_quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BqYR");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  open: false,
  product: null
};
const QUICKVIEW_NAMESPACE = 'quickview';
function quickviewReducer(state = initialState, action) {
  let newState = state;

  if (action.type === _store_quickview_quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* QUICKVIEW_OPEN */ "b"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: true,
      product: JSON.parse(JSON.stringify(action.product))
    });
  } else if (action.type === _store_quickview_quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* QUICKVIEW_CLOSE */ "a"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: false
    });
  }

  return newState;
}

/***/ }),

/***/ "AdQK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CART_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CART_UPDATE_QUANTITIES; });
// application
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_UPDATE_QUANTITIES = 'CART_UPDATE_QUANTITIES';

/***/ }),

/***/ "BEkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPARE_NAMESPACE; });
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0QaZ");
/* harmony import */ var _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HCyF");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



function addItem(state, product) {
  const itemIndex = state.items.findIndex(x => x.id === product.id);

  if (itemIndex === -1) {
    return {
      items: [...state.items, JSON.parse(JSON.stringify(product))]
    };
  }

  return state;
}

function removeItem(state, productId) {
  return {
    items: state.items.filter(x => x.id !== productId)
  };
}

function clear(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    items: []
  });
}

const initialState = {
  items: []
};
const COMPARE_NAMESPACE = 'compare';

function compareBaseReducer(state = initialState, action) {
  switch (action.type) {
    case _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__[/* COMPARE_ADD_ITEM */ "a"]:
      return addItem(state, action.product);

    case _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__[/* COMPARE_REMOVE_ITEM */ "c"]:
      return removeItem(state, action.productId);

    case _store_compare_compareActionTypes__WEBPACK_IMPORTED_MODULE_1__[/* COMPARE_CLEAR */ "b"]:
      return clear(state);

    default:
      return state;
  }
}

const compareReducer = Object(_store_client__WEBPACK_IMPORTED_MODULE_0__[/* withClientState */ "b"])(compareBaseReducer, COMPARE_NAMESPACE);
/* harmony default export */ __webpack_exports__["b"] = (compareReducer);

/***/ }),

/***/ "Bi1y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY_CHANGE; });
// application
const CURRENCY_CHANGE = 'CURRENCY_CHANGE';

/***/ }),

/***/ "BqYR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QUICKVIEW_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUICKVIEW_CLOSE; });
// application
const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

/***/ }),

/***/ "C+jY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_NAMESPACE; });
/* harmony import */ var _store_user_userActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YD2w");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  current: null
};
const USER_NAMESPACE = 'user';

function userReducer(state = initialState, action) {
  switch (action.type) {
    case _store_user_userActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* USER_SET_CURRENT */ "a"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["b"] = (userReducer);

/***/ }),

/***/ "FEOJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY_NAMESPACE; });
/* harmony import */ var _store_currency_currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bi1y");
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0QaZ");
/* harmony import */ var _data_shopCurrencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Rzb");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

 // data


const initialState = {
  current: _data_shopCurrencies__WEBPACK_IMPORTED_MODULE_2__[/* dataShopDefaultCurrency */ "a"]
};
const CURRENCY_NAMESPACE = 'currency';

function currencyBaseReducer(state = initialState, action) {
  if (action.type === _store_currency_currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CURRENCY_CHANGE */ "a"] && state.current.code !== action.currency.code) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: JSON.parse(JSON.stringify(action.currency))
    });
  }

  return state;
}

const currencyReducer = Object(_store_client__WEBPACK_IMPORTED_MODULE_1__[/* withClientState */ "b"])(currencyBaseReducer, CURRENCY_NAMESPACE);
/* harmony default export */ __webpack_exports__["b"] = (currencyReducer);

/***/ }),

/***/ "HCyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPARE_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COMPARE_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPARE_CLEAR; });
// application
const COMPARE_ADD_ITEM = 'COMPARE_ADD_ITEM';
const COMPARE_REMOVE_ITEM = 'COMPARE_REMOVE_ITEM';
const COMPARE_CLEAR = 'COMPARE_CLEAR';

/***/ }),

/***/ "Hqnj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_options_optionsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4PPU");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uFCc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application



const getServerSideProps = _store_store__WEBPACK_IMPORTED_MODULE_2__[/* wrapper */ "b"].getServerSideProps(async context => {
  const dispatch = context.store.dispatch;
  await dispatch(Object(_store_options_optionsActions__WEBPACK_IMPORTED_MODULE_1__[/* optionsSetAll */ "a"])({
    desktopHeaderVariant: 'classic/one',
    mobileHeaderVariant: 'one'
  }));
});

function Page() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Neop":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_MENU_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mobileMenuReducer; });
/* harmony import */ var _store_mobile_menu_mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Wjoj");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  open: false
};
const MOBILE_MENU_NAMESPACE = 'mobileMenu';
function mobileMenuReducer(state = initialState, action) {
  switch (action.type) {
    case _store_mobile_menu_mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* MOBILE_MENU_OPEN */ "b"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        open: true
      });

    case _store_mobile_menu_mobileMenuActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* MOBILE_MENU_CLOSE */ "a"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        open: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "Pbem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOP_HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOP_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_FETCH_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOP_FETCH_PRODUCTS_LIST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHOP_FETCH_PRODUCTS_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SHOP_SET_OPTION_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOP_SET_FILTER_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOP_RESET_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOP_RESET_FILTER; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_shop_shopTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+L6p");
// third-party
 // application


const SHOP_HYDRATE = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"];
const SHOP_INIT = 'SHOP_INIT';
const SHOP_FETCH_CATEGORY_SUCCESS = 'SHOP_FETCH_CATEGORY_SUCCESS';
const SHOP_FETCH_PRODUCTS_LIST_START = 'SHOP_FETCH_PRODUCTS_LIST_START';
const SHOP_FETCH_PRODUCTS_LIST_SUCCESS = 'SHOP_FETCH_PRODUCTS_LIST_SUCCESS';
const SHOP_SET_OPTION_VALUE = 'SHOP_SET_OPTION_VALUE';
const SHOP_SET_FILTER_VALUE = 'SHOP_SET_FILTER_VALUE';
const SHOP_RESET_FILTERS = 'SHOP_RESET_FILTERS';
const SHOP_RESET_FILTER = 'SHOP_RESET_FILTER';

/***/ }),

/***/ "WQ/t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GARAGE_SET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GARAGE_SET_CURRENT; });
// application
const GARAGE_SET_ITEMS = 'GARAGE_SET_ITEMS';
const GARAGE_SET_CURRENT = 'GARAGE_SET_CURRENT';

/***/ }),

/***/ "Wjoj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOBILE_MENU_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_MENU_CLOSE; });
const MOBILE_MENU_OPEN = 'MOBILE_MENU_OPEN';
const MOBILE_MENU_CLOSE = 'MOBILE_MENU_CLOSE';

/***/ }),

/***/ "Xsyg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENQUIRY_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enquiryReducer; });
/* harmony import */ var _store_enquiry_enquiryActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Zh7");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  open: false,
  product: null
};
const ENQUIRY_NAMESPACE = 'enquiry';
function enquiryReducer(state = initialState, action) {
  let newState = state;

  if (action.type === _store_enquiry_enquiryActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ENQUIRY_OPEN */ "b"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: true,
      product: JSON.parse(JSON.stringify(action.product))
    });
  } else if (action.type === _store_enquiry_enquiryActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ENQUIRY_CLOSE */ "a"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: false
    });
  }

  return newState;
}

/***/ }),

/***/ "YD2w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_SET_CURRENT; });
// application
const USER_SET_CURRENT = 'USER_SET_CURRENT';

/***/ }),

/***/ "ZHIE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WISHLIST_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WISHLIST_REMOVE_ITEM; });
// application
const WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM';
const WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM';

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "Zlw4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAppAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useIsUnmountedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
// react
 // third-party

 // application

function useAppAction(action) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...args) => dispatch(action(...args)), []);
}
function useAppSelector(selector) {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(selector);
}
function useMedia(query) {
  if (true) {
    return false;
  }

  const media = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => window.matchMedia(query), [query]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(media.matches);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onChangeMedia = () => {
      setState(media.matches);
    };

    if (media.addEventListener) {
      media.addEventListener('change', onChangeMedia);
    } else {
      // noinspection JSDeprecatedSymbols
      media.addListener(onChangeMedia);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', onChangeMedia);
      } else {
        // noinspection JSDeprecatedSymbols
        media.removeListener(onChangeMedia);
      }
    };
  }, [media]);
  return state;
}
function useAsyncAction(action, deps = []) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const run = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (...args) => {
    if (loading) {
      return;
    }

    setLoading(true);
    action(...args).then(() => {
      setLoading(false);
    });
  }, [loading, setLoading, ...deps]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [run, loading], [run, loading]);
}
function useIsUnmountedRef() {
  const isUnmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isUnmountedRef.current = false;
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);
  return isUnmountedRef;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dZVx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WISHLIST_NAMESPACE; });
/* harmony import */ var _store_wishlist_wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZHIE");
/* harmony import */ var _store_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0QaZ");
// application



function addItem(state, product) {
  const itemIndex = state.items.findIndex(x => x.id === product.id);

  if (itemIndex === -1) {
    return {
      items: [...state.items, JSON.parse(JSON.stringify(product))]
    };
  }

  return state;
}

function removeItem(state, productId) {
  return {
    items: state.items.filter(x => x.id !== productId)
  };
}

const initialState = {
  items: []
};
const WISHLIST_NAMESPACE = 'wishlist';

function wishlistBaseReducer(state = initialState, action) {
  switch (action.type) {
    case _store_wishlist_wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST_ADD_ITEM */ "a"]:
      return addItem(state, action.product);

    case _store_wishlist_wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST_REMOVE_ITEM */ "b"]:
      return removeItem(state, action.productId);

    default:
      return state;
  }
}

const wishlistReducer = Object(_store_client__WEBPACK_IMPORTED_MODULE_1__[/* withClientState */ "b"])(wishlistBaseReducer, WISHLIST_NAMESPACE);
/* harmony default export */ __webpack_exports__["b"] = (wishlistReducer);

/***/ }),

/***/ "ehF+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPTIONS_NAMESPACE; });
/* harmony import */ var _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AZBb");
// application


function optionsSetAll(state, options) {
  const {
    desktopHeaderVariant,
    mobileHeaderVariant
  } = options;
  const [desktopHeaderLayout, desktopHeaderScheme] = desktopHeaderVariant.split('/');
  return {
    desktopHeaderLayout,
    desktopHeaderScheme,
    mobileHeaderVariant
  };
}

const initialState = {
  desktopHeaderLayout: 'spaceship',
  desktopHeaderScheme: 'one',
  mobileHeaderVariant: 'one'
};
const OPTIONS_NAMESPACE = 'options';

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* OPTIONS_HYDRATE */ "a"]:
      return action.payload[OPTIONS_NAMESPACE];

    case _store_options_optionsActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* OPTIONS_SET_ALL */ "b"]:
      return optionsSetAll(state, action.options);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["b"] = (optionsReducer);

/***/ }),

/***/ "fkzy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* unused harmony export baseUrlNew */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCategoryPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategoryParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isArrayOfStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArrayOfNumbers; });
// application
function baseUrl(url) {
  if (/^\/([^/]|$)/.test(url)) {
    return `${""}${url}`;
  }

  return url;
}
function baseUrlNew(url) {
  // if (/^\/([^/]|$)/.test(url)) {
  // }
  return `${'http://localhost:3000'}${url}`;
}
function getCategoryPath(category) {
  return category ? [...getCategoryPath(category.parent), category] : [];
}
function getCategoryParents(category) {
  return category.parent ? [...getCategoryParents(category.parent), category.parent] : [];
}
function isArrayOfStrings(value) {
  if (!Array.isArray(value)) {
    return false;
  }

  return !value.map(x => typeof x !== 'string').includes(true);
}
function isArrayOfNumbers(value) {
  if (!Array.isArray(value)) {
    return false;
  }

  return !value.map(x => typeof x !== 'number').includes(true);
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "srIM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GARAGE_NAMESPACE; });
/* harmony import */ var _store_garage_garageActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WQ/t");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  items: [],
  current: null
};
const GARAGE_NAMESPACE = 'garage';

function garageReducer(state = initialState, action) {
  switch (action.type) {
    case _store_garage_garageActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GARAGE_SET_ITEMS */ "b"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.payload,
        current: action.payload.find(x => {
          var _state$current;

          return x.id === ((_state$current = state.current) === null || _state$current === void 0 ? void 0 : _state$current.id);
        }) || null
      });

    case _store_garage_garageActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GARAGE_SET_CURRENT */ "a"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: state.items.find(x => x.id === action.payload) || null
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["b"] = (garageReducer);

/***/ }),

/***/ "uFCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ load; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ wrapper; });

// UNUSED EXPORTS: save

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// CONCATENATED MODULE: ./src/store/version.ts
const version = 1;
/* harmony default export */ var store_version = (version);
// EXTERNAL MODULE: ./src/store/client.ts
var client = __webpack_require__("0QaZ");

// EXTERNAL MODULE: ./src/store/cart/cartActionTypes.ts
var cartActionTypes = __webpack_require__("AdQK");

// CONCATENATED MODULE: ./src/store/cart/cartReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



function findItemIndex(items, product, options) {
  return items.findIndex(item => {
    if (item.product.id !== product.id || item.options.length !== options.length) {
      return false;
    }

    for (let i = 0; i < options.length; i += 1) {
      const option = options[i];
      const itemOption = item.options.find(itemOption => itemOption.name === option.name && itemOption.value === option.value);

      if (!itemOption) {
        return false;
      }
    }

    return true;
  });
}

function calcSubtotal(items) {
  return items.reduce((subtotal, item) => subtotal + item.total, 0);
}

function calcQuantity(items) {
  return items.reduce((quantity, item) => quantity + item.quantity, 0);
}

function calcTotal(subtotal, totals) {
  return totals.reduce((acc, extraLine) => acc + extraLine.price, subtotal);
}

function calcTotals(items) {
  if (items.length === 0) {
    return [];
  }

  const subtotal = calcSubtotal(items);
  return [{
    type: 'shipping',
    title: 'SHIPPING',
    price: 25
  }, {
    type: 'tax',
    title: 'TAX',
    price: subtotal * 0.2
  }];
}

function addItem(state, product, options, quantity) {
  const itemIndex = findItemIndex(state.items, product, options);
  let newItems;
  let {
    lastItemId
  } = state;

  if (itemIndex === -1) {
    lastItemId += 1;
    newItems = [...state.items, {
      id: lastItemId,
      product: JSON.parse(JSON.stringify(product)),
      options: JSON.parse(JSON.stringify(options)),
      price: product.price,
      total: product.price * quantity,
      quantity
    }];
  } else {
    const item = state.items[itemIndex];
    newItems = [...state.items.slice(0, itemIndex), _objectSpread(_objectSpread({}, item), {}, {
      quantity: item.quantity + quantity,
      total: (item.quantity + quantity) * item.price
    }), ...state.items.slice(itemIndex + 1)];
  }

  const subtotal = calcSubtotal(newItems);
  const totals = calcTotals(newItems);
  const total = calcTotal(subtotal, totals);
  return _objectSpread(_objectSpread({}, state), {}, {
    lastItemId,
    subtotal,
    totals,
    total,
    items: newItems,
    quantity: calcQuantity(newItems)
  });
}

function removeItem(state, itemId) {
  const {
    items
  } = state;
  const newItems = items.filter(item => item.id !== itemId);
  const subtotal = calcSubtotal(newItems);
  const totals = calcTotals(newItems);
  const total = calcTotal(subtotal, totals);
  return _objectSpread(_objectSpread({}, state), {}, {
    items: newItems,
    quantity: calcQuantity(newItems),
    subtotal,
    totals,
    total
  });
}

function updateQuantities(state, quantities) {
  let needUpdate = false;
  const newItems = state.items.map(item => {
    const quantity = quantities.find(x => x.itemId === item.id && x.value !== item.quantity);

    if (!quantity) {
      return item;
    }

    needUpdate = true;
    return _objectSpread(_objectSpread({}, item), {}, {
      quantity: quantity.value,
      total: quantity.value * item.price
    });
  });

  if (needUpdate) {
    const subtotal = calcSubtotal(newItems);
    const totals = calcTotals(newItems);
    const total = calcTotal(subtotal, totals);
    return _objectSpread(_objectSpread({}, state), {}, {
      items: newItems,
      quantity: calcQuantity(newItems),
      subtotal,
      totals,
      total
    });
  }

  return state;
}

const initialState = {
  lastItemId: 0,
  quantity: 0,
  items: [],
  subtotal: 0,
  totals: [],
  total: 0
};
const CART_NAMESPACE = 'cart';

function cartBaseReducer(state = initialState, action) {
  switch (action.type) {
    case cartActionTypes["a" /* CART_ADD_ITEM */]:
      return addItem(state, action.product, action.options, action.quantity);

    case cartActionTypes["b" /* CART_REMOVE_ITEM */]:
      return removeItem(state, action.itemId);

    case cartActionTypes["c" /* CART_UPDATE_QUANTITIES */]:
      return updateQuantities(state, action.quantities);

    default:
      return state;
  }
}

const cartReducer = Object(client["b" /* withClientState */])(cartBaseReducer, CART_NAMESPACE);
/* harmony default export */ var cart_cartReducer = (cartReducer);
// EXTERNAL MODULE: ./src/store/compare/compareReducer.ts
var compareReducer = __webpack_require__("BEkv");

// EXTERNAL MODULE: ./src/store/currency/currencyReducer.ts
var currencyReducer = __webpack_require__("FEOJ");

// EXTERNAL MODULE: ./src/store/garage/garageReducer.ts
var garageReducer = __webpack_require__("srIM");

// EXTERNAL MODULE: ./src/store/mobile-menu/mobileMenuReducer.ts
var mobileMenuReducer = __webpack_require__("Neop");

// EXTERNAL MODULE: ./src/store/options/optionsReducer.ts
var optionsReducer = __webpack_require__("ehF+");

// EXTERNAL MODULE: ./src/store/quickview/quickviewReducer.ts
var quickviewReducer = __webpack_require__("AdE6");

// EXTERNAL MODULE: ./src/store/enquiry/enquiryReducer.ts
var enquiryReducer = __webpack_require__("Xsyg");

// EXTERNAL MODULE: ./src/services/filters.ts
var services_filters = __webpack_require__("yuPr");

// EXTERNAL MODULE: ./src/store/shop/shopTypes.ts
var shopTypes = __webpack_require__("+L6p");

// EXTERNAL MODULE: ./src/store/shop/shopActionTypes.ts
var shopActionTypes = __webpack_require__("Pbem");

// CONCATENATED MODULE: ./src/store/shop/shopReducer.ts
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function shopReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shopReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopReducer_ownKeys(Object(source), true).forEach(function (key) { shopReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



const shopReducer_initialState = {
  init: false,
  categorySlug: null,
  categoryIsLoading: true,
  category: null,
  productsListIsLoading: true,
  productsList: null,
  options: {},
  filters: {},
  activeFilters: [],
  removedFilters: [],
  currentFilters: []
};

function shopReducerFetchProductsListSuccess(state, action) {
  const activeFilters = action.productsList.filters.filter(x => Object(services_filters["d" /* hasHandler */])(x)).reduce((acc, filter) => [...acc, ...Object(services_filters["a" /* getActiveFilters */])(filter)], []);
  console.log(action.productsList);
  return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
    productsListIsLoading: false,
    productsList: action.productsList,
    activeFilters,
    removedFilters: [],
    currentFilters: activeFilters
  });
}

function shopReducerSetFilterValue(state, action) {
  const currentFilters = shopReducer_objectSpread({}, state.filters);

  let filters;

  if (action.value !== null) {
    filters = shopReducer_objectSpread(shopReducer_objectSpread({}, currentFilters), {}, {
      [action.filter]: action.value
    });
  } else {
    delete currentFilters[action.filter];
    filters = shopReducer_objectSpread({}, currentFilters);
  }

  return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
    options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
      page: 1
    }),
    filters
  });
}

function shopReducerResetFilter(state, action) {
  if (!Object(services_filters["d" /* hasHandler */])(action.activeFilter.original)) {
    return state;
  }

  let {
    removedFilters
  } = state;

  if (!removedFilters.includes(action.activeFilter)) {
    removedFilters = [...removedFilters, action.activeFilter];
  }

  let {
    currentFilters
  } = state;

  if (currentFilters.includes(action.activeFilter)) {
    currentFilters = currentFilters.filter(x => x !== action.activeFilter);
  } // All removed filters with the same slug.


  const all = removedFilters.filter(x => x.original.slug === action.activeFilter.original.slug);
  const value = Object(services_filters["c" /* getResetValue */])(all); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const _state$filters = state.filters,
        _action$activeFilter$ = action.activeFilter.original.slug,
        {
    [_action$activeFilter$]: _
  } = _state$filters,
        filters = _objectWithoutProperties(_state$filters, [_action$activeFilter$].map(_toPropertyKey));

  if (value !== null) {
    filters[action.activeFilter.original.slug] = value;
  }

  return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
    options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
      page: 1
    }),
    filters,
    removedFilters,
    currentFilters
  });
}

function shopReducer(state = shopReducer_initialState, action) {
  switch (action.type) {
    case shopActionTypes["d" /* SHOP_HYDRATE */]:
      return action.payload[shopTypes["a" /* SHOP_NAMESPACE */]];

    case shopActionTypes["e" /* SHOP_INIT */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, shopReducer_initialState), {}, {
        categorySlug: action.categorySlug,
        options: action.options,
        filters: action.filters
      });

    case shopActionTypes["a" /* SHOP_FETCH_CATEGORY_SUCCESS */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        init: true,
        categoryIsLoading: false,
        category: action.category
      });

    case shopActionTypes["b" /* SHOP_FETCH_PRODUCTS_LIST_START */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        productsListIsLoading: true
      });

    case shopActionTypes["c" /* SHOP_FETCH_PRODUCTS_LIST_SUCCESS */]:
      return shopReducerFetchProductsListSuccess(state, action);

    case shopActionTypes["i" /* SHOP_SET_OPTION_VALUE */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
          page: 1,
          [action.option]: action.value
        })
      });

    case shopActionTypes["h" /* SHOP_SET_FILTER_VALUE */]:
      return shopReducerSetFilterValue(state, action);

    case shopActionTypes["g" /* SHOP_RESET_FILTERS */]:
      return shopReducer_objectSpread(shopReducer_objectSpread({}, state), {}, {
        options: shopReducer_objectSpread(shopReducer_objectSpread({}, state.options), {}, {
          page: 1
        }),
        filters: {}
      });

    case shopActionTypes["f" /* SHOP_RESET_FILTER */]:
      return shopReducerResetFilter(state, action);

    default:
      return state;
  }
}

/* harmony default export */ var shop_shopReducer = (shopReducer);
// EXTERNAL MODULE: ./src/store/user/userReducer.ts
var userReducer = __webpack_require__("C+jY");

// EXTERNAL MODULE: ./src/store/wishlist/wishlistReducer.ts
var wishlistReducer = __webpack_require__("dZVx");

// CONCATENATED MODULE: ./src/store/root/rootReducer.ts
// third-party
 // application














/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])({
  version: (state = store_version) => state,
  [CART_NAMESPACE]: cart_cartReducer,
  [compareReducer["a" /* COMPARE_NAMESPACE */]]: compareReducer["b" /* default */],
  [currencyReducer["a" /* CURRENCY_NAMESPACE */]]: currencyReducer["b" /* default */],
  [garageReducer["a" /* GARAGE_NAMESPACE */]]: garageReducer["b" /* default */],
  [mobileMenuReducer["a" /* MOBILE_MENU_NAMESPACE */]]: mobileMenuReducer["b" /* default */],
  [optionsReducer["a" /* OPTIONS_NAMESPACE */]]: optionsReducer["b" /* default */],
  [quickviewReducer["a" /* QUICKVIEW_NAMESPACE */]]: quickviewReducer["b" /* default */],
  [enquiryReducer["a" /* ENQUIRY_NAMESPACE */]]: enquiryReducer["b" /* default */],
  [shopTypes["a" /* SHOP_NAMESPACE */]]: shop_shopReducer,
  [userReducer["a" /* USER_NAMESPACE */]]: userReducer["b" /* default */],
  [wishlistReducer["a" /* WISHLIST_NAMESPACE */]]: wishlistReducer["b" /* default */]
}));
// CONCATENATED MODULE: ./src/store/store.ts
// third-party


 // application



const STORAGE_KEY = 'red-parts/react';
const save = state => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
const load = () => {
  if (true) {
    return undefined;
  }

  let state;

  try {
    state = localStorage.getItem(STORAGE_KEY);

    if (typeof state === 'string') {
      state = JSON.parse(state);
    }

    if (state && state.version !== store_version) {
      state = undefined;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return state || undefined;
};

const bindMiddleware = (...middleware) => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const makeStore = () => Object(external_redux_["createStore"])(rootReducer, bindMiddleware(external_redux_thunk_default.a));

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore);

/***/ }),

/***/ "yuPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hasHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isDefaultFilterValue; });
/* unused harmony export getFilterDefaultValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return serializeFilterValue; });
/* unused harmony export deserializeFilterValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActiveFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getResetValue; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fkzy");
// application


function isRangeFilterValue(value) {
  if (!Array.isArray(value) || value.length !== 2) {
    return false;
  }

  return !(typeof value[0] !== 'number' || typeof value[1] !== 'number');
}

function isCheckFilterValue(value) {
  return Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__[/* isArrayOfStrings */ "e"])(value);
}

function isRadioFilterValue(value) {
  return value === null || typeof value === 'string';
}

function isColorFilterValue(value) {
  return Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__[/* isArrayOfStrings */ "e"])(value);
}

function isRatingFilterValue(value) {
  return Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__[/* isArrayOfNumbers */ "d"])(value);
}

const CheckFilterHandler = {
  serialize: value => {
    if (!isCheckFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.join(',');
  },
  deserialize: value => value ? value.split(',') : [],
  isDefaultValue: (filter, value) => {
    if (!isCheckFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.length === 0;
  },
  getDefaultValue: () => [],
  getActiveFilters: filter => {
    if (filter.type !== 'check') {
      throw Error('Provide a "check" filter!');
    }

    if (CheckFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
      id: `${filter.slug}/${item.slug}`,
      type: filter.type,
      original: filter,
      item
    }));
  },

  getResetValue(activeFilters) {
    const itemSlugs = activeFilters.map(x => x.item.slug);
    return CheckFilterHandler.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
  }

};
const ColorFilterHandler = {
  serialize: value => {
    if (!isColorFilterValue(value)) {
      throw Error('Provide a valid "color" filter value!');
    }

    return value.join(',');
  },
  deserialize: value => value ? value.split(',') : [],
  isDefaultValue: (filter, value) => {
    if (!isColorFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.length === 0;
  },
  getDefaultValue: () => [],
  getActiveFilters: filter => {
    if (filter.type !== 'color') {
      throw Error('Provide a "color" filter!');
    }

    if (ColorFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
      id: `${filter.slug}/${item.slug}`,
      type: filter.type,
      original: filter,
      item
    }));
  },
  getResetValue: activeFilters => {
    const itemSlugs = activeFilters.map(x => x.item.slug);
    return ColorFilterHandler.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
  }
};
const RadioFilterHandler = {
  serialize: value => {
    if (!isRadioFilterValue(value)) {
      throw Error('Provide a valid "radio" filter value!');
    }

    return value === null ? '' : value;
  },
  deserialize: value => value,
  isDefaultValue: (filter, value) => {
    if (!isRadioFilterValue(value)) {
      throw Error('Provide a valid "radio" filter value!');
    }

    return RadioFilterHandler.getDefaultValue(filter) === value;
  },
  getDefaultValue: filter => {
    if (filter.type !== 'radio') {
      throw Error('Provide a "radio" filter!');
    }

    return filter.items[0].slug;
  },
  getActiveFilters: filter => {
    if (filter.type !== 'radio') {
      throw Error('Provide a "radio" filter!');
    }

    if (RadioFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return [{
      id: filter.slug,
      type: filter.type,
      original: filter,
      item: filter.items.find(x => x.slug === filter.value)
    }];
  },
  getResetValue: activeFilters => activeFilters[0].original.items[0].slug
};
const RangeFilterHandler = {
  serialize: value => {
    if (!isRangeFilterValue(value)) {
      throw Error('Provide a valid "range" filter value!');
    }

    return value.join('-');
  },
  deserialize: value => value ? value.split('-').map(parseFloat) : undefined,
  isDefaultValue: (filter, value) => {
    if (filter.type !== 'range') {
      throw Error('Provide a "range" filter!');
    }

    if (!isRangeFilterValue(value)) {
      throw Error('Provide a valid "range" filter value!');
    }

    return filter.min === value[0] && filter.max === value[1];
  },
  getDefaultValue: filter => {
    if (filter.type !== 'range') {
      throw Error('Provide a "range" filter!');
    }

    return [filter.min, filter.max];
  },
  getActiveFilters: filter => {
    if (filter.type !== 'range') {
      throw Error('Provide a "range" filter!');
    }

    if (RangeFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return [{
      id: filter.slug,
      type: filter.type,
      original: filter
    }];
  },
  getResetValue: activeFilters => RangeFilterHandler.serialize([activeFilters[0].original.min, activeFilters[0].original.max])
};
const RatingFilterHandler = {
  serialize: value => {
    if (!isRatingFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.join(',');
  },
  deserialize: value => value ? value.split(',').map(parseFloat) : [],
  isDefaultValue: (filter, value) => {
    if (!isRatingFilterValue(value)) {
      throw Error('Provide a valid "check" filter value!');
    }

    return value.length === 0;
  },
  getDefaultValue: () => [],
  getActiveFilters: filter => {
    if (filter.type !== 'rating') {
      throw Error('Provide a "rating" filter!');
    }

    if (RatingFilterHandler.isDefaultValue(filter, filter.value)) {
      return [];
    }

    return filter.items.filter(x => filter.value.includes(x.rating)).map(item => ({
      id: `${filter.slug}/${item.rating}`,
      type: 'rating',
      original: filter,
      item
    }));
  },
  getResetValue: activeFilters => {
    const itemSlugs = activeFilters.map(x => x.item.rating);
    return RatingFilterHandler.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
  }
};
const VehicleFilterHandler = {
  serialize: value => value === null ? '' : value.toString(),
  deserialize: value => value === '' ? null : parseFloat(value),
  isDefaultValue: (filter, value) => value === null,
  getDefaultValue: () => null,
  getActiveFilters: filter => {
    if (filter.type !== 'vehicle') {
      throw Error('Provide a "vehicle" filter!');
    }

    return filter.value ? [{
      id: filter.slug,
      type: 'vehicle',
      original: filter
    }] : [];
  },
  getResetValue: () => null
};

function getFilterHandler(filter) {
  switch (filter.type) {
    case 'check':
      return CheckFilterHandler;

    case 'color':
      return ColorFilterHandler;

    case 'radio':
      return RadioFilterHandler;

    case 'range':
      return RangeFilterHandler;

    case 'rating':
      return RatingFilterHandler;

    case 'vehicle':
      return VehicleFilterHandler;

    default:
      return null;
  }
}

function getExistsFilterHandler(filter) {
  const handler = getFilterHandler(filter);

  if (!handler) {
    throw Error('Unhandled filter type!');
  }

  return handler;
}

function hasHandler(filter) {
  return getFilterHandler(filter) !== null;
}
function isDefaultFilterValue(filter, value) {
  return getExistsFilterHandler(filter).isDefaultValue(filter, value);
}
function getFilterDefaultValue(filter) {
  return getExistsFilterHandler(filter).getDefaultValue(filter);
}
function serializeFilterValue(filter, value) {
  return getExistsFilterHandler(filter).serialize(value);
}
function deserializeFilterValue(filter, value) {
  return getExistsFilterHandler(filter).deserialize(value);
}
function getFilterValue(filter, currentSerializedValue) {
  return deserializeFilterValue(filter, currentSerializedValue) || getFilterDefaultValue(filter);
}
function getActiveFilters(filter) {
  return getExistsFilterHandler(filter).getActiveFilters(filter);
}
function getResetValue(activeFilters) {
  return getExistsFilterHandler(activeFilters[0].original).getResetValue(activeFilters);
}

/***/ })

/******/ });