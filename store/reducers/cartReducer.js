import cookie from 'js-cookie';
import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_PRODUCTS,
    PROCESS_CART,
    FAIL_PROCESS_CART,
    SET_CART
} from '../constants/cartConstant';
import { GENERATE_TOKEN_CHECKOUT, GET_SHIPPING_OPTION, PROCESS_CHECKOUT } from '../constants/checkoutConstant';

const initState = {
    cart: {},
    checkout: null,
    shippingOptions: [],
    loading: false,
    products: [],
    addedItems:[],
    total: 0,
    shipping: 0,
    error: ''
};

const cartReducer = (state = initState, action) => {

    switch(action.type){
        case PROCESS_CART:
            return{
                ...state,
                loading: true
            }
        case SET_CART:
            return{
                ...state,
                loading: false,
                cart: action.payload
            }
        case FAIL_PROCESS_CART:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_QUANTITY_WITH_NUMBER:
            return {
                ...state,
                loading: false,
                cart: action.payload
            }
        case REMOVE_ITEM:
            return {
                ...state,
                loading: false,
                cart: action.payload
            }    
        case ADD_QUANTITY:
            return {
                ...state,
                loading: false,
                cart: action.payload
            }
        case SUB_QUANTITY:
            return {
                ...state,
                loading: false,
                cart: action.payload
            }   
        case PROCESS_CHECKOUT:
            return{
                ...state,
                loading: true
            }  
        case GENERATE_TOKEN_CHECKOUT:
            return{
                ...state,
                loading: false,
                checkout: action.payload
            }
        case GET_SHIPPING_OPTION:
            return{
                ...state,
                loading: false,
                shippingOptions: action.payload
            }
        default:
            return state
    }


    
    
    
    
    
    
    
    
    
    // if(action.type === ADD_PRODUCTS){
    //     let productsArray = [];
    //     // dbOrderRef.get()
    //     // .then(res => {
    //     //     res.forEach(doc => {
    //     //         let productsObj = doc.data();
    //     //         productsObj.id = doc.id;
    //     //         productsArray.push(productsObj)
    //     //     });
    //     // });

    //     return{
    //         ...state,
    //         products: data
    //     }
    // }
   
    // if(action.type === ADD_TO_CART){
    //     let addedItem = state.products.find(item => item.id === action.id)
    //     //check if the action id exists in the addedItems
    //     let existed_item= state.addedItems.find(item=> action.id === item.id)
    //     if(existed_item)
    //     {
    //         addedItem.quantity += 1 
    //         return {
    //             ...state,
    //             total: state.total + addedItem.newPrice 
    //         }
    //     } else {
    //         addedItem.quantity = 1;
    //         //calculating the total
    //         let newTotal = state.total + addedItem.newPrice 
            
    //         return {
    //             ...state,
    //             addedItems: [...state.addedItems, addedItem],
    //             total : newTotal
    //         }
            
    //     }
    // }

    // if(action.type === ADD_QUANTITY_WITH_NUMBER){
    //     let addedItem = state.products.find(item => item.id === action.id)
    //     //check if the action id exists in the addedItems
    //     let existed_item= state.addedItems.find(item=> action.id === item.id)
    //     if(existed_item)
    //     {
    //         addedItem.quantity += action.qty
    //         return {
    //             ...state,
    //             total: state.total + addedItem.newPrice * action.qty
    //         }
    //     } else {
    //         addedItem.quantity = action.qty;
    //         //calculating the total
    //         let newTotal = state.total + addedItem.newPrice * action.qty
            
    //         return {
    //             ...state,
    //             addedItems: [...state.addedItems, addedItem],
    //             total : newTotal
    //         }
            
    //     }
    // }
    

    // if(action.type === REMOVE_ITEM){
    //     let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    //     let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
    //     //calculating the total
    //     let newTotal = state.total - (itemToRemove.newPrice * itemToRemove.quantity );

    //     return {
    //         ...state,
    //         addedItems: new_items,
    //         total: newTotal
    //     }
    // }

    // if(action.type === ADD_QUANTITY){
    //     let addedItem = state.products.find(item=> item.id === action.id)
    //     addedItem.quantity += 1 
    //     let newTotal = state.total + addedItem.newPrice
    //     return {
    //         ...state,
    //         total: newTotal
    //     }
    // }

    // if(action.type === SUB_QUANTITY){  
    //     let addedItem = state.products.find(item=> item.id === action.id) 
    //     //if the qt == 0 then it should be removed
    //     if(addedItem.quantity === 1){
    //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
    //         let newTotal = state.total - addedItem.newPrice
    //         return {
    //             ...state,
    //             addedItems: new_items,
    //             total: newTotal
    //         }
    //     } else {
    //         addedItem.quantity -= 1
    //         let newTotal = state.total - addedItem.newPrice
    //         return {
    //             ...state,
    //             total: newTotal
    //         }
    //     }
        
    // }

    // if(action.type === ADD_SHIPPING){
    //     return {
    //         ...state,
    //         shipping: state.shipping += 30
    //     }
    // }

    // if(action.type === 'SUB_SHIPPING'){
    //     return {
    //         ...state,
    //         shipping: state.shipping -= 30
    //     }
    // }

    // if(action.type === RESET_CART){
    //     return {
    //         ...state,
    //         addedItems: [],
    //         total: 0,
    //         shipping: 0
    //     }
    // }
    
    // else {
    //     return state
    // }
}

export default cartReducer