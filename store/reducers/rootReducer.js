import { combineReducers } from "redux";
import {securityReducer, registerReducer, customerReducer} from './securityReducer'
import cartReducer from './cartReducer'
import {categoryReducer, productReducer} from "./commerceReducer";

const rootReducers = combineReducers({
    securityReducer,
    cartReducer,
    customerReducer
})
    securityReducer: securityReducer,
    cartReducer: cartReducer,
    registerReducer: registerReducer,
    productReducer: productReducer,
    categoryReducer: categoryReducer
});

export default rootReducers