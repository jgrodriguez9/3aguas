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

/***/ "./components/security/RouteGuard.js":
/*!*******************************************!*\
  !*** ./components/security/RouteGuard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteGuard; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



function RouteGuard({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const customerReducer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.customerReducer);
  const {
    customer
  } = customerReducer;
  const {
    0: authorized,
    1: setAuthorized
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    props
  } = children;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // on initial load - run auth check 
    authCheck(props); // on route change start - hide page content by setting authorized to false  

    const hideContent = () => setAuthorized(false);

    router.events.on('routeChangeStart', hideContent); // on route change complete - run auth check 

    router.events.on('routeChangeComplete', authCheck); // unsubscribe from events in useEffect return function

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(data) {
    if (data.protected && !customer) {
      setAuthorized(false);
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}

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
/* harmony import */ var _components_security_RouteGuard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/security/RouteGuard */ "./components/security/RouteGuard.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const MyApp = ({
  Component,
  pageProps
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _store_store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch(Object(_store_actions_securityAction__WEBPACK_IMPORTED_MODULE_7__["setCustomer"])());
  });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, __jsx(_components_security_RouteGuard__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(Component, pageProps))));
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
/*! exports provided: request, success, failure, userLogin, checkUserLogin, userLogout, registerRequest, registerSuccess, registerFailure, registerCustomer, setCustomer */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCustomer", function() { return registerCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomer", function() { return setCustomer; });
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
  return dispatch => {
    dispatch(request()); //make http request

    _server_config_commerce__WEBPACK_IMPORTED_MODULE_5__["default"].customer.login(username, `${window.location.origin}/login?token={token}`).then(token => {
      dispatch(success(username));
    }).catch(error => {
      dispatch(failure(error));
    });
  };
}; //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('_shop_token_');
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_1__["CHECK_USRER_LOGIN"]
  };
}; // USRER_LOGOUT

const userLogout = () => dispatch => {
  _server_config_commerce__WEBPACK_IMPORTED_MODULE_5__["default"].customer.logout();
  dispatch({
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CUSTOMER"]
  });
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
}; //customer

const setCustomer = () => {
  const isLoggedIn = _server_config_commerce__WEBPACK_IMPORTED_MODULE_5__["default"].customer.isLoggedIn();

  if (!isLoggedIn || isLoggedIn === false) {
    return dispatch => {
      dispatch({
        type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CUSTOMER"]
      });
    };
  }

  return dispatch => {
    dispatch({
      type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_REQUEST"]
    });
    _server_config_commerce__WEBPACK_IMPORTED_MODULE_5__["default"].customer.about().then(customer => {
      dispatch({
        type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_SUCCESS"],
        payload: customer
      });
    }).catch(error => {
      dispatch({
        type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_FAILURE"],
        payload: error
      });
    });
  };
};

/***/ }),

/***/ "./store/constants/securityConstant.js":
/*!*********************************************!*\
  !*** ./store/constants/securityConstant.js ***!
  \*********************************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, CUSTOMER_REQUEST, CUSTOMER_SUCCESS, CUSTOMER_FAILURE, CLEAR_CUSTOMER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAILURE", function() { return REGISTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_REQUEST", function() { return CUSTOMER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_SUCCESS", function() { return CUSTOMER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_FAILURE", function() { return CUSTOMER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CUSTOMER", function() { return CLEAR_CUSTOMER; });
const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';
const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';
const CUSTOMER_REQUEST = 'CUSTOMER_REQUEST';
const CUSTOMER_SUCCESS = 'CUSTOMER_SUCCESS';
const CUSTOMER_FAILURE = 'CUSTOMER_FAILURE';
const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER';

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
  customerReducer: _securityReducer__WEBPACK_IMPORTED_MODULE_1__["customerReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducers);

/***/ }),

/***/ "./store/reducers/securityReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/securityReducer.js ***!
  \*******************************************/
