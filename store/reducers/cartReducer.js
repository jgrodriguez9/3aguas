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
    FAIL_PROCESS_CART
} from '../constants/cartConstant';

const cartItemsFromStorage = cookie.get('3aguas_commerce_items') ? JSON.parse(cookie.get('3aguas_commerce_items'))  : []
let newTotal = cartItemsFromStorage.length ? cartItemsFromStorage.reduce((acc, obj) => acc + (obj.newPrice * obj.quantity), 0) : 0
const initState = {
    loading: false,
    products: [],
    addedItems:cartItemsFromStorage,
    total: newTotal,
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
        case FAIL_PROCESS_CART:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_QUANTITY_WITH_NUMBER:
            //check if exist
            const allItems = [...state.addedItems]
            const itemSelected = action.payload.product
            let existed_item= state.addedItems.findIndex(item=> item.id === itemSelected.id)
            
            if(existed_item >= 0){
                let obj = Object.assign({}, allItems[existed_item])
                obj.quantity = allItems[existed_item].quantity + itemSelected.quantity
                allItems[existed_item] = obj

                let newTotal = allItems.reduce((acc,obj) => (
                    acc + (obj.newPrice * obj.quantity)
                ), 0)
                return {
                    ...state,
                    addedItems: allItems,
                    total: newTotal,
                    loading: false
                }

            }else{
                let allItems = [...state.addedItems, itemSelected]
                let newTotal = allItems.reduce((acc,obj) => (
                    acc + (obj.newPrice * obj.quantity)
                ), 0)
                return {
                    ...state,
                    addedItems: allItems,
                    total: newTotal,
                    loading: false
                }
            }
        case REMOVE_ITEM:
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.newPrice * itemToRemove.quantity );

            return {
                ...state,
                addedItems: new_items,
                total: newTotal
        }      
        case ADD_QUANTITY:
            let addedItem = state.addedItems.find(item=> item.id === action.id)
            addedItem.quantity += 1 
            
            return {
                ...state,
                total: state.total + addedItem.newPrice
            }
        case SUB_QUANTITY:
            let addedItemS = state.addedItems.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(addedItemS.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                return {
                    ...state,
                    addedItems: new_items,
                    total: state.total - addedItemS.newPrice
                }
            } else {
                addedItemS.quantity -= 1
                return {
                    ...state,
                    total: state.total - addedItemS.newPrice
                }
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