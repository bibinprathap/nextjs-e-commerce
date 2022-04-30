module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		85: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"107":"f6eb427b373d0c2cbf54","108":"e2d666aa25520e5b5985","109":"0819edfbb426e9c37559"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Sw2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeLinkHref; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bzos");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_i18n_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7eUB");
/* harmony import */ var _services_i18n_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+oNx");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fkzy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react
 // third-party


 // application




function normalizeHref(href) {
  const result = _objectSpread({}, Object(url__WEBPACK_IMPORTED_MODULE_2__["parse"])(typeof href === 'string' ? href : Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(href), true));

  delete result.host;
  delete result.href;
  delete result.path;
  delete result.search;
  result.query = result.query || {};
  return result;
}
function normalizeLinkHref(data) {
  const result = typeof data === 'string' ? {
    href: data
  } : data;
  return _objectSpread(_objectSpread({}, result), {}, {
    href: normalizeHref(result.href),
    as: normalizeHref(result.as || result.href)
  });
}

function addLocale(url, locale) {
  return _objectSpread(_objectSpread({}, url), {}, {
    pathname: !url.pathname || locale === Object(_services_i18n_utils__WEBPACK_IMPORTED_MODULE_3__[/* getDefaultLocale */ "c"])() ? url.pathname : `/${locale}${url.pathname}`
  });
}

function AppLink(props) {
  const {
    href,
    children,
    anchor = false
  } = props,
        anchorProps = _objectWithoutProperties(props, ["href", "children", "anchor"]);

  const locale = Object(_services_i18n_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useLocale */ "c"])();
  const data = normalizeLinkHref(href || '');
  const isExternal = !!data.href.hostname;
  const hasPath = !!data.href.pathname;
  const onlyHash = Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(data.href).startsWith('#');

  if (isExternal || anchor || onlyHash) {
    let anchorHref;

    if (!isExternal && hasPath) {
      data.href = addLocale(data.href, locale);
      anchorHref = Object(_services_utils__WEBPACK_IMPORTED_MODULE_5__[/* baseUrl */ "a"])(Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(data.href));
    } else {
      anchorHref = Object(url__WEBPACK_IMPORTED_MODULE_2__["format"])(data.href);
    }

    return __jsx("a", _extends({
      href: anchorHref
    }, anchorProps), children);
  }

  data.href.query = _objectSpread(_objectSpread({}, data.href.query), {}, {
    lang: locale
  });
  data.as = addLocale(data.as, locale);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, data, __jsx("a", anchorProps, children));
}

/* harmony default export */ __webpack_exports__["a"] = (AppLink);

/***/ }),

/***/ "+lck":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("P3CU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party


 // application



function StatusBadge(props) {
  const {
    type,
    icon,
    text,
    tooltip,
    className
  } = props;
  const tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('status-badge', `status-badge--style--${type}`, {
    'status-badge--has-text': text !== undefined,
    'status-badge--has-icon': icon !== undefined
  }, className);
  return __jsx("div", {
    className: rootClasses
  }, __jsx("div", {
    className: "status-badge__body"
  }, icon !== undefined && __jsx("div", {
    className: "status-badge__icon"
  }, {
    success: __jsx(_svg__WEBPACK_IMPORTED_MODULE_3__[/* FitSvg */ "x"], null),
    failure: __jsx(_svg__WEBPACK_IMPORTED_MODULE_3__[/* NoFitSvg */ "G"], null)
  }[icon]), text !== undefined && __jsx("div", {
    className: "status-badge__text"
  }, text), tooltip !== undefined && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "status-badge__tooltip",
    tabIndex: 0,
    ref: tooltipRef
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledTooltip"], {
    target: tooltipRef,
    fade: false,
    delay: {
      show: 0,
      hide: 0
    }
  }, tooltip))));
}

/* harmony default export */ __webpack_exports__["a"] = (StatusBadge);

/***/ }),

/***/ "+oNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useSetLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_i18n_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7eUB");
/* harmony import */ var _services_i18n_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J/yf");
// react
 // application



function useLocale() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_services_i18n_context__WEBPACK_IMPORTED_MODULE_2__[/* LanguageLocaleContext */ "a"]);
}
function useSetLocale() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_services_i18n_context__WEBPACK_IMPORTED_MODULE_2__[/* LanguageSetLocaleContext */ "b"]);
}
function useLanguage() {
  const locale = useLocale();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_services_i18n_utils__WEBPACK_IMPORTED_MODULE_1__[/* getAllLanguages */ "a"])().find(language => language.locale === locale), [locale]);
}
function useDirection() {
  const {
    direction
  } = useLanguage();
  return direction;
}

/***/ }),

/***/ "+vqc":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar.json": [
		"V3Aw",
		107
	],
	"./en.json": [
		"lWpT",
		108
	],
	"./ru.json": [
		"AMPI",
		109
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "+vqc";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7eUB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getDefaultLocale; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getAllLanguages; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getDefaultLanguage; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getLanguageByPath; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getLanguageByLocale; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ loadMessages; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ removePrefix; });

// EXTERNAL MODULE: ./src/services/utils.ts
var utils = __webpack_require__("fkzy");

// CONCATENATED MODULE: ./src/data/shopLanguages.ts
// application
const dataShopLanguages = [{
  locale: 'en',
  code: 'en',
  name: 'English',
  icon: '/images/languages/language-1.png',
  direction: 'ltr'
}]; //,{
//         locale: 'ru',
//         code: 'ru',
//         name: 'Russian',
//         icon: '/images/languages/language-2.png',
//         direction: 'ltr',
//},
//{
//         locale: 'ar',
//         code: 'ar',
//         name: 'RTL',
//         icon: '/images/languages/language-3.png',
//         direction: 'rtl',
//},

const dataShopDefaultLocale = 'en';
/* harmony default export */ var shopLanguages = (dataShopLanguages);
// CONCATENATED MODULE: ./src/services/i18n/utils.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

// data

function getDefaultLocale() {
  return dataShopDefaultLocale;
}
function getAllLanguages() {
  return shopLanguages;
}
function getDefaultLanguage() {
  const language = getAllLanguages().find(language => language.locale === getDefaultLocale());

  if (!language) {
    throw new Error('Default language not found.');
  }

  return language;
}
function getLanguageByPath(path) {
  return getAllLanguages().find(language => {
    const rg = new RegExp(`^\\/${language.locale}(\\/|$)`);
    return rg.test(path);
  }) || null;
}
function getLanguageByLocale(locale) {
  return getAllLanguages().find(language => language.locale === locale) || null;
}

async function loadTranslation(locale) {
  if (false) {}

  return (await __webpack_require__("+vqc")(`./${locale}.json`)).default;
}

