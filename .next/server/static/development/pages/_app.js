module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop
    }, __jsx("i", {
      className: "bx bx-up-arrow-alt"
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "3 Aguas"), __jsx("meta", {
    name: "description",
    content: "3 Aguas - Tienda Playa"
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "3 Aguas - Tienda Playa"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "3 Aguas - Tienda Playa"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://livani-react.envytheme.com/"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
  })), loader ? 'Loading' : children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: auth, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);


 // Need to update below config

const config = {
  apiKey: "api_key",
  authDomain: "example_id.firebaseapp.com",
  databaseURL: "database-url.firebaseio.com",
  projectId: "project-id",
  storageBucket: "bucket-id.appspot.com",
  messagingSenderId: "321313132",
  appId: "12313131313323"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _store_actions_securityAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/securityAction */ "./store/actions/securityAction.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const MyApp = ({
  Component,
  pageProps
}) => {
  // React.useEffect(() => {
  //     store.dispatch(checkUserLogin())
  //     store.dispatch(addProducts())
  // });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, __jsx(Component, pageProps)));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

const makeStore = () => _store_store__WEBPACK_IMPORTED_MODULE_8__["default"];

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(makeStore)(MyApp));

/***/ }),

/***/ "./server/config/api.js":
/*!******************************!*\
  !*** ./server/config/api.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const httpInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://api.chec.io"
});
httpInstance.interceptors.response.use(null, error => {
  console.log(error);
  console.log(error.response);

  if (error.response === undefined) {
    alert("Hola estamos teniendo problemas de conexión con el servidor intente más tarde.");
  } else {
    return Promise.reject(error);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (httpInstance);

/***/ }),

/***/ "./server/config/commerce.js":
/*!***********************************!*\
  !*** ./server/config/commerce.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);


const keys = __webpack_require__(/*! ../config/keys */ "./server/config/keys.js");

const commerce = new _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default.a(keys.commerceJsKey);
/* harmony default export */ __webpack_exports__["default"] = (commerce);

/***/ }),

/***/ "./server/config/keys.js":
/*!*******************************!*\
  !*** ./server/config/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  stripePublishableKey: 'stripePublishableKey',
  stripeSecretKey: 'stripeSecretKey',
  awsAccessKeyId: 'awsAccessKeyId',
  awsSecretAccessKey: 'awsSecretAccessKey',
  awsBucket: 'awsBucket',
  commerceJsKey: 'pk_test_33110836dc2c5c7b265a6d72ce1ff24db34208a128dcc'
};

/***/ }),

/***/ "./server/request/post.js":
/*!********************************!*\
  !*** ./server/request/post.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api */ "./server/config/api.js");

function Post(props) {
  const keys = __webpack_require__(/*! ../config/keys */ "./server/config/keys.js");

  const data = props.data;
  let config = {
    headers: {
      "X-Authorization": keys.commerceJsKey,
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  };
  return _config_api__WEBPACK_IMPORTED_MODULE_0__["default"].post(props.url, data, config);
}

/***/ }),

/***/ "./server/routes/customer.js":
/*!***********************************!*\
  !*** ./server/routes/customer.js ***!
  \***********************************/
/*! exports provided: CUSTOMER_REGISTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_REGISTER", function() { return CUSTOMER_REGISTER; });
//customer
const CUSTOMER_REGISTER = "/v1/customers";

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_PRODUCTS, USRER_LOGIN, CHECK_USRER_LOGIN, USRER_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCTS", function() { return ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGIN", function() { return USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USRER_LOGIN", function() { return CHECK_USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGOUT", function() { return USRER_LOGOUT; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const USRER_LOGIN = 'USRER_LOGIN';
const CHECK_USRER_LOGIN = 'CHECK_USRER_LOGIN';
const USRER_LOGOUT = 'USRER_LOGOUT';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: addProducts, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProducts", function() { return addProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
 //add products

const addProducts = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCTS"]
  };
}; //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
};

/***/ }),

/***/ "./store/actions/securityAction.js":
/*!*****************************************!*\
  !*** ./store/actions/securityAction.js ***!
  \*****************************************/
/*! exports provided: request, success, failure, userLogin, checkUserLogin, userLogout, registerRequest, registerSuccess, registerFailure, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRequest", function() { return registerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFailure", function() { return registerFailure; });
/* harmony import */ var _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/securityConstant */ "./store/constants/securityConstant.js");
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_request_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/request/post */ "./server/request/post.js");
/* harmony import */ var _server_routes_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/routes/customer */ "./server/routes/customer.js");
/* harmony import */ var _server_config_commerce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../server/config/commerce */ "./server/config/commerce.js");





 //ACTIONS LOGIN

const request = () => {
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]
  };
};
const success = user => {
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
    payload: user
  };
};
const failure = error => {
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILURE"],
    payload: error
  };
}; // USRER_LOGIN

const userLogin = username => {
  console.log(username);
  return dispatch => {
    dispatch(request()); //make http request

    _server_config_commerce__WEBPACK_IMPORTED_MODULE_5__["default"].customer.login(username, `${window.location.origin}/login?token={token}`).then(token => {
      console.log(token);
      dispatch(success(username));
    }).catch(error => {
      dispatch(failure(error));
    });
  }; // cookie.set('_shop_token_', token);
  // const getToken = cookie.get('_shop_token_')
  // console.log('token', getToken)
  // return {
  //     type: USRER_LOGIN
  // }
}; //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('_shop_token_');
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_1__["CHECK_USRER_LOGIN"]
  };
}; // USRER_LOGOUT

const userLogout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('_shop_token_');
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_1__["USRER_LOGOUT"]
  };
}; //action register

