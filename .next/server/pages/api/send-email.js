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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pN/e");


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "pN/e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./src/utils/sendEmail.js

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = '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';

const sendEmail = async order => {
  const {
    token,
    number,
    createdAt,
    payment,
    status,
    items,
    quantity,
    subtotal,
    totals,
    total,
    billingAddress,
    shippingAddress
  } = order;
  const {
    firstName,
    lastName,
    company,
    country,
    email,
    phone
  } = billingAddress;
  debugger;
  let html = ` <div class="order-success__body">
    <div class="order-success__header">
       <svg class="order-success__icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <path d="M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm0-98C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm-5.8 69L22.3 49.1l1.4-1.4 21.2 21.2 34.4-34.4 1.4 1.4L45.6 71c-.4.4-1 .4-1.4 0z"></path>
       </svg>
       <h1 class="order-success__title">Thank you</h1>
       <div class="order-success__subtitle">Your order has been received</div>
       <div class="order-success__actions"><a class="btn btn-sm btn-secondary" href="http://royalautopartsmarket.com/">Go To Homepage</a></div>
    </div>
    <div class="card order-success__meta">
       <ul class="order-success__meta-list">
          <li class="order-success__meta-item"><span class="order-success__meta-title">Enquiry number: </span><span class="order-success__meta-value">${number}</span></li>
          <li class="order-success__meta-item"><span class="order-success__meta-title">Created At: </span><span class="order-success__meta-value">${createdAt}</span></li>
          <li class="order-success__meta-item"><span class="order-success__meta-title">Total: </span><span class="order-success__meta-value">AED${subtotal}</span></li> 
       </ul>
    </div>
    <div class="card">
       <div class="order-list">
          <table>
             <thead class="order-list__header">
                <tr>
                   <th class="order-list__column-label" colspan="2">Product</th>
                   <th class="order-list__column-quantity">Quantity</th>
                   <th class="order-list__column-total">Total</th>
                </tr>
             </thead>
             <tbody class="order-list__products">`;
  items.map(item => {
    const {
      product,
      price,
      quantity
    } = item;
    const {
      name,
      slug,
      partNumber
    } = product;
    const desc = name + ' ' + partNumber + ' ' + slug;
    html = html + ` <tr>
        <td class="order-list__column-image">
           <div class="image image--type--product"><a class="image__body" href="http://royalautopartsmarket.com/products/${slug}"> </a></div>
        </td>
        <td class="order-list__column-product"><a href="http://royalautopartsmarket.com/products/${slug}">${desc}</a></td>
        <td class="order-list__column-quantity" data-title="Quantity:">${quantity}</td>
        <td class="order-list__column-total">AED${price}</td>
     </tr>`;
    return html;
  });
  html = html + ` </tbody></table><table>
    <tbody class="order-list__subtotals">
        <tr>
          <th class="order-list__column-label" colspan="3">Total</th>
          <td class="order-list__column-total">${subtotal}</td>
       </tr>
    </tbody>
   
 </table>
</div>
</div>
<div class="order-success__addresses"> 
<div class="card address-card order-success__address">
 <div class="card__loader"></div>
 <div class="address-card__badge tag-badge tag-badge--theme">Billing Address</div>
 <div class="address-card__body">
  
   
    <div class="address-card__row">
    <div class="address-card__row-title">name</div>
    <div class="address-card__row-content">${firstName}</div>
 </div>
 <div class="address-card__row">
 <div class="address-card__row-title">Email Address</div>
 <div class="address-card__row-content">${email}</div>
</div>
    <div class="address-card__row">
       <div class="address-card__row-title">Phone Number</div>
       <div class="address-card__row-content">${phone}</div>
    </div>
    <div class="address-card__row">
       <div class="address-card__row-title">Email Address</div>
       <div class="address-card__row-content">${email}</div>
    </div>
    <div class="address-card__row">
    <div class="address-card__row-title">Country</div>
    <div class="address-card__row-content">${country}</div>
 </div>
 <div class="address-card__row">
 <div class="address-card__row-title">Company</div>
 <div class="address-card__row-content">${company}</div>
</div>
 </div>
</div>
</div>
</div>`;
  await external_node_fetch_default()(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{
          email
        }],
        subject: 'Enquiry To Royal Auto Parts Market :)'
      }],
      from: {
        email: 'enquiry@royalautopartsmarket.com',
        name: 'Spare Parts Enquiry'
      },
      content: [{
        type: 'text/html',
        value: html
      }]
    })
  });
  await external_node_fetch_default()(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{
          email: "bibinprathap@gmail.com"
        }],
        subject: 'Enquiry From Royal Auto Parts Market :)'
      }],
      from: {
        email: 'enquiry@royalautopartsmarket.com',
        name: 'Spare Parts Enquiry'
      },
      content: [{
        type: 'text/html',
        value: html
      }]
    })
  });
}; // value: `<div class="order-success__body"><div class="order-success__header"><svg class="order-success__icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm0-98C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm-5.8 69L22.3 49.1l1.4-1.4 21.2 21.2 34.4-34.4 1.4 1.4L45.6 71c-.4.4-1 .4-1.4 0z"></path></svg><h1 class="order-success__title">Thank you</h1><div class="order-success__subtitle">Your Enquiry has been received ${name}</div><div class="order-success__actions"><a class="btn btn-sm btn-secondary" href="/">Go To Homepage</a></div></div><div class="card order-success__meta"><ul class="order-success__meta-list"><li class="order-success__meta-item"><span class="order-success__meta-title">Enquiry number:</span><span class="order-success__meta-value">#9479</span></li><li class="order-success__meta-item"><span class="order-success__meta-title">Created At:</span><span class="order-success__meta-value">Dec 23, 2020</span></li><li class="order-success__meta-item"><span class="order-success__meta-title">Total:</span><span class="order-success__meta-value">AED85.00</span></li><li class="order-success__meta-item"><span class="order-success__meta-title">Payment Method:</span><span class="order-success__meta-value"></span></li></ul></div><div class="card"><div class="order-list"><table><thead class="order-list__header"><tr><th class="order-list__column-label" colspan="2">Product</th><th class="order-list__column-quantity">Quantity</th><th class="order-list__column-total">Total</th></tr></thead><tbody class="order-list__products"><tr><td class="order-list__column-image"><div class="image image--type--product"><a class="image__body" href="/products/ENGINE-OIL-BMW-5W30"> </a></div></td><td class="order-list__column-product"><a href="/products/ENGINE-OIL-BMW-5W30">ENGINE OIL BMW 5W30</a><div class="order-list__options"><ul class="order-list__options-list"><li class="order-list__options-item"><span class="order-list__options-label">Material: </span><span class="order-list__options-value">Aluminium</span></li><li class="order-list__options-item"><span class="order-list__options-label">Color: </span><span class="order-list__options-value">Yellow</span></li></ul></div></td><td class="order-list__column-quantity" data-title="Quantity:">1</td><td class="order-list__column-total">AED25.00</td></tr><tr><td class="order-list__column-image"><div class="image image--type--product"><a class="image__body" href="/products/ENGINE-OIL-BMW-5W30"> </a></div></td><td class="order-list__column-product"><a href="/products/ENGINE-OIL-BMW-5W30">ENGINE OIL BMW 5W30</a></td><td class="order-list__column-quantity" data-title="Quantity:">1</td><td class="order-list__column-total">AED25.00</td></tr></tbody><tbody class="order-list__subtotals"><tr><th class="order-list__column-label" colspan="3">Subtotal</th><td class="order-list__column-total">AED50.00</td></tr><tr><th class="order-list__column-label" colspan="3">Shipping</th><td class="order-list__column-total">AED25.00</td></tr><tr><th class="order-list__column-label" colspan="3">Tax</th><td class="order-list__column-total">AED10.00</td></tr></tbody><tfoot class="order-list__footer"><tr><th class="order-list__column-label" colspan="3">Total</th><td class="order-list__column-total">AED85.00</td></tr></tfoot></table></div></div><div class="order-success__addresses"><div class="card address-card order-success__address"><div class="card__loader"></div><div class="address-card__badge tag-badge tag-badge--theme">Shipping Address</div><div class="address-card__body"><div class="address-card__name">bbb nnn</div><div class="address-card__row">COUNTRY_NAME_AE<br>undefined, undefined<br>undefined undefined</div><div class="address-card__row"><div class="address-card__row-title">Phone Number</div><div class="address-card__row-content">888</div></div><div class="address-card__row"><div class="address-card__row-title">Email Address</div><div class="address-card__row-content">thbbb@gmail.com</div></div></div></div><div class="card address-card order-success__address"><div class="card__loader"></div><div class="address-card__badge tag-badge tag-badge--theme">Billing Address</div><div class="address-card__body"><div class="address-card__name">bbb nnn</div><div class="address-card__row">COUNTRY_NAME_AE<br>undefined, undefined<br>undefined undefined</div><div class="address-card__row"><div class="address-card__row-title">Phone Number</div><div class="address-card__row-content">888</div></div><div class="address-card__row"><div class="address-card__row-title">Email Address</div><div class="address-card__row-content">thbbb@gmail.com</div></div></div></div></div></div>`


