import commerce from "../config/commerce"

export const addToCart = async (productId, quantity, variantData) =>{
    try {
        if(variantData){
            let {cart, success } = await commerce.cart.add(productId,quantity,variantData)
            if(success){
                return{
                    success: true,
                    data: cart
                }
            }else{
                return {
                    success: false,
                    data: {},
                    error: "error_no_add_cart_item"
                } 
            }
        }else{
            let {cart, success } = await commerce.cart.add(productId,quantity)
            if(success){
                return{
                    success: true,
                    data: cart
                }
            }else{
                return {
                    success: false,
                    data: {},
                    error: "error_no_add_cart_item"
                } 
            }
        }
    } catch (error) {
        return {
            success: false,
            data: {},
            error: "error"
        }
    }
}

export const getCart = async () =>{
    try {
        let cart = await commerce.cart.retrieve();
        //console.log(cart)
        return {
            success: true,
            data: cart
        }
    } catch (error) {
        return {
            success: false,
            data: {},
            error: "error"
        }
    }
}

export const updateItemCart = async (itemId, option) =>{
    
    try {
        let { cart, success } = await commerce.cart.update(itemId, option)

        if(success){
            return{
                success: true,
                data: cart
            }
        }else{
            return{
                success: false,
                data: {}
            }
        }
        
    } catch (error) {
        return {
            success: false,
            data: {},
            error: "error"
        }
    }
}

export const removeFromCart = async (itemId) =>{
    try {
        let { cart, success } = await commerce.cart.remove(itemId) 
        console.log(cart)
        if(success){
            return{
                success: true,
                data: cart
            }
        }else{
            return{
                success: false,
                data: {},
                error: "error_not_cart_item_remove"
            }
        }
        
    } catch (error) {
        return {
            success: false,
            data: {},
            error: "error"
        }
    }
    
}