async function loadMessages(locale) {
  const baseMessages = locale === getDefaultLocale() ? Promise.resolve({}) : loadTranslation(getDefaultLocale());
  const mainMessages = loadTranslation(locale);
  return _objectSpread(_objectSpread({}, await baseMessages), await mainMessages);
}
function removePrefix(path) {
  const languages = getAllLanguages();

  for (let i = 0; i < languages.length; i += 1) {
    const language = languages[i];
    const rg = new RegExp(`^\\/${language.locale}(\\/|$)`);

    if (rg.test(path)) {
      return path.substr(language.locale.length + 1);
    }
  }

  return path;
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QnOi");


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "J/yf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageLocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LanguageSetLocaleContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// react

const LanguageLocaleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('');
const LanguageSetLocaleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(() => {});

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P3CU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowDown9x6Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrowDownSm7x5Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ArrowRoundedDown9x6Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ArrowRoundedDown12x7Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ArrowRoundedLeft6x9Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ArrowRoundedLeft7x11Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ArrowRoundedRight6x9Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ArrowRoundedRight7x11Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Car20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Cart20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Cart32Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Check12x9Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Check100Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Compare16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Cross9LightSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Cross10Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Cross12Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Cross20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Fi24Hours48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FiFreeDelivery48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return Filters16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return FiPaymentSecurity48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return FiTag48Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return FitSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return Heart20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Heart32Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LayoutGrid16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LayoutGridWithDetails16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LayoutList16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LayoutTable16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Menu16x12Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return Menu18x14Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return NoFitSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Person20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return Person32Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return Quickview16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return RecycleBin16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return Search20Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return Wishlist16Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return ZoomIn24Svg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ArrowDown9x6 = function ArrowDown9x6(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.2.4c.4-.4 1-.5 1.4-.1l2.9 3 2.9-3c.4-.4 1.1-.4 1.4.1.3.4.3.9-.1 1.3L4.5 6 .3 1.6C-.1 1.3-.1.7.2.4z"
  }));
};

ArrowDown9x6.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "9",
  height: "6"
};

var ArrowDownSm7x5 = function ArrowDownSm7x5(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.28.282a.919.919 0 0 1 1.316.015L3.504 2.31 5.413.297a.92.92 0 0 1 1.333 1.268L3.504 5.007.262 1.565A.92.92 0 0 1 .28.282z"
  }));
};

ArrowDownSm7x5.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "5"
};

var ArrowRoundedDown9x6 = function ArrowRoundedDown9x6(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.2.4c.4-.4 1-.5 1.4-.1l2.9 3 2.9-3c.4-.4 1.1-.4 1.4.1.3.4.3.9-.1 1.3L4.5 6 .3 1.6C-.1 1.3-.1.7.2.4z"
  }));
};

ArrowRoundedDown9x6.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "9",
  height: "6"
};

var ArrowRoundedDown12x7 = function ArrowRoundedDown12x7(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.286.273a.92.92 0 0 0-.01 1.292l5.24 5.428 5.241-5.428a.92.92 0 0 0-.01-1.292.923.923 0 0 0-1.31.006L5.516 4.296 1.596.279A.923.923 0 0 0 .286.273z"
  }));
};

ArrowRoundedDown12x7.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "7"
};

var ArrowRoundedLeft6x9 = function ArrowRoundedLeft6x9(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M5.7 8.7c-.4.4-.9.4-1.3 0L0 4.5 4.4.3c.4-.4.9-.3 1.3 0 .4.4.4 1 0 1.3l-3 2.9 3 2.9c.4.4.4 1 0 1.3z"
  }));
};

ArrowRoundedLeft6x9.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "6",
  height: "9"
};

var ArrowRoundedLeft7x11 = function ArrowRoundedLeft7x11(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.7.3c-.4-.4-.9-.4-1.3 0L0 5.5l5.4 5.2c.4.4.9.3 1.3 0 .4-.4.4-1 0-1.3l-4-3.9 4-3.9c.4-.4.4-1 0-1.3z"
  }));
};

ArrowRoundedLeft7x11.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "11"
};

var ArrowRoundedRight6x9 = function ArrowRoundedRight6x9(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.3 7.4l3-2.9-3-2.9C-.1 1.3-.1.7.3.3c.4-.3.9-.4 1.3 0L6 4.5 1.6 8.7c-.4.4-.9.4-1.3 0-.4-.3-.4-.9 0-1.3z"
  }));
};

ArrowRoundedRight6x9.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "6",
  height: "9"
};

var ArrowRoundedRight7x11 = function ArrowRoundedRight7x11(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.3 10.7c.4.4.9.4 1.3 0L7 5.5 1.6.3C1.2-.1.7 0 .3.3c-.4.4-.4 1 0 1.3l4 3.9-4 3.9c-.4.4-.4 1 0 1.3z"
  }));
};

ArrowRoundedRight7x11.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "11"
};

var Car20 = function Car20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.6 2h6.8c1 0 2.9.8 3.6 2.2.7 1.5.9 2.8 1.4 2.8C20 7 20 8 20 8v1h-1v7.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5V16H5v.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5V9H0V8s.1-1 1.6-1c.5 0 .7-1.3 1.4-2.8C3.7 2.8 5.6 2 6.6 2zm6.7 2H6.7c-.8 0-1.4 0-2 .7-.5.6-.8 1.5-1 2-.1.4-.2 1.2 0 1.3.8.4 2.4 1 6.3 1 4 0 5.4-.6 6.3-1 .2-.1.2-.8 0-1.2-.2-.4-.5-1.5-1-2-.6-.8-1.2-.8-2-.8zM4 10c-.4-.3-1.5-.5-2 0-.4.4-.4 1.6 0 2 .5.5 4 .4 4 0 0-.8-1.5-1.7-2-2zm10 2c0 .4 3.5.5 4 0 .4-.4.4-1.6 0-2-.5-.5-1.3-.3-2 0-.5.2-2 1.3-2 2z"
  }));
};

Car20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Cart20 = function Cart20(props) {
  return __jsx("svg", props, __jsx("circle", {
    cx: "7",
    cy: "17",
    r: "2"
  }), __jsx("circle", {
    cx: "15",
    cy: "17",
    r: "2"
  }), __jsx("path", {
    d: "M20 4.4V5l-1.8 6.3c-.1.4-.5.7-1 .7H6.7c-.4 0-.8-.3-1-.7L3.3 3.9c-.2-.6-.7-.9-1.2-.9H.4C.2 3 0 2.8 0 2.6V1.4c0-.2.2-.4.4-.4h2.5c1 0 1.8.6 2.1 1.6l.1.4 2.3 6.8c0 .1.2.2.3.2h8.6c.1 0 .3-.1.3-.2l1.3-4.4c0-.2-.2-.4-.4-.4H9.4c-.2 0-.4-.2-.4-.4V3.4c0-.2.2-.4.4-.4h9.2c.8 0 1.4.6 1.4 1.4z"
  }));
};

Cart20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Cart32 = function Cart32(props) {
  return __jsx("svg", props, __jsx("circle", {
    cx: "10.5",
    cy: "27.5",
    r: "2.5"
  }), __jsx("circle", {
    cx: "23.5",
    cy: "27.5",
    r: "2.5"
  }), __jsx("path", {
    d: "M26.4 21H11.2c-1.2 0-2.2-.8-2.4-1.9L5.4 4.8c-.1-.5-.5-.8-1-.8H1c-.6 0-1-.4-1-1s.4-1 1-1h3.4C5.8 2 7 3 7.3 4.3l3.4 14.3c.1.2.3.4.5.4h15.2c.2 0 .4-.1.5-.4l3.1-10c.1-.2 0-.4-.1-.4-.1-.1-.2-.2-.4-.2H14c-.6 0-1-.4-1-1s.4-1 1-1h15.5c.8 0 1.5.4 2 1s.6 1.5.4 2.2l-3.1 10c-.3 1.1-1.3 1.8-2.4 1.8z"
  }));
};

Cart32.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32"
};

var Check12x9 = function Check12x9(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M12.002 1.396L4.461 9.002-.002 4.498l1.385-1.402 3.078 3.107 6.156-6.209 1.385 1.402z"
  }));
};

Check12x9.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "9"
};

var Check100 = function Check100(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm0-98C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm-5.8 69L22.3 49.1l1.4-1.4 21.2 21.2 34.4-34.4 1.4 1.4L45.6 71c-.4.4-1 .4-1.4 0z"
  }));
};

