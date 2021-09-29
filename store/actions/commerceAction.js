import commerce from "../../server/config/commerce";
import {
    CATEGORY_LIST_REQUEST, CATEGORY_LIST_REQUEST_FAILURE, CATEGORY_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_REQUEST_FAILURE,
    PRODUCT_LIST_SUCCESS
} from "../constants/commerceConstant";


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


export const getProductList = () => {
    return (dispatch) => {
        dispatch(request(PRODUCT_LIST_REQUEST));
        //make http request
        commerce.products.list()
            .then((productResult) => {
                dispatch(successProducts(productResult));
            })
            .catch(error => {
            dispatch(failure(PRODUCT_LIST_REQUEST_FAILURE, error));
            });
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
        parseProduct.newPrice = productsObj.price.raw;
        parseProduct.newProduct = false;
        parseProduct.offer = false;
        parseProduct.oldPrice = productsObj.price.raw;
        parseProduct.onSale = false;
        parseProduct.title = productsObj.name;
        parseProduct.categories = productsObj.categories;
        parseProduct.variant_groups = productsObj.variant_groups;
        parseProduct.type = "Women Clothes";
        if (productsObj.assets.length === 0) { // Empty gallery images
            parseProduct.imageUrl = "https://demaxin.s3.ap-south-1.amazonaws.com/img6-1588705236520.jpg";
            parseProduct.imageHoverUrl = "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover6-1588705244164.jpg";
        }else {
            parseProduct.imageUrl = productsObj.assets[0].url;
            if (productsObj.assets.length > 1)
                parseProduct.imageHoverUrl = productsObj.assets[1].url;
        }
        arrayProduct.push(parseProduct);
    });

    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: arrayProduct
    }
};


export const successCategory = (categoryResult) => {
    let arrayCategory = [];
    arrayCategory = categoryResult?.data;

    return {
        type: CATEGORY_LIST_SUCCESS,
        payload: arrayCategory
    }
};
export const getCategoryList = () => {
    return (dispatch) => {
        dispatch(request(CATEGORY_LIST_REQUEST));

        //make http request
        commerce.categories.list()
            .then((categoryResult) => {
                dispatch(successCategory(categoryResult));
            }).catch(error => {
            dispatch(failure(CATEGORY_LIST_REQUEST_FAILURE, error));
        });
    }
};