import {
    CART_COUNT, 
    SET_CUSTOMIZE_VALUES,
    ADDING_CUSTOMIZE_TO_CART,
    ADDING_CUSTOMIZE_TO_CART_FAIL,
    ADDING_CUSTOMIZE_TO_CART_SUCCCESS
} from "../Constants";

import { SERVER_REQUEST } from "../../shared/Backend";
import { ApiEndpoints } from "../../config";
import { LOGGER } from "../../shared/Methods";
import {GET_TOKEN} from "../../shared/Storage";

export const customizeInput = (key, value) => {
    return {
        type: SET_CUSTOMIZE_VALUES,
        key, value
    }
};

export const addCustomizeItemToCart = (data, history) => {
    LOGGER('customise', data);
    return async (dispatch) => {
        dispatch({type: ADDING_CUSTOMIZE_TO_CART, payload: true})

        if(GET_TOKEN('token') !== null) {
            const response = await SERVER_REQUEST(ApiEndpoints.ADD_TO_CART, 'POST', data);
            dispatch({type:CART_COUNT, payload: false});
            LOGGER(ApiEndpoints.ADD_TO_CART, response);
            if(response.status === '00') {
                dispatch({type: ADDING_CUSTOMIZE_TO_CART_SUCCCESS, payload: response.data})
                history.push('/cart');
            } else {
                dispatch({type: ADDING_CUSTOMIZE_TO_CART_FAIL, message: response.message})
            }
        } else {
            console.log('error');
        }
    }
}

// export const updateStylesValues = (key, value) => ({
//     type: UPDATE_STYLES_VALUES,
//     key, value
// });

// export const styleCatalogue = (body, list) => async(dispatch) => {
//     if(list.length < 1) {
//         dispatch({ type: LOAD_STYLES_CATALOGUES})
//     } else {
//         dispatch({ type: LOAD_MORE_PRODUCT})
//     }
//     const response = await SERVER_REQUEST(ApiEndpoints.STYLE_CATALOGUES,'POST',body);
//     LOGGER(ApiEndpoints.STYLE_CATALOGUES, response);
//     if(response.status === '00') {
//         dispatch({type: LOAD_STYLES_CATALOGUES_SUCCESS, data: response.data})
//     } else {
//         dispatch({type: LOAD_STYLES_CATALOGUES_FAIL, message: response.message})
//     }
// }