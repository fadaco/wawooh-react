import {
    LOAD_PRODUCT,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAIL,
    SELECT_PRODUCT,
    SET_PRODUCT_VALUES,
    LOAD_NEW_ARRIVALS,
    LOAD_NEW_ARRIVALS_SUCCESS,
    LOAD_NEW_ARRIVALS_FAIL,
    UPDATE_PRODUCT_VALUES,
    FREQUENTLY_BOUGHT_SUCCESS,
    FREQUENTLY_BOUGHT_FAIL,
    RESET_PRODUCT_LIST,
    LOAD_MORE_PRODUCT,
    GET_PRODUCT_DETAILS,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    SEARCHING_PRODUCT,
    SEARCHING_SUCCESS,
    SEARCHING_FAILED, 
    RESET_SEARCH_LIST
} from "../Constants";

const INITIAL_VALUES = {
    productList: [],
    loading: false,
    productId: '',
    productName: '',
    getProductError: '',
    page: 0,
    size: 24,
    newInPage: 0,
    newInSize: 24,
    newInList: [],
    freqBoughtList: [],
    freqBoughtError: '',
    loadMore: false,
    productData: {},
    loadingDetails: false,
    detailsError: '',
    searching: false,
    searchResult: [],
    searchError: '',
};

export default (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case LOAD_MORE_PRODUCT:
            return { ...state, loadMore: true };
        case LOAD_PRODUCT:
            return { ...state, loading: true, getProductError: '' };
        case LOAD_PRODUCT_SUCCESS:
            return { ...state, loading: false, loadMore: false, productList: [ ...state.productList, ...action.data ] };
        case LOAD_PRODUCT_FAIL:
            return { ...state, loading: false, loadMore: false, getProductError: action.message };
        case SELECT_PRODUCT:
            return { ...state, productId: action.productId, productName: action.productName };
        case SET_PRODUCT_VALUES:
            return { ...state, [action.key]: action.value };
        case LOAD_NEW_ARRIVALS:
            return { ...state, loadingNewIn: true, newInError: '' };
        case LOAD_NEW_ARRIVALS_SUCCESS:
            return { ...state, loadingNewIn: false, loadMore: false, newInList: [...state.newInList, ...action.data] };
        case LOAD_NEW_ARRIVALS_FAIL:
            return { ...state, loadingNewIn: false, loadMore: false, newInError: action.message };
        case UPDATE_PRODUCT_VALUES:
            return { ...state, [action.key]: action.value };
        case FREQUENTLY_BOUGHT_SUCCESS:
            return { ...state, freqBoughtList: action.data };
        case FREQUENTLY_BOUGHT_FAIL:
            return { ...state, freqBoughtError: action.message };
        case RESET_PRODUCT_LIST:
            return { ...state, productList: [], page: 0, loading: true };
        case GET_PRODUCT_DETAILS:
            return { ...state, loadingDetails: true, detailsError: '' };
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loadingDetails: false, productData: action.data };
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loadingDetails: false, detailsError: action.message };
        case SEARCHING_PRODUCT:
            return { ...state, searching: true, searchError: '' };
        case SEARCHING_SUCCESS:
            return { ...state, searching: false, loadMore: false, searchResult: [...state.searchResult, ...action.data ]};
        case SEARCHING_FAILED:
            return { ...state, searching: false, loadMore: false, searchError: action.message };
        case RESET_SEARCH_LIST:
            return { ...state, searchResult: []  };
        default:
            return state;
    }
}
