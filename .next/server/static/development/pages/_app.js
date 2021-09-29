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
/* harmony import */ var _store_actions_commerceAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions/commerceAction */ "./store/actions/commerceAction.js");
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
/*! exports provided: addQuantityWithNumber, removeItem, addQuantity, subtractQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony import */ var _server_api_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/api/products */ "./server/api/products.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/cartConstant */ "./store/constants/cartConstant.js");


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

const addQuantityWithNumber = (id, qty) => {
  try {
    return async (dispatch, getState) => {
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_CART"]
      });
      const {
        data
      } = await Object(_server_api_products__WEBPACK_IMPORTED_MODULE_0__["getProductById"])(id);
      let objCart = {
        id: data.id,
        title: data.title,
        quantity: qty,
        newPrice: data.newPrice,
        imageUrl: data.imageUrl
      };
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__["ADD_QUANTITY_WITH_NUMBER"],
        payload: {
          product: objCart
        }
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('3aguas_commerce_items', JSON.stringify(getState().cartReducer.addedItems));
    };
  } catch (error) {
    return dispatch => {
      dispatch({
        type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__["FAIL_PROCESS_CART"],
        error: 'error'
      });
    };
  }
}; //remove item

const removeItem = id => {
  return (dispatch, getState) => {
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ITEM"],
      id
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('3aguas_commerce_items', JSON.stringify(getState().cartReducer.addedItems));
  };
}; //add qt action

const addQuantity = id => {
  return (dispatch, getState) => {
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__["ADD_QUANTITY"],
      id
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('3aguas_commerce_items', JSON.stringify(getState().cartReducer.addedItems));
  };
}; //subtract qt action

const subtractQuantity = id => {
  return (dispatch, getState) => {
    dispatch({
      type: _constants_cartConstant__WEBPACK_IMPORTED_MODULE_2__["SUB_QUANTITY"],
      id
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('3aguas_commerce_items', JSON.stringify(getState().cartReducer.addedItems));
  };
};

/***/ }),

/***/ "./store/actions/commerceAction.js":
/*!*****************************************!*\
  !*** ./store/actions/commerceAction.js ***!
  \*****************************************/
/*! exports provided: request, failure, getProductList, successProducts, successCategory, getCategoryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductList", function() { return getProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successProducts", function() { return successProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCategory", function() { return successCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryList", function() { return getCategoryList; });
/* harmony import */ var _server_config_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/config/commerce */ "./server/config/commerce.js");
/* harmony import */ var _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/commerceConstant */ "./store/constants/commerceConstant.js");


