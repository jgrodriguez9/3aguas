import { parseProduct } from "../../utils/parseProduct";
import commerce from "../config/commerce"

export const getProducts = async () =>{

    try {
        let products = await commerce.products.list()
        let arrayProduct = [];
        if(products.data.length > 0){            
            products?.data?.forEach(productsObj => {
                let parseP = parseProduct(productsObj)
                arrayProduct.push(parseP);
            });
        }
        return {
            success: true,
            data: arrayProduct
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: "error"
        }
    }    
}

export const getProductById = async (id) =>{

    let product = await commerce.products.retrieve(id)
    let parseP = parseProduct(product)
    try {
        return {
            success: true,
            data: parseP
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: "error"
        }
    }


}