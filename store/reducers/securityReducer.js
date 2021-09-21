import { CHECK_USRER_LOGIN, USRER_LOGIN, USRER_LOGOUT } from "../actions/action-types/cart-actions";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/securityConstant";

const initState = {
    loading: false,    
    login: false,
    user: null,
    error: '',
};

export const securityReducer = (state = initState, action) => {
    
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                login: true,
                user: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return{
                user: null,
                loading: false,
                login: false,
                error: action.payload
            }
        default:
            return state
    }
}



//redcuers register customer
const initStateRegister = {
    loading: false,
    user: null,
    error: ''
}
export const registerReducer = (state = initStateRegister, action) => {
    
    switch(action.type){
        case REGISTER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
            return{
                loading: false,
                user: action.payload,
                error: ''
            }
        case REGISTER_FAILURE:
            return{
                loading: false,
                user: null,
                error: action.payload
            }
        default:
            return state
    }
}