const request = typeRequest => {
  return {
    type: typeRequest
  };
};
const failure = (typeRequest, error) => {
  return {
    type: typeRequest,
    payload: error
  };
};
const getProductList = () => {
  return dispatch => {
    dispatch(request(_constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_LIST_REQUEST"])); //make http request

    _server_config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].products.list().then(productResult => {
      dispatch(successProducts(productResult));
    }).catch(error => {
      dispatch(failure(_constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_LIST_REQUEST_FAILURE"], error));
    });
  };
};
const successProducts = productsResult => {
  var _productsResult$data;

  let arrayProduct = [];
  productsResult === null || productsResult === void 0 ? void 0 : (_productsResult$data = productsResult.data) === null || _productsResult$data === void 0 ? void 0 : _productsResult$data.forEach(productsObj => {
    let parseProduct = {};
    parseProduct.id = productsObj.id;
    parseProduct.description = productsObj.description;
    parseProduct.discount = false;
    parseProduct.discountOff = 0;
    parseProduct.newPrice = productsObj.price.raw;
    parseProduct.newProduct = false;
    parseProduct.offer = false;
    parseProduct.oldPrice = productsObj.price.raw;
    parseProduct.onSale = false;
    parseProduct.title = productsObj.name;
    parseProduct.categories = productsObj.categories;
    parseProduct.variant_groups = productsObj.variant_groups;
    parseProduct.type = "Women Clothes";

    if (productsObj.assets.length === 0) {
      // Empty gallery images
      parseProduct.imageUrl = "https://demaxin.s3.ap-south-1.amazonaws.com/img6-1588705236520.jpg";
      parseProduct.imageHoverUrl = "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover6-1588705244164.jpg";
    } else {
      parseProduct.imageUrl = productsObj.assets[0].url;
      if (productsObj.assets.length > 1) parseProduct.imageHoverUrl = productsObj.assets[1].url;
    }

    arrayProduct.push(parseProduct);
  });
  return {
    type: _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_LIST_SUCCESS"],
    payload: arrayProduct
  };
};
const successCategory = categoryResult => {
  let arrayCategory = [];
  arrayCategory = categoryResult === null || categoryResult === void 0 ? void 0 : categoryResult.data;
  return {
    type: _constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_LIST_SUCCESS"],
    payload: arrayCategory
  };
};
const getCategoryList = () => {
  return dispatch => {
    dispatch(request(_constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_LIST_REQUEST"])); //make http request

    _server_config_commerce__WEBPACK_IMPORTED_MODULE_0__["default"].categories.list().then(categoryResult => {
      dispatch(successCategory(categoryResult));
    }).catch(error => {
      dispatch(failure(_constants_commerceConstant__WEBPACK_IMPORTED_MODULE_1__["CATEGORY_LIST_REQUEST_FAILURE"], error));
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
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_PRODUCTS, PROCESS_CART, FAIL_PROCESS_CART */
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const cartItemsFromStorage = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('3aguas_commerce_items') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('3aguas_commerce_items')) : [];
let newTotal = cartItemsFromStorage.length ? cartItemsFromStorage.reduce((acc, obj) => acc + obj.newPrice * obj.quantity, 0) : 0;
const initState = {
  loading: false,
  products: [],
  addedItems: cartItemsFromStorage,
  total: newTotal,
  shipping: 0,
  error: ''
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["PROCESS_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["FAIL_PROCESS_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["ADD_QUANTITY_WITH_NUMBER"]:
      //check if exist
      const allItems = [...state.addedItems];
      const itemSelected = action.payload.product;
      let existed_item = state.addedItems.findIndex(item => item.id === itemSelected.id);

      if (existed_item >= 0) {
        let obj = Object.assign({}, allItems[existed_item]);
        obj.quantity = allItems[existed_item].quantity + itemSelected.quantity;
        allItems[existed_item] = obj;
        let newTotal = allItems.reduce((acc, obj) => acc + obj.newPrice * obj.quantity, 0);
        return _objectSpread(_objectSpread({}, state), {}, {
          addedItems: allItems,
          total: newTotal,
          loading: false
        });
      } else {
        let allItems = [...state.addedItems, itemSelected];
        let newTotal = allItems.reduce((acc, obj) => acc + obj.newPrice * obj.quantity, 0);
        return _objectSpread(_objectSpread({}, state), {}, {
          addedItems: allItems,
          total: newTotal,
          loading: false
        });
      }

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ITEM"]:
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

      let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["ADD_QUANTITY"]:
      let addedItem = state.addedItems.find(item => item.id === action.id);
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });

    case _constants_cartConstant__WEBPACK_IMPORTED_MODULE_1__["SUB_QUANTITY"]:
      let addedItemS = state.addedItems.find(item => item.id === action.id); //if the qt == 0 then it should be removed

      if (addedItemS.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.id !== action.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          addedItems: new_items,
          total: state.total - addedItemS.newPrice
        });
      } else {
        addedItemS.quantity -= 1;
        return _objectSpread(_objectSpread({}, state), {}, {
          total: state.total - addedItemS.newPrice
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3VyaXR5L1JvdXRlR3VhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBpL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvYXBpLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9rZXlzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yZXF1ZXN0L3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9jdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvY29tbWVyY2VBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZWN1cml0eUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25zdGFudHMvY2FydENvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbnN0YW50cy9jb21tZXJjZUNvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbnN0YW50cy9zZWN1cml0eUNvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2NvbW1lcmNlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zZWN1cml0eVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGFyc2VQcm9kdWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGVjL2NvbW1lcmNlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJHb1RvcCIsInByb3BzIiwidGhlUG9zaXRpb24iLCJzZXRUaGVQb3NpdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJSb3V0ZUd1YXJkIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VzdG9tZXJSZWR1Y2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1c3RvbWVyIiwiYXV0aG9yaXplZCIsInNldEF1dGhvcml6ZWQiLCJhdXRoQ2hlY2siLCJoaWRlQ29udGVudCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZGF0YSIsInByb3RlY3RlZCIsInB1c2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiZGlzcGF0Y2giLCJzZXRDdXN0b21lciIsIm1ha2VTdG9yZSIsIndpdGhSZWR1eCIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJjb21tZXJjZSIsImxpc3QiLCJhcnJheVByb2R1Y3QiLCJsZW5ndGgiLCJmb3JFYWNoIiwicHJvZHVjdHNPYmoiLCJwYXJzZVAiLCJwYXJzZVByb2R1Y3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJnZXRQcm9kdWN0QnlJZCIsImlkIiwicHJvZHVjdCIsInJldHJpZXZlIiwiaHR0cEluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiYWxlcnQiLCJQcm9taXNlIiwicmVqZWN0Iiwia2V5cyIsInJlcXVpcmUiLCJDb21tZXJjZSIsImNvbW1lcmNlSnNLZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RyaXBlUHVibGlzaGFibGVLZXkiLCJzdHJpcGVTZWNyZXRLZXkiLCJhd3NBY2Nlc3NLZXlJZCIsImF3c1NlY3JldEFjY2Vzc0tleSIsImF3c0J1Y2tldCIsIlBvc3QiLCJjb25maWciLCJoZWFkZXJzIiwicG9zdCIsInVybCIsIkNVU1RPTUVSX1JFR0lTVEVSIiwiYWRkUXVhbnRpdHlXaXRoTnVtYmVyIiwicXR5IiwiZ2V0U3RhdGUiLCJ0eXBlIiwiUFJPQ0VTU19DQVJUIiwib2JqQ2FydCIsInRpdGxlIiwicXVhbnRpdHkiLCJuZXdQcmljZSIsImltYWdlVXJsIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwicGF5bG9hZCIsImNvb2tpZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXJ0UmVkdWNlciIsImFkZGVkSXRlbXMiLCJGQUlMX1BST0NFU1NfQ0FSVCIsInJlbW92ZUl0ZW0iLCJSRU1PVkVfSVRFTSIsImFkZFF1YW50aXR5IiwiQUREX1FVQU5USVRZIiwic3VidHJhY3RRdWFudGl0eSIsIlNVQl9RVUFOVElUWSIsInJlcXVlc3QiLCJ0eXBlUmVxdWVzdCIsImZhaWx1cmUiLCJnZXRQcm9kdWN0TGlzdCIsIlBST0RVQ1RfTElTVF9SRVFVRVNUIiwidGhlbiIsInByb2R1Y3RSZXN1bHQiLCJzdWNjZXNzUHJvZHVjdHMiLCJjYXRjaCIsIlBST0RVQ1RfTElTVF9SRVFVRVNUX0ZBSUxVUkUiLCJwcm9kdWN0c1Jlc3VsdCIsImRlc2NyaXB0aW9uIiwiZGlzY291bnQiLCJkaXNjb3VudE9mZiIsInByaWNlIiwicmF3IiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsInZhcmlhbnRfZ3JvdXBzIiwiYXNzZXRzIiwiaW1hZ2VIb3ZlclVybCIsIlBST0RVQ1RfTElTVF9TVUNDRVNTIiwic3VjY2Vzc0NhdGVnb3J5IiwiY2F0ZWdvcnlSZXN1bHQiLCJhcnJheUNhdGVnb3J5IiwiQ0FURUdPUllfTElTVF9TVUNDRVNTIiwiZ2V0Q2F0ZWdvcnlMaXN0IiwiQ0FURUdPUllfTElTVF9SRVFVRVNUIiwiQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUiLCJMT0dJTl9SRVFVRVNUIiwidXNlciIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMVVJFIiwidXNlckxvZ2luIiwidXNlcm5hbWUiLCJsb2dpbiIsImxvY2F0aW9uIiwib3JpZ2luIiwidG9rZW4iLCJjaGVja1VzZXJMb2dpbiIsImdldFRva2VuIiwiZ2V0IiwiQ0hFQ0tfVVNSRVJfTE9HSU4iLCJ1c2VyTG9nb3V0IiwibG9nb3V0IiwiQ0xFQVJfQ1VTVE9NRVIiLCJyZWdpc3RlclJlcXVlc3QiLCJSRUdJU1RFUl9SRVFVRVNUIiwicmVnaXN0ZXJTdWNjZXNzIiwiUkVHSVNURVJfU1VDQ0VTUyIsInJlZ2lzdGVyRmFpbHVyZSIsIlJFR0lTVEVSX0ZBSUxVUkUiLCJyZWdpc3RlckN1c3RvbWVyIiwiaXNMb2dnZWRJbiIsIkNVU1RPTUVSX1JFUVVFU1QiLCJhYm91dCIsIkNVU1RPTUVSX1NVQ0NFU1MiLCJDVVNUT01FUl9GQUlMVVJFIiwiQUREX1RPX0NBUlQiLCJBRERfU0hJUFBJTkciLCJPUkRFUl9GT1JNIiwiQ0hFQ0tPVVRfQ0hBUkdFIiwiUkVTRVRfQ0FSVCIsIkFERF9QUk9EVUNUUyIsIlVTUkVSX0xPR0lOIiwiVVNSRVJfTE9HT1VUIiwiY2FydEl0ZW1zRnJvbVN0b3JhZ2UiLCJwYXJzZSIsIm5ld1RvdGFsIiwicmVkdWNlIiwiYWNjIiwib2JqIiwiaW5pdFN0YXRlIiwibG9hZGluZyIsInRvdGFsIiwic2hpcHBpbmciLCJhY3Rpb24iLCJhbGxJdGVtcyIsIml0ZW1TZWxlY3RlZCIsImV4aXN0ZWRfaXRlbSIsImZpbmRJbmRleCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtVG9SZW1vdmUiLCJmaW5kIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiYWRkZWRJdGVtIiwiYWRkZWRJdGVtUyIsImN1c3RvbWVycyIsInByb2R1Y3RSZWR1Y2VyIiwiY2F0ZWdvcnlSZWR1Y2VyIiwicm9vdFJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwic2VjdXJpdHlSZWR1Y2VyIiwiaW5pdFN0YXRlUmVnaXN0ZXIiLCJyZWdpc3RlclJlZHVjZXIiLCJpbml0U3RhdGVDdXN0b21lciIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicHJvZHVjdE9iaiIsImFzc2V0c00iLCJhc3NldHNNZWRpYSIsInBvcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVB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QUNBUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdvVG9wID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IG9uU2Nyb2xsU3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBwcm9wcy5zY3JvbGxTdGVwSW5QeCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgcHJvcHMuZGVsYXlJbk1zKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtdXAtYXJyb3ctYWx0XCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRlcihmYWxzZSksIDEwMDApO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT4zIEFndWFzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIzIEFndWFzIC0gVGllbmRhIFBsYXlhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiMyBBZ3VhcyAtIFRpZW5kYSBQbGF5YVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2xpdmFuaS1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTItMTU4OTIxNjA5MzExMy5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHtsb2FkZXIgPyAnTG9hZGluZycgOiBjaGlsZHJlbn1cclxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlR3VhcmQoeyBjaGlsZHJlbiB9KXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgY3VzdG9tZXJSZWR1Y2VyID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLmN1c3RvbWVyUmVkdWNlcikgXHJcbiAgICBjb25zdCB7IGN1c3RvbWVyIH0gPSBjdXN0b21lclJlZHVjZXJcclxuICAgIGNvbnN0IFthdXRob3JpemVkLCBzZXRBdXRob3JpemVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gY2hpbGRyZW5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gb24gaW5pdGlhbCBsb2FkIC0gcnVuIGF1dGggY2hlY2sgXHJcbiAgICAgICAgYXV0aENoZWNrKHByb3BzKTtcclxuICAgICAgICAvLyBvbiByb3V0ZSBjaGFuZ2Ugc3RhcnQgLSBoaWRlIHBhZ2UgY29udGVudCBieSBzZXR0aW5nIGF1dGhvcml6ZWQgdG8gZmFsc2UgIFxyXG4gICAgICAgIGNvbnN0IGhpZGVDb250ZW50ID0gKCkgPT4gc2V0QXV0aG9yaXplZChmYWxzZSk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhpZGVDb250ZW50KTtcclxuXHJcbiAgICAgICAgLy8gb24gcm91dGUgY2hhbmdlIGNvbXBsZXRlIC0gcnVuIGF1dGggY2hlY2sgXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGF1dGhDaGVjaylcclxuXHJcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgZnJvbSBldmVudHMgaW4gdXNlRWZmZWN0IHJldHVybiBmdW5jdGlvblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGlkZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGF1dGhDaGVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0aENoZWNrKGRhdGEpIHtcclxuICAgICAgICBpZihkYXRhLnByb3RlY3RlZCAmJiAhY3VzdG9tZXIpe1xyXG4gICAgICAgICAgICBzZXRBdXRob3JpemVkKGZhbHNlKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRBdXRob3JpemVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGF1dGhvcml6ZWQgJiYgY2hpbGRyZW4pO1xyXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBhZGRQcm9kdWN0cyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjaGVja1VzZXJMb2dpbiwgc2V0Q3VzdG9tZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3NlY3VyaXR5QWN0aW9uJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0IFJvdXRlR3VhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN1cml0eS9Sb3V0ZUd1YXJkJztcclxuaW1wb3J0IHtnZXRQcm9kdWN0TGlzdH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvY29tbWVyY2VBY3Rpb25cIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0Q3VzdG9tZXIoKSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVHdWFyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlR3VhcmQ+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgXHJcbn07XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoTXlBcHApIiwiaW1wb3J0IHsgcGFyc2VQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3BhcnNlUHJvZHVjdFwiO1xyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2NvbmZpZy9jb21tZXJjZVwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PntcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLmxpc3QoKVxyXG4gICAgICAgIGxldCBhcnJheVByb2R1Y3QgPSBbXTtcclxuICAgICAgICBpZihwcm9kdWN0cy5kYXRhLmxlbmd0aCA+IDApeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9kdWN0cz8uZGF0YT8uZm9yRWFjaChwcm9kdWN0c09iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VQID0gcGFyc2VQcm9kdWN0KHByb2R1Y3RzT2JqKVxyXG4gICAgICAgICAgICAgICAgYXJyYXlQcm9kdWN0LnB1c2gocGFyc2VQKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFycmF5UHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeUlkID0gYXN5bmMgKGlkKSA9PntcclxuXHJcbiAgICBsZXQgcHJvZHVjdCA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLnJldHJpZXZlKGlkKVxyXG4gICAgbGV0IHBhcnNlUCA9IHBhcnNlUHJvZHVjdChwcm9kdWN0KVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBwYXJzZVBcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgaHR0cEluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly9hcGkuY2hlYy5pb1wiXHJcbn0pXHJcblxyXG5odHRwSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShudWxsLCBlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKVxyXG4gICAgaWYoZXJyb3IucmVzcG9uc2UgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWxlcnQoXCJIb2xhIGVzdGFtb3MgdGVuaWVuZG8gcHJvYmxlbWFzIGRlIGNvbmV4acOzbiBjb24gZWwgc2Vydmlkb3IgaW50ZW50ZSBtw6FzIHRhcmRlLlwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTsgICAgXHJcbiAgICB9ICAgIFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBodHRwSW5zdGFuY2U7IiwiaW1wb3J0IENvbW1lcmNlIGZyb20gXCJAY2hlYy9jb21tZXJjZS5qc1wiO1xyXG5jb25zdCBrZXlzID0gcmVxdWlyZShcIi4uL2NvbmZpZy9rZXlzXCIpO1xyXG5jb25zdCBjb21tZXJjZSA9IG5ldyBDb21tZXJjZShrZXlzLmNvbW1lcmNlSnNLZXkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVyY2UiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHN0cmlwZVB1Ymxpc2hhYmxlS2V5OiAnc3RyaXBlUHVibGlzaGFibGVLZXknLFxyXG4gICAgc3RyaXBlU2VjcmV0S2V5OiAnc3RyaXBlU2VjcmV0S2V5JyxcclxuICAgIGF3c0FjY2Vzc0tleUlkOiAnYXdzQWNjZXNzS2V5SWQnLFxyXG4gICAgYXdzU2VjcmV0QWNjZXNzS2V5OiAnYXdzU2VjcmV0QWNjZXNzS2V5JyxcclxuICAgIGF3c0J1Y2tldDogJ2F3c0J1Y2tldCcsXHJcbiAgICBjb21tZXJjZUpzS2V5OiAncGtfdGVzdF8zMzExMDgzNmRjMmM1YzdiMjY1YTZkNzJjZTFmZjI0ZGIzNDIwOGExMjhkY2MnXHJcbn07IiwiaW1wb3J0IGh0dHBJbnN0YW5jZSBmcm9tIFwiLi4vY29uZmlnL2FwaVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QocHJvcHMpe1xyXG4gICAgY29uc3Qga2V5cyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9rZXlzJylcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgIFwiWC1BdXRob3JpemF0aW9uXCI6IGtleXMuY29tbWVyY2VKc0tleSxcclxuICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBodHRwSW5zdGFuY2UucG9zdChwcm9wcy51cmwsIGRhdGEsIGNvbmZpZylcclxufSIsIi8vY3VzdG9tZXJcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX1JFR0lTVEVSID0gXCIvdjEvY3VzdG9tZXJzXCIiLCJpbXBvcnQgeyBnZXRQcm9kdWN0QnlJZCB9IGZyb20gJy4uLy4uL3NlcnZlci9hcGkvcHJvZHVjdHMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgQUREX1RPX0NBUlQsXHJcbiAgICBSRU1PVkVfSVRFTSxcclxuICAgIFNVQl9RVUFOVElUWSxcclxuICAgIEFERF9RVUFOVElUWSxcclxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcclxuICAgIFJFU0VUX0NBUlQsXHJcbiAgICBBRERfUFJPRFVDVFMsXHJcbiAgICBQUk9DRVNTX0NBUlQsXHJcbiAgICBGQUlMX1BST0NFU1NfQ0FSVFxyXG59IGZyb20gJy4uL2NvbnN0YW50cy9jYXJ0Q29uc3RhbnQnXHJcblxyXG5cclxuLy9hZGQgcHJvZHVjdHNcclxuLy8gZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3RzID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBBRERfUFJPRFVDVFNcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gLy9hZGQgY2FydCBhY3Rpb25cclxuLy8gZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBBRERfVE9fQ0FSVCxcclxuLy8gICAgICAgICBpZFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyAvL3JlbW92ZSBpdGVtIGFjdGlvblxyXG4vLyBleHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBSRU1PVkVfSVRFTSxcclxuLy8gICAgICAgICBpZFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyAvL3N1YnRyYWN0IHF0IGFjdGlvblxyXG4vLyBleHBvcnQgY29uc3Qgc3VidHJhY3RRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBTVUJfUVVBTlRJVFksXHJcbi8vICAgICAgICAgaWRcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gLy9hZGQgcXQgYWN0aW9uXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFksXHJcbi8vICAgICAgICAgaWRcclxuLy8gICAgIH1cclxuLy8gfTtcclxuXHJcbi8vIC8vYWRkIHF0IGFjdGlvbiB3aXRoIHF1YW50aXR5IG51bWJlclxyXG4vLyAvLyBleHBvcnQgY29uc3QgYWRkUXVhbnRpdHlXaXRoTnVtYmVyID0gKGlkLCBxdHkpID0+IHtcclxuLy8gLy8gICAgIHJldHVybiB7XHJcbi8vIC8vICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4vLyAvLyAgICAgICAgIGlkLFxyXG4vLyAvLyAgICAgICAgIHF0eVxyXG4vLyAvLyAgICAgfVxyXG4vLyAvLyB9O1xyXG5cclxuLy8gLy8gUmVzZXQgY2FydCBhZnRlciBmb3JtIHN1Ym1pdFxyXG4vLyBleHBvcnQgY29uc3QgcmVzZXRDYXJ0ID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiBSRVNFVF9DQVJUXHJcbi8vICAgICB9XHJcbi8vIH07XHJcblxyXG5cclxuLy8gLy9hZGQgcXQgYWN0aW9uIHdpdGggcXVhbnRpdHkgbnVtYmVyXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRUb0NhcnRXaXRoUXVhbnRpdHlOdW1iZXIgPSAoaXRlbSwgcXR5KSA9PntcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBhZGRRdWFudGl0eVdpdGhOdW1iZXJcclxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5V2l0aE51bWJlciA9IChpZCwgcXR5KSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogUFJPQ0VTU19DQVJUIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZ2V0UHJvZHVjdEJ5SWQoaWQpXHJcblxyXG4gICAgICAgICAgICBsZXQgb2JqQ2FydCA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogIHF0eSxcclxuICAgICAgICAgICAgICAgIG5ld1ByaWNlOiBkYXRhLm5ld1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEuaW1hZ2VVcmxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDp7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogb2JqQ2FydCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJzNhZ3Vhc19jb21tZXJjZV9pdGVtcycsSlNPTi5zdHJpbmdpZnkoZ2V0U3RhdGUoKS5jYXJ0UmVkdWNlci5hZGRlZEl0ZW1zKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGQUlMX1BST0NFU1NfQ0FSVCAsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2Vycm9yJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuLy9yZW1vdmUgaXRlbVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSVRFTSxcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJzNhZ3Vhc19jb21tZXJjZV9pdGVtcycsSlNPTi5zdHJpbmdpZnkoZ2V0U3RhdGUoKS5jYXJ0UmVkdWNlci5hZGRlZEl0ZW1zKSlcclxuICAgIH0gICAgXHJcbn07XHJcblxyXG4vL2FkZCBxdCBhY3Rpb25cclxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1FVQU5USVRZLFxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgIH0pICAgICAgICBcclxuICAgICAgICBjb29raWUuc2V0KCczYWd1YXNfY29tbWVyY2VfaXRlbXMnLEpTT04uc3RyaW5naWZ5KGdldFN0YXRlKCkuY2FydFJlZHVjZXIuYWRkZWRJdGVtcykpXHJcbiAgICB9XHJcbn07XHJcblxyXG4vL3N1YnRyYWN0IHF0IGFjdGlvblxyXG5leHBvcnQgY29uc3Qgc3VidHJhY3RRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNVQl9RVUFOVElUWSxcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICAgICAgY29va2llLnNldCgnM2FndWFzX2NvbW1lcmNlX2l0ZW1zJyxKU09OLnN0cmluZ2lmeShnZXRTdGF0ZSgpLmNhcnRSZWR1Y2VyLmFkZGVkSXRlbXMpKVxyXG4gICAgfVxyXG59OyIsImltcG9ydCBjb21tZXJjZSBmcm9tIFwiLi4vLi4vc2VydmVyL2NvbmZpZy9jb21tZXJjZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ0FURUdPUllfTElTVF9SRVFVRVNULCBDQVRFR09SWV9MSVNUX1JFUVVFU1RfRkFJTFVSRSwgQ0FURUdPUllfTElTVF9TVUNDRVNTLFxyXG4gICAgUFJPRFVDVF9MSVNUX1JFUVVFU1QsXHJcbiAgICBQUk9EVUNUX0xJU1RfUkVRVUVTVF9GQUlMVVJFLFxyXG4gICAgUFJPRFVDVF9MSVNUX1NVQ0NFU1NcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbW1lcmNlQ29uc3RhbnRcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICh0eXBlUmVxdWVzdCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiB0eXBlUmVxdWVzdFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhaWx1cmUgPSAodHlwZVJlcXVlc3QsIGVycm9yKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHR5cGVSZXF1ZXN0LFxyXG4gICAgICAgIHBheWxvYWQ6IGVycm9yXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlcXVlc3QoUFJPRFVDVF9MSVNUX1JFUVVFU1QpKTtcclxuICAgICAgICAvL21ha2UgaHR0cCByZXF1ZXN0XHJcbiAgICAgICAgY29tbWVyY2UucHJvZHVjdHMubGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChwcm9kdWN0UmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzdWNjZXNzUHJvZHVjdHMocHJvZHVjdFJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmYWlsdXJlKFBST0RVQ1RfTElTVF9SRVFVRVNUX0ZBSUxVUkUsIGVycm9yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3Qgc3VjY2Vzc1Byb2R1Y3RzID0gKHByb2R1Y3RzUmVzdWx0KSA9PiB7XHJcbiAgICBsZXQgYXJyYXlQcm9kdWN0ID0gW107XHJcbiAgICBwcm9kdWN0c1Jlc3VsdD8uZGF0YT8uZm9yRWFjaChwcm9kdWN0c09iaiA9PiB7XHJcbiAgICAgICAgbGV0IHBhcnNlUHJvZHVjdCA9IHt9O1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5pZCA9IHByb2R1Y3RzT2JqLmlkO1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5kZXNjcmlwdGlvbiA9IHByb2R1Y3RzT2JqLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5kaXNjb3VudCA9IGZhbHNlO1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5kaXNjb3VudE9mZiA9IDA7XHJcbiAgICAgICAgcGFyc2VQcm9kdWN0Lm5ld1ByaWNlID0gcHJvZHVjdHNPYmoucHJpY2UucmF3O1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5uZXdQcm9kdWN0ID0gZmFsc2U7XHJcbiAgICAgICAgcGFyc2VQcm9kdWN0Lm9mZmVyID0gZmFsc2U7XHJcbiAgICAgICAgcGFyc2VQcm9kdWN0Lm9sZFByaWNlID0gcHJvZHVjdHNPYmoucHJpY2UucmF3O1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5vblNhbGUgPSBmYWxzZTtcclxuICAgICAgICBwYXJzZVByb2R1Y3QudGl0bGUgPSBwcm9kdWN0c09iai5uYW1lO1xyXG4gICAgICAgIHBhcnNlUHJvZHVjdC5jYXRlZ29yaWVzID0gcHJvZHVjdHNPYmouY2F0ZWdvcmllcztcclxuICAgICAgICBwYXJzZVByb2R1Y3QudmFyaWFudF9ncm91cHMgPSBwcm9kdWN0c09iai52YXJpYW50X2dyb3VwcztcclxuICAgICAgICBwYXJzZVByb2R1Y3QudHlwZSA9IFwiV29tZW4gQ2xvdGhlc1wiO1xyXG4gICAgICAgIGlmIChwcm9kdWN0c09iai5hc3NldHMubGVuZ3RoID09PSAwKSB7IC8vIEVtcHR5IGdhbGxlcnkgaW1hZ2VzXHJcbiAgICAgICAgICAgIHBhcnNlUHJvZHVjdC5pbWFnZVVybCA9IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc2LTE1ODg3MDUyMzY1MjAuanBnXCI7XHJcbiAgICAgICAgICAgIHBhcnNlUHJvZHVjdC5pbWFnZUhvdmVyVXJsID0gXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjYtMTU4ODcwNTI0NDE2NC5qcGdcIjtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcnNlUHJvZHVjdC5pbWFnZVVybCA9IHByb2R1Y3RzT2JqLmFzc2V0c1swXS51cmw7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0c09iai5hc3NldHMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgIHBhcnNlUHJvZHVjdC5pbWFnZUhvdmVyVXJsID0gcHJvZHVjdHNPYmouYXNzZXRzWzFdLnVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyYXlQcm9kdWN0LnB1c2gocGFyc2VQcm9kdWN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUFJPRFVDVF9MSVNUX1NVQ0NFU1MsXHJcbiAgICAgICAgcGF5bG9hZDogYXJyYXlQcm9kdWN0XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NDYXRlZ29yeSA9IChjYXRlZ29yeVJlc3VsdCkgPT4ge1xyXG4gICAgbGV0IGFycmF5Q2F0ZWdvcnkgPSBbXTtcclxuICAgIGFycmF5Q2F0ZWdvcnkgPSBjYXRlZ29yeVJlc3VsdD8uZGF0YTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IENBVEVHT1JZX0xJU1RfU1VDQ0VTUyxcclxuICAgICAgICBwYXlsb2FkOiBhcnJheUNhdGVnb3J5XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVxdWVzdChDQVRFR09SWV9MSVNUX1JFUVVFU1QpKTtcclxuXHJcbiAgICAgICAgLy9tYWtlIGh0dHAgcmVxdWVzdFxyXG4gICAgICAgIGNvbW1lcmNlLmNhdGVnb3JpZXMubGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChjYXRlZ29yeVJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc3VjY2Vzc0NhdGVnb3J5KGNhdGVnb3J5UmVzdWx0KSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmFpbHVyZShDQVRFR09SWV9MSVNUX1JFUVVFU1RfRkFJTFVSRSwgZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBDTEVBUl9DVVNUT01FUiwgQ1VTVE9NRVJfRkFJTFVSRSwgQ1VTVE9NRVJfUkVRVUVTVCwgQ1VTVE9NRVJfU1VDQ0VTUywgTE9HSU5fRkFJTFVSRSwgTE9HSU5fUkVRVUVTVCwgTE9HSU5fU1VDQ0VTUywgUkVHSVNURVJfRkFJTFVSRSwgUkVHSVNURVJfUkVRVUVTVCwgUkVHSVNURVJfU1VDQ0VTUyB9IGZyb20gJy4uL2NvbnN0YW50cy9zZWN1cml0eUNvbnN0YW50J1xyXG5pbXBvcnQgeyBVU1JFUl9MT0dJTiwgQ0hFQ0tfVVNSRVJfTE9HSU4sIFVTUkVSX0xPR09VVCB9IGZyb20gJy4uL2NvbnN0YW50cy9zZWN1cml0eUNvbnN0YW50J1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL3NlcnZlci9yZXF1ZXN0L3Bvc3QnO1xyXG5pbXBvcnQgeyBDVVNUT01FUl9SRUdJU1RFUiB9IGZyb20gJy4uLy4uL3NlcnZlci9yb3V0ZXMvY3VzdG9tZXInO1xyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZy9jb21tZXJjZSc7XHJcblxyXG4vL0FDVElPTlMgTE9HSU5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dJTl9SRVFVRVNUXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKHVzZXIpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgcGF5bG9hZDogdXNlclxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgZmFpbHVyZSA9IChlcnJvcikgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HSU5fRkFJTFVSRSxcclxuICAgICAgICBwYXlsb2FkOiBlcnJvclxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gVVNSRVJfTE9HSU5cclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVxdWVzdCgpKVxyXG5cclxuICAgICAgICAvL21ha2UgaHR0cCByZXF1ZXN0XHJcbiAgICAgICAgY29tbWVyY2UuY3VzdG9tZXIubG9naW4odXNlcm5hbWUsIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2xvZ2luP3Rva2VuPXt0b2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHRva2VuID0+IHsgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN1Y2Nlc3ModXNlcm5hbWUpKTsgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmFpbHVyZShlcnJvcikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9DSEVDS19VU1JFUl9MT0dJTlxyXG5leHBvcnQgY29uc3QgY2hlY2tVc2VyTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19zaG9wX3Rva2VuXycpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IENIRUNLX1VTUkVSX0xPR0lOXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVTUkVSX0xPR09VVFxyXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IChkaXNwYXRjaCkgPT57XHJcbiAgICBjb21tZXJjZS5jdXN0b21lci5sb2dvdXQoKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQ0xFQVJfQ1VTVE9NRVIgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vYWN0aW9uIHJlZ2lzdGVyXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJlcXVlc3QgPSAoKSA9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogUkVHSVNURVJfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclN1Y2Nlc3MgPSAodXNlcikgPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX1NVQ0NFU1MsXHJcbiAgICAgICAgcGF5bG9hZDogdXNlclxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckZhaWx1cmUgPSAoZXJyb3IpID0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBSRUdJU1RFUl9GQUlMVVJFLFxyXG4gICAgICAgIHBheWxvYWQ6IGVycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckN1c3RvbWVyID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSZXF1ZXN0KCkpXHJcbiAgICAgICAgUG9zdCh7dXJsOiBDVVNUT01FUl9SRUdJU1RFUiwgZGF0YTogZGF0YX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyRmFpbHVyZShlcnJvcikpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuLy9jdXN0b21lclxyXG5leHBvcnQgY29uc3Qgc2V0Q3VzdG9tZXIgPSAoKSA9PnsgICAgXHJcblxyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGNvbW1lcmNlLmN1c3RvbWVyLmlzTG9nZ2VkSW4oKTtcclxuICAgIGlmICghaXNMb2dnZWRJbiB8fCBpc0xvZ2dlZEluID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0NVU1RPTUVSIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IENVU1RPTUVSX1JFUVVFU1R9KVxyXG4gICAgICAgIGNvbW1lcmNlLmN1c3RvbWVyLmFib3V0KClcclxuICAgICAgICAudGhlbigoY3VzdG9tZXIpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IENVU1RPTUVSX1NVQ0NFU1MsIHBheWxvYWQ6IGN1c3RvbWVyfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQ1VTVE9NRVJfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCIvL1R5cGVzIHNob3VsZCBiZSBpbiBjb25zdCB0byBhdm9pZCB0eXBvcyBhbmQgZHVwbGljYXRpb24gc2luY2UgaXQncyBhIHN0cmluZyBhbmQgY291bGQgYmUgZWFzaWx5IG1pc3Mgc3BlbGxlZFxyXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU0gPSAnUkVNT1ZFX0lURU0nO1xyXG5leHBvcnQgY29uc3QgU1VCX1FVQU5USVRZID0gJ1NVQl9RVUFOVElUWSc7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFkgPSAnQUREX1FVQU5USVRZJztcclxuZXhwb3J0IGNvbnN0IEFERF9TSElQUElORyA9ICdBRERfU0hJUFBJTkcnO1xyXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSID0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUic7XHJcbmV4cG9ydCBjb25zdCBPUkRFUl9GT1JNID0gJ09SREVSX0ZPUk0nO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfQ0hBUkdFID0gJ0NIRUNLT1VUX0NIQVJHRSc7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJUID0gJ1JFU0VUX0NBUlQnO1xyXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RTID0gJ0FERF9QUk9EVUNUUyc7XHJcbmV4cG9ydCBjb25zdCBQUk9DRVNTX0NBUlQgPSAnUFJPQ0VTU19DQVJUJ1xyXG5leHBvcnQgY29uc3QgRkFJTF9QUk9DRVNTX0NBUlQgPSAnRkFJTF9QUk9DRVNTX0NBUlQnXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUX1JFUVVFU1QgPSAnUFJPRFVDVF9MSVNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUX1NVQ0NFU1MgPSAnUFJPRFVDVF9MSVNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUX1JFUVVFU1RfRkFJTFVSRSA9ICdQUk9EVUNUX0xJU1RfUkVRVUVTVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUX1JFUVVFU1QgPSAnQ0FURUdPUllfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0xJU1RfU1VDQ0VTUyA9ICdDQVRFR09SWV9MSVNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUgPSAnQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkUnOyIsImV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ1VTRVJTX0xPR0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdVU0VSU19MT0dJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUxVUkUgPSAnVVNFUlNfTE9HSU5fRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1JFUVVFU1QgPSAnVVNFUlNfUkVHSVNURVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9TVUNDRVNTID0gJ1VTRVJTX1JFR0lTVEVSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRkFJTFVSRSA9ICdVU0VSU19SRUdJU1RFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9SRVFVRVNUID0gJ0NVU1RPTUVSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfU1VDQ0VTUyA9ICdDVVNUT01FUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX0ZBSUxVUkUgPSAnQ1VTVE9NRVJfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DVVNUT01FUiA9ICdDTEVBUl9DVVNUT01FUic7XHJcblxyXG5leHBvcnQgY29uc3QgVVNSRVJfTE9HSU4gPSAnVVNSRVJfTE9HSU4nO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfVVNSRVJfTE9HSU4gPSAnQ0hFQ0tfVVNSRVJfTE9HSU4nO1xyXG5leHBvcnQgY29uc3QgVVNSRVJfTE9HT1VUID0gJ1VTUkVSX0xPR09VVCc7IiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9UT19DQVJULFxyXG4gICAgUkVNT1ZFX0lURU0sXHJcbiAgICBTVUJfUVVBTlRJVFksXHJcbiAgICBBRERfUVVBTlRJVFksIFxyXG4gICAgQUREX1NISVBQSU5HLFxyXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgUkVTRVRfQ0FSVCxcclxuICAgIEFERF9QUk9EVUNUUyxcclxuICAgIFBST0NFU1NfQ0FSVCxcclxuICAgIEZBSUxfUFJPQ0VTU19DQVJUXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2NhcnRDb25zdGFudCc7XHJcblxyXG5jb25zdCBjYXJ0SXRlbXNGcm9tU3RvcmFnZSA9IGNvb2tpZS5nZXQoJzNhZ3Vhc19jb21tZXJjZV9pdGVtcycpID8gSlNPTi5wYXJzZShjb29raWUuZ2V0KCczYWd1YXNfY29tbWVyY2VfaXRlbXMnKSkgIDogW11cclxubGV0IG5ld1RvdGFsID0gY2FydEl0ZW1zRnJvbVN0b3JhZ2UubGVuZ3RoID8gY2FydEl0ZW1zRnJvbVN0b3JhZ2UucmVkdWNlKChhY2MsIG9iaikgPT4gYWNjICsgKG9iai5uZXdQcmljZSAqIG9iai5xdWFudGl0eSksIDApIDogMFxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGFkZGVkSXRlbXM6Y2FydEl0ZW1zRnJvbVN0b3JhZ2UsXHJcbiAgICB0b3RhbDogbmV3VG90YWwsXHJcbiAgICBzaGlwcGluZzogMCxcclxuICAgIGVycm9yOiAnJ1xyXG59O1xyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBQUk9DRVNTX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGQUlMX1BST0NFU1NfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVI6XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgZXhpc3RcclxuICAgICAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBbLi4uc3RhdGUuYWRkZWRJdGVtc11cclxuICAgICAgICAgICAgY29uc3QgaXRlbVNlbGVjdGVkID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdFxyXG4gICAgICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmRJbmRleChpdGVtPT4gaXRlbS5pZCA9PT0gaXRlbVNlbGVjdGVkLmlkKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZXhpc3RlZF9pdGVtID49IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IE9iamVjdC5hc3NpZ24oe30sIGFsbEl0ZW1zW2V4aXN0ZWRfaXRlbV0pXHJcbiAgICAgICAgICAgICAgICBvYmoucXVhbnRpdHkgPSBhbGxJdGVtc1tleGlzdGVkX2l0ZW1dLnF1YW50aXR5ICsgaXRlbVNlbGVjdGVkLnF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICBhbGxJdGVtc1tleGlzdGVkX2l0ZW1dID0gb2JqXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gYWxsSXRlbXMucmVkdWNlKChhY2Msb2JqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICsgKG9iai5uZXdQcmljZSAqIG9iai5xdWFudGl0eSlcclxuICAgICAgICAgICAgICAgICksIDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IGFsbEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbCxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsSXRlbXMgPSBbLi4uc3RhdGUuYWRkZWRJdGVtcywgaXRlbVNlbGVjdGVkXVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gYWxsSXRlbXMucmVkdWNlKChhY2Msb2JqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICsgKG9iai5uZXdQcmljZSAqIG9iai5xdWFudGl0eSlcclxuICAgICAgICAgICAgICAgICksIDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IGFsbEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbCxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfSVRFTTpcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgY2FzZSBBRERfUVVBTlRJVFk6XHJcbiAgICAgICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU1VCX1FVQU5USVRZOlxyXG4gICAgICAgICAgICBsZXQgYWRkZWRJdGVtUyA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcclxuICAgICAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgICAgIGlmKGFkZGVkSXRlbVMucXVhbnRpdHkgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbVMubmV3UHJpY2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbVMucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgLSBhZGRlZEl0ZW1TLm5ld1ByaWNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IEFERF9QUk9EVUNUUyl7XHJcbiAgICAvLyAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgIC8vICAgICAvLyBkYk9yZGVyUmVmLmdldCgpXHJcbiAgICAvLyAgICAgLy8gLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgcmVzLmZvckVhY2goZG9jID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGRvYy5kYXRhKCk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcclxuICAgIC8vICAgICAvLyAgICAgICAgIHByb2R1Y3RzQXJyYXkucHVzaChwcm9kdWN0c09iailcclxuICAgIC8vICAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHByb2R1Y3RzOiBkYXRhXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICBcclxuICAgIC8vIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ0FSVCl7XHJcbiAgICAvLyAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAvLyAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgLy8gICAgIGxldCBleGlzdGVkX2l0ZW09IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgLy8gICAgIGlmKGV4aXN0ZWRfaXRlbSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgLy8gICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgLy8gICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSKXtcclxuICAgIC8vICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgIC8vICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAvLyAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAvLyAgICAgaWYoZXhpc3RlZF9pdGVtKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcclxuICAgIC8vICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgIC8vICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgIC8vICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU0pe1xyXG4gICAgLy8gICAgIGxldCBpdGVtVG9SZW1vdmU9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgLy8gICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAvLyAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAvLyAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZKXtcclxuICAgIC8vICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgLy8gICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxyXG4gICAgLy8gICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gU1VCX1FVQU5USVRZKXsgIFxyXG4gICAgLy8gICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxyXG4gICAgLy8gICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgLy8gICAgIGlmKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSl7XHJcbiAgICAvLyAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT5pdGVtLmlkICE9PSBhY3Rpb24uaWQpXHJcbiAgICAvLyAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgIC8vICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcclxuICAgIC8vICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IEFERF9TSElQUElORyl7XHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpe1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgIC8vICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAvLyAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICByZXR1cm4gc3RhdGVcclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFJlZHVjZXIiLCJcclxuaW1wb3J0IHtcclxuICAgIENBVEVHT1JZX0xJU1RfUkVRVUVTVCxcclxuICAgIENBVEVHT1JZX0xJU1RfUkVRVUVTVF9GQUlMVVJFLCBDQVRFR09SWV9MSVNUX1NVQ0NFU1MsXHJcbiAgICBQUk9EVUNUX0xJU1RfUkVRVUVTVCxcclxuICAgIFBST0RVQ1RfTElTVF9SRVFVRVNUX0ZBSUxVUkUsXHJcbiAgICBQUk9EVUNUX0xJU1RfU1VDQ0VTU1xyXG59IGZyb20gXCIuLi9jb25zdGFudHMvY29tbWVyY2VDb25zdGFudFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgY3VzdG9tZXJzOiBbXSxcclxuICAgIGVycm9yOiAnJyxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBQUk9EVUNUX0xJU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBQUk9EVUNUX0xJU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUFJPRFVDVF9MSVNUX1JFUVVFU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIENBVEVHT1JZX0xJU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDQVRFR09SWV9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQ0FURUdPUllfTElTVF9SRVFVRVNUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7c2VjdXJpdHlSZWR1Y2VyLCByZWdpc3RlclJlZHVjZXIsIGN1c3RvbWVyUmVkdWNlcn0gZnJvbSAnLi9zZWN1cml0eVJlZHVjZXInXHJcbmltcG9ydCBjYXJ0UmVkdWNlciBmcm9tICcuL2NhcnRSZWR1Y2VyJ1xyXG5pbXBvcnQge2NhdGVnb3J5UmVkdWNlciwgcHJvZHVjdFJlZHVjZXJ9IGZyb20gXCIuL2NvbW1lcmNlUmVkdWNlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBzZWN1cml0eVJlZHVjZXIsXHJcbiAgICBjYXJ0UmVkdWNlcixcclxuICAgIGN1c3RvbWVyUmVkdWNlcixcclxuICAgIHByb2R1Y3RSZWR1Y2VyLFxyXG4gICAgY2F0ZWdvcnlSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzIiwiaW1wb3J0IHsgQ0xFQVJfQ1VTVE9NRVIsIENVU1RPTUVSX0ZBSUxVUkUsIENVU1RPTUVSX1JFUVVFU1QsIENVU1RPTUVSX1NVQ0NFU1MsIExPR0lOX0ZBSUxVUkUsIExPR0lOX1JFUVVFU1QsIExPR0lOX1NVQ0NFU1MsIFJFR0lTVEVSX0ZBSUxVUkUsIFJFR0lTVEVSX1JFUVVFU1QsIFJFR0lTVEVSX1NVQ0NFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlY3VyaXR5Q29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLCAgICBcclxuICAgIGxvZ2luOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBlcnJvcjogJycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdXJpdHlSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vL3JlZGN1ZXJzIHJlZ2lzdGVyIGN1c3RvbWVyXHJcbmNvbnN0IGluaXRTdGF0ZVJlZ2lzdGVyID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgZXJyb3I6ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZVJlZ2lzdGVyLCBhY3Rpb24pID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFJFR0lTVEVSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFR0lTVEVSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTdGF0ZUN1c3RvbWVyID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBjdXN0b21lcjogbnVsbCxcclxuICAgIGVycm9yOiAnJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGVDdXN0b21lciwgYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBDVVNUT01FUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ1VTVE9NRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ1VTVE9NRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDTEVBUl9DVVNUT01FUjpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9ICAgXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuaW1wb3J0IHJvb3RSZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yb290UmVkdWNlclwiXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImV4cG9ydCBjb25zdCBwYXJzZVByb2R1Y3QgPSBwcm9kdWN0T2JqID0+e1xyXG4gICAgY29uc3QgYXNzZXRzTSA9IChhc3NldHNNZWRpYSwgcG9zKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFzc2V0c01lZGlhW3Bvc10udXJsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nNi0xNTg4NzA1MjM2NTIwLmpwZ1wiICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcHJvZHVjdE9iai5pZCxcclxuICAgICAgICB0aXRsZTogcHJvZHVjdE9iai5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0T2JqLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBuZXdQcmljZTogcHJvZHVjdE9iai5wcmljZS5yYXcsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiBwcm9kdWN0T2JqLnByaWNlLnJhdyxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBwcm9kdWN0T2JqLm5hbWUsXHJcbiAgICAgICAgY2F0ZWdvcmllczogcHJvZHVjdE9iai5jYXRlZ29yaWVzLFxyXG4gICAgICAgIHZhcmlhbnRfZ3JvdXBzOiBwcm9kdWN0T2JqLnZhcmlhbnRfZ3JvdXBzLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBhc3NldHNNKHByb2R1Y3RPYmouYXNzZXRzLCAwKSxcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBhc3NldHNNKHByb2R1Y3RPYmouYXNzZXRzLCAxKSxcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=