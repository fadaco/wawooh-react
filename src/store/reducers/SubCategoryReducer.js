import {
    LOADING_SUB_CATEGORY_PRODUCTS,
    SET_SUB_CATEGORY_VALUES,
    SUB_CATEGORY_PRODUCTS_FAIL,
    SUB_CATEGORY_PRODUCTS_SUCCESS,
    RESET_SUBCATEGORY_VALUES,
    LOAD_MORE_SUB
} from "../Constants";

const INITIAL_VALUES = {
    loading: false,
    loadMore: false,
    productList: [],
    error: '',
    page: 0,
    size: 24
};

export default (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case LOADING_SUB_CATEGORY_PRODUCTS:
            return { ...state, loading: true, error: '' };
        case SUB_CATEGORY_PRODUCTS_SUCCESS:
            return { ...state, loading: false, loadMore: false, productList: [...state.productList, ...action.list] };
        case SUB_CATEGORY_PRODUCTS_FAIL:
            return { ...state, loading: false, loadMore: false, error: action.message };
        case SET_SUB_CATEGORY_VALUES:
            return { ...state, [action.key]: action.value };
        case RESET_SUBCATEGORY_VALUES:
            return { ...INITIAL_VALUES, loading: true };
        case LOAD_MORE_SUB:
            return { ...state, loadMore: true, page: action.page };
        default:
            return state;
    }
}