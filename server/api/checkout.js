import commerce from "../config/commerce"

export const checkoutGenerateTokenAPI = async (idCart) =>{
    try {
        let checkout = await commerce.checkout.generateToken(idCart, { type: 'cart' })
        return {
            success: true,
            data: checkout,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: {},
            error: error
        }
    }
}

export const getAllCountriesToShipping = async (idCheckout) =>{
    try {
        let { countries } = await commerce.services.localeListShippingCountries(idCheckout);
        return {
            success: true,
            data: countries,
            error: null
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
            data: subdivisions,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: error
        }
    }
}

export const getShippingOptionsAPI = async (idCheckout, country = 'MX') =>{
    try {
        let option = { country: country }
        let shipping = await commerce.checkout.getShippingOptions(idCheckout, option);
        return {
            success: true,
            data: shipping,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: error
        }
    }
}

export const setShippingOptionsAPI = async (idCheckout, shippingOptionId, country, region) =>{
    try {
        let resp = await commerce.checkout.checkShippingOption(idCheckout, {
            shipping_option_id: shippingOptionId,
            country,
            region,
        });
        return {
            success: true,
            data: resp,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: error
        }
    }
}

export const setDiscountCodeAPI = async (idCheckout, code) =>{
    try {
        let resp = await commerce.checkout.checkDiscount(idCheckout, { code });
        return {
            success: true,
            data: resp,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: error
        }
    }
}

export const captureOrderAPI = async (idCheckout, order) =>{
    try {
        let resp = await commerce.checkout.capture(idCheckout, order);
        return {
            success: true,
            data: resp,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: [],
            error: error
        }
    }
}