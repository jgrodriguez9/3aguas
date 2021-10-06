import {
    checkoutGenerateTokenAPI,
    getShippingOptionsAPI,
    setShippingOptionsAPI,
    setDiscountCodeAPI
} from "../../server/api/checkout"
import {
    GENERATE_TOKEN_CHECKOUT,
    GET_SHIPPING_OPTION,
    PROCESS_CHECKOUT,
    ABORT_CHECKOUT,
    REMOVE_SHIPPING_OPTIONS,
    UPDATE_CHECKOUT_LIVE_OBJECT,
    CAPTURE_ORDER_SUCCESS
} from "../constants/checkoutConstant"


export const checkoutGenerateToken = (idCart) =>{
    return async (dispatch) => {
        dispatch({type: PROCESS_CHECKOUT})
        let { data, success, error } = await checkoutGenerateTokenAPI(idCart)
        if (success)
            dispatch({ type: GENERATE_TOKEN_CHECKOUT, payload: data})
        else {
            dispatch({ type: ABORT_CHECKOUT})
            throw error;
        }

        return data
    }
}

export const getShippingOptions = (idCheckout, country) =>{
    return async (dispatch) => {
        let { data, success, error } = await getShippingOptionsAPI(idCheckout, country)
        if (success)
             dispatch({ type: GET_SHIPPING_OPTION, payload: data})
        else {
            dispatch({ type: REMOVE_SHIPPING_OPTIONS})
            console.log('error while fetching list of available shipping options', error);
            throw error;
        }
        return data
    }
}

export const setShippingOptions = (idCheckout, shippingOptionId, country, region) => {
    return async (dispatch) => {
        let { resp, success, error } = await setShippingOptionsAPI(idCheckout, shippingOptionId, country, region)
        if (success){
            if (resp.valid) {
                dispatch({
                    type: UPDATE_CHECKOUT_LIVE_OBJECT,
                    payload: resp.live,
                })
            }
        }
        else {
            console.log('error while attempting to update live object with selected shipping option')
            throw error;
        }

        return resp.live
    }
}

export const setDiscountCode = (idCheckout, code) => {
    return async (dispatch) => {
        let { resp, success, error } = await setDiscountCodeAPI(idCheckout, code)
        if (success){
                dispatch({
                    type: UPDATE_CHECKOUT_LIVE_OBJECT,
                    payload: resp.live,
                })
        }
        else {
            console.log('error while attempting to update live object with discount code');
            throw error;
        }

        return resp.live
    }
}

export const captureOrder = (idCheckout, order) => {
    return async (dispatch) => {
        let { resp, success, error } = await captureOrderAPI(idCheckout, order)
        if (success){
                dispatch({
                    type: CAPTURE_ORDER_SUCCESS,
                    payload: resp,
                })
        }
        else {
            console.log('error while attempting to update live object with discount code');
            throw error;
        }

        return resp;
    }
}