Check100.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100"
};

var Compare16 = function Compare16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M9 15H7c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zM1 9h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zM15 5h-2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1z"
  }));
};

Compare16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var Cross9Light = function Cross9Light(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M9 8.5l-.5.5-4-4-4 4-.5-.5 4-4-4-4L.5 0l4 4 4-4 .5.5-4 4 4 4z"
  }));
};

Cross9Light.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "9",
  height: "9"
};

var Cross10 = function Cross10(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M8.8 8.8c-.4.4-1 .4-1.4 0L5 6.4 2.6 8.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L3.6 5 1.2 2.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L5 3.6l2.4-2.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6.4 5l2.4 2.4c.4.4.4 1 0 1.4z"
  }));
};

Cross10.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
};

var Cross12 = function Cross12(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M10.8 10.8c-.4.4-1 .4-1.4 0L6 7.4l-3.4 3.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L4.6 6 1.2 2.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L6 4.6l3.4-3.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L7.4 6l3.4 3.4c.4.4.4 1 0 1.4z"
  }));
};

Cross12.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12"
};

var Cross20 = function Cross20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16.7 16.7c-.4.4-1 .4-1.4 0L10 11.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 3.3 4.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 10l5.3 5.3c.4.4.4 1 0 1.4z"
  }));
};

Cross20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Fi24Hours48 = function Fi24Hours48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M46.218 18.168h-.262v-.869c0-1.175-1.211-1.766-2.453-1.766-.521 0-.985.094-1.366.263.015-.028 2.29-4.591 2.303-4.62.968-2.263-3.041-4.024-4.372-1.449l-5.184 10.166c-.35.648-.364 1.449.033 2.081a1.443 1.443 0 0 0-.668-.166H29.37c1.555-1.597 6.638-3.535 6.638-8.011 0-1.599-.676-3.02-1.903-4.002-1.088-.87-2.52-1.35-4.033-1.35-2.802 0-5.779 1.758-5.779 5.015 0 2.195 1.426 2.522 2.275 2.522 1.653 0 2.545-1.022 2.545-1.983 0-.485.117-.981.981-.981.906 0 1.003.623 1.003.891 0 2.284-7.074 4.474-7.074 8.399v2.178c0 1.147 1.319 1.781 2.23 1.781h7.995c1.426 0 2.332-2.195 1.348-3.669.265.137.569.21.898.21h4.552v1.678c0 1.049 1.01 1.781 2.455 1.781s2.455-.733 2.455-1.781v-1.678h.262c1.02 0 1.781-1.225 1.781-2.32.001-1.344-.748-2.32-1.781-2.32zm-11.977 6.693h-7.987c-.389 0-.802-.258-.824-.375v-2.179c0-3.056 7.074-5.046 7.074-8.399 0-1.107-.754-2.298-2.41-2.298-1.473 0-2.388.915-2.388 2.388 0 .236-.405.577-1.138.577-.492 0-.869-.082-.869-1.116 0-2.344 2.253-3.609 4.373-3.609 2.251 0 4.53 1.355 4.53 3.946 0 4.526-6.94 5.826-6.94 8.511v.202c0 .389.315.703.703.703h5.882c.091.015.354.314.354.802 0 .48-.252.811-.36.847zm11.953-3.459h-.941a.703.703 0 0 0-.703.703v2.381c0 .151-.44.375-1.048.375-.608 0-1.049-.224-1.049-.375v-2.381a.703.703 0 0 0-.703-.703h-5.255c-.518 0-.545-.528-.371-.846l.009-.018 5.186-10.17c.533-1.031 1.883-.238 1.884.097-.011.087.038-.035-4.014 8.092a.704.704 0 0 0 .629 1.017h1.932a.703.703 0 0 0 .703-.703v-1.572c0-.123.409-.36 1.051-.36.618 0 1.046.223 1.046.36v1.572c0 .389.315.703.703.703h.966c.196 0 .375.435.375.914-.001.463-.27.85-.4.914zm-5.148-3.418v.184h-.092l.092-.184zm0 0M36.976 36.602a19.307 19.307 0 0 0 5.202-8.354.704.704 0 0 0-1.344-.413 17.888 17.888 0 0 1-4.823 7.744.704.704 0 0 0 .965 1.023zm0 0M35.099 7.86a.703.703 0 0 0-.164-.981C29.684 3.131 23.098 2.38 17.381 4.38a.703.703 0 1 0 .465 1.327c5.23-1.83 11.346-1.199 16.272 2.316a.703.703 0 0 0 .981-.163zm0 0M25.247 43.573a3.861 3.861 0 0 0-2.807-.416c-.525.123-1.064.207-1.602.251a.703.703 0 1 0 .115 1.402c.606-.05 1.214-.145 1.807-.284a2.46 2.46 0 0 1 1.788.267 4.976 4.976 0 0 0 5.076-.064c3.605-2.207 3.212-1.964 3.359-2.061a4.978 4.978 0 0 0 1.519-6.755l-2.538-4.145a4.98 4.98 0 0 0-6.835-1.644l-3.235 1.981a4.95 4.95 0 0 0-2.371 4.214.245.245 0 0 1-.293.237 7.263 7.263 0 0 1-3.306-1.683 26.405 26.405 0 0 1-3.656-3.984.703.703 0 1 0-1.132.834 27.801 27.801 0 0 0 3.85 4.197 8.665 8.665 0 0 0 3.947 2.01 1.652 1.652 0 0 0 1.996-1.602 3.551 3.551 0 0 1 1.699-3.025l2.742-1.679 6.261 10.224-2.742 1.679a3.564 3.564 0 0 1-3.642.046zm1.375-12.596c1.54-.495 3.282.119 4.142 1.525l2.538 4.145c.865 1.413.611 3.242-.524 4.383l-6.156-10.053zm0 0"
  }), __jsx("path", {
    d: "M.403 23.192c.998 3.783 2.422 7.199 4.232 10.155 1.81 2.956 4.206 5.777 7.121 8.386a12.246 12.246 0 0 0 5.717 2.868.704.704 0 1 0 .281-1.378 10.837 10.837 0 0 1-5.06-2.538c-2.813-2.517-5.121-5.233-6.859-8.072-1.739-2.839-3.108-6.13-4.071-9.78a10.899 10.899 0 0 1 2.228-9.803 3.863 3.863 0 0 0 .906-2.69 3.57 3.57 0 0 1 1.694-3.224l2.742-1.679 6.261 10.224-2.742 1.679a3.553 3.553 0 0 1-3.436.153 1.653 1.653 0 0 0-2.319 1.052 8.664 8.664 0 0 0-.015 4.47c.558 2.115 1.315 4.081 2.249 5.843a.704.704 0 0 0 1.243-.659c-.884-1.667-1.601-3.532-2.132-5.543a7.267 7.267 0 0 1 .012-3.744.245.245 0 0 1 .342-.156 4.954 4.954 0 0 0 4.789-.216l3.235-1.981a4.979 4.979 0 0 0 1.643-6.835l-2.538-4.145c-1.44-2.351-4.516-3.063-6.835-1.643L5.858 5.917a4.974 4.974 0 0 0-2.365 4.492 2.46 2.46 0 0 1-.575 1.714A12.305 12.305 0 0 0 .403 23.192zM14.728 6.314l2.538 4.145c.865 1.414.61 3.243-.524 4.383L10.586 4.788c1.534-.493 3.278.115 4.142 1.526zm0 0"
  }));
};

