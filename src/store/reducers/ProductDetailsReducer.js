import {PRODUCT_COLOR_CHANGE, SET_DETAILS_DEFAULT, SET_DETAILS_VALUES} from "../Constants";

const INITIAL_VALUES = {
    imageList: [],
    focusedImage: { id: null, picture: '' },
    sizeList: [],
    selectedSize: { id: null, name: '' },
    colorStyleDTO: { id: null, colourName: '', colourPicture: '' },
};

export default (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case SET_DETAILS_DEFAULT:
            return {
                ...state,
                imageList: action.imageList,
                colorStyleDTO: action.colorStyleDTO,
                sizeList: action.sizeList,
                focusedImage: action.focusedImage
            };
        case PRODUCT_COLOR_CHANGE:
            return {
                ...state,
                imageList: action.imageList,
                colorStyleDTO: action.colorStyleDTO,
                sizeList: action.sizeList,
                focusedImage: action.focusedImage,
                selectedSize: action.selectedSize
            };
        case SET_DETAILS_VALUES:
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
}