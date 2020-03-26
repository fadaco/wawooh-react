import {
    PRODUCT_TYPE_CHANGED,
    SET_DRAWER_VALUES,
    RESET_DRAWER_VALUES,
    TOGGLE_DRAWER
} from "../Constants";

const INITIAL_VALUES = {
    selectedDrawer: 'initial',
    productTypeId: null,
    categoryId: null,
    categoryName: '',
    subCategory: [],
    showDrawer: false,
};

export default (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case SET_DRAWER_VALUES:
            return { ...state, [action.key]: action.value };
        case PRODUCT_TYPE_CHANGED:
            return {
                ...state,
                productTypeId: action.productTypeId,
                subCategory: action.subCategory
            };
        case RESET_DRAWER_VALUES:
            return { ...INITIAL_VALUES, selectedDrawer: 'initial', showDrawer: true };
        case TOGGLE_DRAWER:
            return { ...state, showDrawer: action.value };
        default:
            return state;
    }
}