Fi24Hours48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var FiFreeDelivery48 = function FiFreeDelivery48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M44.6 26.9l-1.2-5c.3-.1.6-.4.6-.7v-.8c0-1.7-1.4-3.2-3.2-3.2h-5.7v-1.7c0-.9-.7-1.6-1.6-1.6H23.1l6.4-2.6c.4-.2.6-.6.4-1-.2-.4-.6-.6-1-.4L23.7 12c1.6-1 3.2-2.2 3.8-2.9 1.2-1.5.9-3.7-.7-4.9-1.5-1.2-3.7-.9-4.9.7-.9 1.1-2 4.3-2.7 6.5-.7-2.2-1.9-5.4-2.7-6.5-1.2-1.5-3.4-1.8-4.9-.7-1.6 1.3-1.9 3.5-.7 5 .6.8 2.2 1.9 3.8 2.9L9.5 10c-.4-.2-.8 0-1 .4-.2.4 0 .8.4 1l6.4 2.6H4.8c-.9 0-1.6.7-1.6 1.6v13.6c0 .4.3.8.8.8.4 0 .8-.3.8-.8V15.6h28.9v13.6c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.9H44c1.1 0 2 .7 2.3 1.7H44c-.4 0-.8.3-.8.8v1.6c0 1.3 1.1 2.4 2.4 2.4h.9v3.3h-2c-.6-1.9-2.4-3.2-4.5-3.2s-3.9 1.3-4.5 3.2h-.4v-5.7c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v5.7H18.1c-.6-1.9-2.4-3.2-4.5-3.2s-3.9 1.3-4.5 3.2H4.8v-1.7H8c.4 0 .8-.3.8-.8s-.4-.7-.8-.7H.8c-.4 0-.8.3-.8.8s.3.8.8.8h2.5V38c0 .9.7 1.6 1.6 1.6H9c0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8h16.9c0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8h2.5c.4 0 .8-.3.8-.8v-8c-.4-2-1.9-3.6-3.8-3.9zm-21.5-21c.7-.9 1.9-1 2.8-.4s1 1.9.4 2.8c-.3.3-1.1 1.2-4.1 3-.6.4-1.2.7-1.7 1 .7-2.2 1.9-5.4 2.6-6.4zm-11 2.4c-.7-.9-.5-2.1.4-2.8.4-.3.8-.4 1.2-.4.6 0 1.2.3 1.6.8.7 1 1.9 4.2 2.6 6.5-.5-.3-1.1-.6-1.7-1-3-1.9-3.8-2.7-4.1-3.1zm23.1 13.6h6.7l1.2 4.9h-7.9v-4.9zm5.6-3.2c.9 0 1.7.7 1.7 1.7h-7.3v-1.7h5.6zM13.6 42.9c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm26.4 0c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm5.6-9.6c-.5 0-.9-.4-.9-.9v-.9h1.7v1.7l-.8.1z"
  }), __jsx("path", {
    d: "M13.6 38.1c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.8-1.6-1.6-1.6zM40 38.1c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6zM19.2 35.6c0 .4.3.8.8.8h11.2c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H20c-.4.1-.8.4-.8.8zM2.4 33.2H12c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H2.4c-.4 0-.8.3-.8.8s.3.8.8.8zM12 21.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H8.8c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8.4 0 .8-.3.8-.8V25h1.7c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H9.5v-1.7l2.5.2zM19.1 23.2c0-1.5-1.2-2.8-2.8-2.8h-2c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8.4 0 .8-.3.8-.8V26h1.3l1.4 2.1c.1.2.4.3.6.3.1 0 .3 0 .4-.1.3-.2.4-.7.2-1l-1.1-1.7c.7-.6 1.2-1.4 1.2-2.4zm-4-1.3h1.3c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3h-1.3v-2.6zM24 21.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-3.2c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8H24c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-2.5V25h1.6c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-1.6v-1.7l2.5.2zM29.6 21.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-3.2c-.4 0-.8.3-.8.8v6.4c0 .4.3.8.8.8h3.2c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-2.5V25h.9c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-.9v-1.7l2.5.2z"
  }));
};

FiFreeDelivery48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var Filters16 = function Filters16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M7 14v-2h9v2H7zm7-7h2v2h-2V7zm-1.5-1c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h2zM7 2h9v2H7V2zM5.5 5h-2c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM0 2h2v2H0V2zm9 7H0V7h9v2zm-7 5H0v-2h2v2zm1.5-3h2c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5z"
  }));
};

Filters16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var FiPaymentSecurity48 = function FiPaymentSecurity48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M30 34.4H2.5c-.5 0-.9-.4-.9-.9V7.7c0-.5.4-.9.9-.9H42c.5 0 .9.4.9.9v11.2c0 .4.4.8.8.8s.8-.4.8-.8V7.7c0-1.4-1.1-2.5-2.5-2.5H2.5C1.1 5.2 0 6.3 0 7.7v25.8C0 34.8 1.1 36 2.5 36H30c.4 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8z"
  }), __jsx("path", {
    d: "M15.4 18v-5.2c0-.9-.7-1.7-1.7-1.7H6.8c-.9 0-1.7.7-1.7 1.7V18c0 .9.7 1.7 1.7 1.7h6.9c.9 0 1.7-.8 1.7-1.7zm-1.7-5.2V18s0 .1-.1.1h-3.5v-1.8h.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8h-.9v-1.8l3.6-.1zM6.8 18v-5.2s0-.1.1-.1h1.8V18H6.8zM32.2 11.1c-.8-.5-1.7-.8-2.6-.8-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7c1 0 1.8-.3 2.6-.8.8.5 1.7.8 2.6.8 2.6 0 4.7-2.1 4.7-4.7s-2.1-4.7-4.7-4.7c-1 0-1.9.3-2.6.8zM26.5 15c0-1.7 1.4-3.1 3.1-3.1.5 0 .9.1 1.4.3-.6.8-.9 1.8-.9 2.8 0 1 .3 1.9.9 2.7-.4.2-.9.3-1.4.3-1.7 0-3.1-1.3-3.1-3zm11.3 0c0 1.7-1.4 3.1-3.1 3.1-.5 0-.9-.1-1.4-.3.6-.8.9-1.7.9-2.7 0-.4-.4-.8-.8-.8s-.8.4-.8.8c0 .6-.2 1.2-.5 1.6-.3-.5-.5-1.1-.5-1.6 0-1.7 1.4-3.1 3.1-3.1 1.7-.1 3.1 1.3 3.1 3zM6 24.1c-.4 0-.8.4-.8.8s.4.8.8.8h6.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8H6zM30.9 29.2H6c-.4 0-.8.4-.8.8s.4.8.8.8h24.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8zM16.3 24.1c-.4 0-.8.4-.8.8s.4.8.8.8h6.9c.4 0 .8-.4.8-.8s-.4-.8-.8-.8h-6.9zM31.7 24.1h-5.2c-.4 0-.8.4-.8.8s.4.8.8.8h5.2c.4 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8zM46.3 30.2v-3.6c0-3.3-2.7-6-6-6s-6 2.7-6 6v3.6c-1 .3-1.7 1.3-1.7 2.4v7.7c0 1.4 1.1 2.5 2.5 2.5h10.3c1.4 0 2.5-1.1 2.5-2.5v-7.7c.1-1.1-.6-2.1-1.6-2.4zm-6-8c2.4 0 4.3 2 4.3 4.3V30H36v-3.5c0-2.3 1.9-4.3 4.3-4.3zm6.1 18.1c0 .5-.4.9-.9.9H35.2c-.5 0-.9-.4-.9-.9v-7.7c0-.5.4-.9.9-.9h10.3c.5 0 .9.4.9.9v7.7z"
  }), __jsx("path", {
    d: "M40.3 33.5c-1.2 0-2.1.9-2.1 2.1 0 .9.5 1.6 1.3 1.9v1.1c0 .4.4.8.8.8s.8-.4.8-.8v-1.1c.8-.3 1.3-1.1 1.3-1.9 0-1.2-.9-2.1-2.1-2.1zm0 1.6c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.3-.5.5-.5z"
  }));
};

