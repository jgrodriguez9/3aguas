
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_FAILURE, PRODUCT_LIST_SUCCESS} from "../constants/commerceConstant";

const initState = {
    loading: false,
    products: [],
    categories: [],
    customers: [],
    error: '',
};


export const productReducer = (state = initState, action) => {

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{
                ...state,
                loading: true
            };
        case PRODUCT_LIST_SUCCESS:
            return{
                loading: false,
                products: action.payload,
                error: ''
            };
        case PRODUCT_LIST_REQUEST_FAILURE:
            return{
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};