const registerRequest = () => {
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["REGISTER_REQUEST"]
  };
};
const registerSuccess = user => {
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"],
    payload: user
  };
};
const registerFailure = error => {
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FAILURE"],
    payload: error
  };
};

const registerCustomer = data => {
  return dispatch => {
    dispatch(registerRequest());
    Object(_server_request_post__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url: _server_routes_customer__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_REGISTER"],
      data: data
    }).then(response => {
      dispatch(registerSuccess(response.data));
    }).catch(error => {
      dispatch(registerFailure(error));
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (registerCustomer);

/***/ }),

/***/ "./store/constants/securityConstant.js":
/*!*********************************************!*\
  !*** ./store/constants/securityConstant.js ***!
  \*********************************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAILURE", function() { return REGISTER_FAILURE; });
const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';
const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products */ "./store/reducers/products.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore();
const dbOrderRef = db.collection('products');


const keys = __webpack_require__(/*! ../../server/config/keys */ "./server/config/keys.js");



const token = '76483461103103918uhkjdkjc';
const initState = {
  products: [],
  addedItems: [],
  total: 0,
  shipping: 0,
  login: false
};

const cartReducer = (state = initState, action) => {
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_PRODUCTS"]) {
    let productsArray = []; // dbOrderRef.get()
    // .then(res => {
    //     res.forEach(doc => {
    //         let productsObj = doc.data();
    //         productsObj.id = doc.id;
    //         productsArray.push(productsObj)
    //     });
    // });

    const commerce = new _chec_commerce_js__WEBPACK_IMPORTED_MODULE_7___default.a(keys.commerceJsKey);
    commerce.products.list().then(product => {
      product.data.forEach(p => {
        productsArray.push(p);
        console.log('www', p);
      });
    });
    return _objectSpread(_objectSpread({}, state), {}, {
      products: _products__WEBPACK_IMPORTED_MODULE_4__["data"]
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.newPrice * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 30
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 30
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_6__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);
/* export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
} */

/***/ }),

/***/ "./store/reducers/products.js":
/*!************************************!*\
  !*** ./store/reducers/products.js ***!
  \************************************/
/*! exports provided: data, productsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsArray", function() { return productsArray; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");

const db = _firebase__WEBPACK_IMPORTED_MODULE_0__["firebase"].firestore();
const dbOrderRef = db.collection('products');
const productsArray = [];
dbOrderRef.get().then(res => {
  res.forEach(doc => {
    let productsObj = doc.data();
    productsObj.id = doc.id;
    productsArray.push(productsObj);
  });
});
const data = [{
  description: "Long Sleeve Leopard T-Shirt",
  discount: false,
  discountOff: 10,
  id: "5DAcUDDd4t8xWgl9kvXl",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover1-1588704436043.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img1-1588704428273.jpg",
  newPrice: 320,
  newProduct: false,
  offer: true,
  oldPrice: 250,
  onSale: false,
  title: "Long Sleeve Leopard T-Shirt",
  type: "T-Shirt"
}, {
  description: "Sunnyme Women's Ponchos",
  discount: false,
  discountOff: 0,
  id: "81tgigL0U2zUHoTj85Ht",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Sunnyme Women's Ponchos",
  type: "Women Clothes"
}, {
  description: "Women's Modern-Skinny",
  discount: true,
  discountOff: 20,
  id: "9Gkmfo4HjW4tKvMYlpX9",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover12-1588705972392.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img12-1588705966818.jpg",
  newPrice: 100,
  newProduct: false,
  offer: true,
  oldPrice: 150,
  onSale: false,
  title: "Women's Modern-Skinny",
  type: "T-Shirt"
}, {
  description: "Block Striped Draped",
  discount: false,
  discountOff: 0,
  id: "D9wwa2ZDu281HV5s95b9",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover11-1588705905171.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img11-1588705899677.jpg",
  newPrice: 210,
  newProduct: false,
  offer: false,
  oldPrice: 220,
  onSale: false,
  title: "Block Striped Draped",
  type: "T-Shirt"
}, {
  description: "Gildan Men's Crew T-Shirt",
  discount: false,
  discountOff: 0,
  id: "EzJtxvc9Zr7iG8k7eIlB",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover4-1588705109913.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img4-1588705104640.jpg",
  newPrice: 150,
  newProduct: false,
  offer: false,
  oldPrice: 150,
  onSale: false,
  title: "Gildan Men's Crew T-Shirt",
  type: "T-Shirt"
}, {
  description: "Yidarton Women's Comfy",
  discount: true,
  discountOff: 20,
  id: "Hddr7Vh0vM0i5D0JIh7o",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover5-1588705177941.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img5-1588705171063.jpg",
  newPrice: 240,
  newProduct: false,
  offer: true,
  oldPrice: 540,
  onSale: false,
  title: "Yidarton Women's Comfy",
  type: "Women Clothes"
}, {
  description: "Chest Cutout Tunics Long",
  discount: true,
  discountOff: 20,
  id: "N14nGR4yn5g526TdTJNU",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover15-1588706198456.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img15-1588706193731.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: false,
  title: "Chest Cutout Tunics Long",
  type: "T-Shirt"
}, {
  description: "T-Shirt Casual Stripe Tunic",
  discount: true,
  discountOff: 20,
  id: "S4xjmGV8IiWH9Vb9JnWq",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover14-1588706135870.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img14-1588706130023.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: false,
  title: "T-Shirt Casual Stripe Tunic",
  type: "T-Shirt"
}, {
  description: "Causal V-Neck Soft Raglan",
  discount: false,
  discountOff: 0,
  id: "VTcZrUJDHqq8ftDYFbV8",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover2-1588704656583.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img2-1588704648214.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Causal V-Neck Soft Raglan",
  type: "Women Clothes"
}, {
  description: "Sleeve Faux Suede Loose",
  discount: true,
  discountOff: 20,
  id: "YmN6cjNxsuqjkkp544TI",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover13-1588706058885.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img13-1588706053393.jpg",
  newPrice: 250,
  newProduct: true,
  offer: true,
  oldPrice: 320,
  onSale: false,
  title: "Sleeve Faux Suede Loose",
  type: "T-Shirt"
}, {
  description: "Open Front Knit Sweaters",
  discount: false,
  discountOff: 0,
  id: "cn9vWWcTfc1BGtslq6rd",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover9-1588705771122.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img9-1588705765307.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: false,
  title: "Open Front Knit Sweaters",
  type: "T-Shirt"
}, {
  description: "Tbmpoy Men's Tapered",
  discount: false,
  discountOff: 0,
  id: "ip4v3oU4B0kNkadpoKw7",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover7-1588705407247.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img7-1588705402171.jpg",
  newPrice: 250,
  newProduct: false,
  offer: true,
  oldPrice: 250,
  onSale: false,
  title: "Tbmpoy Men's Tapered",
  type: "Shoes"
}, {
  description: "Womens Tops Color",
  discount: true,
  discountOff: 0,
  id: "msBbGUW3ngGgK36LO8V4",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover6-1588705244164.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img6-1588705236520.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: false,
  title: "Womens Tops Color",
  type: "Women Clothes"
}, {
  description: "Hanes Men's Pullover",
  discount: false,
  discountOff: 0,
  id: "sVYa7ukhehhatWuUeHlC",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover3-1588705031467.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img3-1588705025358.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Hanes Men's Pullover",
  type: "Women Clothes"
}, {
  description: "Block Striped Draped",
  discount: false,
  discountOff: 0,
  id: "z3aN9RdjTQq1CX2epgpx",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover10-1588705843382.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img10-1588705828089.jpg",
  newPrice: 200,
  newProduct: false,
  offer: false,
  oldPrice: 210,
  onSale: false,
  title: "Block Striped Draped",
  type: "T-Shirt"
}, {
  description: "Hand Sanitizer",
  discount: false,
  discountOff: 0,
  id: "IWXJ94Pf7PYNfZPLjBVI",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216087881.jpg",
  newPrice: 20,
  newProduct: false,
  offer: true,
  oldPrice: 25,
  onSale: true,
  title: "Hand Sanitizer",
  type: "medical"
}, {
  description: "Medical Mask",
  discount: false,
  discountOff: 0,
  id: "UrbIhOj8PeNJDScvussb",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-1-1589215961316.jpg",
  imageUrl: "https://demaxin.s3.amazonaws.com/cd19-1-1589215924614.jpg",
  newPrice: 18,
  newProduct: true,
  offer: true,
  oldPrice: 20,
  onSale: false,
  title: "Medical Mask",
  type: "medical"
}, {
  description: "Medical Gloves",
  discount: true,
  discountOff: 20,
  id: "ZwD17rghwHtTz5H1ABdG",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-3-1589216157268.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-3-1589216152026.jpg",
  newPrice: 25,
  newProduct: false,
  offer: false,
  oldPrice: 25,
  onSale: false,
  title: "Medical Gloves",
  type: "medical"
}, {
  description: "Safety Goggles",
  discount: false,
  discountOff: 0,
  id: "b02Vwq152vZqWYtUY7nU",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-4-1589216252432.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-4-1589216248208.jpg",
  newPrice: 30,
  newProduct: false,
  offer: false,
  oldPrice: 30,
  onSale: false,
  title: "Safety Goggles",
  type: "medical"
}, {
  description: "Drugs",
  discount: false,
  discountOff: 0,
  id: "bhgvxC7OJC1ZeYnhjKRS",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-5-1589216324757.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-5-1589216332060.jpg",
  newPrice: 32,
  newProduct: false,
  offer: false,
  oldPrice: 32,
  onSale: false,
  title: "Drugs",
  type: "medical"
}, {
  description: "Vaccine",
  discount: false,
  discountOff: 0,
  id: "wviQsVaMI9WFX3JXvjfT",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-6-1589216386588.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-6-1589216382981.jpg",
  newPrice: 32,
  newProduct: false,
  offer: false,
  oldPrice: 32,
  onSale: false,
  title: "Vaccine",
  type: "medical"
}];


/***/ }),