FiPaymentSecurity48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var Fit = function Fit(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M12 4.4L5.5 11 1 6.5l1.4-1.4 3.1 3.1L10.6 3 12 4.4z"
  }));
};

Fit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "13"
};

var FiTag48 = function FiTag48(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M48 3.3c0-.9-.3-1.7-1-2.3-.6-.6-1.4-1-2.3-1-.9 0-1.7.3-2.3 1-.3.3-.7.8-1 1.1-.3.3-.2.8.1 1.1.3.3.8.2 1.1-.1.4-.5.7-.9.9-1 .3-.3.8-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.8.5 1.2 0 .5-.2.9-.5 1.2-.3.3-1.3 1.1-2.7 2.1-.9-1.5-2.4-2.4-4.3-2.4H27.5c-1.5 0-3 .6-4.1 1.7L.7 28.6c-.4.4-.7 1.1-.7 1.7s.3 1.3.7 1.7L16 47.3c.5.5 1.1.7 1.7.7.7 0 1.3-.3 1.7-.7l22.8-22.8c1.1-1.1 1.7-2.5 1.7-4.1V9.1c0-.3 0-.7-.1-1C45.4 7 46.6 6 47 5.6c.7-.6 1-1.5 1-2.3zm-5.7 5.8v11.4c0 1.1-.4 2.2-1.2 3L18.3 46.2c-.3.3-.9.3-1.2 0L1.8 30.9c-.3-.3-.3-.9 0-1.2L24.6 6.9c.8-.8 1.8-1.2 3-1.2H39c1.3 0 2.4.7 3 1.8-.9.6-1.9 1.3-3 1.9l-.1-.1c-1.3-1.3-3.3-1.3-4.6 0s-1.3 3.3 0 4.6c.6.6 1.5 1 2.3 1 .8 0 1.7-.3 2.3-1 .9-.9 1.1-2.1.8-3.1.9-.6 1.8-1.2 2.6-1.7zm-6.6 2.8c.1.3.4.4.7.4.1 0 .2 0 .3-.1.5-.2.9-.5 1.4-.7 0 .4-.2.9-.5 1.2-.7.7-1.8.7-2.4 0-.7-.7-.7-1.8 0-2.4.3-.3.8-.5 1.2-.5.3 0 .7.1 1 .3-.4.2-.9.5-1.3.7-.4.3-.5.7-.4 1.1z"
  }), __jsx("path", {
    d: "M16.3 25.8c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2.4 2.4-3 3-2.4-2.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l5.9 5.9c.2.2.4.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-2.4-2.4 3-3 2.4 2.4c.2.2.4.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-5.7-5.9zM24.8 21.4c-1.4-1.4-3.8-1.4-5.2 0s-1.4 3.8 0 5.2l1.8 1.8c.7.7 1.7 1.1 2.6 1.1s1.9-.4 2.6-1.1c1.4-1.4 1.4-3.8 0-5.2l-1.8-1.8zm.7 5.9c-.8.8-2.2.8-3 0l-1.8-1.8c-.8-.8-.8-2.2 0-3 .4-.4 1-.6 1.5-.6s1.1.2 1.5.6l1.8 1.8c.8.8.8 2.2 0 3zM27.4 15.8l1.8-1.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-4.7 4.7c-.3.3-.3.8 0 1.1.2.2.4.2.5.2s.4-.1.5-.2l1.8-1.8 5.3 5.3c.2.2.4.2.5.2.2 0 .4-.1.5-.2.3-.3.3-.8 0-1.1l-5.1-5.3z"
  }));
};

FiTag48.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48"
};

var Heart20 = function Heart20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M14 3c2.2 0 4 1.8 4 4 0 4-5.2 10-8 10S2 11 2 7c0-2.2 1.8-4 4-4 1 0 1.9.4 2.7 1L10 5.2 11.3 4c.8-.6 1.7-1 2.7-1m0-2c-1.5 0-2.9.6-4 1.5C8.9 1.6 7.5 1 6 1 2.7 1 0 3.7 0 7c0 5 6 12 10 12s10-7 10-12c0-3.3-2.7-6-6-6z"
  }));
};

Heart20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Heart32 = function Heart32(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M23 4c3.9 0 7 3.1 7 7 0 6.3-11.4 15.9-14 16.9-2.6-1-14-10.6-14-16.9 0-3.9 3.1-7 7-7 2.1 0 4.1 1 5.4 2.6l1.6 2 1.6-2C18.9 5 20.9 4 23 4m0-2c-2.8 0-5.4 1.3-7 3.4C14.4 3.3 11.8 2 9 2c-5 0-9 4-9 9 0 8 14 19 16 19s16-11 16-19c0-5-4-9-9-9z"
  }));
};

Heart32.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32"
};

var LayoutGrid16 = function LayoutGrid16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15.2 16H9.8c-.4 0-.8-.4-.8-.8V9.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm0-9H9.8c-.4 0-.8-.4-.8-.8V.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm-9 9H.8c-.4 0-.8-.4-.8-.8V9.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm0-9H.8C.4 7 0 6.6 0 6.2V.8C0 .4.4 0 .8 0h5.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8z"
  }));
};

LayoutGrid16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var LayoutGridWithDetails16 = function LayoutGridWithDetails16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16 .8v14.4c0 .4-.4.8-.8.8H9.8c-.4 0-.8-.4-.8-.8V.8c0-.4.4-.8.8-.8h5.4c.4 0 .8.4.8.8zm-9 0v14.4c0 .4-.4.8-.8.8H.8c-.4 0-.8-.4-.8-.8V.8C0 .4.4 0 .8 0h5.4c.4 0 .8.4.8.8z"
  }));
};

LayoutGridWithDetails16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var LayoutList16 = function LayoutList16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15.2 16H.8c-.4 0-.8-.4-.8-.8V9.8c0-.4.4-.8.8-.8h14.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8zm0-9H.8C.4 7 0 6.6 0 6.2V.8C0 .4.4 0 .8 0h14.4c.4 0 .8.4.8.8v5.4c0 .4-.4.8-.8.8z"
  }));
};

LayoutList16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var LayoutTable16 = function LayoutTable16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15.2 16H.8c-.4 0-.8-.4-.8-.8v-2.4c0-.4.4-.8.8-.8h14.4c.4 0 .8.4.8.8v2.4c0 .4-.4.8-.8.8zm0-6H.8c-.4 0-.8-.4-.8-.8V6.8c0-.4.4-.8.8-.8h14.4c.4 0 .8.4.8.8v2.4c0 .4-.4.8-.8.8zm0-6H.8C.4 4 0 3.6 0 3.2V.8C0 .4.4 0 .8 0h14.4c.4 0 .8.4.8.8v2.4c0 .4-.4.8-.8.8z"
  }));
};

LayoutTable16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var Menu16x12 = function Menu16x12(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 7V5h16v2H0zm0-7h16v2H0V0zm12 12H0v-2h12v2z"
  }));
};