{
  /* <div class="order-success__body"><div class="order-success__header"><svg class="order-success__icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M50 100C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50zm0-98C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm-5.8 69L22.3 49.1l1.4-1.4 21.2 21.2 34.4-34.4 1.4 1.4L45.6 71c-.4.4-1 .4-1.4 0z"></path></svg><h1 class="order-success__title">Thank you</h1><div class="order-success__subtitle">Your order has been received</div><div class="order-success__actions"><a class="btn btn-sm btn-secondary" href="/">Go To Homepage</a></div></div><div class="card order-success__meta"><ul class="order-success__meta-list"><li class="order-success__meta-item"><span class="order-success__meta-title">Enquiry number:</span><span class="order-success__meta-value">#9479</span></li><li class="order-success__meta-item"><span class="order-success__meta-title">Created At:</span><span class="order-success__meta-value">Dec 23, 2020</span></li><li class="order-success__meta-item"><span class="order-success__meta-title">Total:</span><span class="order-success__meta-value">AED85.00</span></li><li class="order-success__meta-item"><span class="order-success__meta-title">Payment Method:</span><span class="order-success__meta-value"></span></li></ul></div><div class="card"><div class="order-list"><table><thead class="order-list__header"><tr><th class="order-list__column-label" colspan="2">Product</th><th class="order-list__column-quantity">Quantity</th><th class="order-list__column-total">Total</th></tr></thead><tbody class="order-list__products"><tr><td class="order-list__column-image"><div class="image image--type--product"><a class="image__body" href="/products/ENGINE-OIL-BMW-5W30"> </a></div></td><td class="order-list__column-product"><a href="/products/ENGINE-OIL-BMW-5W30">ENGINE OIL BMW 5W30</a><div class="order-list__options"><ul class="order-list__options-list"><li class="order-list__options-item"><span class="order-list__options-label">Material: </span><span class="order-list__options-value">Aluminium</span></li><li class="order-list__options-item"><span class="order-list__options-label">Color: </span><span class="order-list__options-value">Yellow</span></li></ul></div></td><td class="order-list__column-quantity" data-title="Quantity:">1</td><td class="order-list__column-total">AED25.00</td></tr><tr><td class="order-list__column-image"><div class="image image--type--product"><a class="image__body" href="/products/ENGINE-OIL-BMW-5W30"> </a></div></td><td class="order-list__column-product"><a href="/products/ENGINE-OIL-BMW-5W30">ENGINE OIL BMW 5W30</a></td><td class="order-list__column-quantity" data-title="Quantity:">1</td><td class="order-list__column-total">AED25.00</td></tr></tbody><tbody class="order-list__subtotals"><tr><th class="order-list__column-label" colspan="3">Subtotal</th><td class="order-list__column-total">AED50.00</td></tr><tr><th class="order-list__column-label" colspan="3">Shipping</th><td class="order-list__column-total">AED25.00</td></tr><tr><th class="order-list__column-label" colspan="3">Tax</th><td class="order-list__column-total">AED10.00</td></tr></tbody><tfoot class="order-list__footer"><tr><th class="order-list__column-label" colspan="3">Total</th><td class="order-list__column-total">AED85.00</td></tr></tfoot></table></div></div><div class="order-success__addresses"><div class="card address-card order-success__address"><div class="card__loader"></div><div class="address-card__badge tag-badge tag-badge--theme">Shipping Address</div><div class="address-card__body"><div class="address-card__name">bbb nnn</div><div class="address-card__row">COUNTRY_NAME_AE<br>undefined, undefined<br>undefined undefined</div><div class="address-card__row"><div class="address-card__row-title">Phone Number</div><div class="address-card__row-content">888</div></div><div class="address-card__row"><div class="address-card__row-title">Email Address</div><div class="address-card__row-content">thbbb@gmail.com</div></div></div></div><div class="card address-card order-success__address"><div class="card__loader"></div><div class="address-card__badge tag-badge tag-badge--theme">Billing Address</div><div class="address-card__body"><div class="address-card__name">bbb nnn</div><div class="address-card__row">COUNTRY_NAME_AE<br>undefined, undefined<br>undefined undefined</div><div class="address-card__row"><div class="address-card__row-title">Phone Number</div><div class="address-card__row-content">888</div></div><div class="address-card__row"><div class="address-card__row-title">Email Address</div><div class="address-card__row-content">thbbb@gmail.com</div></div></div></div></div></div> */
}

// CONCATENATED MODULE: ./src/pages/api/send-email.ts

/* harmony default export */ var send_email = __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'POST') {
    //const { name, email } = req.body;
    await sendEmail(req.body);
    return res.status(200).end();
  }

  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae: "The requested endpoint was not found or doesn't support this method."
    }
  });
});

/***/ })

/******/ });