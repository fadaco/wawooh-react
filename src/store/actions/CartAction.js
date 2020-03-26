import {ADD_CART_ITEM, CART_COUNT, GET_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART} from "../Constants";
import {SERVER_REQUEST} from "../../shared/Backend";
import {SAVE_CART, GET_CART, GET_TOKEN, CLEAR_STORED_CART} from "../../shared/Storage";
import {ApiEndpoints} from '../../config';
import {LOGGER} from '../../shared/Methods';

export const addToCart = (dataItem, history) => (dispatch) => {

    if (GET_TOKEN()) {
        SERVER_REQUEST(ApiEndpoints.ADD_TO_CART, 'post', dataItem).then((response) => {
            dispatch({
                type: CART_COUNT,
                payload: response.data
            });
            history.push('/checkout');
        }).catch((error) => {
            console.log(error);
        })
    } else {
        SERVER_REQUEST(ApiEndpoints.GET_PRODUCT_DETAILS(dataItem.productId), 'get', null).then((response) => {
            let cart = [];
            response.data.productPicture = response.data.productColorStyleDTOS[0].productPictureDTOS[0].picture;
            response.data.productSizeId = dataItem.productSizeId;
            response.data.productName = response.data.name;
            response.data.quantity = dataItem.quantity;
            response.data.size = dataItem.size;
            response.data.productColorStyleId = dataItem.productColorStyleId;
            if (GET_CART().length < 1) {
                cart.push(response.data);
                SAVE_CART(JSON.stringify(cart));
                const data = GET_CART();
                dispatch({
                    type: ADD_CART_ITEM,
                    payload: data
                });
                history.push('/checkout');
            } else {
                let cart = GET_CART();
                cart.push(response.data);
                SAVE_CART(JSON.stringify(cart));
                let c = GET_CART();
                dispatch({
                    type: ADD_CART_ITEM,
                    payload: c
                });
                history.push('/checkout');
            }
        });
    }
};


export const fetchCart = () => async (dispatch) => {
    if (GET_TOKEN()) {
        const cart = await SERVER_REQUEST(ApiEndpoints.GET_CART, 'get', null);
        if (cart.status === '00') {
            dispatch({
                type: GET_CART_ITEM,
                payload: cart.data.cartItems,
                totalCart: cart.data.totalPrice
            })
        } else if (cart.status === '99') {

        }
    } else {
            const data =  GET_CART();
            if(data.length > 0) {
                let sum = 0;
                for(let i = 0; i < data.length; i++){
                    sum += data[i].amount;
                }
                dispatch({
                    type: GET_CART_ITEM,
                    payload: data,
                    totalCart: sum
                });
            }

    }
};

export const emptyCart = () => async (dispatch, history) => {
    if(GET_TOKEN()) {
        SERVER_REQUEST(ApiEndpoints.EMPTY_CART, 'get', null).then((response) => {
            dispatch({
                type: CLEAR_CART
            });
            history.push('/cart');
            
        }).catch((error) => {
            console.log(error);
        })
    } else {
        dispatch({ type: CLEAR_CART });
        CLEAR_STORED_CART();
    }
}

export const removeCartItem = (id, history) => async (dispatch) => {
    if(GET_TOKEN()) {
        const response = await SERVER_REQUEST(ApiEndpoints.DELETE_CART_ITEM(id), 'get', null);
        if(response.status === '00') {
            dispatch({
                type: REMOVE_CART_ITEM,
                payload: response.data.cartItems,
                totalCart: response.data.totalPrice
            });
            LOGGER('CLEAR CART', response.data);
            history.push('/cart');
        } else if(response.status === '99') {
            LOGGER('CLEAR CART', response.message);
        }
    }
}
