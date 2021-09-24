import { combineReducers } from "redux";
import {securityReducer, registerReducer, customerReducer} from './securityReducer'
import cartReducer from './cartReducer'

const rootReducers = combineReducers({
    securityReducer,
    cartReducer,
    customerReducer
})

export default rootReducers