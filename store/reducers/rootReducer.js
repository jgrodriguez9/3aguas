import { combineReducers } from "redux";
import {securityReducer, registerReducer} from './securityReducer'
import cartReducer from './cartReducer'
import {categoryReducer, productReducer} from "./commerceReducer";

const rootReducers = combineReducers({
    securityReducer: securityReducer,
    cartReducer: cartReducer,
    registerReducer: registerReducer,
    productReducer: productReducer,
    categoryReducer: categoryReducer
});

export default rootReducers