Menu16x12.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12"
};

var Menu18x14 = function Menu18x14(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M0 8V6h18v2H0zm0-8h18v2H0V0zm14 14H0v-2h14v2z"
  }));
};

Menu18x14.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "14"
};

var NoFit = function NoFit(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.5 0C2.9 0 0 2.9 0 6.5S2.9 13 6.5 13 13 10.1 13 6.5 10.1 0 6.5 0zm0 2c.9 0 1.7.3 2.4.7L2.7 8.9C2.3 8.2 2 7.4 2 6.5 2 4 4 2 6.5 2zm0 9c-.9 0-1.7-.3-2.4-.7l6.2-6.2c.4.7.7 1.5.7 2.4C11 9 9 11 6.5 11z"
  }));
};

NoFit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "13"
};

var Person20 = function Person20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M20 20h-2c0-4.4-3.6-8-8-8s-8 3.6-8 8H0c0-4.2 2.6-7.8 6.3-9.3C4.9 9.6 4 7.9 4 6c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.9-.9 3.6-2.3 4.7 3.7 1.5 6.3 5.1 6.3 9.3zM14 6c0-2.2-1.8-4-4-4S6 3.8 6 6s1.8 4 4 4 4-1.8 4-4z"
  }));
};

Person20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Person32 = function Person32(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16 18C9.4 18 4 23.4 4 30H2c0-6.2 4-11.5 9.6-13.3C9.4 15.3 8 12.8 8 10c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.8-1.5 5.3-3.6 6.7C26 18.5 30 23.8 30 30h-2c0-6.6-5.4-12-12-12zm6-8c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6z"
  }));
};

Person32.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32"
};

var Quickview16 = function Quickview16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M14 15h-4v-2h3v-3h2v4c0 .6-.4 1-1 1zM13 3h-3V1h4c.6 0 1 .4 1 1v4h-2V3zM6 3H3v3H1V2c0-.6.4-1 1-1h4v2zM3 13h3v2H2c-.6 0-1-.4-1-1v-4h2v3z"
  }));
};

Quickview16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var RecycleBin16 = function RecycleBin16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M2 4V2h3V1h6v1h3v2H2zm11 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5h10v8z"
  }));
};

RecycleBin16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var Search20 = function Search20(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M19.2 17.8s-.2.5-.5.8c-.4.4-.9.6-.9.6s-.9.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9-1 .8-2.4 1.3-3.9 1.3-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7c0 1.5-.5 2.9-1.3 4 1.1.8 2.5 2 4 3.1 2.3 1.7 1.5 2.7 1.5 2.7zM8 3C5.2 3 3 5.2 3 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"
  }));
};

Search20.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20"
};

var Wishlist16 = function Wishlist16(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M13.9 8.4l-5.4 5.4c-.3.3-.7.3-1 0L2.1 8.4C.6 6.9.6 4.6 2.1 3.1 2.8 2.4 3.8 2 4.8 2s1.9.4 2.6 1.1l.6.6.6-.6c.7-.7 1.7-1.1 2.7-1.1 1 0 1.9.4 2.6 1.1 1.5 1.5 1.5 3.8 0 5.3z"
  }));
};

Wishlist16.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var ZoomIn24 = function ZoomIn24(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M15 18c-2 0-3.8-.6-5.2-1.7-1 1.3-2.1 2.8-3.5 4.6-2.2 2.8-3.4 1.9-3.4 1.9s-.6-.3-1.1-.7c-.4-.4-.7-1-.7-1S.2 19.9 3 17.8c1.8-1.4 3.3-2.5 4.6-3.5C6.6 12.8 6 11 6 9c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1 11h-2v-3h-3V8h3V5h2v3h3v2h-3v3z"
  }));
};

ZoomIn24.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
};
const ArrowDown9x6Svg = ArrowDown9x6;
const ArrowDownSm7x5Svg = ArrowDownSm7x5;
const ArrowRoundedDown9x6Svg = ArrowRoundedDown9x6;
const ArrowRoundedDown12x7Svg = ArrowRoundedDown12x7;
const ArrowRoundedLeft6x9Svg = ArrowRoundedLeft6x9;
const ArrowRoundedLeft7x11Svg = ArrowRoundedLeft7x11;
const ArrowRoundedRight6x9Svg = ArrowRoundedRight6x9;
const ArrowRoundedRight7x11Svg = ArrowRoundedRight7x11;
const Car20Svg = Car20;
const Cart20Svg = Cart20;
const Cart32Svg = Cart32;
const Check12x9Svg = Check12x9;
const Check100Svg = Check100;
const Compare16Svg = Compare16;
const Cross9LightSvg = Cross9Light;
const Cross10Svg = Cross10;
const Cross12Svg = Cross12;
const Cross20Svg = Cross20;
const Fi24Hours48Svg = Fi24Hours48;
const FiFreeDelivery48Svg = FiFreeDelivery48;
const Filters16Svg = Filters16;
const FiPaymentSecurity48Svg = FiPaymentSecurity48;
const FiTag48Svg = FiTag48;
const FitSvg = Fit;
const Heart20Svg = Heart20;
const Heart32Svg = Heart32;
const LayoutGrid16Svg = LayoutGrid16;
const LayoutGridWithDetails16Svg = LayoutGridWithDetails16;
const LayoutList16Svg = LayoutList16;
const LayoutTable16Svg = LayoutTable16;
const Menu16x12Svg = Menu16x12;
const Menu18x14Svg = Menu18x14;
const NoFitSvg = NoFit;
const Person20Svg = Person20;
const Person32Svg = Person32;
const Quickview16Svg = Quickview16;
const RecycleBin16Svg = RecycleBin16;
const Search20Svg = Search20;
const Wishlist16Svg = Wishlist16;
const ZoomIn24Svg = ZoomIn24;

/***/ }),

/***/ "P5m/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party



function PageTitle(props) {
  const {
    children
  } = props;
  const title = children || '';
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title, title ? ' — ' : '', "Royal Auto Parts Market"));
}

/* harmony default export */ __webpack_exports__["a"] = (PageTitle);

/***/ }),

/***/ "QnOi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+Sw2");
/* harmony import */ var _components_blocks_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xBAi");
/* harmony import */ var _components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gOg4");
/* harmony import */ var _components_shared_InputNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YtuU");
/* harmony import */ var _components_shared_PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("P5m/");
/* harmony import */ var _components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+lck");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P3CU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application









function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
}

