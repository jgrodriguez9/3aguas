import commerce from "../../server/config/commerce";
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_FAILURE, PRODUCT_LIST_SUCCESS} from "../constants/commerceConstant";


export const request = (typeRequest) => {
    return {
        type: typeRequest
    }
};

export const failure = (typeRequest, error) => {
    return {
        type: typeRequest,
        payload: error
    }
};

export const successProducts = (productsResult) => {
    let arrayProduct = [];
    productsResult?.data?.forEach(productsObj => {
        let parseProduct = {};
        parseProduct.id = productsObj.id;
        parseProduct.description = productsObj.description;
        parseProduct.discount = false;
        parseProduct.discountOff = 0;
        parseProduct.imageHoverUrl = "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover4-1588705109913.jpg";
        parseProduct.imageUrl = "https://demaxin.s3.ap-south-1.amazonaws.com/img4-1588705104640.jpg";
        parseProduct.newPrice = productsObj.price.raw;
        parseProduct.newProduct = false;
        parseProduct.offer =false;
        parseProduct.oldPrice = 150;
        parseProduct.onSale = false;
        parseProduct.title = productsObj.name;
        parseProduct.type = "Women Clothes";
        arrayProduct.push(parseProduct);
    });

    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: arrayProduct
    }
};


export const getProductList = () => {
    return (dispatch) => {
        dispatch(request(PRODUCT_LIST_REQUEST));

        //make http request
        commerce.products.list()
            .then((productResult) => {
                dispatch(successProducts(productResult));
            }).catch(error => {
            dispatch(failure(PRODUCT_LIST_REQUEST_FAILURE, error));
        });
    }
};