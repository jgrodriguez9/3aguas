
import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_REQUEST_FAILURE, CATEGORY_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_REQUEST_FAILURE,
    PRODUCT_LIST_SUCCESS
} from "../constants/commerceConstant";
import rootReducers from "./rootReducer";

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
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            };
        case PRODUCT_LIST_REQUEST_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export const categoryReducer = (state = initState, action) => {

    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return{
                ...state,
                loading: true
            };
        case CATEGORY_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: action.payload,
                error: ''
            };
        case CATEGORY_LIST_REQUEST_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default productReducer