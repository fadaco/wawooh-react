import {PRODUCT_COLOR_CHANGE, SET_DETAILS_DEFAULT, SET_DETAILS_VALUES} from "../Constants";

export const defaultDetails = (data) => dispatch => {
    dispatch({
        type: SET_DETAILS_DEFAULT,
        colorStyleDTO: data.productColorStyleDTOS[0],
        sizeList: data.productColorStyleDTOS[0].productSizes,
        imageList: data.productColorStyleDTOS[0].productPictureDTOS,
        focusedImage: data.productColorStyleDTOS[0].productPictureDTOS[0]
    })
};

export const setDetailsValue = (key, value) => ({
    type: SET_DETAILS_VALUES,
    key,  value
});

export const onColorSelect = (item) => ({
    type: PRODUCT_COLOR_CHANGE,
    colorStyleDTO: item,
    sizeList: item.productSizes,
    imageList: item.productPictureDTOS,
    focusedImage: item.productPictureDTOS[0],
    selectedSize: { id: null, name: '' }
});