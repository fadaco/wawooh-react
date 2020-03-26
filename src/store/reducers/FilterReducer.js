import { SET_CATEGORIES, FILTER_SUBCATEGORY } from '../Constants';

const INITIAL_VALUES = {
    categoryList: [],
    selectedCategory: {},
    subCategory:{}
};

const categoryReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return { ...state, categoryList: action.payload };
        case FILTER_SUBCATEGORY:
            return { ...state, subCategory: action.payload };
        default:
            return state;
    }
};

export default categoryReducer;
