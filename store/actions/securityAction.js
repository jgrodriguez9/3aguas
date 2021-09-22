import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from '../constants/securityConstant'
import { USRER_LOGIN, CHECK_USRER_LOGIN, USRER_LOGOUT } from '../constants/securityConstant'
import cookie from 'js-cookie';
import Post from '../../server/request/post';
import { CUSTOMER_REGISTER } from '../../server/routes/customer';
import commerce from '../../server/config/commerce';

//ACTIONS LOGIN
export const request = () =>{
    return{
        type: LOGIN_REQUEST
    }
};
export const success = (user) =>{
    return{
        type: LOGIN_SUCCESS,
        payload: user
    }
};
export const failure = (error) =>{
    return{
        type: LOGIN_FAILURE,
        payload: error
    }
};

// USRER_LOGIN
export const userLogin = (username) => {
    console.log(username)
    return (dispatch) => {
        dispatch(request())

        //make http request
        commerce.customer.login(username, `${window.location.origin}/login?token={token}`)
        .then(token => {
            console.log(token)
            dispatch(success(username)); 
        })
        .catch(error=>{
            dispatch(failure(error));
        })
    } 



    // cookie.set('_shop_token_', token);
    // const getToken = cookie.get('_shop_token_')

    // console.log('token', getToken)
    // return {
    //     type: USRER_LOGIN
    // }
}





//CHECK_USRER_LOGIN
export const checkUserLogin = () => {
    const getToken = cookie.get('_shop_token_')
    return {
        type: CHECK_USRER_LOGIN
    }
}

// USRER_LOGOUT
export const userLogout = () => {
    cookie.remove('_shop_token_')
    return {
        type: USRER_LOGOUT
    }
}




//action register
export const registerRequest = () =>{
    return {
        type: REGISTER_REQUEST
    }
}
export const registerSuccess = (user) =>{
    return {
        type: REGISTER_SUCCESS,
        payload: user
    }
}
export const registerFailure = (error) =>{
    return {
        type: REGISTER_FAILURE,
        payload: error
    }
}

const registerCustomer = (data) =>{
    return (dispatch) =>{
        dispatch(registerRequest())
        Post({url: CUSTOMER_REGISTER, data: data})
        .then(response=>{
            dispatch(registerSuccess(response.data))
        })
        .catch(error=>{
            dispatch(registerFailure(error))
        })
    }
}

export default registerCustomer