/***/ "./store/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _securityReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securityReducer */ "./store/reducers/securityReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartReducer */ "./store/reducers/cartReducer.js");



const rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  securityReducer: _securityReducer__WEBPACK_IMPORTED_MODULE_1__["securityReducer"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  registerReducer: _securityReducer__WEBPACK_IMPORTED_MODULE_1__["registerReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducers);

/***/ }),

/***/ "./store/reducers/securityReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/securityReducer.js ***!
  \*******************************************/
/*! exports provided: securityReducer, registerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securityReducer", function() { return securityReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerReducer", function() { return registerReducer; });
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
/* harmony import */ var _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/securityConstant */ "./store/constants/securityConstant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = {
  loading: false,
  login: false,
  user: null,
  error: ''
};
const securityReducer = (state = initState, action) => {
  switch (action.type) {
    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      return {
        loading: false,
        login: true,
        user: action.payload,
        error: ''
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAILURE"]:
      return {
        user: null,
        loading: false,
        login: false,
        error: action.payload
      };

    default:
      return state;
  }
}; //redcuers register customer

const initStateRegister = {
  loading: false,
  user: null,
  error: ''
};
const registerReducer = (state = initStateRegister, action) => {
  switch (action.type) {
    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"]:
      return {
        loading: false,
        user: action.payload,
        error: ''
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAILURE"]:
      return {
        loading: false,
        user: null,
        error: action.payload
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/rootReducer */ "./store/reducers/rootReducer.js");




const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvYXBpLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9rZXlzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yZXF1ZXN0L3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9jdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NlY3VyaXR5QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbnN0YW50cy9zZWN1cml0eUNvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3NlY3VyaXR5UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJHb1RvcCIsInByb3BzIiwidGhlUG9zaXRpb24iLCJzZXRUaGVQb3NpdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm1ha2VTdG9yZSIsIndpdGhSZWR1eCIsImh0dHBJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiYWxlcnQiLCJQcm9taXNlIiwicmVqZWN0Iiwia2V5cyIsInJlcXVpcmUiLCJjb21tZXJjZSIsIkNvbW1lcmNlIiwiY29tbWVyY2VKc0tleSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcGVQdWJsaXNoYWJsZUtleSIsInN0cmlwZVNlY3JldEtleSIsImF3c0FjY2Vzc0tleUlkIiwiYXdzU2VjcmV0QWNjZXNzS2V5IiwiYXdzQnVja2V0IiwiUG9zdCIsImRhdGEiLCJoZWFkZXJzIiwicG9zdCIsInVybCIsIkNVU1RPTUVSX1JFR0lTVEVSIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfSVRFTSIsIlNVQl9RVUFOVElUWSIsIkFERF9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiQUREX1BST0RVQ1RTIiwiVVNSRVJfTE9HSU4iLCJDSEVDS19VU1JFUl9MT0dJTiIsIlVTUkVSX0xPR09VVCIsImFkZFByb2R1Y3RzIiwidHlwZSIsImFkZFRvQ2FydCIsImlkIiwicmVtb3ZlSXRlbSIsInN1YnRyYWN0UXVhbnRpdHkiLCJhZGRRdWFudGl0eSIsImFkZFF1YW50aXR5V2l0aE51bWJlciIsInF0eSIsInJlc2V0Q2FydCIsInJlcXVlc3QiLCJMT0dJTl9SRVFVRVNUIiwic3VjY2VzcyIsInVzZXIiLCJMT0dJTl9TVUNDRVNTIiwicGF5bG9hZCIsImZhaWx1cmUiLCJMT0dJTl9GQUlMVVJFIiwidXNlckxvZ2luIiwidXNlcm5hbWUiLCJkaXNwYXRjaCIsImN1c3RvbWVyIiwibG9naW4iLCJsb2NhdGlvbiIsIm9yaWdpbiIsInRoZW4iLCJ0b2tlbiIsImNhdGNoIiwiY2hlY2tVc2VyTG9naW4iLCJnZXRUb2tlbiIsImNvb2tpZSIsImdldCIsInVzZXJMb2dvdXQiLCJyZW1vdmUiLCJyZWdpc3RlclJlcXVlc3QiLCJSRUdJU1RFUl9SRVFVRVNUIiwicmVnaXN0ZXJTdWNjZXNzIiwiUkVHSVNURVJfU1VDQ0VTUyIsInJlZ2lzdGVyRmFpbHVyZSIsIlJFR0lTVEVSX0ZBSUxVUkUiLCJyZWdpc3RlckN1c3RvbWVyIiwiZGIiLCJmaXJlc3RvcmUiLCJkYk9yZGVyUmVmIiwiY29sbGVjdGlvbiIsImluaXRTdGF0ZSIsInByb2R1Y3RzIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwic2hpcHBpbmciLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjdHNBcnJheSIsImxpc3QiLCJwcm9kdWN0IiwiZm9yRWFjaCIsInAiLCJwdXNoIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1ByaWNlIiwibmV3VG90YWwiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJyZXMiLCJkb2MiLCJwcm9kdWN0c09iaiIsImRlc2NyaXB0aW9uIiwiZGlzY291bnQiLCJkaXNjb3VudE9mZiIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidGl0bGUiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJzZWN1cml0eVJlZHVjZXIiLCJyZWdpc3RlclJlZHVjZXIiLCJsb2FkaW5nIiwiaW5pdFN0YXRlUmVnaXN0ZXIiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1p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TyxFQUFFLEtBRFA7QUFFRnpFLFlBQUksRUFBRSxJQUZKO0FBR0ZuRCxhQUFLLEVBQUUwRixNQUFNLENBQUNyQztBQUhaLE9BQU47O0FBS0o7QUFDSSxhQUFPb0MsS0FBUDtBQW5CUjtBQXFCSCxDQXZCTSxDOzs7Ozs7Ozs7Ozs7QUM3Q1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTXJHLEtBQUssR0FBRzBJLHlEQUFXLENBQUNOLDZEQUFELEVBQWVPLG9GQUFtQixDQUN2REMsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FEd0MsQ0FBbEMsQ0FBekI7QUFJZTdJLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdvVG9wID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBwcm9wcy5zY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgcHJvcHMuZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdXAtYXJyb3ctYWx0XCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSwgMTAwMCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+MyBBZ3VhczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIjMgQWd1YXMgLSBUaWVuZGEgUGxheWFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIjMgQWd1YXMgLSBUaWVuZGEgUGxheWFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9saXZhbmktcmVhY3QuZW52eXRoZW1lLmNvbS9cIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwOTMxMTMuanBnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7bG9hZGVyID8gJ0xvYWRpbmcnIDogY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuLy8gTmVlZCB0byB1cGRhdGUgYmVsb3cgY29uZmlnXG5jb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcImFwaV9rZXlcIixcbiAgICBhdXRoRG9tYWluOiBcImV4YW1wbGVfaWQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiZGF0YWJhc2UtdXJsLmZpcmViYXNlaW8uY29tXCIsXG4gICAgcHJvamVjdElkOiBcInByb2plY3QtaWRcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImJ1Y2tldC1pZC5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjMyMTMxMzEzMlwiLFxuICAgIGFwcElkOiBcIjEyMzEzMTMxMzEzMzIzXCJcbn07XG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmV4cG9ydCB7XG4gICAgYXV0aCxcbiAgICBmaXJlYmFzZVxufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQnO1xuaW1wb3J0IHsgYWRkUHJvZHVjdHMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcbmltcG9ydCB7IGNoZWNrVXNlckxvZ2luIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zZWN1cml0eUFjdGlvbic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuXG5cblxuY29uc3QgTXlBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkgPT4ge1xuICAgIFxuXG4gICAgXG4gICAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goY2hlY2tVc2VyTG9naW4oKSlcbiAgICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdHMoKSlcbiAgICAvLyB9KTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgfVxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59O1xuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBodHRwSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCJodHRwczovL2FwaS5jaGVjLmlvXCJcclxufSlcclxuXHJcbmh0dHBJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKG51bGwsIGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpXHJcbiAgICBpZihlcnJvci5yZXNwb25zZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhbGVydChcIkhvbGEgZXN0YW1vcyB0ZW5pZW5kbyBwcm9ibGVtYXMgZGUgY29uZXhpw7NuIGNvbiBlbCBzZXJ2aWRvciBpbnRlbnRlIG3DoXMgdGFyZGUuXCIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpOyAgICBcclxuICAgIH0gICAgXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHBJbnN0YW5jZTsiLCJpbXBvcnQgQ29tbWVyY2UgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcbmNvbnN0IGtleXMgPSByZXF1aXJlKFwiLi4vY29uZmlnL2tleXNcIik7XHJcbmNvbnN0IGNvbW1lcmNlID0gbmV3IENvbW1lcmNlKGtleXMuY29tbWVyY2VKc0tleSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZXJjZSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc3RyaXBlUHVibGlzaGFibGVLZXk6ICdzdHJpcGVQdWJsaXNoYWJsZUtleScsXHJcbiAgICBzdHJpcGVTZWNyZXRLZXk6ICdzdHJpcGVTZWNyZXRLZXknLFxyXG4gICAgYXdzQWNjZXNzS2V5SWQ6ICdhd3NBY2Nlc3NLZXlJZCcsXHJcbiAgICBhd3NTZWNyZXRBY2Nlc3NLZXk6ICdhd3NTZWNyZXRBY2Nlc3NLZXknLFxyXG4gICAgYXdzQnVja2V0OiAnYXdzQnVja2V0JyxcclxuICAgIGNvbW1lcmNlSnNLZXk6ICdwa190ZXN0XzMzMTEwODM2ZGMyYzVjN2IyNjVhNmQ3MmNlMWZmMjRkYjM0MjA4YTEyOGRjYydcclxufTsiLCJpbXBvcnQgaHR0cEluc3RhbmNlIGZyb20gXCIuLi9jb25maWcvYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdChwcm9wcyl7XHJcbiAgICBjb25zdCBrZXlzID0gcmVxdWlyZSgnLi4vY29uZmlnL2tleXMnKVxyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcclxuICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgXCJYLUF1dGhvcml6YXRpb25cIjoga2V5cy5jb21tZXJjZUpzS2V5LFxyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGh0dHBJbnN0YW5jZS5wb3N0KHByb3BzLnVybCwgZGF0YSwgY29uZmlnKVxyXG59IiwiLy9jdXN0b21lclxyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfUkVHSVNURVIgPSBcIi92MS9jdXN0b21lcnNcIiIsIi8vVHlwZXMgc2hvdWxkIGJlIGluIGNvbnN0IHRvIGF2b2lkIHR5cG9zIGFuZCBkdXBsaWNhdGlvbiBzaW5jZSBpdCdzIGEgc3RyaW5nIGFuZCBjb3VsZCBiZSBlYXNpbHkgbWlzcyBzcGVsbGVkXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFkgPSAnQUREX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcbmV4cG9ydCBjb25zdCBPUkRFUl9GT1JNID0gJ09SREVSX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RTID0gJ0FERF9QUk9EVUNUUyc7XG5leHBvcnQgY29uc3QgVVNSRVJfTE9HSU4gPSAnVVNSRVJfTE9HSU4nO1xuZXhwb3J0IGNvbnN0IENIRUNLX1VTUkVSX0xPR0lOID0gJ0NIRUNLX1VTUkVSX0xPR0lOJztcbmV4cG9ydCBjb25zdCBVU1JFUl9MT0dPVVQgPSAnVVNSRVJfTE9HT1VUJzsiLCJpbXBvcnQgeyBcbiAgICBBRERfVE9fQ0FSVCxcbiAgICBSRU1PVkVfSVRFTSxcbiAgICBTVUJfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICBSRVNFVF9DQVJULFxuICAgIEFERF9QUk9EVUNUUyxcbiAgICBVU1JFUl9MT0dJTixcbiAgICBDSEVDS19VU1JFUl9MT0dJTixcbiAgICBVU1JFUl9MT0dPVVRcbn0gZnJvbSAnLi9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xuXG5cblxuLy9hZGQgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUFJPRFVDVFNcbiAgICB9XG59XG4vL2FkZCBjYXJ0IGFjdGlvblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9UT19DQVJULFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vcmVtb3ZlIGl0ZW0gYWN0aW9uXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9JVEVNLFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vc3VidHJhY3QgcXQgYWN0aW9uXG5leHBvcnQgY29uc3Qgc3VidHJhY3RRdWFudGl0eSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNVQl9RVUFOVElUWSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL2FkZCBxdCBhY3Rpb25cbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9RVUFOVElUWSxcbiAgICAgICAgaWRcbiAgICB9XG59XG5cbi8vYWRkIHF0IGFjdGlvbiB3aXRoIHF1YW50aXR5IG51bWJlclxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5V2l0aE51bWJlciA9IChpZCwgcXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgICAgICBpZCxcbiAgICAgICAgcXR5XG4gICAgfVxufVxuXG4vLyBSZXNldCBjYXJ0IGFmdGVyIGZvcm0gc3VibWl0XG5leHBvcnQgY29uc3QgcmVzZXRDYXJ0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFU0VUX0NBUlRcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMT0dJTl9GQUlMVVJFLCBMT0dJTl9SRVFVRVNULCBMT0dJTl9TVUNDRVNTLCBSRUdJU1RFUl9GQUlMVVJFLCBSRUdJU1RFUl9SRVFVRVNULCBSRUdJU1RFUl9TVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnQnXHJcbmltcG9ydCB7IFVTUkVSX0xPR0lOLCBDSEVDS19VU1JFUl9MT0dJTiwgVVNSRVJfTE9HT1VUIH0gZnJvbSAnLi9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL3NlcnZlci9yZXF1ZXN0L3Bvc3QnO1xyXG5pbXBvcnQgeyBDVVNUT01FUl9SRUdJU1RFUiB9IGZyb20gJy4uLy4uL3NlcnZlci9yb3V0ZXMvY3VzdG9tZXInO1xyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZy9jb21tZXJjZSc7XHJcblxyXG4vL0FDVElPTlMgTE9HSU5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dJTl9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSAodXNlcikgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICBwYXlsb2FkOiB1c2VyXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGZhaWx1cmUgPSAoZXJyb3IpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgcGF5bG9hZDogZXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuLy8gVVNSRVJfTE9HSU5cclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpXHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVxdWVzdCgpKVxyXG5cclxuICAgICAgICAvL21ha2UgaHR0cCByZXF1ZXN0XHJcbiAgICAgICAgY29tbWVyY2UuY3VzdG9tZXIubG9naW4odXNlcm5hbWUsIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2xvZ2luP3Rva2VuPXt0b2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHRva2VuID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN1Y2Nlc3ModXNlcm5hbWUpKTsgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmFpbHVyZShlcnJvcikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IFxyXG5cclxuXHJcblxyXG4gICAgLy8gY29va2llLnNldCgnX3Nob3BfdG9rZW5fJywgdG9rZW4pO1xyXG4gICAgLy8gY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfc2hvcF90b2tlbl8nKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbicsIGdldFRva2VuKVxyXG4gICAgLy8gcmV0dXJuIHtcclxuICAgIC8vICAgICB0eXBlOiBVU1JFUl9MT0dJTlxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9DSEVDS19VU1JFUl9MT0dJTlxyXG5leHBvcnQgY29uc3QgY2hlY2tVc2VyTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19zaG9wX3Rva2VuXycpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IENIRUNLX1VTUkVSX0xPR0lOXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVTUkVSX0xPR09VVFxyXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ19zaG9wX3Rva2VuXycpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFVTUkVSX0xPR09VVFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FjdGlvbiByZWdpc3RlclxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSZXF1ZXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gKHVzZXIpID0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBSRUdJU1RFUl9TVUNDRVNTLFxyXG4gICAgICAgIHBheWxvYWQ6IHVzZXJcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGYWlsdXJlID0gKGVycm9yKSA9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVHSVNURVJfRkFJTFVSRSxcclxuICAgICAgICBwYXlsb2FkOiBlcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWdpc3RlckN1c3RvbWVyID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSZXF1ZXN0KCkpXHJcbiAgICAgICAgUG9zdCh7dXJsOiBDVVNUT01FUl9SRUdJU1RFUiwgZGF0YTogZGF0YX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyRmFpbHVyZShlcnJvcikpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJDdXN0b21lciIsImV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ1VTRVJTX0xPR0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdVU0VSU19MT0dJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnVVNFUlNfTE9HSU5fRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1JFUVVFU1QgPSAnVVNFUlNfUkVHSVNURVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9TVUNDRVNTID0gJ1VTRVJTX1JFR0lTVEVSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRkFJTFVSRSA9ICdVU0VSU19SRUdJU1RFUl9GQUlMVVJFJzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL3Byb2R1Y3RzJztcclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgZGJPcmRlclJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJyk7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuY29uc3Qga2V5cyA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvY29uZmlnL2tleXNcIik7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIEFERF9UT19DQVJULFxyXG4gICAgUkVNT1ZFX0lURU0sXHJcbiAgICBTVUJfUVVBTlRJVFksXHJcbiAgICBBRERfUVVBTlRJVFksIFxyXG4gICAgQUREX1NISVBQSU5HLFxyXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgUkVTRVRfQ0FSVCxcclxuICAgIEFERF9QUk9EVUNUUyxcclxuICAgIFVTUkVSX0xPR0lOLFxyXG4gICAgQ0hFQ0tfVVNSRVJfTE9HSU4sXHJcbiAgICBVU1JFUl9MT0dPVVRcclxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMnXHJcbmltcG9ydCBDb21tZXJjZSBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIjtcclxuXHJcbmNvbnN0IHRva2VuID0gJzc2NDgzNDYxMTAzMTAzOTE4dWhramRramMnO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgYWRkZWRJdGVtczpbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgc2hpcHBpbmc6IDAsXHJcbiAgICBsb2dpbjogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1BST0RVQ1RTKXtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIC8vIGRiT3JkZXJSZWYuZ2V0KClcclxuICAgICAgICAvLyAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXMuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHByb2R1Y3RzT2JqID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAvLyAgICAgICAgIHByb2R1Y3RzT2JqLmlkID0gZG9jLmlkO1xyXG4gICAgICAgIC8vICAgICAgICAgcHJvZHVjdHNBcnJheS5wdXNoKHByb2R1Y3RzT2JqKVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBjb25zdCBjb21tZXJjZSA9IG5ldyBDb21tZXJjZShrZXlzLmNvbW1lcmNlSnNLZXkpO1xyXG5cclxuICAgICAgICBjb21tZXJjZS5wcm9kdWN0cy5saXN0KCkudGhlbigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9kdWN0LmRhdGEuZm9yRWFjaCggcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0FycmF5LnB1c2gocCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd3d3JywgcClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpe1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZihleGlzdGVkX2l0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUil7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW09IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFTU9WRV9JVEVNKXtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbT0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuICAgICAgICBcclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gKGl0ZW1Ub1JlbW92ZS5uZXdQcmljZSAqIGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWSl7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFNVQl9RVUFOVElUWSl7ICBcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZihhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpe1xyXG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbT0+aXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfU0hJUFBJTkcpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRVNFVF9DQVJUKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRSZWR1Y2VyXHJcblxyXG4vKiBleHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IGluaXRTdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIGNhcnRSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbiAgICApXHJcbn0gKi8iLCJpbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGRiT3JkZXJSZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9kdWN0cycpO1xyXG5jb25zdCBwcm9kdWN0c0FycmF5ID0gW107XHJcbmRiT3JkZXJSZWYuZ2V0KClcclxuLnRoZW4ocmVzID0+IHtcclxuICAgIHJlcy5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzT2JqID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcclxuICAgICAgICBwcm9kdWN0c0FycmF5LnB1c2gocHJvZHVjdHNPYmopXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvbmcgU2xlZXZlIExlb3BhcmQgVC1TaGlydFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMTAsXHJcbiAgICAgICAgaWQ6IFwiNURBY1VERGQ0dDh4V2dsOWt2WGxcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMS0xNTg4NzA0NDM2MDQzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMS0xNTg4NzA0NDI4MjczLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAzMjAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDI1MCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvbmcgU2xlZXZlIExlb3BhcmQgVC1TaGlydFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV29tZW4ncyBNb2Rlcm4tU2tpbm55XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDIwLFxyXG4gICAgICAgIGlkOiBcIjlHa21mbzRIalc0dEt2TVlscFg5XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEyLTE1ODg3MDU5NzIzOTIuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxMi0xNTg4NzA1OTY2ODE4LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAxMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDE1MCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIldvbWVuJ3MgTW9kZXJuLVNraW5ueVwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJsb2NrIFN0cmlwZWQgRHJhcGVkXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIkQ5d3dhMlpEdTI4MUhWNXM5NWI5XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjExLTE1ODg3MDU5MDUxNzEuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxMS0xNTg4NzA1ODk5Njc3LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMTAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMjAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJCbG9jayBTdHJpcGVkIERyYXBlZFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdpbGRhbiBNZW4ncyBDcmV3IFQtU2hpcnRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiRXpKdHh2YzlacjdpRzhrN2VJbEJcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyNC0xNTg4NzA1MTA5OTEzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nNC0xNTg4NzA1MTA0NjQwLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAxNTAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAxNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJHaWxkYW4gTWVuJ3MgQ3JldyBULVNoaXJ0XCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWWlkYXJ0b24gV29tZW4ncyBDb21meVwiLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAyMCxcclxuICAgICAgICBpZDogXCJIZGRyN1ZoMHZNMGk1RDBKSWg3b1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI1LTE1ODg3MDUxNzc5NDEuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc1LTE1ODg3MDUxNzEwNjMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDI0MCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogNTQwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiWWlkYXJ0b24gV29tZW4ncyBDb21meVwiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNoZXN0IEN1dG91dCBUdW5pY3MgTG9uZ1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAyMCxcclxuICAgICAgICBpZDogXCJOMTRuR1I0eW41ZzUyNlRkVEpOVVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxNS0xNTg4NzA2MTk4NDU2LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTUtMTU4ODcwNjE5MzczMS5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJDaGVzdCBDdXRvdXQgVHVuaWNzIExvbmdcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJULVNoaXJ0IENhc3VhbCBTdHJpcGUgVHVuaWNcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiUzR4am1HVjhJaVdIOVZiOUpuV3FcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMTQtMTU4ODcwNjEzNTg3MC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzE0LTE1ODg3MDYxMzAwMjMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiVC1TaGlydCBDYXN1YWwgU3RyaXBlIFR1bmljXCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2F1c2FsIFYtTmVjayBTb2Z0IFJhZ2xhblwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJWVGNaclVKREhxcThmdERZRmJWOFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIyLTE1ODg3MDQ2NTY1ODMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcyLTE1ODg3MDQ2NDgyMTQuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJDYXVzYWwgVi1OZWNrIFNvZnQgUmFnbGFuXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2xlZXZlIEZhdXggU3VlZGUgTG9vc2VcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiWW1ONmNqTnhzdXFqa2twNTQ0VElcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMTMtMTU4ODcwNjA1ODg4NS5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEzLTE1ODg3MDYwNTMzOTMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDI1MCxcclxuICAgICAgICBuZXdQcm9kdWN0OiB0cnVlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAzMjAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJTbGVldmUgRmF1eCBTdWVkZSBMb29zZVwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk9wZW4gRnJvbnQgS25pdCBTd2VhdGVyc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJjbjl2V1djVGZjMUJHdHNscTZyZFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI5LTE1ODg3MDU3NzExMjIuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc5LTE1ODg3MDU3NjUzMDcuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiT3BlbiBGcm9udCBLbml0IFN3ZWF0ZXJzXCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRibXBveSBNZW4ncyBUYXBlcmVkXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcImlwNHYzb1U0QjBrTmthZHBvS3c3XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjctMTU4ODcwNTQwNzI0Ny5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzctMTU4ODcwNTQwMjE3MS5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjUwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJUYm1wb3kgTWVuJ3MgVGFwZXJlZFwiLFxyXG4gICAgICAgIHR5cGU6IFwiU2hvZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV29tZW5zIFRvcHMgQ29sb3JcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJtc0JiR1VXM25nR2dLMzZMTzhWNFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI2LTE1ODg3MDUyNDQxNjQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc2LTE1ODg3MDUyMzY1MjAuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiV29tZW5zIFRvcHMgQ29sb3JcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIYW5lcyBNZW4ncyBQdWxsb3ZlclwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJzVllhN3VraGVoaGF0V3VVZUhsQ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIzLTE1ODg3MDUwMzE0NjcuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWczLTE1ODg3MDUwMjUzNTguanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJIYW5lcyBNZW4ncyBQdWxsb3ZlclwiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJsb2NrIFN0cmlwZWQgRHJhcGVkXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcInozYU45UmRqVFFxMUNYMmVwZ3B4XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEwLTE1ODg3MDU4NDMzODIuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxMC0xNTg4NzA1ODI4MDg5LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJCbG9jayBTdHJpcGVkIERyYXBlZFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhhbmQgU2FuaXRpemVyXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIklXWEo5NFBmN1BZTmZaUExqQlZJXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktMi0xNTg5MjE2MDkzMTEzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwODc4ODEuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNSxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiSGFuZCBTYW5pdGl6ZXJcIixcclxuICAgICAgICB0eXBlOiBcIm1lZGljYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNZWRpY2FsIE1hc2tcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiVXJiSWhPajhQZU5KRFNjdnVzc2JcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0xLTE1ODkyMTU5NjEzMTYuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFtYXpvbmF3cy5jb20vY2QxOS0xLTE1ODkyMTU5MjQ2MTQuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDE4LFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IHRydWUsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiTWVkaWNhbCBNYXNrXCIsXHJcbiAgICAgICAgdHlwZTogXCJtZWRpY2FsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWVkaWNhbCBHbG92ZXNcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiWndEMTdyZ2h3SHRUejVIMUFCZEdcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0zLTE1ODkyMTYxNTcyNjguanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTMtMTU4OTIxNjE1MjAyNi5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjUsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNSxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIk1lZGljYWwgR2xvdmVzXCIsXHJcbiAgICAgICAgdHlwZTogXCJtZWRpY2FsXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNhZmV0eSBHb2dnbGVzXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcImIwMlZ3cTE1MnZacVdZdFVZN25VXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNC0xNTg5MjE2MjUyNDMyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS00LTE1ODkyMTYyNDgyMDguanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDMwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMzAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJTYWZldHkgR29nZ2xlc1wiLFxyXG4gICAgICAgIHR5cGU6IFwibWVkaWNhbFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEcnVnc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJiaGd2eEM3T0pDMVplWW5oaktSU1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTUtMTU4OTIxNjMyNDc1Ny5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNS0xNTg5MjE2MzMyMDYwLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAzMixcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogZmFsc2UsXHJcbiAgICAgICAgb2xkUHJpY2U6IDMyLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiRHJ1Z3NcIixcclxuICAgICAgICB0eXBlOiBcIm1lZGljYWxcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVmFjY2luZVwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJ3dmlRc1ZhTUk5V0ZYM0pYdmpmVFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTYtMTU4OTIxNjM4NjU4OC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNi0xNTg5MjE2MzgyOTgxLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAzMixcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogZmFsc2UsXHJcbiAgICAgICAgb2xkUHJpY2U6IDMyLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiVmFjY2luZVwiLFxyXG4gICAgICAgIHR5cGU6IFwibWVkaWNhbFwiLFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQge2RhdGEsIHByb2R1Y3RzQXJyYXl9IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7c2VjdXJpdHlSZWR1Y2VyLCByZWdpc3RlclJlZHVjZXJ9IGZyb20gJy4vc2VjdXJpdHlSZWR1Y2VyJ1xyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSAnLi9jYXJ0UmVkdWNlcidcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBzZWN1cml0eVJlZHVjZXIsXHJcbiAgICBjYXJ0UmVkdWNlcixcclxuICAgIHJlZ2lzdGVyUmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzIiwiaW1wb3J0IHsgQ0hFQ0tfVVNSRVJfTE9HSU4sIFVTUkVSX0xPR0lOLCBVU1JFUl9MT0dPVVQgfSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7IExPR0lOX0ZBSUxVUkUsIExPR0lOX1JFUVVFU1QsIExPR0lOX1NVQ0NFU1MsIFJFR0lTVEVSX0ZBSUxVUkUsIFJFR0lTVEVSX1JFUVVFU1QsIFJFR0lTVEVSX1NVQ0NFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLCAgICBcclxuICAgIGxvZ2luOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBlcnJvcjogJycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdXJpdHlSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL3JlZGN1ZXJzIHJlZ2lzdGVyIGN1c3RvbWVyXHJcbmNvbnN0IGluaXRTdGF0ZVJlZ2lzdGVyID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgZXJyb3I6ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZVJlZ2lzdGVyLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFJFR0lTVEVSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFR0lTVEVSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuaW1wb3J0IHJvb3RSZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yb290UmVkdWNlclwiXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9