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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "3 Aguas"), __jsx("meta", {
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
  })), children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    _store_store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["currentCart"])());
  });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, __jsx(_components_security_RouteGuard__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(Component, pageProps))));
};

const makeStore = () => _store_store__WEBPACK_IMPORTED_MODULE_8__["default"];

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(makeStore)(MyApp));

/***/ }),

/***/ "./server/api/cart.js":
/*!****************************!*\
  !*** ./server/api/cart.js ***!
  \****************************/
/*! exports provided: addToCart, getCart, updateItemCart, removeFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemCart", function() { return updateItemCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony import */ var _config_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/commerce */ "./server/config/commerce.js");

const addToCart = async (productId, quantity, variantData) => {
  try {
    if (variantData) {
      let {
        cart,
        success
      } = await _config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].cart.add(productId, quantity, variantData);

      if (success) {
        return {
          success: true,
          data: cart
        };
      } else {
        return {
          success: false,
          data: {},
          error: "error_no_add_cart_item"
        };
      }
    } else {
      let {
        cart,
        success
      } = await _config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].cart.add(productId, quantity);

      if (success) {
        return {
          success: true,
          data: cart
        };
      } else {
        return {
          success: false,
          data: {},
          error: "error_no_add_cart_item"
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      data: {},
      error: "error"
    };
  }
};
const getCart = async () => {
  try {
    let cart = await _config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].cart.retrieve(); //console.log(cart)

    return {
      success: true,
      data: cart
    };
  } catch (error) {
    return {
      success: false,
      data: {},
      error: "error"
    };
  }
};
const updateItemCart = async (itemId, option) => {
  try {
    let {
      cart,
      success
    } = await _config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].cart.update(itemId, option);

    if (success) {
      return {
        success: true,
        data: cart
      };
    } else {
      return {
        success: false,
        data: {}
      };
    }
  } catch (error) {
    return {
      success: false,
      data: {},
      error: "error"
    };
  }
};
const removeFromCart = async itemId => {
  try {
    let {
      cart,
      success
    } = await _config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].cart.remove(itemId);
    console.log(cart);

    if (success) {
      return {
        success: true,
        data: cart
      };
    } else {
      return {
        success: false,
        data: {},
        error: "error_not_cart_item_remove"
      };
    }
  } catch (error) {
    return {
      success: false,
      data: {},
      error: "error"
    };
  }
};

/***/ }),

/***/ "./server/api/products.js":
/*!********************************!*\
  !*** ./server/api/products.js ***!
  \********************************/
/*! exports provided: getProducts, getProductById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductById", function() { return getProductById; });
/* harmony import */ var _utils_parseProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/parseProduct */ "./utils/parseProduct.js");
/* harmony import */ var _config_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/commerce */ "./server/config/commerce.js");


const getProducts = async () => {
  try {
    let products = await _config_commerce__WEBPACK_IMPORTED_MODULE_1__["default"].products.list();
    let arrayProduct = [];

    if (products.data.length > 0) {
      var _products$data;

      products === null || products === void 0 ? void 0 : (_products$data = products.data) === null || _products$data === void 0 ? void 0 : _products$data.forEach(productsObj => {
        let parseP = Object(_utils_parseProduct__WEBPACK_IMPORTED_MODULE_0__["parseProduct"])(productsObj);
        arrayProduct.push(parseP);
      });
    }

    return {
      success: true,
      data: arrayProduct
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error: "error"
    };
  }
};
const getProductById = async id => {
  let product = await _config_commerce__WEBPACK_IMPORTED_MODULE_1__["default"].products.retrieve(id);
  let parseP = Object(_utils_parseProduct__WEBPACK_IMPORTED_MODULE_0__["parseProduct"])(product);

  try {
    return {
      success: true,
      data: parseP
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error: "error"
    };
  }
};

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

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: addQuantityWithNumber, removeItem, addQuantity, subtractQuantity, currentCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCart", function() { return currentCart; });
/* harmony import */ var _server_api_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/api/products */ "./server/api/products.js");
/* harmony import */ var _server_api_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/api/cart */ "./server/api/cart.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/cartConstant */ "./store/constants/cartConstant.js");



 //add products
// export const addProducts = () => {
//     return {
//         type: ADD_PRODUCTS
//     }
// };
// //add cart action
// export const addToCart = (id) => {
//     return {
//         type: ADD_TO_CART,
//         id
//     }
// };
// //remove item action
// export const removeItem = (id) => {
//     return {
//         type: REMOVE_ITEM,
//         id
//     }
// };
// //subtract qt action
// export const subtractQuantity = (id) => {
//     return {
//         type: SUB_QUANTITY,
//         id
//     }
// };
// //add qt action
// export const addQuantity = (id) => {
//     return {
//         type: ADD_QUANTITY,
//         id
//     }
// };
// //add qt action with quantity number
// // export const addQuantityWithNumber = (id, qty) => {
// //     return {
// //         type: ADD_QUANTITY_WITH_NUMBER,
// //         id,
// //         qty
// //     }
// // };
// // Reset cart after form submit
// export const resetCart = () => {
//     return {
//         type: RESET_CART
//     }
// };
// //add qt action with quantity number
// export const addToCartWithQuantityNumber = (item, qty) =>{
// addQuantityWithNumber

const addQuantityWithNumber = (id, qty, variantData) => {
  try {
    return async dispatch => {
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["PROCESS_CART"]
      });
      const {
        data
      } = await Object(_server_api_cart__WEBPACK_IMPORTED_MODULE_1__["addToCart"])(id, qty, variantData);
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY_WITH_NUMBER"],
        payload: data
      });
    };
  } catch (error) {
    return dispatch => {
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["FAIL_PROCESS_CART"],
        error: 'error'
      });
    };
  }
}; //remove item

const removeItem = id => {
  return async dispatch => {
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["PROCESS_CART"]
    });
    const {
      data
    } = await Object(_server_api_cart__WEBPACK_IMPORTED_MODULE_1__["removeFromCart"])(id);
    console.log(data);
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM"],
      payload: data
    });
  };
}; //add qt action

const addQuantity = (id, qty) => {
  return async dispatch => {
    let option = {
      quantity: qty
    };
    let {
      data,
      success
    } = await Object(_server_api_cart__WEBPACK_IMPORTED_MODULE_1__["updateItemCart"])(id, option);

    if (success) {
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY"],
        payload: data
      });
    }
  };
}; //subtract qt action

