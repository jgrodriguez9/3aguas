import { combineReducers } from "redux";
import {securityReducer, registerReducer} from './securityReducer'
import cartReducer from './cartReducer'

const rootReducers = combineReducers({
    securityReducer,
    cartReducer,
    registerReducer
})

export default rootReducers