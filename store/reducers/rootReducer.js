import { combineReducers } from "redux";
import {securityReducer, registerReducer} from './securityReducer'
import cartReducer from './cartReducer'
import {productReducer} from "./commerceReducer";

const rootReducers = combineReducers({
    securityReducer,
    cartReducer,
    registerReducer,
    productReducer
});

export default rootReducers