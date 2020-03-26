import { SET_CATEGORIES, SET_SELECTED_CATEGORY } from "../Constants";

const INITIAL_VALUES = {
    categoryList: [],
    selectedCategory: {},
};

const categoryReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return { ...state, categoryList: action.payload };
        case SET_SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.payload };
        default:
            return state;
    }
};

export default categoryReducer;
