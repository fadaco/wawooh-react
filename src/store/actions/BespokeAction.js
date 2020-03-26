import { 
    LOAD_STYLES_CATALOGUES,
    LOAD_MORE_PRODUCT,
    LOAD_STYLES_CATALOGUES_SUCCESS,
    LOAD_STYLES_CATALOGUES_FAIL,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_FAIL,
    UPDATE_STYLES_VALUES,
    LOAD_BESPOKE_PRODUCT,
    LOAD_BESPOKE_PRODUCT_FAILURE,
    LOAD_BESPOKE_PRODUCT_SUCCESS
} from "../Constants";

import { SERVER_REQUEST } from "../../shared/Backend";
import { ApiEndpoints } from "../../config";
import { LOGGER } from "../../shared/Methods";

export const bespokeValues = (key, value) => ({
    type: UPDATE_STYLES_VALUES,
    key, value
});

export const styleCatalogue = (body, list) => async(dispatch) => {
    if(list.length < 1) {
        dispatch({ type: LOAD_STYLES_CATALOGUES})
    } else {
        dispatch({ type: LOAD_MORE_PRODUCT})
    }
    const response = await SERVER_REQUEST(ApiEndpoints.STYLE_CATALOGUES,'POST',body);
    LOGGER(ApiEndpoints.STYLE_CATALOGUES, response);
    if(response.status === '00') {
        dispatch({type: LOAD_STYLES_CATALOGUES_SUCCESS, data: response.data})
    } else {
        dispatch({type: LOAD_STYLES_CATALOGUES_FAIL, message: response.message})
    }
}

export const addBespokeRequest = (data, history) => async(dispatch) => {

    const response = await SERVER_REQUEST(ApiEndpoints.ADD_BESPOKE_REQUEST, 'post', data);
    LOGGER(ApiEndpoints.ADD_BESPOKE_REQUEST, response);
    if(response.status === '00') {
        dispatch({type: ADD_REQUEST_SUCCESS, data: response.data})
        history.push('/thank-you');
    } else {
        dispatch({type: ADD_REQUEST_FAIL, message: response.message})
    }
}

export const getBespokeProduct = (body, list) => async (dispatch) => {
    if(list.length < 1) {
        dispatch({ type: LOAD_BESPOKE_PRODUCT})
    } else {
        dispatch({type: LOAD_MORE_PRODUCT})
    }

    const response = await SERVER_REQUEST(ApiEndpoints.BESPOKE_PRODUCTS_ONLY, 'POST', body);
    LOGGER(ApiEndpoints.BESPOKE_PRODUCTS_ONLY, response);
    if(response.status === '00') {
        dispatch({type: LOAD_BESPOKE_PRODUCT_SUCCESS, data: response.data})
    } else {
        dispatch({type: LOAD_BESPOKE_PRODUCT_FAILURE, message: response.message})
    }
}