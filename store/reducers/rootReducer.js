import { combineReducers } from "redux";
import {securityReducer, registerReducer, customerReducer} from './securityReducer'
import cartReducer from './cartReducer'
import {categoryReducer, productReducer} from "./commerceReducer";
import { applyMiddleware } from "redux";

const rootReducers = combineReducers({
    securityReducer,
    cartReducer,
    customerReducer,
    productReducer,
    categoryReducer
});

export default rootReducers