import { checkoutGenerateTokenAPI, getShippingOptionsAPI } from "../../server/api/checkout"
import { GENERATE_TOKEN_CHECKOUT, GET_SHIPPING_OPTION, PROCESS_CHECKOUT } from "../constants/checkoutConstant"


export const checkoutGenerateToken = (idCart) =>{
    return async (dispatch) => {
        dispatch({type: PROCESS_CHECKOUT})        
        let { data } = await checkoutGenerateTokenAPI(idCart)        
        dispatch({ type: GENERATE_TOKEN_CHECKOUT, payload: data})         

        return data
    }
}

export const getShippingOptions = (idCheckout, country) =>{
    
    return async (dispatch) => {             
        let { data } = await getShippingOptionsAPI(idCheckout, country)        
        await dispatch({ type: GET_SHIPPING_OPTION, payload: data})
        return data
    }


}