/*! exports provided: securityReducer, registerReducer, customerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securityReducer", function() { return securityReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerReducer", function() { return registerReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerReducer", function() { return customerReducer; });
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
const initStateCustomer = {
  loading: false,
  customer: null,
  error: ''
};
const customerReducer = (state = initStateCustomer, action) => {
  switch (action.type) {
    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["CUSTOMER_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["CUSTOMER_SUCCESS"]:
      return {
        loading: false,
        customer: action.payload,
        error: ''
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["CUSTOMER_FAILURE"]:
      return {
        loading: false,
        customer: null,
        error: action.payload
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CUSTOMER"]:
      return {
        loading: false,
        customer: null,
        error: ''
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3VyaXR5L1JvdXRlR3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcmVxdWVzdC9wb3N0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvY3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZWN1cml0eUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25zdGFudHMvc2VjdXJpdHlDb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zZWN1cml0eVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJHb1RvcCIsInByb3BzIiwidGhlUG9zaXRpb24iLCJzZXRUaGVQb3NpdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJSb3V0ZUd1YXJkIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VzdG9tZXJSZWR1Y2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1c3RvbWVyIiwiYXV0aG9yaXplZCIsInNldEF1dGhvcml6ZWQiLCJhdXRoQ2hlY2siLCJoaWRlQ29udGVudCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZGF0YSIsInByb3RlY3RlZCIsInB1c2giLCJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0Q3VzdG9tZXIiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJodHRwSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImFsZXJ0IiwiUHJvbWlzZSIsInJlamVjdCIsImtleXMiLCJyZXF1aXJlIiwiY29tbWVyY2UiLCJDb21tZXJjZSIsImNvbW1lcmNlSnNLZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RyaXBlUHVibGlzaGFibGVLZXkiLCJzdHJpcGVTZWNyZXRLZXkiLCJhd3NBY2Nlc3NLZXlJZCIsImF3c1NlY3JldEFjY2Vzc0tleSIsImF3c0J1Y2tldCIsIlBvc3QiLCJoZWFkZXJzIiwicG9zdCIsInVybCIsIkNVU1RPTUVSX1JFR0lTVEVSIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfSVRFTSIsIlNVQl9RVUFOVElUWSIsIkFERF9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiQUREX1BST0RVQ1RTIiwiVVNSRVJfTE9HSU4iLCJDSEVDS19VU1JFUl9MT0dJTiIsIlVTUkVSX0xPR09VVCIsImFkZFByb2R1Y3RzIiwidHlwZSIsImFkZFRvQ2FydCIsImlkIiwicmVtb3ZlSXRlbSIsInN1YnRyYWN0UXVhbnRpdHkiLCJhZGRRdWFudGl0eSIsImFkZFF1YW50aXR5V2l0aE51bWJlciIsInF0eSIsInJlc2V0Q2FydCIsInJlcXVlc3QiLCJMT0dJTl9SRVFVRVNUIiwic3VjY2VzcyIsInVzZXIiLCJMT0dJTl9TVUNDRVNTIiwicGF5bG9hZCIsImZhaWx1cmUiLCJMT0dJTl9GQUlMVVJFIiwidXNlckxvZ2luIiwidXNlcm5hbWUiLCJsb2dpbiIsImxvY2F0aW9uIiwib3JpZ2luIiwidGhlbiIsInRva2VuIiwiY2F0Y2giLCJjaGVja1VzZXJMb2dpbiIsImdldFRva2VuIiwiY29va2llIiwiZ2V0IiwidXNlckxvZ291dCIsImxvZ291dCIsIkNMRUFSX0NVU1RPTUVSIiwicmVnaXN0ZXJSZXF1ZXN0IiwiUkVHSVNURVJfUkVRVUVTVCIsInJlZ2lzdGVyU3VjY2VzcyIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJyZWdpc3RlckZhaWx1cmUiLCJSRUdJU1RFUl9GQUlMVVJFIiwicmVnaXN0ZXJDdXN0b21lciIsImlzTG9nZ2VkSW4iLCJDVVNUT01FUl9SRVFVRVNUIiwiYWJvdXQiLCJDVVNUT01FUl9TVUNDRVNTIiwiQ1VTVE9NRVJfRkFJTFVSRSIsImRiIiwiZmlyZXN0b3JlIiwiZGJPcmRlclJlZiIsImNvbGxlY3Rpb24iLCJpbml0U3RhdGUiLCJwcm9kdWN0cyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWN0c0FycmF5IiwibGlzdCIsInByb2R1Y3QiLCJmb3JFYWNoIiwicCIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiZXhpc3RlZF9pdGVtIiwicXVhbnRpdHkiLCJuZXdQcmljZSIsIm5ld1RvdGFsIiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwicmVzIiwiZG9jIiwicHJvZHVjdHNPYmoiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpbWFnZUhvdmVyVXJsIiwiaW1hZ2VVcmwiLCJuZXdQcm9kdWN0Iiwib2ZmZXIiLCJvbGRQcmljZSIsIm9uU2FsZSIsInRpdGxlIiwicm9vdFJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwic2VjdXJpdHlSZWR1Y2VyIiwibG9hZGluZyIsImluaXRTdGF0ZVJlZ2lzdGVyIiwicmVnaXN0ZXJSZWR1Y2VyIiwiaW5pdFN0YXRlQ3VzdG9tZXIiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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UDtBQXpCUjtBQTJCSCxDQTVCTSxDOzs7Ozs7Ozs7Ozs7QUMzRVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTRCLEtBQUssR0FBRzRJLHlEQUFXLENBQUNQLDZEQUFELEVBQWVRLG9GQUFtQixDQUN2REMsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FEd0MsQ0FBbEMsQ0FBekI7QUFJZS9JLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdvVG9wID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBwcm9wcy5zY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgcHJvcHMuZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdXAtYXJyb3ctYWx0XCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSwgMTAwMCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+MyBBZ3VhczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIjMgQWd1YXMgLSBUaWVuZGEgUGxheWFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIjMgQWd1YXMgLSBUaWVuZGEgUGxheWFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9saXZhbmktcmVhY3QuZW52eXRoZW1lLmNvbS9cIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwOTMxMTMuanBnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7bG9hZGVyID8gJ0xvYWRpbmcnIDogY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0ZUd1YXJkKHsgY2hpbGRyZW4gfSl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGN1c3RvbWVyUmVkdWNlciA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5jdXN0b21lclJlZHVjZXIpIFxyXG4gICAgY29uc3QgeyBjdXN0b21lciB9ID0gY3VzdG9tZXJSZWR1Y2VyXHJcbiAgICBjb25zdCBbYXV0aG9yaXplZCwgc2V0QXV0aG9yaXplZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IHsgcHJvcHMgfSA9IGNoaWxkcmVuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIG9uIGluaXRpYWwgbG9hZCAtIHJ1biBhdXRoIGNoZWNrIFxyXG4gICAgICAgIGF1dGhDaGVjayhwcm9wcyk7XHJcbiAgICAgICAgLy8gb24gcm91dGUgY2hhbmdlIHN0YXJ0IC0gaGlkZSBwYWdlIGNvbnRlbnQgYnkgc2V0dGluZyBhdXRob3JpemVkIHRvIGZhbHNlICBcclxuICAgICAgICBjb25zdCBoaWRlQ29udGVudCA9ICgpID0+IHNldEF1dGhvcml6ZWQoZmFsc2UpO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoaWRlQ29udGVudCk7XHJcblxyXG4gICAgICAgIC8vIG9uIHJvdXRlIGNoYW5nZSBjb21wbGV0ZSAtIHJ1biBhdXRoIGNoZWNrIFxyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhdXRoQ2hlY2spXHJcblxyXG4gICAgICAgIC8vIHVuc3Vic2NyaWJlIGZyb20gZXZlbnRzIGluIHVzZUVmZmVjdCByZXR1cm4gZnVuY3Rpb25cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhpZGVDb250ZW50KTtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhdXRoQ2hlY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGF1dGhDaGVjayhkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5wcm90ZWN0ZWQgJiYgIWN1c3RvbWVyKXtcclxuICAgICAgICAgICAgc2V0QXV0aG9yaXplZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0QXV0aG9yaXplZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhdXRob3JpemVkICYmIGNoaWxkcmVuKTtcclxufSIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuLy8gTmVlZCB0byB1cGRhdGUgYmVsb3cgY29uZmlnXG5jb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcImFwaV9rZXlcIixcbiAgICBhdXRoRG9tYWluOiBcImV4YW1wbGVfaWQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiZGF0YWJhc2UtdXJsLmZpcmViYXNlaW8uY29tXCIsXG4gICAgcHJvamVjdElkOiBcInByb2plY3QtaWRcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImJ1Y2tldC1pZC5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjMyMTMxMzEzMlwiLFxuICAgIGFwcElkOiBcIjEyMzEzMTMxMzEzMzIzXCJcbn07XG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmV4cG9ydCB7XG4gICAgYXV0aCxcbiAgICBmaXJlYmFzZVxufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL19BcHAvTGF5b3V0JztcbmltcG9ydCB7IGFkZFByb2R1Y3RzIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XG5pbXBvcnQgeyBjaGVja1VzZXJMb2dpbiwgc2V0Q3VzdG9tZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3NlY3VyaXR5QWN0aW9uJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgUm91dGVHdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3VyaXR5L1JvdXRlR3VhcmQnO1xuXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHNldEN1c3RvbWVyKCkpXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxSb3V0ZUd1YXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZUd1YXJkPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBodHRwSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCJodHRwczovL2FwaS5jaGVjLmlvXCJcclxufSlcclxuXHJcbmh0dHBJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKG51bGwsIGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpXHJcbiAgICBpZihlcnJvci5yZXNwb25zZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhbGVydChcIkhvbGEgZXN0YW1vcyB0ZW5pZW5kbyBwcm9ibGVtYXMgZGUgY29uZXhpw7NuIGNvbiBlbCBzZXJ2aWRvciBpbnRlbnRlIG3DoXMgdGFyZGUuXCIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpOyAgICBcclxuICAgIH0gICAgXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHBJbnN0YW5jZTsiLCJpbXBvcnQgQ29tbWVyY2UgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcbmNvbnN0IGtleXMgPSByZXF1aXJlKFwiLi4vY29uZmlnL2tleXNcIik7XHJcbmNvbnN0IGNvbW1lcmNlID0gbmV3IENvbW1lcmNlKGtleXMuY29tbWVyY2VKc0tleSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZXJjZSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc3RyaXBlUHVibGlzaGFibGVLZXk6ICdzdHJpcGVQdWJsaXNoYWJsZUtleScsXHJcbiAgICBzdHJpcGVTZWNyZXRLZXk6ICdzdHJpcGVTZWNyZXRLZXknLFxyXG4gICAgYXdzQWNjZXNzS2V5SWQ6ICdhd3NBY2Nlc3NLZXlJZCcsXHJcbiAgICBhd3NTZWNyZXRBY2Nlc3NLZXk6ICdhd3NTZWNyZXRBY2Nlc3NLZXknLFxyXG4gICAgYXdzQnVja2V0OiAnYXdzQnVja2V0JyxcclxuICAgIGNvbW1lcmNlSnNLZXk6ICdwa190ZXN0XzMzMTEwODM2ZGMyYzVjN2IyNjVhNmQ3MmNlMWZmMjRkYjM0MjA4YTEyOGRjYydcclxufTsiLCJpbXBvcnQgaHR0cEluc3RhbmNlIGZyb20gXCIuLi9jb25maWcvYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdChwcm9wcyl7XHJcbiAgICBjb25zdCBrZXlzID0gcmVxdWlyZSgnLi4vY29uZmlnL2tleXMnKVxyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcclxuICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgXCJYLUF1dGhvcml6YXRpb25cIjoga2V5cy5jb21tZXJjZUpzS2V5LFxyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGh0dHBJbnN0YW5jZS5wb3N0KHByb3BzLnVybCwgZGF0YSwgY29uZmlnKVxyXG59IiwiLy9jdXN0b21lclxyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfUkVHSVNURVIgPSBcIi92MS9jdXN0b21lcnNcIiIsIi8vVHlwZXMgc2hvdWxkIGJlIGluIGNvbnN0IHRvIGF2b2lkIHR5cG9zIGFuZCBkdXBsaWNhdGlvbiBzaW5jZSBpdCdzIGEgc3RyaW5nIGFuZCBjb3VsZCBiZSBlYXNpbHkgbWlzcyBzcGVsbGVkXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFkgPSAnQUREX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcbmV4cG9ydCBjb25zdCBPUkRFUl9GT1JNID0gJ09SREVSX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RTID0gJ0FERF9QUk9EVUNUUyc7XG5leHBvcnQgY29uc3QgVVNSRVJfTE9HSU4gPSAnVVNSRVJfTE9HSU4nO1xuZXhwb3J0IGNvbnN0IENIRUNLX1VTUkVSX0xPR0lOID0gJ0NIRUNLX1VTUkVSX0xPR0lOJztcbmV4cG9ydCBjb25zdCBVU1JFUl9MT0dPVVQgPSAnVVNSRVJfTE9HT1VUJzsiLCJpbXBvcnQgeyBcbiAgICBBRERfVE9fQ0FSVCxcbiAgICBSRU1PVkVfSVRFTSxcbiAgICBTVUJfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICBSRVNFVF9DQVJULFxuICAgIEFERF9QUk9EVUNUUyxcbiAgICBVU1JFUl9MT0dJTixcbiAgICBDSEVDS19VU1JFUl9MT0dJTixcbiAgICBVU1JFUl9MT0dPVVRcbn0gZnJvbSAnLi9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xuXG5cblxuLy9hZGQgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUFJPRFVDVFNcbiAgICB9XG59XG4vL2FkZCBjYXJ0IGFjdGlvblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9UT19DQVJULFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vcmVtb3ZlIGl0ZW0gYWN0aW9uXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9JVEVNLFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vc3VidHJhY3QgcXQgYWN0aW9uXG5leHBvcnQgY29uc3Qgc3VidHJhY3RRdWFudGl0eSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNVQl9RVUFOVElUWSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL2FkZCBxdCBhY3Rpb25cbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9RVUFOVElUWSxcbiAgICAgICAgaWRcbiAgICB9XG59XG5cbi8vYWRkIHF0IGFjdGlvbiB3aXRoIHF1YW50aXR5IG51bWJlclxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5V2l0aE51bWJlciA9IChpZCwgcXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgICAgICBpZCxcbiAgICAgICAgcXR5XG4gICAgfVxufVxuXG4vLyBSZXNldCBjYXJ0IGFmdGVyIGZvcm0gc3VibWl0XG5leHBvcnQgY29uc3QgcmVzZXRDYXJ0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFU0VUX0NBUlRcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDTEVBUl9DVVNUT01FUiwgQ1VTVE9NRVJfRkFJTFVSRSwgQ1VTVE9NRVJfUkVRVUVTVCwgQ1VTVE9NRVJfU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSwgTE9HSU5fUkVRVUVTVCwgTE9HSU5fU1VDQ0VTUywgUkVHSVNURVJfRkFJTFVSRSwgUkVHSVNURVJfUkVRVUVTVCwgUkVHSVNURVJfU1VDQ0VTUyB9IGZyb20gJy4uL2NvbnN0YW50cy9zZWN1cml0eUNvbnN0YW50J1xyXG5pbXBvcnQgeyBVU1JFUl9MT0dJTiwgQ0hFQ0tfVVNSRVJfTE9HSU4sIFVTUkVSX0xPR09VVCB9IGZyb20gJy4vYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9zZXJ2ZXIvcmVxdWVzdC9wb3N0JztcclxuaW1wb3J0IHsgQ1VTVE9NRVJfUkVHSVNURVIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvcm91dGVzL2N1c3RvbWVyJztcclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcvY29tbWVyY2UnO1xyXG5cclxuLy9BQ1RJT05TIExPR0lOXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HSU5fUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKHVzZXIpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgcGF5bG9hZDogdXNlclxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBmYWlsdXJlID0gKGVycm9yKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dJTl9GQUlMVVJFLFxyXG4gICAgICAgIHBheWxvYWQ6IGVycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVTUkVSX0xPR0lOXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAodXNlcm5hbWUpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlcXVlc3QoKSlcclxuXHJcbiAgICAgICAgLy9tYWtlIGh0dHAgcmVxdWVzdFxyXG4gICAgICAgIGNvbW1lcmNlLmN1c3RvbWVyLmxvZ2luKHVzZXJuYW1lLCBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9sb2dpbj90b2tlbj17dG9rZW59YClcclxuICAgICAgICAudGhlbih0b2tlbiA9PiB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChzdWNjZXNzKHVzZXJuYW1lKSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZhaWx1cmUoZXJyb3IpKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vQ0hFQ0tfVVNSRVJfTE9HSU5cclxuZXhwb3J0IGNvbnN0IGNoZWNrVXNlckxvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfc2hvcF90b2tlbl8nKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBDSEVDS19VU1JFUl9MT0dJTlxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBVU1JFUl9MT0dPVVRcclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXQgPSAoKSA9PiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgY29tbWVyY2UuY3VzdG9tZXIubG9nb3V0KCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0NVU1RPTUVSIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FjdGlvbiByZWdpc3RlclxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSZXF1ZXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gKHVzZXIpID0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBSRUdJU1RFUl9TVUNDRVNTLFxyXG4gICAgICAgIHBheWxvYWQ6IHVzZXJcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGYWlsdXJlID0gKGVycm9yKSA9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVHSVNURVJfRkFJTFVSRSxcclxuICAgICAgICBwYXlsb2FkOiBlcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJDdXN0b21lciA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUmVxdWVzdCgpKVxyXG4gICAgICAgIFBvc3Qoe3VybDogQ1VTVE9NRVJfUkVHSVNURVIsIGRhdGE6IGRhdGF9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyU3VjY2VzcyhyZXNwb25zZS5kYXRhKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlckZhaWx1cmUoZXJyb3IpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3VzdG9tZXJcclxuZXhwb3J0IGNvbnN0IHNldEN1c3RvbWVyID0gKCkgPT57ICAgIFxyXG5cclxuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBjb21tZXJjZS5jdXN0b21lci5pc0xvZ2dlZEluKCk7XHJcbiAgICBpZiAoIWlzTG9nZ2VkSW4gfHwgaXNMb2dnZWRJbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBDTEVBUl9DVVNUT01FUiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBDVVNUT01FUl9SRVFVRVNUfSlcclxuICAgICAgICBjb21tZXJjZS5jdXN0b21lci5hYm91dCgpXHJcbiAgICAgICAgLnRoZW4oKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBDVVNUT01FUl9TVUNDRVNTLCBwYXlsb2FkOiBjdXN0b21lcn0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IENVU1RPTUVSX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IExPR0lOX1JFUVVFU1QgPSAnVVNFUlNfTE9HSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ1VTRVJTX0xPR0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTFVSRSA9ICdVU0VSU19MT0dJTl9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfUkVRVUVTVCA9ICdVU0VSU19SRUdJU1RFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnVVNFUlNfUkVHSVNURVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMVVJFID0gJ1VTRVJTX1JFR0lTVEVSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1JFUVVFU1QgPSAnQ1VTVE9NRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9TVUNDRVNTID0gJ0NVU1RPTUVSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfRkFJTFVSRSA9ICdDVVNUT01FUl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NVU1RPTUVSID0gJ0NMRUFSX0NVU1RPTUVSJztcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9wcm9kdWN0cyc7XHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGRiT3JkZXJSZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9kdWN0cycpO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmNvbnN0IGtleXMgPSByZXF1aXJlKFwiLi4vLi4vc2VydmVyL2NvbmZpZy9rZXlzXCIpO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBBRERfVE9fQ0FSVCxcclxuICAgIFJFTU9WRV9JVEVNLFxyXG4gICAgU1VCX1FVQU5USVRZLFxyXG4gICAgQUREX1FVQU5USVRZLCBcclxuICAgIEFERF9TSElQUElORyxcclxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcclxuICAgIFJFU0VUX0NBUlQsXHJcbiAgICBBRERfUFJPRFVDVFMsXHJcbiAgICBVU1JFUl9MT0dJTixcclxuICAgIENIRUNLX1VTUkVSX0xPR0lOLFxyXG4gICAgVVNSRVJfTE9HT1VUXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xyXG5pbXBvcnQgQ29tbWVyY2UgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcblxyXG5jb25zdCB0b2tlbiA9ICc3NjQ4MzQ2MTEwMzEwMzkxOHVoa2pka2pjJztcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGFkZGVkSXRlbXM6W10sXHJcbiAgICB0b3RhbDogMCxcclxuICAgIHNoaXBwaW5nOiAwLFxyXG4gICAgbG9naW46IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9QUk9EVUNUUyl7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICAvLyBkYk9yZGVyUmVmLmdldCgpXHJcbiAgICAgICAgLy8gLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyAgICAgcmVzLmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcclxuICAgICAgICAvLyAgICAgICAgIHByb2R1Y3RzQXJyYXkucHVzaChwcm9kdWN0c09iailcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2Uoa2V5cy5jb21tZXJjZUpzS2V5KTtcclxuXHJcbiAgICAgICAgY29tbWVyY2UucHJvZHVjdHMubGlzdCgpLnRoZW4oKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgcHJvZHVjdC5kYXRhLmZvckVhY2goIHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNBcnJheS5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3d3dycsIHApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKXtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZihleGlzdGVkX2l0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XHJcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXHJcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgaWYoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKXtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVTRVRfQ0FSVCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0UmVkdWNlclxyXG5cclxuLyogZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBpbml0U3RhdGUpID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgICBjYXJ0UmVkdWNlcixcclxuICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG4gICAgKVxyXG59ICovIiwiaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBkYk9yZGVyUmVmID0gZGIuY29sbGVjdGlvbigncHJvZHVjdHMnKTtcclxuY29uc3QgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG5kYk9yZGVyUmVmLmdldCgpXHJcbi50aGVuKHJlcyA9PiB7XHJcbiAgICByZXMuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgcHJvZHVjdHNPYmouaWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheS5wdXNoKHByb2R1Y3RzT2JqKVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDEwLFxyXG4gICAgICAgIGlkOiBcIjVEQWNVRERkNHQ4eFdnbDlrdlhsXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEtMTU4ODcwNDQzNjA0My5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEtMTU4ODcwNDQyODI3My5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldvbWVuJ3MgTW9kZXJuLVNraW5ueVwiLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAyMCxcclxuICAgICAgICBpZDogXCI5R2ttZm80SGpXNHRLdk1ZbHBYOVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxMi0xNTg4NzA1OTcyMzkyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTItMTU4ODcwNTk2NjgxOC5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMTAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAxNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJXb21lbidzIE1vZGVybi1Ta2lubnlcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCbG9jayBTdHJpcGVkIERyYXBlZFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJEOXd3YTJaRHUyODFIVjVzOTViOVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxMS0xNTg4NzA1OTA1MTcxLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTEtMTU4ODcwNTg5OTY3Ny5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjEwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMjIwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiQmxvY2sgU3RyaXBlZCBEcmFwZWRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHaWxkYW4gTWVuJ3MgQ3JldyBULVNoaXJ0XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIkV6SnR4dmM5WnI3aUc4azdlSWxCXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjQtMTU4ODcwNTEwOTkxMy5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzQtMTU4ODcwNTEwNDY0MC5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMTUwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMTUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiR2lsZGFuIE1lbidzIENyZXcgVC1TaGlydFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllpZGFydG9uIFdvbWVuJ3MgQ29tZnlcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiSGRkcjdWaDB2TTBpNUQwSkloN29cIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyNS0xNTg4NzA1MTc3OTQxLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nNS0xNTg4NzA1MTcxMDYzLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyNDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDU0MCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIllpZGFydG9uIFdvbWVuJ3MgQ29tZnlcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGVzdCBDdXRvdXQgVHVuaWNzIExvbmdcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiTjE0bkdSNHluNWc1MjZUZFRKTlVcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMTUtMTU4ODcwNjE5ODQ1Ni5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzE1LTE1ODg3MDYxOTM3MzEuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2hlc3QgQ3V0b3V0IFR1bmljcyBMb25nXCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVC1TaGlydCBDYXN1YWwgU3RyaXBlIFR1bmljXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDIwLFxyXG4gICAgICAgIGlkOiBcIlM0eGptR1Y4SWlXSDlWYjlKbldxXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjE0LTE1ODg3MDYxMzU4NzAuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxNC0xNTg4NzA2MTMwMDIzLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIlQtU2hpcnQgQ2FzdWFsIFN0cmlwZSBUdW5pY1wiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhdXNhbCBWLU5lY2sgU29mdCBSYWdsYW5cIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiVlRjWnJVSkRIcXE4ZnREWUZiVjhcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMi0xNTg4NzA0NjU2NTgzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMi0xNTg4NzA0NjQ4MjE0LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2F1c2FsIFYtTmVjayBTb2Z0IFJhZ2xhblwiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNsZWV2ZSBGYXV4IFN1ZWRlIExvb3NlXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDIwLFxyXG4gICAgICAgIGlkOiBcIlltTjZjak54c3VxamtrcDU0NFRJXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEzLTE1ODg3MDYwNTg4ODUuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxMy0xNTg4NzA2MDUzMzkzLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyNTAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogdHJ1ZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMzIwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiU2xlZXZlIEZhdXggU3VlZGUgTG9vc2VcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPcGVuIEZyb250IEtuaXQgU3dlYXRlcnNcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiY245dldXY1RmYzFCR3RzbHE2cmRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOS0xNTg4NzA1NzcxMTIyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOS0xNTg4NzA1NzY1MzA3LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIk9wZW4gRnJvbnQgS25pdCBTd2VhdGVyc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUYm1wb3kgTWVuJ3MgVGFwZXJlZFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJpcDR2M29VNEIwa05rYWRwb0t3N1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI3LTE1ODg3MDU0MDcyNDcuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc3LTE1ODg3MDU0MDIxNzEuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDI1MCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiVGJtcG95IE1lbidzIFRhcGVyZWRcIixcclxuICAgICAgICB0eXBlOiBcIlNob2VzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldvbWVucyBUb3BzIENvbG9yXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwibXNCYkdVVzNuZ0dnSzM2TE84VjRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyNi0xNTg4NzA1MjQ0MTY0LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nNi0xNTg4NzA1MjM2NTIwLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIldvbWVucyBUb3BzIENvbG9yXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGFuZXMgTWVuJ3MgUHVsbG92ZXJcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwic1ZZYTd1a2hlaGhhdFd1VWVIbENcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMy0xNTg4NzA1MDMxNDY3LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMy0xNTg4NzA1MDI1MzU4LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiSGFuZXMgTWVuJ3MgUHVsbG92ZXJcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCbG9jayBTdHJpcGVkIERyYXBlZFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJ6M2FOOVJkalRRcTFDWDJlcGdweFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxMC0xNTg4NzA1ODQzMzgyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTAtMTU4ODcwNTgyODA4OS5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiQmxvY2sgU3RyaXBlZCBEcmFwZWRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIYW5kIFNhbml0aXplclwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJJV1hKOTRQZjdQWU5mWlBMakJWSVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTItMTU4OTIxNjA5MzExMy5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktMi0xNTg5MjE2MDg3ODgxLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjUsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIkhhbmQgU2FuaXRpemVyXCIsXHJcbiAgICAgICAgdHlwZTogXCJtZWRpY2FsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWVkaWNhbCBNYXNrXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIlVyYkloT2o4UGVOSkRTY3Z1c3NiXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktMS0xNTg5MjE1OTYxMzE2LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hbWF6b25hd3MuY29tL2NkMTktMS0xNTg5MjE1OTI0NjE0LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAxOCxcclxuICAgICAgICBuZXdQcm9kdWN0OiB0cnVlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIk1lZGljYWwgTWFza1wiLFxyXG4gICAgICAgIHR5cGU6IFwibWVkaWNhbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1lZGljYWwgR2xvdmVzXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDIwLFxyXG4gICAgICAgIGlkOiBcIlp3RDE3cmdod0h0VHo1SDFBQmRHXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktMy0xNTg5MjE2MTU3MjY4LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0zLTE1ODkyMTYxNTIwMjYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDI1LFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMjUsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJNZWRpY2FsIEdsb3Zlc1wiLFxyXG4gICAgICAgIHR5cGU6IFwibWVkaWNhbFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTYWZldHkgR29nZ2xlc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJiMDJWd3ExNTJ2WnFXWXRVWTduVVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTQtMTU4OTIxNjI1MjQzMi5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNC0xNTg5MjE2MjQ4MjA4LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAzMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogZmFsc2UsXHJcbiAgICAgICAgb2xkUHJpY2U6IDMwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiU2FmZXR5IEdvZ2dsZXNcIixcclxuICAgICAgICB0eXBlOiBcIm1lZGljYWxcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRHJ1Z3NcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiYmhndnhDN09KQzFaZVluaGpLUlNcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS01LTE1ODkyMTYzMjQ3NTcuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTUtMTU4OTIxNjMzMjA2MC5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAzMixcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkRydWdzXCIsXHJcbiAgICAgICAgdHlwZTogXCJtZWRpY2FsXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhY2NpbmVcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwid3ZpUXNWYU1JOVdGWDNKWHZqZlRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS02LTE1ODkyMTYzODY1ODguanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTYtMTU4OTIxNjM4Mjk4MS5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAzMixcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIlZhY2NpbmVcIixcclxuICAgICAgICB0eXBlOiBcIm1lZGljYWxcIixcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IHtkYXRhLCBwcm9kdWN0c0FycmF5fSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge3NlY3VyaXR5UmVkdWNlciwgcmVnaXN0ZXJSZWR1Y2VyLCBjdXN0b21lclJlZHVjZXJ9IGZyb20gJy4vc2VjdXJpdHlSZWR1Y2VyJ1xyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSAnLi9jYXJ0UmVkdWNlcidcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBzZWN1cml0eVJlZHVjZXIsXHJcbiAgICBjYXJ0UmVkdWNlcixcclxuICAgIGN1c3RvbWVyUmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzIiwiaW1wb3J0IHsgQ0hFQ0tfVVNSRVJfTE9HSU4sIFVTUkVSX0xPR0lOLCBVU1JFUl9MT0dPVVQgfSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENMRUFSX0NVU1RPTUVSLCBDVVNUT01FUl9GQUlMVVJFLCBDVVNUT01FUl9SRVFVRVNULCBDVVNUT01FUl9TVUNDRVNTLCBMT0dJTl9GQUlMVVJFLCBMT0dJTl9SRVFVRVNULCBMT0dJTl9TVUNDRVNTLCBSRUdJU1RFUl9GQUlMVVJFLCBSRUdJU1RFUl9SRVFVRVNULCBSRUdJU1RFUl9TVUNDRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9zZWN1cml0eUNvbnN0YW50XCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSwgICAgXHJcbiAgICBsb2dpbjogZmFsc2UsXHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgZXJyb3I6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3VyaXR5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dJTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy9yZWRjdWVycyByZWdpc3RlciBjdXN0b21lclxyXG5jb25zdCBpbml0U3RhdGVSZWdpc3RlciA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIGVycm9yOiAnJ1xyXG59XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGVSZWdpc3RlciwgYWN0aW9uKSA9PiB7XHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBSRUdJU1RFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVHSVNURVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRUdJU1RFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0U3RhdGVDdXN0b21lciA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgY3VzdG9tZXI6IG51bGwsXHJcbiAgICBlcnJvcjogJydcclxufVxyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlQ3VzdG9tZXIsIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQ1VTVE9NRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENVU1RPTUVSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENVU1RPTUVSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0xFQVJfQ1VTVE9NRVI6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfSAgIFxyXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCJcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiXHJcbmltcG9ydCByb290UmVkdWNlcnMgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdFJlZHVjZXJcIlxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcnMsIGNvbXBvc2VXaXRoRGV2VG9vbHMoXHJcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbikpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==