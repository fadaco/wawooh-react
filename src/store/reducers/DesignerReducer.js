import {
    DESIGNER_PRODUCT_FAIL,
    DESIGNER_PRODUCT_SUCCESS,
    LOADING_DESIGNER_PRODUCT,
    LOGO_FETCH_FAIL,
    LOGO_FETCH_SUCCESS
} from "../Constants";

const INITIAL_VALUES = {
    logoList: [],
    logoError: '',
    productList: [],
    loading: false,
    page: 0,
    size: 24
};

export default (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case LOADING_DESIGNER_PRODUCT:
            return  { ...state, loading: true };
        case DESIGNER_PRODUCT_SUCCESS:
            return  { ...state, loading: false, productList: action.data };
        case DESIGNER_PRODUCT_FAIL:
            return  { ...state, loading: false, message: action.message };
        case LOGO_FETCH_SUCCESS:
            return { ...state, logoError: '', logoList: action.data };
        case LOGO_FETCH_FAIL:
            return { ...state, logoError: action.message };
        default:
            return state;
    }
}