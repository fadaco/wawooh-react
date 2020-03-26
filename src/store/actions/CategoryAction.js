import { SERVER_REQUEST } from '../../shared/Backend';
import { ApiEndpoints } from '../../config';
import { SET_CATEGORIES, SET_SELECTED_CATEGORY } from '../Constants';
import { GET_SAVED_CATEGORIES, SAVE_CATEGORIES } from '../../shared/Storage';
import { getProductList } from './ProductAction';

export const getCategories = () => {
    return async (dispatch) => {
        const data = GET_SAVED_CATEGORIES();
        if (data) {
            dispatch(setCatReducer(data));
        }

        const response = await SERVER_REQUEST(ApiEndpoints.CATEGORIES, 'get', null);
        SAVE_CATEGORIES(response.data);
        dispatch(setCatReducer(response.data));
    }
};

export const setCatReducer = (data) => ({
    type: SET_CATEGORIES,
    payload: data
});

export const setSelectedCategory = (catName, list, page, size, prodList) => dispatch => {
    const arrayList = list.length > 0 ? list : GET_SAVED_CATEGORIES();
    const newArray = arrayList.filter((item) => item.categoryName.toLowerCase() === catName.toLowerCase());

    dispatch({ type: SET_SELECTED_CATEGORY, payload: newArray[0] });
    const body = { page, size, categoryId: newArray[0].id, currency: 'NGN' };
    dispatch(getProductList(body, prodList));
};

export const setSelectedCat = (catName, list) => dispatch => {
    const arrayList = list.length > 0 ? list : GET_SAVED_CATEGORIES();
    const newArray = arrayList.filter((item) => item.categoryName.toLowerCase() === catName.toLowerCase());

    dispatch({ type: SET_SELECTED_CATEGORY, payload: newArray[0] });
};
