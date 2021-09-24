import commerce from "../config/commerce"

export const getOrders = async (idCustomer) =>{

    try {
        let orders = await commerce.customer.getOrders(idCustomer)
        return {
            success: true,
            orders: orders.data
        }
        return orders.data
    } catch (error) {
        return {
            success: true,
            orders: [],
            error: "error"
        }
    }    
}