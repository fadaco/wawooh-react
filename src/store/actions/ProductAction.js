import { SERVER_REQUEST } from "../../shared/Backend";
import { ApiEndpoints } from "../../config";
import {
    LOAD_NEW_ARRIVALS,
    LOAD_NEW_ARRIVALS_SUCCESS,
    LOAD_NEW_ARRIVALS_FAIL,
    UPDATE_PRODUCT_VALUES,
    FREQUENTLY_BOUGHT_FAIL,
    FREQUENTLY_BOUGHT_SUCCESS,
    LOAD_PRODUCT,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAIL,
    RESET_PRODUCT_LIST,
    RESET_SEARCH_LIST,
    LOAD_MORE_PRODUCT, 
    GET_PRODUCT_DETAILS, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL, 
    SEARCHING_SUCCESS, 
    SEARCHING_FAILED, 
    SEARCHING_PRODUCT
} from "../Constants";
import {LOGGER} from "../../shared/Methods";
import {defaultDetails} from "./ProductDetailsAction";

export const updateProductValues = (key, value) => ({
    type: UPDATE_PRODUCT_VALUES,
    key, value
});

export const getProductList = (body, list) => async (dispatch) => {
    LOGGER('getProductList body', body);
    if (list.length < 1) {
        dispatch({ type: LOAD_PRODUCT });
    } else {
        dispatch({ type: LOAD_MORE_PRODUCT });
    }

    const response = await SERVER_REQUEST(ApiEndpoints.GET_PRODUCT_BY_CATEGORY, 'post', body);

    if (response.status === '00') {
        dispatch({ type: LOAD_PRODUCT_SUCCESS, data: response.data })
    } else {
        dispatch({ type: LOAD_PRODUCT_FAIL, message: response.message });
    }
};

export const getSubCategoryProducts = (body, list) => async (dispatch) => {
    if (list.length < 1) dispatch({ type: LOAD_PRODUCT });
    const response = await SERVER_REQUEST(ApiEndpoints.GET_PRODUCT_BY_SUBCATEGORY, 'post', body);

    if (response.status === '00') {
        dispatch({ type: LOAD_PRODUCT_SUCCESS, data: response.data });
    } else {
        dispatch({ type: LOAD_PRODUCT_FAIL, message: response.message });
    }
};

export const getNewArrivals = (body, list) => async (dispatch) => {
    if (list.length < 1) {
        dispatch({ type: LOAD_NEW_ARRIVALS });
    } else {
        dispatch({ type: LOAD_MORE_PRODUCT });
    }

    const response = await SERVER_REQUEST(ApiEndpoints.GET_NEW_ARRIVALS, 'post', body);
    if (response.status === '00') {
        dispatch({ type: LOAD_NEW_ARRIVALS_SUCCESS, data: response.data });
    } else {
        dispatch({ type: LOAD_NEW_ARRIVALS_FAIL, message: response.message });
    }
};

export const getFrequentlyBought = () => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.FREQUENTLY_BOUGHT, 'get', null);
    if (response.status === '00') {
        dispatch({ type: FREQUENTLY_BOUGHT_SUCCESS, data: response.data });
    } else {
        dispatch({ type: FREQUENTLY_BOUGHT_FAIL, message: response.message });
    }
};

export const getProductDetails = (productId) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_DETAILS });
    const response = await SERVER_REQUEST(ApiEndpoints.GET_PRODUCT_DETAILS(productId), 'get', null);
    LOGGER(ApiEndpoints.GET_PRODUCT_DETAILS(productId), response);

    if (response.status === '00') {
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, data: response.data });
        dispatch(defaultDetails(response.data));
    } else {
        dispatch({ type: PRODUCT_DETAILS_FAIL, message: response.message });
    }
};

export const resetProductList = () => ({
    type: RESET_PRODUCT_LIST
});

export const resetSearchList = () => ({
    type: RESET_SEARCH_LIST
});

export const loadMoreProduct = () => ({
    type: LOAD_MORE_PRODUCT
});

export const searchProduct = (body, list) => async (dispatch) => {
    if (list.length < 1) {
        dispatch({ type: SEARCHING_PRODUCT });
    } else {
        dispatch({ type: LOAD_MORE_PRODUCT });
    }

    const response = await SERVER_REQUEST(ApiEndpoints.PRODUCT_SEARCH, 'post', body);

    if (response.status === 200) {
        dispatch({ type: SEARCHING_SUCCESS, data: response.data });
    } else {
        dispatch({ type: SEARCHING_FAILED, message: response.message });
    }
};

export const loadMoreSearch = (body, list) => dispatch => {
    dispatch(searchProduct(body, list));
};
