import commerce from "../config/commerce"

export const checkoutGenerateTokenAPI = async (idCart) =>{
    try {
        let checkout = await commerce.checkout.generateToken(idCart, { type: 'cart' })
        //console.log(checkout)
        return {
            success: true,
            data: checkout
        }
    } catch (error) {
        return {
            success: false,
            data: {},
            error: "error"
        }
    }
}

export const getAllCountriesToShipping = async (idCheckout) =>{
    try {
        let { countries } = await commerce.services.localeListShippingCountries(idCheckout);
        return {
            success: true,
            data: countries
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: "error"
        }
    }
}

export const getAllRegionsToShippingForACountry = async (idCheckout, codeCountry) =>{
    try {
        let { subdivisions } = await commerce.services.localeListShippingSubdivisions(idCheckout, codeCountry);
        return {
            success: true,
            data: subdivisions
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: "error"
        }
    }
}

export const getShippingOptionsAPI = async (idCheckout, country = 'MX') =>{
    try {
        let option = {
            country: country
        }
        console.log(option)
        let shipping = await commerce.checkout.getShippingOptions(idCheckout, option);
        console.log(shipping)
        return {
            success: true,
            data: shipping
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: "error"
        }
    }
}