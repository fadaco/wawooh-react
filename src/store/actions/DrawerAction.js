import {PRODUCT_TYPE_CHANGED, RESET_DRAWER_VALUES, SET_DRAWER_VALUES, TOGGLE_DRAWER} from "../Constants";

export const setDrawerValues = (key, value) => ({
    type: SET_DRAWER_VALUES,
    key, value
});

export const resetDrawerValues = () => ({
    type: RESET_DRAWER_VALUES
});

export const getSubCategoryList = (productTypeId, selectedSub) => dispatch => {
    const newArray = selectedSub.subCategories.filter((item) => {
        return item.productType === productTypeId && item.delFlag !== 'Y'
    });
    dispatch({ type: PRODUCT_TYPE_CHANGED, productTypeId, subCategory: newArray });
};

export const toggleDrawer = (value) => ({
    type: TOGGLE_DRAWER,
    value
});