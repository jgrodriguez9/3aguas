import { getProductById } from '../../server/api/products';
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
    FAIL_PROCESS_CART
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
export const addQuantityWithNumber = (id, qty) => {

    try {
        return async(dispatch, getState) => {
            dispatch({ type: PROCESS_CART })
            const { data } = await getProductById(id)

            let objCart = {
                id: data.id,
                title: data.title,
                quantity:  qty,
                newPrice: data.newPrice,
                imageUrl: data.imageUrl
            }

            dispatch({
                type: ADD_QUANTITY_WITH_NUMBER,
                payload:{
                    product: objCart,
                }
            })    
            cookie.set('3aguas_commerce_items',JSON.stringify(getState().cartReducer.addedItems))
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

    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_ITEM,
            id
        })
        cookie.set('3aguas_commerce_items',JSON.stringify(getState().cartReducer.addedItems))
    }    
};

//add qt action
export const addQuantity = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_QUANTITY,
            id
        })        
        cookie.set('3aguas_commerce_items',JSON.stringify(getState().cartReducer.addedItems))
    }
};

//subtract qt action
export const subtractQuantity = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: SUB_QUANTITY,
            id
        })        
        cookie.set('3aguas_commerce_items',JSON.stringify(getState().cartReducer.addedItems))
    }
};