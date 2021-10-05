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
    title: productObj.name,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3VyaXR5L1JvdXRlR3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBpL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwaS9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2NvbW1lcmNlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcmVxdWVzdC9wb3N0LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvY3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NlY3VyaXR5QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbnN0YW50cy9jYXJ0Q29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uc3RhbnRzL2NoZWNrb3V0Q29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uc3RhbnRzL2NvbW1lcmNlQ29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvY2FydFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvY29tbWVyY2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3NlY3VyaXR5UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wYXJzZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFN0ZXBJblB4Iiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsImRlbGF5SW5NcyIsInJlbmRlckdvVG9wSWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0VGltZW91dCIsIlJvdXRlR3VhcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXN0b21lclJlZHVjZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY3VzdG9tZXIiLCJhdXRob3JpemVkIiwic2V0QXV0aG9yaXplZCIsImF1dGhDaGVjayIsImhpZGVDb250ZW50IiwiZXZlbnRzIiwib24iLCJvZmYiLCJkYXRhIiwicHJvdGVjdGVkIiwicHVzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsInNldEN1c3RvbWVyIiwiY3VycmVudENhcnQiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJhZGRUb0NhcnQiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInZhcmlhbnREYXRhIiwiY2FydCIsInN1Y2Nlc3MiLCJjb21tZXJjZSIsImFkZCIsImVycm9yIiwiZ2V0Q2FydCIsInJldHJpZXZlIiwidXBkYXRlSXRlbUNhcnQiLCJpdGVtSWQiLCJvcHRpb24iLCJ1cGRhdGUiLCJyZW1vdmVGcm9tQ2FydCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwibGlzdCIsImFycmF5UHJvZHVjdCIsImxlbmd0aCIsImZvckVhY2giLCJwcm9kdWN0c09iaiIsInBhcnNlUCIsInBhcnNlUHJvZHVjdCIsImdldFByb2R1Y3RCeUlkIiwiaWQiLCJwcm9kdWN0IiwiaHR0cEluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJ1bmRlZmluZWQiLCJhbGVydCIsIlByb21pc2UiLCJyZWplY3QiLCJrZXlzIiwicmVxdWlyZSIsIkNvbW1lcmNlIiwiY29tbWVyY2VKc0tleSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcGVQdWJsaXNoYWJsZUtleSIsInN0cmlwZVNlY3JldEtleSIsImF3c0FjY2Vzc0tleUlkIiwiYXdzU2VjcmV0QWNjZXNzS2V5IiwiYXdzQnVja2V0IiwiUG9zdCIsImNvbmZpZyIsImhlYWRlcnMiLCJwb3N0IiwidXJsIiwiQ1VTVE9NRVJfUkVHSVNURVIiLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJxdHkiLCJ0eXBlIiwiUFJPQ0VTU19DQVJUIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwicGF5bG9hZCIsIkZBSUxfUFJPQ0VTU19DQVJUIiwicmVtb3ZlSXRlbSIsIlJFTU9WRV9JVEVNIiwiYWRkUXVhbnRpdHkiLCJBRERfUVVBTlRJVFkiLCJzdWJ0cmFjdFF1YW50aXR5IiwiU0VUX0NBUlQiLCJyZXF1ZXN0IiwiTE9HSU5fUkVRVUVTVCIsInVzZXIiLCJMT0dJTl9TVUNDRVNTIiwiZmFpbHVyZSIsIkxPR0lOX0ZBSUxVUkUiLCJ1c2VyTG9naW4iLCJ1c2VybmFtZSIsImxvZ2luIiwibG9jYXRpb24iLCJvcmlnaW4iLCJ0aGVuIiwidG9rZW4iLCJjYXRjaCIsImNoZWNrVXNlckxvZ2luIiwiZ2V0VG9rZW4iLCJjb29raWUiLCJnZXQiLCJDSEVDS19VU1JFUl9MT0dJTiIsInVzZXJMb2dvdXQiLCJsb2dvdXQiLCJDTEVBUl9DVVNUT01FUiIsInJlZ2lzdGVyUmVxdWVzdCIsIlJFR0lTVEVSX1JFUVVFU1QiLCJyZWdpc3RlclN1Y2Nlc3MiLCJSRUdJU1RFUl9TVUNDRVNTIiwicmVnaXN0ZXJGYWlsdXJlIiwiUkVHSVNURVJfRkFJTFVSRSIsInJlZ2lzdGVyQ3VzdG9tZXIiLCJpc0xvZ2dlZEluIiwiQ1VTVE9NRVJfUkVRVUVTVCIsImFib3V0IiwiQ1VTVE9NRVJfU1VDQ0VTUyIsIkNVU1RPTUVSX0ZBSUxVUkUiLCJBRERfVE9fQ0FSVCIsIlNVQl9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiQUREX1BST0RVQ1RTIiwiUFJPQ0VTU19DSEVDS09VVCIsIkdFTkVSQVRFX1RPS0VOX0NIRUNLT1VUIiwiR0VUX1NISVBQSU5HX09QVElPTiIsIlBST0RVQ1RfTElTVF9SRVFVRVNUIiwiUFJPRFVDVF9MSVNUX1NVQ0NFU1MiLCJQUk9EVUNUX0xJU1RfUkVRVUVTVF9GQUlMVVJFIiwiQ0FURUdPUllfTElTVF9SRVFVRVNUIiwiQ0FURUdPUllfTElTVF9TVUNDRVNTIiwiQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUiLCJVU1JFUl9MT0dJTiIsIlVTUkVSX0xPR09VVCIsImluaXRTdGF0ZSIsImNoZWNrb3V0Iiwic2hpcHBpbmdPcHRpb25zIiwibG9hZGluZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJjYXRlZ29yaWVzIiwiY3VzdG9tZXJzIiwicHJvZHVjdFJlZHVjZXIiLCJjYXRlZ29yeVJlZHVjZXIiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJzZWN1cml0eVJlZHVjZXIiLCJpbml0U3RhdGVSZWdpc3RlciIsInJlZ2lzdGVyUmVkdWNlciIsImluaXRTdGF0ZUN1c3RvbWVyIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJwcm9kdWN0T2JqIiwiYXNzZXRzTSIsImFzc2V0c01lZGlhIiwicG9zIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwibmV3UHJpY2UiLCJwcmljZSIsInJhdyIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidmFyaWFudF9ncm91cHMiLCJpbWFnZVVybCIsImFzc2V0cyIsImltYWdlSG92ZXJVcmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztR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Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdvVG9wID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBwcm9wcy5zY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgcHJvcHMuZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdXAtYXJyb3ctYWx0XCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRlcihmYWxzZSksIDEwMDApO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT4zIEFndWFzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIzIEFndWFzIC0gVGllbmRhIFBsYXlhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2xpdmFuaS1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTItMTU4OTIxNjA5MzExMy5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHtsb2FkZXIgPyAnTG9hZGluZycgOiBjaGlsZHJlbn1cclxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlR3VhcmQoeyBjaGlsZHJlbiB9KXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgY3VzdG9tZXJSZWR1Y2VyID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLmN1c3RvbWVyUmVkdWNlcikgXHJcbiAgICBjb25zdCB7IGN1c3RvbWVyIH0gPSBjdXN0b21lclJlZHVjZXJcclxuICAgIGNvbnN0IFthdXRob3JpemVkLCBzZXRBdXRob3JpemVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY2hpbGRyZW5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gb24gaW5pdGlhbCBsb2FkIC0gcnVuIGF1dGggY2hlY2sgXHJcbiAgICAgICAgYXV0aENoZWNrKHByb3BzKTtcclxuICAgICAgICAvLyBvbiByb3V0ZSBjaGFuZ2Ugc3RhcnQgLSBoaWRlIHBhZ2UgY29udGVudCBieSBzZXR0aW5nIGF1dGhvcml6ZWQgdG8gZmFsc2UgIFxyXG4gICAgICAgIGNvbnN0IGhpZGVDb250ZW50ID0gKCkgPT4gc2V0QXV0aG9yaXplZChmYWxzZSk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhpZGVDb250ZW50KTtcclxuXHJcbiAgICAgICAgLy8gb24gcm91dGUgY2hhbmdlIGNvbXBsZXRlIC0gcnVuIGF1dGggY2hlY2sgXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGF1dGhDaGVjaylcclxuXHJcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgZnJvbSBldmVudHMgaW4gdXNlRWZmZWN0IHJldHVybiBmdW5jdGlvblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGlkZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGF1dGhDaGVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0aENoZWNrKGRhdGEpIHtcclxuICAgICAgICBpZihkYXRhLnByb3RlY3RlZCAmJiAhY3VzdG9tZXIpe1xyXG4gICAgICAgICAgICBzZXRBdXRob3JpemVkKGZhbHNlKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRBdXRob3JpemVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGF1dGhvcml6ZWQgJiYgY2hpbGRyZW4pO1xyXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBhZGRQcm9kdWN0cywgY3VycmVudENhcnQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcclxuaW1wb3J0IHsgY2hlY2tVc2VyTG9naW4sIHNldEN1c3RvbWVyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zZWN1cml0eUFjdGlvbic7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCBSb3V0ZUd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdXJpdHkvUm91dGVHdWFyZCc7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHNldEN1c3RvbWVyKCkpXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goY3VycmVudENhcnQoKSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVHdWFyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlR3VhcmQ+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgXHJcbn07XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoTXlBcHApIiwiaW1wb3J0IGNvbW1lcmNlIGZyb20gXCIuLi9jb25maWcvY29tbWVyY2VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0SWQsIHF1YW50aXR5LCB2YXJpYW50RGF0YSkgPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKHZhcmlhbnREYXRhKXtcclxuICAgICAgICAgICAgbGV0IHtjYXJ0LCBzdWNjZXNzIH0gPSBhd2FpdCBjb21tZXJjZS5jYXJ0LmFkZChwcm9kdWN0SWQscXVhbnRpdHksdmFyaWFudERhdGEpXHJcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY2FydFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3Jfbm9fYWRkX2NhcnRfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCB7Y2FydCwgc3VjY2VzcyB9ID0gYXdhaXQgY29tbWVyY2UuY2FydC5hZGQocHJvZHVjdElkLHF1YW50aXR5KVxyXG4gICAgICAgICAgICBpZihzdWNjZXNzKXtcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNhcnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcImVycm9yX25vX2FkZF9jYXJ0X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FydCA9IGFzeW5jICgpID0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgY2FydCA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmV0cmlldmUoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNhcnQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY2FydFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbUNhcnQgPSBhc3luYyAoaXRlbUlkLCBvcHRpb24pID0+e1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGNhcnQsIHN1Y2Nlc3MgfSA9IGF3YWl0IGNvbW1lcmNlLmNhcnQudXBkYXRlKGl0ZW1JZCwgb3B0aW9uKVxyXG5cclxuICAgICAgICBpZihzdWNjZXNzKXtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGNhcnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gYXN5bmMgKGl0ZW1JZCkgPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB7IGNhcnQsIHN1Y2Nlc3MgfSA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmVtb3ZlKGl0ZW1JZCkgXHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydClcclxuICAgICAgICBpZihzdWNjZXNzKXtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGNhcnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3Jfbm90X2NhcnRfaXRlbV9yZW1vdmVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIGVycm9yOiBcImVycm9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCB7IHBhcnNlUHJvZHVjdCB9IGZyb20gXCIuLi8uLi91dGlscy9wYXJzZVByb2R1Y3RcIjtcclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gXCIuLi9jb25maWcvY29tbWVyY2VcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT57XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KClcclxuICAgICAgICBsZXQgYXJyYXlQcm9kdWN0ID0gW107XHJcbiAgICAgICAgaWYocHJvZHVjdHMuZGF0YS5sZW5ndGggPiAwKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvZHVjdHM/LmRhdGE/LmZvckVhY2gocHJvZHVjdHNPYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlUCA9IHBhcnNlUHJvZHVjdChwcm9kdWN0c09iailcclxuICAgICAgICAgICAgICAgIGFycmF5UHJvZHVjdC5wdXNoKHBhcnNlUCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBhcnJheVByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0QnlJZCA9IGFzeW5jIChpZCkgPT57XHJcblxyXG4gICAgbGV0IHByb2R1Y3QgPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5yZXRyaWV2ZShpZClcclxuICAgIGxldCBwYXJzZVAgPSBwYXJzZVByb2R1Y3QocHJvZHVjdClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogcGFyc2VQXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGVycm9yOiBcImVycm9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGh0dHBJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHBzOi8vYXBpLmNoZWMuaW9cIlxyXG59KVxyXG5cclxuaHR0cEluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UobnVsbCwgZXJyb3IgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSlcclxuICAgIGlmKGVycm9yLnJlc3BvbnNlID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFsZXJ0KFwiSG9sYSBlc3RhbW9zIHRlbmllbmRvIHByb2JsZW1hcyBkZSBjb25leGnDs24gY29uIGVsIHNlcnZpZG9yIGludGVudGUgbcOhcyB0YXJkZS5cIilcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7ICAgIFxyXG4gICAgfSAgICBcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHR0cEluc3RhbmNlOyIsImltcG9ydCBDb21tZXJjZSBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIjtcclxuY29uc3Qga2V5cyA9IHJlcXVpcmUoXCIuLi9jb25maWcva2V5c1wiKTtcclxuY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2Uoa2V5cy5jb21tZXJjZUpzS2V5KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lcmNlIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzdHJpcGVQdWJsaXNoYWJsZUtleTogJ3N0cmlwZVB1Ymxpc2hhYmxlS2V5JyxcclxuICAgIHN0cmlwZVNlY3JldEtleTogJ3N0cmlwZVNlY3JldEtleScsXHJcbiAgICBhd3NBY2Nlc3NLZXlJZDogJ2F3c0FjY2Vzc0tleUlkJyxcclxuICAgIGF3c1NlY3JldEFjY2Vzc0tleTogJ2F3c1NlY3JldEFjY2Vzc0tleScsXHJcbiAgICBhd3NCdWNrZXQ6ICdhd3NCdWNrZXQnLFxyXG4gICAgY29tbWVyY2VKc0tleTogJ3BrX3Rlc3RfMzMxMTA4MzZkYzJjNWM3YjI2NWE2ZDcyY2UxZmYyNGRiMzQyMDhhMTI4ZGNjJ1xyXG59OyIsImltcG9ydCBodHRwSW5zdGFuY2UgZnJvbSBcIi4uL2NvbmZpZy9hcGlcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHByb3BzKXtcclxuICAgIGNvbnN0IGtleXMgPSByZXF1aXJlKCcuLi9jb25maWcva2V5cycpXHJcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxyXG4gICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAgICAgICBcIlgtQXV0aG9yaXphdGlvblwiOiBrZXlzLmNvbW1lcmNlSnNLZXksXHJcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaHR0cEluc3RhbmNlLnBvc3QocHJvcHMudXJsLCBkYXRhLCBjb25maWcpXHJcbn0iLCIvL2N1c3RvbWVyXHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9SRUdJU1RFUiA9IFwiL3YxL2N1c3RvbWVyc1wiIiwiaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5SWQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvYXBpL3Byb2R1Y3RzJztcclxuaW1wb3J0IHsgYWRkVG9DYXJ0LCBnZXRDYXJ0LCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlSXRlbUNhcnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvYXBpL2NhcnQnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX1RPX0NBUlQsXHJcbiAgICBSRU1PVkVfSVRFTSxcclxuICAgIFNVQl9RVUFOVElUWSxcclxuICAgIEFERF9RVUFOVElUWSxcclxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcclxuICAgIFJFU0VUX0NBUlQsXHJcbiAgICBBRERfUFJPRFVDVFMsXHJcbiAgICBQUk9DRVNTX0NBUlQsXHJcbiAgICBGQUlMX1BST0NFU1NfQ0FSVCxcclxuICAgIFNFVF9DQVJUXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2NhcnRDb25zdGFudCdcclxuXHJcblxyXG4vL2FkZCBwcm9kdWN0c1xyXG4vLyBleHBvcnQgY29uc3QgYWRkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9QUk9EVUNUU1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyAvL2FkZCBjYXJ0IGFjdGlvblxyXG4vLyBleHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKGlkKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9UT19DQVJULFxyXG4vLyAgICAgICAgIGlkXHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIC8vcmVtb3ZlIGl0ZW0gYWN0aW9uXHJcbi8vIGV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6IFJFTU9WRV9JVEVNLFxyXG4vLyAgICAgICAgIGlkXHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIC8vc3VidHJhY3QgcXQgYWN0aW9uXHJcbi8vIGV4cG9ydCBjb25zdCBzdWJ0cmFjdFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6IFNVQl9RVUFOVElUWSxcclxuLy8gICAgICAgICBpZFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyAvL2FkZCBxdCBhY3Rpb25cclxuLy8gZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9RVUFOVElUWSxcclxuLy8gICAgICAgICBpZFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gLy9hZGQgcXQgYWN0aW9uIHdpdGggcXVhbnRpdHkgbnVtYmVyXHJcbi8vIC8vIGV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSkgPT4ge1xyXG4vLyAvLyAgICAgcmV0dXJuIHtcclxuLy8gLy8gICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXHJcbi8vIC8vICAgICAgICAgaWQsXHJcbi8vIC8vICAgICAgICAgcXR5XHJcbi8vIC8vICAgICB9XHJcbi8vIC8vIH07XHJcblxyXG4vLyAvLyBSZXNldCBjYXJ0IGFmdGVyIGZvcm0gc3VibWl0XHJcbi8vIGV4cG9ydCBjb25zdCByZXNldENhcnQgPSAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6IFJFU0VUX0NBUlRcclxuLy8gICAgIH1cclxuLy8gfTtcclxuXHJcblxyXG4vLyAvL2FkZCBxdCBhY3Rpb24gd2l0aCBxdWFudGl0eSBudW1iZXJcclxuLy8gZXhwb3J0IGNvbnN0IGFkZFRvQ2FydFdpdGhRdWFudGl0eU51bWJlciA9IChpdGVtLCBxdHkpID0+e1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGFkZFF1YW50aXR5V2l0aE51bWJlclxyXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHlXaXRoTnVtYmVyID0gKGlkLCBxdHksIHZhcmlhbnREYXRhKSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBQUk9DRVNTX0NBUlQgfSlcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhZGRUb0NhcnQoaWQsIHF0eSwgdmFyaWFudERhdGEpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICAgICAgdHlwZTogRkFJTF9QUk9DRVNTX0NBUlQgLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdlcnJvcidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbi8vcmVtb3ZlIGl0ZW1cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuXHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogUFJPQ0VTU19DQVJUfSlcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlbW92ZUZyb21DYXJ0KGlkKSBcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0lURU0sXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufTtcclxuXHJcbi8vYWRkIHF0IGFjdGlvblxyXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQsIHF0eSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9uID17XHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgc3VjY2VzcyB9ID0gYXdhaXQgdXBkYXRlSXRlbUNhcnQoaWQsIG9wdGlvbilcclxuICAgICAgICBpZihzdWNjZXNzKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuLy9zdWJ0cmFjdCBxdCBhY3Rpb25cclxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQsIHF0eSkgPT4geyAgICBcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogUFJPQ0VTU19DQVJUfSlcclxuICAgICAgICBsZXQgb3B0aW9uID17XHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgc3VjY2VzcyB9ID0gYXdhaXQgdXBkYXRlSXRlbUNhcnQoaWQsIG9wdGlvbilcclxuICAgICAgICBpZihzdWNjZXNzKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyZW50Q2FydCA9ICgpID0+eyAgICBcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBQUk9DRVNTX0NBUlR9KVxyXG4gICAgICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBnZXRDYXJ0KCkgICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBTRVRfQ0FSVCwgcGF5bG9hZDogY2FydC5kYXRhfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7IENMRUFSX0NVU1RPTUVSLCBDVVNUT01FUl9GQUlMVVJFLCBDVVNUT01FUl9SRVFVRVNULCBDVVNUT01FUl9TVUNDRVNTLCBMT0dJTl9GQUlMVVJFLCBMT0dJTl9SRVFVRVNULCBMT0dJTl9TVUNDRVNTLCBSRUdJU1RFUl9GQUlMVVJFLCBSRUdJU1RFUl9SRVFVRVNULCBSRUdJU1RFUl9TVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnQnXHJcbmltcG9ydCB7IFVTUkVSX0xPR0lOLCBDSEVDS19VU1JFUl9MT0dJTiwgVVNSRVJfTE9HT1VUIH0gZnJvbSAnLi4vY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnQnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vc2VydmVyL3JlcXVlc3QvcG9zdCc7XHJcbmltcG9ydCB7IENVU1RPTUVSX1JFR0lTVEVSIH0gZnJvbSAnLi4vLi4vc2VydmVyL3JvdXRlcy9jdXN0b21lcic7XHJcbmltcG9ydCBjb21tZXJjZSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnL2NvbW1lcmNlJztcclxuXHJcbi8vQUNUSU9OUyBMT0dJTlxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR0lOX1JFUVVFU1RcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSAodXNlcikgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICBwYXlsb2FkOiB1c2VyXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBmYWlsdXJlID0gKGVycm9yKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dJTl9GQUlMVVJFLFxyXG4gICAgICAgIHBheWxvYWQ6IGVycm9yXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBVU1JFUl9MT0dJTlxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZXF1ZXN0KCkpXHJcblxyXG4gICAgICAgIC8vbWFrZSBodHRwIHJlcXVlc3RcclxuICAgICAgICBjb21tZXJjZS5jdXN0b21lci5sb2dpbih1c2VybmFtZSwgYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vbG9naW4/dG9rZW49e3Rva2VufWApXHJcbiAgICAgICAgLnRoZW4odG9rZW4gPT4geyAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goc3VjY2Vzcyh1c2VybmFtZSkpOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmYWlsdXJlKGVycm9yKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0NIRUNLX1VTUkVSX0xPR0lOXHJcbmV4cG9ydCBjb25zdCBjaGVja1VzZXJMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX3Nob3BfdG9rZW5fJylcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQ0hFQ0tfVVNSRVJfTE9HSU5cclxuICAgIH1cclxufVxyXG5cclxuLy8gVVNSRVJfTE9HT1VUXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PntcclxuICAgIGNvbW1lcmNlLmN1c3RvbWVyLmxvZ291dCgpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDTEVBUl9DVVNUT01FUiB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9hY3Rpb24gcmVnaXN0ZXJcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUmVxdWVzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBSRUdJU1RFUl9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyU3VjY2VzcyA9ICh1c2VyKSA9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVHSVNURVJfU1VDQ0VTUyxcclxuICAgICAgICBwYXlsb2FkOiB1c2VyXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRmFpbHVyZSA9IChlcnJvcikgPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX0ZBSUxVUkUsXHJcbiAgICAgICAgcGF5bG9hZDogZXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyQ3VzdG9tZXIgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJlcXVlc3QoKSlcclxuICAgICAgICBQb3N0KHt1cmw6IENVU1RPTUVSX1JFR0lTVEVSLCBkYXRhOiBkYXRhfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWdpc3RlclN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJGYWlsdXJlKGVycm9yKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2N1c3RvbWVyXHJcbmV4cG9ydCBjb25zdCBzZXRDdXN0b21lciA9ICgpID0+eyAgICBcclxuXHJcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gY29tbWVyY2UuY3VzdG9tZXIuaXNMb2dnZWRJbigpO1xyXG4gICAgaWYgKCFpc0xvZ2dlZEluIHx8IGlzTG9nZ2VkSW4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQ0xFQVJfQ1VTVE9NRVIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogQ1VTVE9NRVJfUkVRVUVTVH0pXHJcbiAgICAgICAgY29tbWVyY2UuY3VzdG9tZXIuYWJvdXQoKVxyXG4gICAgICAgIC50aGVuKChjdXN0b21lcikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQ1VTVE9NRVJfU1VDQ0VTUywgcGF5bG9hZDogY3VzdG9tZXJ9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBDVVNUT01FUl9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsIi8vVHlwZXMgc2hvdWxkIGJlIGluIGNvbnN0IHRvIGF2b2lkIHR5cG9zIGFuZCBkdXBsaWNhdGlvbiBzaW5jZSBpdCdzIGEgc3RyaW5nIGFuZCBjb3VsZCBiZSBlYXNpbHkgbWlzcyBzcGVsbGVkXHJcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9ICdBRERfVE9fQ0FSVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTSA9ICdSRU1PVkVfSVRFTSc7XHJcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWSA9ICdBRERfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1NISVBQSU5HID0gJ0FERF9TSElQUElORyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcclxuZXhwb3J0IGNvbnN0IE9SREVSX0ZPUk0gPSAnT1JERVJfRk9STSc7XHJcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DSEFSR0UgPSAnQ0hFQ0tPVVRfQ0hBUkdFJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVFMgPSAnQUREX1BST0RVQ1RTJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NfQ0FSVCA9ICdQUk9DRVNTX0NBUlQnXHJcbmV4cG9ydCBjb25zdCBGQUlMX1BST0NFU1NfQ0FSVCA9ICdGQUlMX1BST0NFU1NfQ0FSVCdcclxuZXhwb3J0IGNvbnN0IFNFVF9DQVJUPSAgJ1NFVF9DQVJUJ1xyXG4iLCJleHBvcnQgY29uc3QgUFJPQ0VTU19DSEVDS09VVCA9ICdQUk9DRVNTX0NIRUNLT1VUJztcclxuZXhwb3J0IGNvbnN0IEdFTkVSQVRFX1RPS0VOX0NIRUNLT1VUID0gJ0dFTkVSQVRFX1RPS0VOX0NIRUNLT1VUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9TSElQUElOR19PUFRJT04gPSAnR0VUX1NISVBQSU5HX09QVElPTiciLCJcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfTElTVF9SRVFVRVNUID0gJ1BST0RVQ1RfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfTElTVF9TVUNDRVNTID0gJ1BST0RVQ1RfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfTElTVF9SRVFVRVNUX0ZBSUxVUkUgPSAnUFJPRFVDVF9MSVNUX1JFUVVFU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0FURUdPUllfTElTVF9SRVFVRVNUID0gJ0NBVEVHT1JZX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUX1NVQ0NFU1MgPSAnQ0FURUdPUllfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0xJU1RfUkVRVUVTVF9GQUlMVVJFID0gJ0NBVEVHT1JZX0xJU1RfUkVRVUVTVF9GQUlMVVJFJzsiLCJleHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdVU0VSU19MT0dJTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnVVNFUlNfTE9HSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMVVJFID0gJ1VTRVJTX0xPR0lOX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9SRVFVRVNUID0gJ1VTRVJTX1JFR0lTVEVSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdVU0VSU19SRUdJU1RFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUxVUkUgPSAnVVNFUlNfUkVHSVNURVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfUkVRVUVTVCA9ICdDVVNUT01FUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1NVQ0NFU1MgPSAnQ1VTVE9NRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9GQUlMVVJFID0gJ0NVU1RPTUVSX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfQ1VTVE9NRVIgPSAnQ0xFQVJfQ1VTVE9NRVInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTUkVSX0xPR0lOID0gJ1VTUkVSX0xPR0lOJztcclxuZXhwb3J0IGNvbnN0IENIRUNLX1VTUkVSX0xPR0lOID0gJ0NIRUNLX1VTUkVSX0xPR0lOJztcclxuZXhwb3J0IGNvbnN0IFVTUkVSX0xPR09VVCA9ICdVU1JFUl9MT0dPVVQnOyIsImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfVE9fQ0FSVCxcclxuICAgIFJFTU9WRV9JVEVNLFxyXG4gICAgU1VCX1FVQU5USVRZLFxyXG4gICAgQUREX1FVQU5USVRZLCBcclxuICAgIEFERF9TSElQUElORyxcclxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcclxuICAgIFJFU0VUX0NBUlQsXHJcbiAgICBBRERfUFJPRFVDVFMsXHJcbiAgICBQUk9DRVNTX0NBUlQsXHJcbiAgICBGQUlMX1BST0NFU1NfQ0FSVCxcclxuICAgIFNFVF9DQVJUXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2NhcnRDb25zdGFudCc7XHJcbmltcG9ydCB7IEdFTkVSQVRFX1RPS0VOX0NIRUNLT1VULCBHRVRfU0hJUFBJTkdfT1BUSU9OLCBQUk9DRVNTX0NIRUNLT1VUIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NoZWNrb3V0Q29uc3RhbnQnO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgY2FydDoge30sXHJcbiAgICBjaGVja291dDogbnVsbCxcclxuICAgIHNoaXBwaW5nT3B0aW9uczogW10sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGFkZGVkSXRlbXM6W10sXHJcbiAgICB0b3RhbDogMCxcclxuICAgIHNoaXBwaW5nOiAwLFxyXG4gICAgZXJyb3I6ICcnXHJcbn07XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFBST0NFU1NfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFVF9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkFJTF9QUk9DRVNTX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9JVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgY2FzZSBBRERfUVVBTlRJVFk6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU1VCX1FVQU5USVRZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICBjYXNlIFBST0NFU1NfQ0hFQ0tPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICBjYXNlIEdFTkVSQVRFX1RPS0VOX0NIRUNLT1VUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tvdXQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEdFVF9TSElQUElOR19PUFRJT046XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ09wdGlvbnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IEFERF9QUk9EVUNUUyl7XHJcbiAgICAvLyAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgIC8vICAgICAvLyBkYk9yZGVyUmVmLmdldCgpXHJcbiAgICAvLyAgICAgLy8gLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgcmVzLmZvckVhY2goZG9jID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGRvYy5kYXRhKCk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcclxuICAgIC8vICAgICAvLyAgICAgICAgIHByb2R1Y3RzQXJyYXkucHVzaChwcm9kdWN0c09iailcclxuICAgIC8vICAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHByb2R1Y3RzOiBkYXRhXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICBcclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ0FSVCl7XHJcbiAgICAvLyAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAvLyAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgLy8gICAgIGxldCBleGlzdGVkX2l0ZW09IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgLy8gICAgIGlmKGV4aXN0ZWRfaXRlbSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgLy8gICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgLy8gICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSKXtcclxuICAgIC8vICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgIC8vICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAvLyAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAvLyAgICAgaWYoZXhpc3RlZF9pdGVtKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcclxuICAgIC8vICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgIC8vICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgIC8vICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU0pe1xyXG4gICAgLy8gICAgIGxldCBpdGVtVG9SZW1vdmU9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgLy8gICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAvLyAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAvLyAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZKXtcclxuICAgIC8vICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgLy8gICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxyXG4gICAgLy8gICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gU1VCX1FVQU5USVRZKXsgIFxyXG4gICAgLy8gICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxyXG4gICAgLy8gICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgLy8gICAgIGlmKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSl7XHJcbiAgICAvLyAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT5pdGVtLmlkICE9PSBhY3Rpb24uaWQpXHJcbiAgICAvLyAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgIC8vICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcclxuICAgIC8vICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IEFERF9TSElQUElORyl7XHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpe1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgIC8vICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAvLyAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICByZXR1cm4gc3RhdGVcclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFJlZHVjZXIiLCJcclxuaW1wb3J0IHtcclxuICAgIENBVEVHT1JZX0xJU1RfUkVRVUVTVCxcclxuICAgIENBVEVHT1JZX0xJU1RfUkVRVUVTVF9GQUlMVVJFLCBDQVRFR09SWV9MSVNUX1NVQ0NFU1MsXHJcbiAgICBQUk9EVUNUX0xJU1RfUkVRVUVTVCxcclxuICAgIFBST0RVQ1RfTElTVF9SRVFVRVNUX0ZBSUxVUkUsXHJcbiAgICBQUk9EVUNUX0xJU1RfU1VDQ0VTU1xyXG59IGZyb20gXCIuLi9jb25zdGFudHMvY29tbWVyY2VDb25zdGFudFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgY3VzdG9tZXJzOiBbXSxcclxuICAgIGVycm9yOiAnJyxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBQUk9EVUNUX0xJU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBQUk9EVUNUX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUFJPRFVDVF9MSVNUX1JFUVVFU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIENBVEVHT1JZX0xJU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDQVRFR09SWV9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7c2VjdXJpdHlSZWR1Y2VyLCByZWdpc3RlclJlZHVjZXIsIGN1c3RvbWVyUmVkdWNlcn0gZnJvbSAnLi9zZWN1cml0eVJlZHVjZXInXHJcbmltcG9ydCBjYXJ0UmVkdWNlciBmcm9tICcuL2NhcnRSZWR1Y2VyJ1xyXG5pbXBvcnQge2NhdGVnb3J5UmVkdWNlciwgcHJvZHVjdFJlZHVjZXJ9IGZyb20gXCIuL2NvbW1lcmNlUmVkdWNlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBzZWN1cml0eVJlZHVjZXIsXHJcbiAgICBjYXJ0UmVkdWNlcixcclxuICAgIGN1c3RvbWVyUmVkdWNlcixcclxuICAgIHByb2R1Y3RSZWR1Y2VyLFxyXG4gICAgY2F0ZWdvcnlSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzIiwiaW1wb3J0IHsgQ0xFQVJfQ1VTVE9NRVIsIENVU1RPTUVSX0ZBSUxVUkUsIENVU1RPTUVSX1JFUVVFU1QsIENVU1RPTUVSX1NVQ0NFU1MsIExPR0lOX0ZBSUxVUkUsIExPR0lOX1JFUVVFU1QsIExPR0lOX1NVQ0NFU1MsIFJFR0lTVEVSX0ZBSUxVUkUsIFJFR0lTVEVSX1JFUVVFU1QsIFJFR0lTVEVSX1NVQ0NFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLCAgICBcclxuICAgIGxvZ2luOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBlcnJvcjogJycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdXJpdHlSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL3JlZGN1ZXJzIHJlZ2lzdGVyIGN1c3RvbWVyXHJcbmNvbnN0IGluaXRTdGF0ZVJlZ2lzdGVyID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgZXJyb3I6ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZVJlZ2lzdGVyLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFJFR0lTVEVSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFR0lTVEVSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTdGF0ZUN1c3RvbWVyID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBjdXN0b21lcjogbnVsbCxcclxuICAgIGVycm9yOiAnJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGVDdXN0b21lciwgYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBDVVNUT01FUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ1VTVE9NRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ1VTVE9NRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDTEVBUl9DVVNUT01FUjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9ICAgXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuaW1wb3J0IHJvb3RSZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yb290UmVkdWNlclwiXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImV4cG9ydCBjb25zdCBwYXJzZVByb2R1Y3QgPSBwcm9kdWN0T2JqID0+e1xyXG4gICAgY29uc3QgYXNzZXRzTSA9IChhc3NldHNNZWRpYSwgcG9zKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFzc2V0c01lZGlhW3Bvc10udXJsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nNi0xNTg4NzA1MjM2NTIwLmpwZ1wiICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcHJvZHVjdE9iai5pZCxcclxuICAgICAgICB0aXRsZTogcHJvZHVjdE9iai5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0T2JqLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBuZXdQcmljZTogcHJvZHVjdE9iai5wcmljZS5yYXcsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiBwcm9kdWN0T2JqLnByaWNlLnJhdyxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBwcm9kdWN0T2JqLm5hbWUsXHJcbiAgICAgICAgY2F0ZWdvcmllczogcHJvZHVjdE9iai5jYXRlZ29yaWVzLFxyXG4gICAgICAgIHZhcmlhbnRfZ3JvdXBzOiBwcm9kdWN0T2JqLnZhcmlhbnRfZ3JvdXBzLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBhc3NldHNNKHByb2R1Y3RPYmouYXNzZXRzLCAwKSxcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBhc3NldHNNKHByb2R1Y3RPYmouYXNzZXRzLCAxKSxcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=