const subtractQuantity = (id, qty) => {
  return async dispatch => {
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["PROCESS_CART"]
    });
    let option = {
      quantity: qty
    };
    let {
      data,
      success
    } = await Object(_server_api_cart__WEBPACK_IMPORTED_MODULE_1__["updateItemCart"])(id, option);

    if (success) {
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY"],
        payload: data
      });
    }
  };
};
const currentCart = () => {
  return async dispatch => {
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["PROCESS_CART"]
    });
    const cart = await Object(_server_api_cart__WEBPACK_IMPORTED_MODULE_1__["getCart"])();
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_3__["SET_CART"],
      payload: cart.data
    });
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_request_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server/request/post */ "./server/request/post.js");
/* harmony import */ var _server_routes_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/routes/customer */ "./server/routes/customer.js");
/* harmony import */ var _server_config_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/config/commerce */ "./server/config/commerce.js");





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

    _server_config_commerce__WEBPACK_IMPORTED_MODULE_4__["default"].customer.login(username, `${window.location.origin}/login?token={token}`).then(token => {
      dispatch(success(username));
    }).catch(error => {
      dispatch(failure(error));
    });
  };
}; //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('_shop_token_');
  return {
    type: _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CHECK_USRER_LOGIN"]
  };
}; // USRER_LOGOUT

const userLogout = () => dispatch => {
  _server_config_commerce__WEBPACK_IMPORTED_MODULE_4__["default"].customer.logout();
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
    Object(_server_request_post__WEBPACK_IMPORTED_MODULE_2__["default"])({
      url: _server_routes_customer__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_REGISTER"],
      data: data
    }).then(response => {
      dispatch(registerSuccess(response.data));
    }).catch(error => {
      dispatch(registerFailure(error));
    });
  };
}; //customer

const setCustomer = () => {
  const isLoggedIn = _server_config_commerce__WEBPACK_IMPORTED_MODULE_4__["default"].customer.isLoggedIn();

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
    _server_config_commerce__WEBPACK_IMPORTED_MODULE_4__["default"].customer.about().then(customer => {
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

/***/ "./store/constants/cartConstant.js":
/*!*****************************************!*\
  !*** ./store/constants/cartConstant.js ***!
  \*****************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_PRODUCTS, PROCESS_CART, FAIL_PROCESS_CART, SET_CART */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_CART", function() { return PROCESS_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAIL_PROCESS_CART", function() { return FAIL_PROCESS_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CART", function() { return SET_CART; });
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
const PROCESS_CART = 'PROCESS_CART';
const FAIL_PROCESS_CART = 'FAIL_PROCESS_CART';
const SET_CART = 'SET_CART';

/***/ }),

/***/ "./store/constants/checkoutConstant.js":
/*!*********************************************!*\
  !*** ./store/constants/checkoutConstant.js ***!
  \*********************************************/
/*! exports provided: PROCESS_CHECKOUT, GENERATE_TOKEN_CHECKOUT, GET_SHIPPING_OPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_CHECKOUT", function() { return PROCESS_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_TOKEN_CHECKOUT", function() { return GENERATE_TOKEN_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SHIPPING_OPTION", function() { return GET_SHIPPING_OPTION; });
const PROCESS_CHECKOUT = 'PROCESS_CHECKOUT';
const GENERATE_TOKEN_CHECKOUT = 'GENERATE_TOKEN_CHECKOUT';
const GET_SHIPPING_OPTION = 'GET_SHIPPING_OPTION';

/***/ }),

/***/ "./store/constants/commerceConstant.js":
/*!*********************************************!*\
  !*** ./store/constants/commerceConstant.js ***!
  \*********************************************/
/*! exports provided: PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST_FAILURE, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_REQUEST_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LIST_REQUEST", function() { return PRODUCT_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LIST_SUCCESS", function() { return PRODUCT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LIST_REQUEST_FAILURE", function() { return PRODUCT_LIST_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_LIST_REQUEST", function() { return CATEGORY_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_LIST_SUCCESS", function() { return CATEGORY_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_LIST_REQUEST_FAILURE", function() { return CATEGORY_LIST_REQUEST_FAILURE; });
const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
const PRODUCT_LIST_REQUEST_FAILURE = 'PRODUCT_LIST_REQUEST_FAILURE';
const CATEGORY_LIST_REQUEST = 'CATEGORY_LIST_REQUEST';
const CATEGORY_LIST_SUCCESS = 'CATEGORY_LIST_SUCCESS';
const CATEGORY_LIST_REQUEST_FAILURE = 'CATEGORY_LIST_REQUEST_FAILURE';

/***/ }),

/***/ "./store/constants/securityConstant.js":
/*!*********************************************!*\
  !*** ./store/constants/securityConstant.js ***!
  \*********************************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, CUSTOMER_REQUEST, CUSTOMER_SUCCESS, CUSTOMER_FAILURE, CLEAR_CUSTOMER, USRER_LOGIN, CHECK_USRER_LOGIN, USRER_LOGOUT */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGIN", function() { return USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USRER_LOGIN", function() { return CHECK_USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGOUT", function() { return USRER_LOGOUT; });
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
const USRER_LOGIN = 'USRER_LOGIN';
const CHECK_USRER_LOGIN = 'CHECK_USRER_LOGIN';
const USRER_LOGOUT = 'USRER_LOGOUT';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/cartConstant */ "./store/constants/cartConstant.js");
/* harmony import */ var _constants_checkoutConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/checkoutConstant */ "./store/constants/checkoutConstant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initState = {
  cart: {},
  checkout: null,
  shippingOptions: [],
  loading: false,
  products: [],
  addedItems: [],
  total: 0,
  shipping: 0,
  error: ''
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["PROCESS_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["SET_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        cart: action.payload
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["FAIL_PROCESS_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["ADD_QUANTITY_WITH_NUMBER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        cart: action.payload
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ITEM"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        cart: action.payload
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["ADD_QUANTITY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        cart: action.payload
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["SUB_QUANTITY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        cart: action.payload
      });

    case _constants_checkoutConstant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_CHECKOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_checkoutConstant__WEBPACK_IMPORTED_MODULE_2__["GENERATE_TOKEN_CHECKOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        checkout: action.payload
      });

    case _constants_checkoutConstant__WEBPACK_IMPORTED_MODULE_2__["GET_SHIPPING_OPTION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        shippingOptions: action.payload
      });

    default:
      return state;
  } // if(action.type === ADD_PRODUCTS){
  //     let productsArray = [];
  //     // dbOrderRef.get()
  //     // .then(res => {
  //     //     res.forEach(doc => {
  //     //         let productsObj = doc.data();
  //     //         productsObj.id = doc.id;
  //     //         productsArray.push(productsObj)
  //     //     });
  //     // });
  //     return{
  //         ...state,
  //         products: data
  //     }
  // }
  // if(action.type === ADD_TO_CART){
  //     let addedItem = state.products.find(item => item.id === action.id)
  //     //check if the action id exists in the addedItems
  //     let existed_item= state.addedItems.find(item=> action.id === item.id)
  //     if(existed_item)
  //     {
  //         addedItem.quantity += 1 
  //         return {
  //             ...state,
  //             total: state.total + addedItem.newPrice 
  //         }
  //     } else {
  //         addedItem.quantity = 1;
  //         //calculating the total
  //         let newTotal = state.total + addedItem.newPrice 
  //         return {
  //             ...state,
  //             addedItems: [...state.addedItems, addedItem],
  //             total : newTotal
  //         }
  //     }
  // }
  // if(action.type === ADD_QUANTITY_WITH_NUMBER){
  //     let addedItem = state.products.find(item => item.id === action.id)
  //     //check if the action id exists in the addedItems
  //     let existed_item= state.addedItems.find(item=> action.id === item.id)
  //     if(existed_item)
  //     {
  //         addedItem.quantity += action.qty
  //         return {
  //             ...state,
  //             total: state.total + addedItem.newPrice * action.qty
  //         }
  //     } else {
  //         addedItem.quantity = action.qty;
  //         //calculating the total
  //         let newTotal = state.total + addedItem.newPrice * action.qty
  //         return {
  //             ...state,
  //             addedItems: [...state.addedItems, addedItem],
  //             total : newTotal
  //         }
  //     }
  // }
  // if(action.type === REMOVE_ITEM){
  //     let itemToRemove= state.addedItems.find(item=> action.id === item.id)
  //     let new_items = state.addedItems.filter(item=> action.id !== item.id)
  //     //calculating the total
  //     let newTotal = state.total - (itemToRemove.newPrice * itemToRemove.quantity );
  //     return {
  //         ...state,
  //         addedItems: new_items,
  //         total: newTotal
  //     }
  // }
  // if(action.type === ADD_QUANTITY){
  //     let addedItem = state.products.find(item=> item.id === action.id)
  //     addedItem.quantity += 1 
  //     let newTotal = state.total + addedItem.newPrice
  //     return {
  //         ...state,
  //         total: newTotal
  //     }
  // }
  // if(action.type === SUB_QUANTITY){  
  //     let addedItem = state.products.find(item=> item.id === action.id) 
  //     //if the qt == 0 then it should be removed
  //     if(addedItem.quantity === 1){
  //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
  //         let newTotal = state.total - addedItem.newPrice
  //         return {
  //             ...state,
  //             addedItems: new_items,
  //             total: newTotal
  //         }
  //     } else {
  //         addedItem.quantity -= 1
  //         let newTotal = state.total - addedItem.newPrice
  //         return {
  //             ...state,
  //             total: newTotal
  //         }
  //     }
  // }
  // if(action.type === ADD_SHIPPING){
  //     return {
  //         ...state,
  //         shipping: state.shipping += 30
  //     }
  // }
  // if(action.type === 'SUB_SHIPPING'){
  //     return {
  //         ...state,
  //         shipping: state.shipping -= 30
  //     }
  // }
  // if(action.type === RESET_CART){
  //     return {
  //         ...state,
  //         addedItems: [],
  //         total: 0,
  //         shipping: 0
  //     }
  // }
  // else {
  //     return state
  // }

};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./store/reducers/commerceReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/commerceReducer.js ***!
  \*******************************************/
/*! exports provided: productReducer, categoryReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productReducer", function() { return productReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryReducer", function() { return categoryReducer; });
/* harmony import */ var _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/commerceConstant */ "./store/constants/commerceConstant.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./store/reducers/rootReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = {
  loading: false,
  products: [],
  categories: [],
  customers: [],
  error: ''
};
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_LIST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_LIST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        products: action.payload,
        error: ''
      });

    case _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_LIST_REQUEST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};
const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_LIST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_LIST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        categories: action.payload,
        error: ''
      });

    case _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_LIST_REQUEST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (productReducer);

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
/* harmony import */ var _commerceReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commerceReducer */ "./store/reducers/commerceReducer.js");





const rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  securityReducer: _securityReducer__WEBPACK_IMPORTED_MODULE_1__["securityReducer"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  customerReducer: _securityReducer__WEBPACK_IMPORTED_MODULE_1__["customerReducer"],
  productReducer: _commerceReducer__WEBPACK_IMPORTED_MODULE_3__["productReducer"],
  categoryReducer: _commerceReducer__WEBPACK_IMPORTED_MODULE_3__["categoryReducer"]
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
/* harmony import */ var _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/securityConstant */ "./store/constants/securityConstant.js");
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
    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      return {
        loading: false,
        login: true,
        user: action.payload,
        error: ''
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILURE"]:
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
    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["REGISTER_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"]:
      return {
        loading: false,
        user: action.payload,
        error: ''
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FAILURE"]:
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
    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_SUCCESS"]:
      return {
        loading: false,
        customer: action.payload,
        error: ''
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_FAILURE"]:
      return {
        loading: false,
        customer: null,
        error: action.payload
      };

    case _constants_securityConstant__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CUSTOMER"]:
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

/***/ "./utils/parseProduct.js":
/*!*******************************!*\
  !*** ./utils/parseProduct.js ***!
  \*******************************/
/*! exports provided: parseProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseProduct", function() { return parseProduct; });
const parseProduct = productObj => {
  const assetsM = (assetsMedia, pos) => {
    try {
      return assetsMedia[pos].url;
    } catch (error) {
      return "https://demaxin.s3.ap-south-1.amazonaws.com/img6-1588705236520.jpg";
    }
  };

  return {
    id: productObj.id,
    title: productObj.name,
    description: productObj.description,
    discount: false,
    discountOff: 0,
    newPrice: productObj.price.raw,
    newProduct: false,
    offer: false,
    oldPrice: productObj.price.raw,
    onSale: false,
    categories: productObj.categories,
    variant_groups: productObj.variant_groups,
    type: "Women Clothes",
    imageUrl: assetsM(productObj.assets, 0),
    imageHoverUrl: assetsM(productObj.assets, 1),
    quantity: 1
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3VyaXR5L1JvdXRlR3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBpL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwaS9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcmVxdWVzdC9wb3N0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvY3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NlY3VyaXR5QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbnN0YW50cy9jYXJ0Q29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uc3RhbnRzL2NoZWNrb3V0Q29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uc3RhbnRzL2NvbW1lcmNlQ29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvY2FydFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvY29tbWVyY2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3NlY3VyaXR5UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wYXJzZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFN0ZXBJblB4Iiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsImRlbGF5SW5NcyIsInJlbmRlckdvVG9wSWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0VGltZW91dCIsIlJvdXRlR3VhcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXN0b21lclJlZHVjZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY3VzdG9tZXIiLCJhdXRob3JpemVkIiwic2V0QXV0aG9yaXplZCIsImF1dGhDaGVjayIsImhpZGVDb250ZW50IiwiZXZlbnRzIiwib24iLCJvZmYiLCJkYXRhIiwicHJvdGVjdGVkIiwicHVzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsInNldEN1c3RvbWVyIiwiY3VycmVudENhcnQiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJhZGRUb0NhcnQiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInZhcmlhbnREYXRhIiwiY2FydCIsInN1Y2Nlc3MiLCJjb21tZXJjZSIsImFkZCIsImVycm9yIiwiZ2V0Q2FydCIsInJldHJpZXZlIiwidXBkYXRlSXRlbUNhcnQiLCJpdGVtSWQiLCJvcHRpb24iLCJ1cGRhdGUiLCJyZW1vdmVGcm9tQ2FydCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwibGlzdCIsImFycmF5UHJvZHVjdCIsImxlbmd0aCIsImZvckVhY2giLCJwcm9kdWN0c09iaiIsInBhcnNlUCIsInBhcnNlUHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiaWQiLCJwcm9kdWN0IiwiaHR0cEluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJ1bmRlZmluZWQiLCJhbGVydCIsIlByb21pc2UiLCJyZWplY3QiLCJrZXlzIiwicmVxdWlyZSIsIkNvbW1lcmNlIiwiY29tbWVyY2VKc0tleSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcGVQdWJsaXNoYWJsZUtleSIsInN0cmlwZVNlY3JldEtleSIsImF3c0FjY2Vzc0tleUlkIiwiYXdzU2VjcmV0QWNjZXNzS2V5IiwiYXdzQnVja2V0IiwiUG9zdCIsImNvbmZpZyIsImhlYWRlcnMiLCJwb3N0IiwidXJsIiwiQ1VTVE9NRVJfUkVHSVNURVIiLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJxdHkiLCJ0eXBlIiwiUFJPQ0VTU19DQVJUIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwicGF5bG9hZCIsIkZBSUxfUFJPQ0VTU19DQVJUIiwicmVtb3ZlSXRlbSIsIlJFTU9WRV9JVEVNIiwiYWRkUXVhbnRpdHkiLCJBRERfUVVBTlRJVFkiLCJzdWJ0cmFjdFF1YW50aXR5IiwiU0VUX0NBUlQiLCJyZXF1ZXN0IiwiTE9HSU5fUkVRVUVTVCIsInVzZXIiLCJMT0dJTl9TVUNDRVNTIiwiZmFpbHVyZSIsIkxPR0lOX0ZBSUxVUkUiLCJ1c2VyTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwibG9jYXRpb24iLCJvcmlnaW4iLCJ0aGVuIiwidG9rZW4iLCJjYXRjaCIsImNoZWNrVXNlckxvZ2luIiwiZ2V0VG9rZW4iLCJjb29raWUiLCJnZXQiLCJDSEVDS19VU1JFUl9MT0dJTiIsInVzZXJMb2dvdXQiLCJsb2dvdXQiLCJDTEVBUl9DVVNUT01FUiIsInJlZ2lzdGVyUmVxdWVzdCIsIlJFR0lTVEVSX1JFUVVFU1QiLCJyZWdpc3RlclN1Y2Nlc3MiLCJSRUdJU1RFUl9TVUNDRVNTIiwicmVnaXN0ZXJGYWlsdXJlIiwiUkVHSVNURVJfRkFJTFVSRSIsInJlZ2lzdGVyQ3VzdG9tZXIiLCJpc0xvZ2dlZEluIiwiQ1VTVE9NRVJfUkVRVUVTVCIsImFib3V0IiwiQ1VTVE9NRVJfU1VDQ0VTUyIsIkNVU1RPTUVSX0ZBSUxVUkUiLCJBRERfVE9fQ0FSVCIsIlNVQl9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiQUREX1BST0RVQ1RTIiwiUFJPQ0VTU19DSEVDS09VVCIsIkdFTkVSQVRFX1RPS0VOX0NIRUNLT1VUIiwiR0VUX1NISVBQSU5HX09QVElPTiIsIlBST0RVQ1RfTElTVF9SRVFVRVNUIiwiUFJPRFVDVF9MSVNUX1NVQ0NFU1MiLCJQUk9EVUNUX0xJU1RfUkVRVUVTVF9GQUlMVVJFIiwiQ0FURUdPUllfTElTVF9SRVFVRVNUIiwiQ0FURUdPUllfTElTVF9TVUNDRVNTIiwiQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUiLCJVU1JFUl9MT0dJTiIsIlVTUkVSX0xPR09VVCIsImluaXRTdGF0ZSIsImNoZWNrb3V0Iiwic2hpcHBpbmdPcHRpb25zIiwibG9hZGluZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJjYXRlZ29yaWVzIiwiY3VzdG9tZXJzIiwicHJvZHVjdFJlZHVjZXIiLCJjYXRlZ29yeVJlZHVjZXIiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJzZWN1cml0eVJlZHVjZXIiLCJpbml0U3RhdGVSZWdpc3RlciIsInJlZ2lzdGVyUmVkdWNlciIsImluaXRTdGF0ZUN1c3RvbWVyIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJwcm9kdWN0T2JqIiwiYXNzZXRzTSIsImFzc2V0c01lZGlhIiwicG9zIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwibmV3UHJpY2UiLCJwcmljZSIsInJhdyIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidmFyaWFudF9ncm91cHMiLCJpbWFnZVVybCIsImFzc2V0cyIsImltYWdlSG92ZXJVcmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztR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Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3RoZVBvc2l0aW9uLCBzZXRUaGVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24odHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zdCBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gcHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChvblNjcm9sbFN0ZXAsIHByb3BzLmRlbGF5SW5Ncyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyR29Ub3BJY29uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bnby10b3AgJHt0aGVQb3NpdGlvbiA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LXVwLWFycm93LWFsdFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vU2hhcmVkL0dvVG9wJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkZXIoZmFsc2UpLCAxMDAwKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+MyBBZ3VhczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIjMgQWd1YXMgLSBUaWVuZGEgUGxheWFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIjMgQWd1YXMgLSBUaWVuZGEgUGxheWFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9saXZhbmktcmVhY3QuZW52eXRoZW1lLmNvbS9cIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwOTMxMTMuanBnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7Lyoge2xvYWRlciA/ICdMb2FkaW5nJyA6IGNoaWxkcmVufSAqL31cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVHdWFyZCh7IGNoaWxkcmVuIH0pe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBjdXN0b21lclJlZHVjZXIgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUuY3VzdG9tZXJSZWR1Y2VyKSBcclxuICAgIGNvbnN0IHsgY3VzdG9tZXIgfSA9IGN1c3RvbWVyUmVkdWNlclxyXG4gICAgY29uc3QgW2F1dGhvcml6ZWQsIHNldEF1dGhvcml6ZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCB7IHByb3BzIH0gPSBjaGlsZHJlblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBvbiBpbml0aWFsIGxvYWQgLSBydW4gYXV0aCBjaGVjayBcclxuICAgICAgICBhdXRoQ2hlY2socHJvcHMpO1xyXG4gICAgICAgIC8vIG9uIHJvdXRlIGNoYW5nZSBzdGFydCAtIGhpZGUgcGFnZSBjb250ZW50IGJ5IHNldHRpbmcgYXV0aG9yaXplZCB0byBmYWxzZSAgXHJcbiAgICAgICAgY29uc3QgaGlkZUNvbnRlbnQgPSAoKSA9PiBzZXRBdXRob3JpemVkKGZhbHNlKTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGlkZUNvbnRlbnQpO1xyXG5cclxuICAgICAgICAvLyBvbiByb3V0ZSBjaGFuZ2UgY29tcGxldGUgLSBydW4gYXV0aCBjaGVjayBcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXV0aENoZWNrKVxyXG5cclxuICAgICAgICAvLyB1bnN1YnNjcmliZSBmcm9tIGV2ZW50cyBpbiB1c2VFZmZlY3QgcmV0dXJuIGZ1bmN0aW9uXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoaWRlQ29udGVudCk7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXV0aENoZWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhdXRoQ2hlY2soZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEucHJvdGVjdGVkICYmICFjdXN0b21lcil7XHJcbiAgICAgICAgICAgIHNldEF1dGhvcml6ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldEF1dGhvcml6ZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoYXV0aG9yaXplZCAmJiBjaGlsZHJlbik7XHJcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9fQXBwL0xheW91dCc7XHJcbmltcG9ydCB7IGFkZFByb2R1Y3RzLCBjdXJyZW50Q2FydCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjaGVja1VzZXJMb2dpbiwgc2V0Q3VzdG9tZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3NlY3VyaXR5QWN0aW9uJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0IFJvdXRlR3VhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN1cml0eS9Sb3V0ZUd1YXJkJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0Q3VzdG9tZXIoKSlcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChjdXJyZW50Q2FydCgpKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZUd1YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUm91dGVHdWFyZD5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgICBcclxufTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCkiLCJpbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2NvbmZpZy9jb21tZXJjZVwiXHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3RJZCwgcXVhbnRpdHksIHZhcmlhbnREYXRhKSA9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYodmFyaWFudERhdGEpe1xyXG4gICAgICAgICAgICBsZXQge2NhcnQsIHN1Y2Nlc3MgfSA9IGF3YWl0IGNvbW1lcmNlLmNhcnQuYWRkKHByb2R1Y3RJZCxxdWFudGl0eSx2YXJpYW50RGF0YSlcclxuICAgICAgICAgICAgaWYoc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjYXJ0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJlcnJvcl9ub19hZGRfY2FydF9pdGVtXCJcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IHtjYXJ0LCBzdWNjZXNzIH0gPSBhd2FpdCBjb21tZXJjZS5jYXJ0LmFkZChwcm9kdWN0SWQscXVhbnRpdHkpXHJcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY2FydFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3Jfbm9fYWRkX2NhcnRfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIGVycm9yOiBcImVycm9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJ0ID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBjYXJ0ID0gYXdhaXQgY29tbWVyY2UuY2FydC5yZXRyaWV2ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2FydClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjYXJ0XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIGVycm9yOiBcImVycm9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtQ2FydCA9IGFzeW5jIChpdGVtSWQsIG9wdGlvbikgPT57XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgY2FydCwgc3VjY2VzcyB9ID0gYXdhaXQgY29tbWVyY2UuY2FydC51cGRhdGUoaXRlbUlkLCBvcHRpb24pXHJcblxyXG4gICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogY2FydFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAoaXRlbUlkKSA9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHsgY2FydCwgc3VjY2VzcyB9ID0gYXdhaXQgY29tbWVyY2UuY2FydC5yZW1vdmUoaXRlbUlkKSBcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJ0KVxyXG4gICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogY2FydFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJlcnJvcl9ub3RfY2FydF9pdGVtX3JlbW92ZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgcGFyc2VQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3BhcnNlUHJvZHVjdFwiO1xyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2NvbmZpZy9jb21tZXJjZVwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PntcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLmxpc3QoKVxyXG4gICAgICAgIGxldCBhcnJheVByb2R1Y3QgPSBbXTtcclxuICAgICAgICBpZihwcm9kdWN0cy5kYXRhLmxlbmd0aCA+IDApeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9kdWN0cz8uZGF0YT8uZm9yRWFjaChwcm9kdWN0c09iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VQID0gcGFyc2VQcm9kdWN0KHByb2R1Y3RzT2JqKVxyXG4gICAgICAgICAgICAgICAgYXJyYXlQcm9kdWN0LnB1c2gocGFyc2VQKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFycmF5UHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeUlkID0gYXN5bmMgKGlkKSA9PntcclxuXHJcbiAgICBsZXQgcHJvZHVjdCA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLnJldHJpZXZlKGlkKVxyXG4gICAgbGV0IHBhcnNlUCA9IHBhcnNlUHJvZHVjdChwcm9kdWN0KVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBwYXJzZVBcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgaHR0cEluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly9hcGkuY2hlYy5pb1wiXHJcbn0pXHJcblxyXG5odHRwSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShudWxsLCBlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKVxyXG4gICAgaWYoZXJyb3IucmVzcG9uc2UgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWxlcnQoXCJIb2xhIGVzdGFtb3MgdGVuaWVuZG8gcHJvYmxlbWFzIGRlIGNvbmV4acOzbiBjb24gZWwgc2Vydmlkb3IgaW50ZW50ZSBtw6FzIHRhcmRlLlwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTsgICAgXHJcbiAgICB9ICAgIFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBodHRwSW5zdGFuY2U7IiwiaW1wb3J0IENvbW1lcmNlIGZyb20gXCJAY2hlYy9jb21tZXJjZS5qc1wiO1xyXG5jb25zdCBrZXlzID0gcmVxdWlyZShcIi4uL2NvbmZpZy9rZXlzXCIpO1xyXG5jb25zdCBjb21tZXJjZSA9IG5ldyBDb21tZXJjZShrZXlzLmNvbW1lcmNlSnNLZXkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVyY2UiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHN0cmlwZVB1Ymxpc2hhYmxlS2V5OiAnc3RyaXBlUHVibGlzaGFibGVLZXknLFxyXG4gICAgc3RyaXBlU2VjcmV0S2V5OiAnc3RyaXBlU2VjcmV0S2V5JyxcclxuICAgIGF3c0FjY2Vzc0tleUlkOiAnYXdzQWNjZXNzS2V5SWQnLFxyXG4gICAgYXdzU2VjcmV0QWNjZXNzS2V5OiAnYXdzU2VjcmV0QWNjZXNzS2V5JyxcclxuICAgIGF3c0J1Y2tldDogJ2F3c0J1Y2tldCcsXHJcbiAgICBjb21tZXJjZUpzS2V5OiAncGtfdGVzdF8zMzExMDgzNmRjMmM1YzdiMjY1YTZkNzJjZTFmZjI0ZGIzNDIwOGExMjhkY2MnXHJcbn07IiwiaW1wb3J0IGh0dHBJbnN0YW5jZSBmcm9tIFwiLi4vY29uZmlnL2FwaVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QocHJvcHMpe1xyXG4gICAgY29uc3Qga2V5cyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9rZXlzJylcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgIFwiWC1BdXRob3JpemF0aW9uXCI6IGtleXMuY29tbWVyY2VKc0tleSxcclxuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBodHRwSW5zdGFuY2UucG9zdChwcm9wcy51cmwsIGRhdGEsIGNvbmZpZylcclxufSIsIi8vY3VzdG9tZXJcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1JFR0lTVEVSID0gXCIvdjEvY3VzdG9tZXJzXCIiLCJpbXBvcnQgeyBnZXRQcm9kdWN0QnlJZCB9IGZyb20gJy4uLy4uL3NlcnZlci9hcGkvcHJvZHVjdHMnO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQsIGdldENhcnQsIHJlbW92ZUZyb21DYXJ0LCB1cGRhdGVJdGVtQ2FydCB9IGZyb20gJy4uLy4uL3NlcnZlci9hcGkvY2FydCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfVE9fQ0FSVCxcclxuICAgIFJFTU9WRV9JVEVNLFxyXG4gICAgU1VCX1FVQU5USVRZLFxyXG4gICAgQUREX1FVQU5USVRZLFxyXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgUkVTRVRfQ0FSVCxcclxuICAgIEFERF9QUk9EVUNUUyxcclxuICAgIFBST0NFU1NfQ0FSVCxcclxuICAgIEZBSUxfUFJPQ0VTU19DQVJULFxyXG4gICAgU0VUX0NBUlRcclxufSBmcm9tICcuLi9jb25zdGFudHMvY2FydENvbnN0YW50J1xyXG5cclxuXHJcbi8vYWRkIHByb2R1Y3RzXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogQUREX1BST0RVQ1RTXHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIC8vYWRkIGNhcnQgYWN0aW9uXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogQUREX1RPX0NBUlQsXHJcbi8vICAgICAgICAgaWRcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gLy9yZW1vdmUgaXRlbSBhY3Rpb25cclxuLy8gZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogUkVNT1ZFX0lURU0sXHJcbi8vICAgICAgICAgaWRcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gLy9zdWJ0cmFjdCBxdCBhY3Rpb25cclxuLy8gZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogU1VCX1FVQU5USVRZLFxyXG4vLyAgICAgICAgIGlkXHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIC8vYWRkIHF0IGFjdGlvblxyXG4vLyBleHBvcnQgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZLFxyXG4vLyAgICAgICAgIGlkXHJcbi8vICAgICB9XHJcbi8vIH07XHJcblxyXG4vLyAvL2FkZCBxdCBhY3Rpb24gd2l0aCBxdWFudGl0eSBudW1iZXJcclxuLy8gLy8gZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5V2l0aE51bWJlciA9IChpZCwgcXR5KSA9PiB7XHJcbi8vIC8vICAgICByZXR1cm4ge1xyXG4vLyAvLyAgICAgICAgIHR5cGU6IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcclxuLy8gLy8gICAgICAgICBpZCxcclxuLy8gLy8gICAgICAgICBxdHlcclxuLy8gLy8gICAgIH1cclxuLy8gLy8gfTtcclxuXHJcbi8vIC8vIFJlc2V0IGNhcnQgYWZ0ZXIgZm9ybSBzdWJtaXRcclxuLy8gZXhwb3J0IGNvbnN0IHJlc2V0Q2FydCA9ICgpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogUkVTRVRfQ0FSVFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbi8vIC8vYWRkIHF0IGFjdGlvbiB3aXRoIHF1YW50aXR5IG51bWJlclxyXG4vLyBleHBvcnQgY29uc3QgYWRkVG9DYXJ0V2l0aFF1YW50aXR5TnVtYmVyID0gKGl0ZW0sIHF0eSkgPT57XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gYWRkUXVhbnRpdHlXaXRoTnVtYmVyXHJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSwgdmFyaWFudERhdGEpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBhc3luYyhkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFBST0NFU1NfQ0FSVCB9KVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFkZFRvQ2FydChpZCwgcXR5LCB2YXJpYW50RGF0YSlcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGQUlMX1BST0NFU1NfQ0FSVCAsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2Vycm9yJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuLy9yZW1vdmUgaXRlbVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG5cclxuICAgIHJldHVybiBhc3luYyhkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBQUk9DRVNTX0NBUlR9KVxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVtb3ZlRnJvbUNhcnQoaWQpIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSVRFTSxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59O1xyXG5cclxuLy9hZGQgcXQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCwgcXR5KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb24gPXtcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHF0eVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeyBkYXRhLCBzdWNjZXNzIH0gPSBhd2FpdCB1cGRhdGVJdGVtQ2FydChpZCwgb3B0aW9uKVxyXG4gICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG4vL3N1YnRyYWN0IHF0IGFjdGlvblxyXG5leHBvcnQgY29uc3Qgc3VidHJhY3RRdWFudGl0eSA9IChpZCwgcXR5KSA9PiB7ICAgIFxyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBQUk9DRVNTX0NBUlR9KVxyXG4gICAgICAgIGxldCBvcHRpb24gPXtcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHF0eVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeyBkYXRhLCBzdWNjZXNzIH0gPSBhd2FpdCB1cGRhdGVJdGVtQ2FydChpZCwgb3B0aW9uKVxyXG4gICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJlbnRDYXJ0ID0gKCkgPT57ICAgIFxyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFBST0NFU1NfQ0FSVH0pXHJcbiAgICAgICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKSAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFNFVF9DQVJULCBwYXlsb2FkOiBjYXJ0LmRhdGF9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ0xFQVJfQ1VTVE9NRVIsIENVU1RPTUVSX0ZBSUxVUkUsIENVU1RPTUVSX1JFUVVFU1QsIENVU1RPTUVSX1NVQ0NFU1MsIExPR0lOX0ZBSUxVUkUsIExPR0lOX1JFUVVFU1QsIExPR0lOX1NVQ0NFU1MsIFJFR0lTVEVSX0ZBSUxVUkUsIFJFR0lTVEVSX1JFUVVFU1QsIFJFR0lTVEVSX1NVQ0NFU1MgfSBmcm9tICcuLi9jb25zdGFudHMvc2VjdXJpdHlDb25zdGFudCdcclxuaW1wb3J0IHsgVVNSRVJfTE9HSU4sIENIRUNLX1VTUkVSX0xPR0lOLCBVU1JFUl9MT0dPVVQgfSBmcm9tICcuLi9jb25zdGFudHMvc2VjdXJpdHlDb25zdGFudCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9zZXJ2ZXIvcmVxdWVzdC9wb3N0JztcclxuaW1wb3J0IHsgQ1VTVE9NRVJfUkVHSVNURVIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvcm91dGVzL2N1c3RvbWVyJztcclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcvY29tbWVyY2UnO1xyXG5cclxuLy9BQ1RJT05TIExPR0lOXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HSU5fUkVRVUVTVFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3Qgc3VjY2VzcyA9ICh1c2VyKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgIHBheWxvYWQ6IHVzZXJcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGZhaWx1cmUgPSAoZXJyb3IpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgcGF5bG9hZDogZXJyb3JcclxuICAgIH1cclxufTtcclxuXHJcbi8vIFVTUkVSX0xPR0lOXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAodXNlcm5hbWUpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlcXVlc3QoKSlcclxuXHJcbiAgICAgICAgLy9tYWtlIGh0dHAgcmVxdWVzdFxyXG4gICAgICAgIGNvbW1lcmNlLmN1c3RvbWVyLmxvZ2luKHVzZXJuYW1lLCBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9sb2dpbj90b2tlbj17dG9rZW59YClcclxuICAgICAgICAudGhlbih0b2tlbiA9PiB7ICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChzdWNjZXNzKHVzZXJuYW1lKSk7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZhaWx1cmUoZXJyb3IpKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vQ0hFQ0tfVVNSRVJfTE9HSU5cclxuZXhwb3J0IGNvbnN0IGNoZWNrVXNlckxvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfc2hvcF90b2tlbl8nKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBDSEVDS19VU1JFUl9MT0dJTlxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBVU1JFUl9MT0dPVVRcclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXQgPSAoKSA9PiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgY29tbWVyY2UuY3VzdG9tZXIubG9nb3V0KCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0NVU1RPTUVSIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FjdGlvbiByZWdpc3RlclxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSZXF1ZXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gKHVzZXIpID0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBSRUdJU1RFUl9TVUNDRVNTLFxyXG4gICAgICAgIHBheWxvYWQ6IHVzZXJcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGYWlsdXJlID0gKGVycm9yKSA9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVHSVNURVJfRkFJTFVSRSxcclxuICAgICAgICBwYXlsb2FkOiBlcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJDdXN0b21lciA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUmVxdWVzdCgpKVxyXG4gICAgICAgIFBvc3Qoe3VybDogQ1VTVE9NRVJfUkVHSVNURVIsIGRhdGE6IGRhdGF9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyU3VjY2VzcyhyZXNwb25zZS5kYXRhKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlckZhaWx1cmUoZXJyb3IpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3VzdG9tZXJcclxuZXhwb3J0IGNvbnN0IHNldEN1c3RvbWVyID0gKCkgPT57ICAgIFxyXG5cclxuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBjb21tZXJjZS5jdXN0b21lci5pc0xvZ2dlZEluKCk7XHJcbiAgICBpZiAoIWlzTG9nZ2VkSW4gfHwgaXNMb2dnZWRJbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBDTEVBUl9DVVNUT01FUiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBDVVNUT01FUl9SRVFVRVNUfSlcclxuICAgICAgICBjb21tZXJjZS5jdXN0b21lci5hYm91dCgpXHJcbiAgICAgICAgLnRoZW4oKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBDVVNUT01FUl9TVUNDRVNTLCBwYXlsb2FkOiBjdXN0b21lcn0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IENVU1RPTUVSX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcclxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcclxuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZID0gJ0FERF9RVUFOVElUWSc7XHJcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgT1JERVJfRk9STSA9ICdPUkRFUl9GT1JNJztcclxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUUyA9ICdBRERfUFJPRFVDVFMnO1xyXG5leHBvcnQgY29uc3QgUFJPQ0VTU19DQVJUID0gJ1BST0NFU1NfQ0FSVCdcclxuZXhwb3J0IGNvbnN0IEZBSUxfUFJPQ0VTU19DQVJUID0gJ0ZBSUxfUFJPQ0VTU19DQVJUJ1xyXG5leHBvcnQgY29uc3QgU0VUX0NBUlQ9ICAnU0VUX0NBUlQnXHJcbiIsImV4cG9ydCBjb25zdCBQUk9DRVNTX0NIRUNLT1VUID0gJ1BST0NFU1NfQ0hFQ0tPVVQnO1xyXG5leHBvcnQgY29uc3QgR0VORVJBVEVfVE9LRU5fQ0hFQ0tPVVQgPSAnR0VORVJBVEVfVE9LRU5fQ0hFQ0tPVVQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NISVBQSU5HX09QVElPTiA9ICdHRVRfU0hJUFBJTkdfT1BUSU9OJyIsIlxyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUX1JFUVVFU1QgPSAnUFJPRFVDVF9MSVNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUX1NVQ0NFU1MgPSAnUFJPRFVDVF9MSVNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUX1JFUVVFU1RfRkFJTFVSRSA9ICdQUk9EVUNUX0xJU1RfUkVRVUVTVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUX1JFUVVFU1QgPSAnQ0FURUdPUllfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0xJU1RfU1VDQ0VTUyA9ICdDQVRFR09SWV9MSVNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUgPSAnQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUnOyIsImV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ1VTRVJTX0xPR0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdVU0VSU19MT0dJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnVVNFUlNfTE9HSU5fRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1JFUVVFU1QgPSAnVVNFUlNfUkVHSVNURVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9TVUNDRVNTID0gJ1VTRVJTX1JFR0lTVEVSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRkFJTFVSRSA9ICdVU0VSU19SRUdJU1RFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9SRVFVRVNUID0gJ0NVU1RPTUVSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfU1VDQ0VTUyA9ICdDVVNUT01FUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX0ZBSUxVUkUgPSAnQ1VTVE9NRVJfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DVVNUT01FUiA9ICdDTEVBUl9DVVNUT01FUic7XHJcblxyXG5leHBvcnQgY29uc3QgVVNSRVJfTE9HSU4gPSAnVVNSRVJfTE9HSU4nO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfVVNSRVJfTE9HSU4gPSAnQ0hFQ0tfVVNSRVJfTE9HSU4nO1xyXG5leHBvcnQgY29uc3QgVVNSRVJfTE9HT1VUID0gJ1VTUkVSX0xPR09VVCc7IiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9UT19DQVJULFxyXG4gICAgUkVNT1ZFX0lURU0sXHJcbiAgICBTVUJfUVVBTlRJVFksXHJcbiAgICBBRERfUVVBTlRJVFksIFxyXG4gICAgQUREX1NISVBQSU5HLFxyXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgUkVTRVRfQ0FSVCxcclxuICAgIEFERF9QUk9EVUNUUyxcclxuICAgIFBST0NFU1NfQ0FSVCxcclxuICAgIEZBSUxfUFJPQ0VTU19DQVJULFxyXG4gICAgU0VUX0NBUlRcclxufSBmcm9tICcuLi9jb25zdGFudHMvY2FydENvbnN0YW50JztcclxuaW1wb3J0IHsgR0VORVJBVEVfVE9LRU5fQ0hFQ0tPVVQsIEdFVF9TSElQUElOR19PUFRJT04sIFBST0NFU1NfQ0hFQ0tPVVQgfSBmcm9tICcuLi9jb25zdGFudHMvY2hlY2tvdXRDb25zdGFudCc7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBjYXJ0OiB7fSxcclxuICAgIGNoZWNrb3V0OiBudWxsLFxyXG4gICAgc2hpcHBpbmdPcHRpb25zOiBbXSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgYWRkZWRJdGVtczpbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgc2hpcHBpbmc6IDAsXHJcbiAgICBlcnJvcjogJydcclxufTtcclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgUFJPQ0VTU19DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VUX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGQUlMX1BST0NFU1NfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0lURU06XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICBjYXNlIEFERF9RVUFOVElUWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTVUJfUVVBTlRJVFk6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIGNhc2UgUFJPQ0VTU19DSEVDS09VVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIGNhc2UgR0VORVJBVEVfVE9LRU5fQ0hFQ0tPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGVja291dDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgR0VUX1NISVBQSU5HX09QVElPTjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nT3B0aW9uczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gQUREX1BST0RVQ1RTKXtcclxuICAgIC8vICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgLy8gICAgIC8vIGRiT3JkZXJSZWYuZ2V0KClcclxuICAgIC8vICAgICAvLyAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICByZXMuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgbGV0IHByb2R1Y3RzT2JqID0gZG9jLmRhdGEoKTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIHByb2R1Y3RzT2JqLmlkID0gZG9jLmlkO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgcHJvZHVjdHNBcnJheS5wdXNoKHByb2R1Y3RzT2JqKVxyXG4gICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJue1xyXG4gICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgcHJvZHVjdHM6IGRhdGFcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgIFxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKXtcclxuICAgIC8vICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgIC8vICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAvLyAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAvLyAgICAgaWYoZXhpc3RlZF9pdGVtKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAvLyAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAvLyAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlIFxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xyXG4gICAgLy8gICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgLy8gICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgIC8vICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgIC8vICAgICBpZihleGlzdGVkX2l0ZW0pXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgLy8gICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgLy8gICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XHJcbiAgICAvLyAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAvLyAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgIC8vICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgIC8vICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xyXG4gICAgLy8gICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAvLyAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAvLyAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXHJcbiAgICAvLyAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXHJcbiAgICAvLyAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAvLyAgICAgaWYoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKXtcclxuICAgIC8vICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgIC8vICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgLy8gICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gUkVTRVRfQ0FSVCl7XHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgLy8gICAgICAgICB0b3RhbDogMCxcclxuICAgIC8vICAgICAgICAgc2hpcHBpbmc6IDBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIGVsc2Uge1xyXG4gICAgLy8gICAgIHJldHVybiBzdGF0ZVxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0UmVkdWNlciIsIlxyXG5pbXBvcnQge1xyXG4gICAgQ0FURUdPUllfTElTVF9SRVFVRVNULFxyXG4gICAgQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUsIENBVEVHT1JZX0xJU1RfU1VDQ0VTUyxcclxuICAgIFBST0RVQ1RfTElTVF9SRVFVRVNULFxyXG4gICAgUFJPRFVDVF9MSVNUX1JFUVVFU1RfRkFJTFVSRSxcclxuICAgIFBST0RVQ1RfTElTVF9TVUNDRVNTXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb21tZXJjZUNvbnN0YW50XCI7XHJcbmltcG9ydCByb290UmVkdWNlcnMgZnJvbSBcIi4vcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgICBjdXN0b21lcnM6IFtdLFxyXG4gICAgZXJyb3I6ICcnLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFBST0RVQ1RfTElTVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFBST0RVQ1RfTElTVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBQUk9EVUNUX0xJU1RfUkVRVUVTVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQ0FURUdPUllfTElTVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIENBVEVHT1JZX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDQVRFR09SWV9MSVNUX1JFUVVFU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdFJlZHVjZXIiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtzZWN1cml0eVJlZHVjZXIsIHJlZ2lzdGVyUmVkdWNlciwgY3VzdG9tZXJSZWR1Y2VyfSBmcm9tICcuL3NlY3VyaXR5UmVkdWNlcidcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gJy4vY2FydFJlZHVjZXInXHJcbmltcG9ydCB7Y2F0ZWdvcnlSZWR1Y2VyLCBwcm9kdWN0UmVkdWNlcn0gZnJvbSBcIi4vY29tbWVyY2VSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHNlY3VyaXR5UmVkdWNlcixcclxuICAgIGNhcnRSZWR1Y2VyLFxyXG4gICAgY3VzdG9tZXJSZWR1Y2VyLFxyXG4gICAgcHJvZHVjdFJlZHVjZXIsXHJcbiAgICBjYXRlZ29yeVJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcnMiLCJpbXBvcnQgeyBDTEVBUl9DVVNUT01FUiwgQ1VTVE9NRVJfRkFJTFVSRSwgQ1VTVE9NRVJfUkVRVUVTVCwgQ1VTVE9NRVJfU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSwgTE9HSU5fUkVRVUVTVCwgTE9HSU5fU1VDQ0VTUywgUkVHSVNURVJfRkFJTFVSRSwgUkVHSVNURVJfUkVRVUVTVCwgUkVHSVNURVJfU1VDQ0VTUyB9IGZyb20gXCIuLi9jb25zdGFudHMvc2VjdXJpdHlDb25zdGFudFwiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsICAgIFxyXG4gICAgbG9naW46IGZhbHNlLFxyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIGVycm9yOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN1cml0eVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dJTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vcmVkY3VlcnMgcmVnaXN0ZXIgY3VzdG9tZXJcclxuY29uc3QgaW5pdFN0YXRlUmVnaXN0ZXIgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBlcnJvcjogJydcclxufVxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlUmVnaXN0ZXIsIGFjdGlvbikgPT4ge1xyXG4gICAgXHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgUkVHSVNURVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFR0lTVEVSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVHSVNURVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaW5pdFN0YXRlQ3VzdG9tZXIgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGN1c3RvbWVyOiBudWxsLFxyXG4gICAgZXJyb3I6ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IGN1c3RvbWVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZUN1c3RvbWVyLCBhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIENVU1RPTUVSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDVVNUT01FUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDVVNUT01FUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENMRUFSX0NVU1RPTUVSOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIlxyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIlxyXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyXCJcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXJzLCBjb21wb3NlV2l0aERldlRvb2xzKFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiZXhwb3J0IGNvbnN0IHBhcnNlUHJvZHVjdCA9IHByb2R1Y3RPYmogPT57XHJcbiAgICBjb25zdCBhc3NldHNNID0gKGFzc2V0c01lZGlhLCBwb3MpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXNzZXRzTWVkaWFbcG9zXS51cmw7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc2LTE1ODg3MDUyMzY1MjAuanBnXCIgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwcm9kdWN0T2JqLmlkLFxyXG4gICAgICAgIHRpdGxlOiBwcm9kdWN0T2JqLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3RPYmouZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIG5ld1ByaWNlOiBwcm9kdWN0T2JqLnByaWNlLnJhdyxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogZmFsc2UsXHJcbiAgICAgICAgb2xkUHJpY2U6IHByb2R1Y3RPYmoucHJpY2UucmF3LFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgY2F0ZWdvcmllczogcHJvZHVjdE9iai5jYXRlZ29yaWVzLFxyXG4gICAgICAgIHZhcmlhbnRfZ3JvdXBzOiBwcm9kdWN0T2JqLnZhcmlhbnRfZ3JvdXBzLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBhc3NldHNNKHByb2R1Y3RPYmouYXNzZXRzLCAwKSxcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBhc3NldHNNKHByb2R1Y3RPYmouYXNzZXRzLCAxKSxcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=