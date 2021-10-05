import { getProductById } from '../../server/api/products';
import { addToCart, getCart, removeFromCart, updateItemCart } from '../../server/api/cart';
import cookie from 'js-cookie';
import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_PRODUCTS,
    PROCESS_CART,
    FAIL_PROCESS_CART,
    SET_CART
} from '../constants/cartConstant'


//add products
// export const addProducts = () => {
//     return {
//         type: ADD_PRODUCTS
//     }
// };
// //add cart action
// export const addToCart = (id) => {
//     return {
//         type: ADD_TO_CART,
//         id
//     }
// };
// //remove item action
// export const removeItem = (id) => {
//     return {
//         type: REMOVE_ITEM,
//         id
//     }
// };
// //subtract qt action
// export const subtractQuantity = (id) => {
//     return {
//         type: SUB_QUANTITY,
//         id
//     }
// };
// //add qt action
// export const addQuantity = (id) => {
//     return {
//         type: ADD_QUANTITY,
//         id
//     }
// };

// //add qt action with quantity number
// // export const addQuantityWithNumber = (id, qty) => {
// //     return {
// //         type: ADD_QUANTITY_WITH_NUMBER,
// //         id,
// //         qty
// //     }
// // };

// // Reset cart after form submit
// export const resetCart = () => {
//     return {
//         type: RESET_CART
//     }
// };


// //add qt action with quantity number
// export const addToCartWithQuantityNumber = (item, qty) =>{





// addQuantityWithNumber
export const addQuantityWithNumber = (id, qty, variantData) => {

    try {
        return async(dispatch) => {
            dispatch({ type: PROCESS_CART })
            const { data } = await addToCart(id, qty, variantData)
            dispatch({
                type: ADD_QUANTITY_WITH_NUMBER,
                payload: data
            })    
        }
        
    } catch (error) {  
        
        return (dispatch) =>{
            dispatch({ 
                type: FAIL_PROCESS_CART ,
                error: 'error'
            })
        }        
    }
};

//remove item
export const removeItem = (id) => {

    return async(dispatch) => {
        dispatch({type: PROCESS_CART})
        const { data } = await removeFromCart(id) 
        console.log(data)
        dispatch({
            type: REMOVE_ITEM,
            payload: data
        })
    }    
};

//add qt action
export const addQuantity = (id, qty) => {

    return async (dispatch) => {
        let option ={
            quantity: qty
        }
        let { data, success } = await updateItemCart(id, option)
        if(success){
            dispatch({
                type: ADD_QUANTITY,
                payload: data
            })
        }        
    }
};

//subtract qt action
export const subtractQuantity = (id, qty) => {    
    return async (dispatch) => {
        dispatch({type: PROCESS_CART})
        let option ={
            quantity: qty
        }
        let { data, success } = await updateItemCart(id, option)
        if(success){
            dispatch({
                type: ADD_QUANTITY,
                payload: data
            })
        }      
    }
};

export const currentCart = () =>{    
    return async (dispatch) =>{
        dispatch({type: PROCESS_CART})
        const cart = await getCart()        
        dispatch({type: SET_CART, payload: cart.data})
    }
}