function Page() {
  const {
    0: numberValue,
    1: setNumberValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shared_PageTitle__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "Components"), __jsx(_components_blocks_BlockHeader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    pageTitle: "Components",
    breadcrumb: [{
      title: 'Home',
      url: ''
    }, {
      title: 'Breadcrumb',
      url: ''
    }, {
      title: 'Current Page',
      url: ''
    }]
  }), __jsx("div", {
    className: "block"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h2", {
    className: "card-title"
  }, "Alerts"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("div", {
    className: "alert alert-primary alert-lg mb-3 alert-dismissible fade show"
  }, "A simple large alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like.", __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Cross12Svg */ "p"], null)))), __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "alert alert-info mb-3"
  }, "A simple alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like."), __jsx("div", {
    className: "alert alert-primary mb-3"
  }, "A simple alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like."), __jsx("div", {
    className: "alert alert-secondary mb-3 mb-md-5"
  }, "A simple alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like.")), __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "alert alert-success mb-3"
  }, "A simple alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like."), __jsx("div", {
    className: "alert alert-danger mb-3"
  }, "A simple alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like."), __jsx("div", {
    className: "alert alert-warning mb-5"
  }, "A simple alert with", ' ', __jsx(_components_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: "/"
  }, "an example link"), ". Give it a click if you like."))), __jsx("div", {
    className: "alert alert-success",
    role: "alert"
  }, __jsx("h4", {
    className: "alert-heading"
  }, "Well done!"), __jsx("p", null, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."), __jsx("hr", null), __jsx("p", {
    className: "mb-0"
  }, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h2", {
    className: "card-title"
  }, "Input Number"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-3"
  }, __jsx(_components_shared_InputNumber__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    value: numberValue,
    onChange: setNumberValue,
    className: "mb-3",
    min: 1,
    size: "lg"
  }), __jsx(_components_shared_InputNumber__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    value: numberValue,
    onChange: setNumberValue,
    className: "mb-3",
    min: 1
  }), __jsx(_components_shared_InputNumber__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    value: numberValue,
    onChange: setNumberValue,
    min: 1,
    size: "sm"
  }))))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h2", {
    className: "card-title"
  }, "Buttons"), __jsx("div", {
    className: "row"
  }, ['primary', 'secondary', 'light', 'muted'].map((style, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index
  }, __jsx("div", {
    className: "col-lg-4"
  }, __jsx("p", null, __jsx("strong", null, `${titleCase(style)} Buttons`)), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-xl`
  }, "Extra Large"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-xl btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-lg`
  }, "Button Large"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-lg btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style}`
  }, "Button Normal"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-sm`
  }, "Button Small"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-sm btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-xs`
  }, "Extra Small"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-xs btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("p", null, __jsx("strong", null, "Loading State")), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-xl`
  }, "Extra Large"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-xl btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-lg`
  }, "Button Large"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-lg btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading`
  }, "Button Normal"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-sm`
  }, "Button Small"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-sm btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-xs`
  }, "Extra Small"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-loading btn-xs btn-icon`
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("p", null, __jsx("strong", null, "Disabled State")), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-lg`,
    disabled: true
  }, "Button Large"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-lg btn-icon`,
    disabled: true
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style}`,
    disabled: true
  }, "Button Normal"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-icon`,
    disabled: true
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-sm`,
    disabled: true
  }, "Button Small"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-sm btn-icon`,
    disabled: true
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '), __jsx("div", {
    className: "form-group"
  }, __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-xs`,
    disabled: true
  }, "Extra Small"), ' ', __jsx("button", {
    type: "button",
    className: `btn btn-${style} btn-xs btn-icon`,
    disabled: true
  }, __jsx(_svg__WEBPACK_IMPORTED_MODULE_7__[/* Quickview16Svg */ "J"], null)), ' '))))))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h2", {
    className: "card-title"
  }, "Fields"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-4"
  }, __jsx("p", null, __jsx("strong", null, "Text Field")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "text-default"
  }, "Default"), __jsx("input", {
    id: "text-default",
    type: "text",
    className: "form-control",
    placeholder: "Placeholder"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "text-readonly"
  }, "Readonly"), __jsx("input", {
    id: "text-readonly",
    type: "text",
    className: "form-control",
    placeholder: "Placeholder",
    readOnly: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "text-disabled"
  }, "Disabled"), __jsx("input", {
    id: "text-disabled",
    type: "text",
    className: "form-control",
    placeholder: "Placeholder",
    disabled: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "text-success"
  }, "Success"), __jsx("input", {
    id: "text-success",
    type: "text",
    className: "form-control is-valid",
    placeholder: "Placeholder"
  }), __jsx("div", {
    className: "valid-feedback"
  }, "Example invalid feedback text")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "text-error"
  }, "Error"), __jsx("input", {
    id: "text-error",
    type: "text",
    className: "form-control is-invalid",
    placeholder: "Placeholder"
  }), __jsx("div", {
    className: "invalid-feedback"
  }, "Example invalid feedback text")), __jsx("p", {
    className: "mt-5"
  }, __jsx("strong", null, "Text Field Sizes")), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control form-control-lg",
    placeholder: "Large"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Normal"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control form-control-sm",
    placeholder: "Small"
  }))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("p", null, __jsx("strong", null, "Select")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "select-default"
  }, "Default"), __jsx("select", {
    id: "select-default",
    className: "form-control"
  }, __jsx("option", null, "Select"))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "select-disabled"
  }, "Disabled"), __jsx("select", {
    id: "select-disabled",
    className: "form-control",
    disabled: true
  }, __jsx("option", null, "Select"))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "select-success"
  }, "Success"), __jsx("select", {
    id: "select-success",
    className: "form-control is-valid"
  }, __jsx("option", null, "Select")), __jsx("div", {
    className: "valid-feedback"
  }, "Example invalid feedback text")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "select-error"
  }, "Error"), __jsx("select", {
    id: "select-error",
    className: "form-control is-invalid"
  }, __jsx("option", null, "Select")), __jsx("div", {
    className: "invalid-feedback"
  }, "Example invalid feedback text")), __jsx("p", {
    className: "mt-5"
  }, __jsx("strong", null, "Select Sizes")), __jsx("div", {
    className: "form-group"
  }, __jsx("select", {
    className: "form-control form-control-lg"
  }, __jsx("option", null, "Large"))), __jsx("div", {
    className: "form-group"
  }, __jsx("select", {
    className: "form-control"
  }, __jsx("option", null, "Normal"))), __jsx("div", {
    className: "form-group"
  }, __jsx("select", {
    className: "form-control form-control-sm"
  }, __jsx("option", null, "Small")))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("p", null, __jsx("strong", null, "Textarea")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "area-default"
  }, "Default"), __jsx("textarea", {
    id: "area-default",
    rows: 3,
    className: "form-control",
    placeholder: "Placeholder"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "area-readonly"
  }, "Readonly"), __jsx("textarea", {
    id: "area-readonly",
    rows: 3,
    className: "form-control",
    placeholder: "Placeholder",
    readOnly: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "area-disabled"
  }, "Disabled"), __jsx("textarea", {
    id: "area-disabled",
    rows: 3,
    className: "form-control",
    placeholder: "Placeholder",
    disabled: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "area-success"
  }, "Success"), __jsx("textarea", {
    id: "area-success",
    rows: 3,
    className: "form-control is-valid",
    placeholder: "Placeholder"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "area-error"
  }, "Error"), __jsx("textarea", {
    id: "area-error",
    rows: 3,
    className: "form-control is-invalid",
    placeholder: "Placeholder"
  })), __jsx("p", {
    className: "mt-5"
  }, __jsx("strong", null, "Textarea Sizes")), __jsx("div", {
    className: "form-group"
  }, __jsx("textarea", {
    rows: 3,
    className: "form-control form-control-lg",
    placeholder: "Large"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("textarea", {
    rows: 3,
    className: "form-control",
    placeholder: "Normal"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("textarea", {
    rows: 3,
    className: "form-control form-control-sm",
    placeholder: "Small"
  })))))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h2", {
    className: "card-title"
  }, "Status Badge"), __jsx("div", null, __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "success",
    text: "In Stock",
    tooltip: "In Stock",
    icon: "success"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "failure",
    text: "Out of Stock",
    tooltip: "Out of Stock",
    icon: "failure"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "warning",
    text: "On Order",
    tooltip: "On Order",
    icon: "success"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "unknown",
    text: "Unknown",
    tooltip: "Unknown",
    icon: "failure"
  }), ' '), __jsx("div", {
    className: "mt-3"
  }, __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "success",
    text: "In Stock",
    tooltip: "In Stock"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "failure",
    text: "Out of Stock",
    tooltip: "Out of Stock"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "warning",
    text: "On Order",
    tooltip: "On Order"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "unknown",
    text: "Unknown",
    tooltip: "Unknown"
  }), ' '), __jsx("div", {
    className: "mt-3"
  }, __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "success",
    tooltip: "In Stock",
    icon: "success"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "failure",
    tooltip: "Out of Stock",
    icon: "failure"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "warning",
    tooltip: "On Order",
    icon: "success"
  }), ' ', __jsx(_components_shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: "unknown",
    tooltip: "Unknown",
    icon: "failure"
  }), ' '))), __jsx("div", {
    className: "card"
  }, __jsx("div", {
    className: "card-body card-body--padding--2"
  }, __jsx("h2", {
    className: "card-title"
  }, "Tag Badge"), __jsx("div", null, __jsx("div", {
    className: "tag-badge tag-badge--theme"
  }, "Theme"), __jsx("div", {
    className: "tag-badge tag-badge--sale"
  }, "Sale"), __jsx("div", {
    className: "tag-badge tag-badge--new"
  }, "New"), __jsx("div", {
    className: "tag-badge tag-badge--hot"
  }, "Hot")))))), __jsx(_components_blocks_BlockSpace__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    layout: "before-footer"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YtuU":
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



function InputNumber(props) {
  const {
    size,
    className,
    onChange,
    inputRef
  } = props,
        otherProps = _objectWithoutProperties(props, ["size", "className", "onChange", "inputRef"]);

  const {
    value = '',
    step = 1,
    min = null,
    max = null
  } = props;

  const change = (direction, prevValue = value) => {
    // noinspection SuspiciousTypeOfGuard
    let newValue = typeof prevValue === 'string' ? parseFloat(prevValue) : prevValue;
    newValue = (Number.isNaN(newValue) ? 0 : newValue) + step * direction;

    if (max !== null) {
      newValue = Math.min(max, newValue);
    }

    if (min !== null) {
      newValue = Math.max(min, newValue);
    }

    if (newValue !== prevValue && onChange) {
      onChange(newValue);
    }

    return newValue;
  };

  const changeByTimer = direction => {
    let prevValue = value;
    let interval;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        prevValue = change(direction, prevValue);
      }, 50);
    }, 300);

    const documentMouseUp = () => {
      clearTimeout(timer);
      clearInterval(interval);
      document.removeEventListener('mouseup', documentMouseUp, false);
    };

    document.addEventListener('mouseup', documentMouseUp, false);
  };

  const handleAddMouseDown = () => {
    change(1);
    changeByTimer(1);
  };

  const handleSubMouseDown = () => {
    change(-1);
    changeByTimer(-1);
  };

  const handleChange = event => {
    if (onChange) {
      if (event.target.value.trim() === '') {
        onChange('');
      } else {
        const value = parseFloat(event.target.value);
        onChange(Number.isNaN(value) ? min || 0 : value);
      }
    }
  };

  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('input-number', className);
  const formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control', 'input-number__input', {
    'form-control-sm': size === 'sm',
    'form-control-lg': size === 'lg'
  });
  return __jsx("div", {
    className: classes
  }, __jsx("input", _extends({
    className: formControlClasses,
    type: "number",
    onChange: handleChange,
    ref: inputRef
  }, otherProps)), __jsx("div", {
    className: "input-number__add",
    onMouseDown: handleAddMouseDown
  }), __jsx("div", {
    className: "input-number__sub",
    onMouseDown: handleSubMouseDown
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (InputNumber);

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "xBAi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/shared/AppLink.tsx
var AppLink = __webpack_require__("+Sw2");

// CONCATENATED MODULE: ./src/components/shared/Breadcrumb.tsx
var __jsx = external_react_default.a.createElement;
// react
 // third-party

 // application



function Breadcrumb(props) {
  const {
    className,
    items,
    withPageTitle = false,
    afterHeader = true
  } = props;
  const rootClasses = external_classnames_default()('breadcrumb', className);
  return __jsx("div", {
    className: rootClasses,
    "aria-label": "breadcrumb"
  }, __jsx("ol", {
    className: "breadcrumb__list"
  }, afterHeader && __jsx("li", {
    className: "breadcrumb__spaceship-safe-area",
    role: "presentation"
  }), items.map((item, index) => {
    const isFirst = index === 0;
    const isLast = index === items.length - 1;
    const itemClasses = external_classnames_default()('breadcrumb__item', {
      'breadcrumb__item--first': isFirst,
      'breadcrumb__item--last': isLast,
      'breadcrumb__item--parent': !isLast,
      'breadcrumb__item--current': isLast
    });
    return __jsx("li", {
      key: index,
      className: itemClasses,
      "aria-current": isLast ? 'page' : undefined
    }, isLast && __jsx("span", {
      className: "breadcrumb__item-link"
    }, item.title), !isLast && __jsx(AppLink["a" /* default */], {
      href: item.url,
      className: "breadcrumb__item-link"
    }, item.title));
  }), withPageTitle && __jsx("li", {
    className: "breadcrumb__title-safe-area",
    role: "presentation"
  })));
}

/* harmony default export */ var shared_Breadcrumb = (Breadcrumb);
// EXTERNAL MODULE: ./src/store/hooks.ts
var hooks = __webpack_require__("Zlw4");

// CONCATENATED MODULE: ./src/components/blocks/BlockHeader.tsx
var BlockHeader_jsx = external_react_default.a.createElement;
// react
 // third-party

 // application




function BlockHeader(props) {
  const {
    pageTitle,
    breadcrumb = [],
    afterHeader = true
  } = props;
  const hasPageTitle = !!pageTitle;
  const hasBreadcrumb = breadcrumb.length > 0;
  const elementRef = Object(external_react_["useRef"])(null);
  const titleElementRef = Object(external_react_["useRef"])(null);
  const titleVisible = Object(hooks["e" /* useMedia */])('(min-width: 1200px)');

  const calcTitleWidth = () => {
    // So that breadcrumbs correctly flow around the page title, we need to know its width.
    // This code simply conveys the width of the page title in CSS.
    if (!elementRef.current || !titleElementRef.current) {
      return;
    }

    const {
      width
    } = titleElementRef.current.getBoundingClientRect();
    elementRef.current.style.setProperty('--block-header-title-width', `${width}px`);
  };

  Object(external_react_["useEffect"])(() => {
    if (titleVisible) {
      calcTitleWidth();
    }
  }, [pageTitle, titleVisible]);
  const rootClasses = external_classnames_default()('block-header', {
    'block-header--has-title': hasPageTitle,
    'block-header--has-breadcrumb': hasBreadcrumb
  });
  return BlockHeader_jsx("div", {
    className: rootClasses,
    ref: elementRef
  }, BlockHeader_jsx("div", {
    className: "container"
  }, BlockHeader_jsx("div", {
    className: "block-header__body"
  }, hasBreadcrumb && BlockHeader_jsx(shared_Breadcrumb, {
    className: "block-header__breadcrumb",
    items: breadcrumb,
    withPageTitle: hasPageTitle,
    afterHeader: afterHeader
  }), hasPageTitle && BlockHeader_jsx("h1", {
    className: "block-header__title",
    ref: titleElementRef
  }, pageTitle))));
}

/* harmony default export */ var blocks_BlockHeader = __webpack_exports__["a"] = (BlockHeader);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });