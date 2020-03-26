import {
    LOADING_SUB_CATEGORY_PRODUCTS,
    SUB_CATEGORY_PRODUCTS_FAIL,
    SUB_CATEGORY_PRODUCTS_SUCCESS,
    SET_SUB_CATEGORY_VALUES, RESET_SUBCATEGORY_VALUES,
    LOAD_MORE_SUB
} from "../Constants";
import {SERVER_REQUEST} from "../../shared/Backend";
import {ApiEndpoints} from "../../config";

export const getSubCategoryProducts = (body, list, page) => async (dispatch) => {
    if (list.length < 1) {
        dispatch({ type: LOADING_SUB_CATEGORY_PRODUCTS });
    } else {
        dispatch({ type: LOAD_MORE_SUB, page: page + 1 });
        body.page = page + 1;
    }
    const response = await SERVER_REQUEST(ApiEndpoints.GET_PRODUCT_BY_SUBCATEGORY, 'post', body);

    if (response.status === '00') {
        dispatch({ type: SUB_CATEGORY_PRODUCTS_SUCCESS, list: response.data });
    } else {
        dispatch({ type: SUB_CATEGORY_PRODUCTS_FAIL, message: response.message });
    }
};

export const setSubCategoryValues = (key, value) => ({
    type: SET_SUB_CATEGORY_VALUES,
    key, value
});

export const resetSubCategoryValues = () => ({
    type: RESET_SUBCATEGORY_VALUES
});