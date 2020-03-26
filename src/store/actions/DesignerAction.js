import {NEW_SERVER_REQUEST, SERVER_REQUEST} from "../../shared/Backend";
import {ApiEndpoints} from "../../config";
import {LOGO_FETCH_FAIL, LOGO_FETCH_SUCCESS, LOADING_DESIGNER_PRODUCT, DESIGNER_PRODUCT_SUCCESS, DESIGNER_PRODUCT_FAIL} from "../Constants";

export const getDesignerLogo = (body, logoList) => async (dispatch) => {
    if (logoList.length > 0) return;
    
    const response = await NEW_SERVER_REQUEST(ApiEndpoints.DESIGNER_LOGOS, 'post', body);
    if (response.status === 200) {
        dispatch({ type: LOGO_FETCH_SUCCESS, data: response.data });
    } else {
        dispatch({ type: LOGO_FETCH_FAIL, message: response.message });
    }
};

export const getDesignerProducts = (body, designerId) => async (dispatch) => {
    dispatch({ type: LOADING_DESIGNER_PRODUCT });

    // const response = await SERVER_REQUEST(ApiEndpoints.DESIGNER_PRODUCTS(designerId), 'get', null);
    const response = await SERVER_REQUEST(ApiEndpoints.DESIGNER_PRODUCTS(designerId), 'post', body);

    if (response.status === '00') {
        dispatch({ type: DESIGNER_PRODUCT_SUCCESS, data: response.data });
    } else {
        dispatch({ type: DESIGNER_PRODUCT_FAIL, message: response.message });
    }
};