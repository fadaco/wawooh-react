import { GUEST_CHECKOUT, CLEAR_CART } from '../Constants';
import { SERVER_REQUEST } from '../../shared/Backend';
import { ApiEndpoints } from '../../config';

export const guestCheckout = (dataItem, history, paymentType) => (dispatch) => {
    console.log(dataItem);

    SERVER_REQUEST(ApiEndpoints.CHECKOUT, 'post', dataItem).then((response) => {
        dispatch({
            type: GUEST_CHECKOUT,
        });

        console.log(response);
        if(response.status === '00') {
           console.log(paymentType);
            if(paymentType === 'CARD_PAYMENT'){
                window.location.href= response.data.redirectUrl;
            }else{
                history.push('/');
            }
            localStorage.removeItem('cart');
            dispatch({
                type: CLEAR_CART
            })


        }
    }).catch((error) => {
        console.log(error);
    })
}

export const addOrder = (dataItem, history, paymentType) => (dispatch) => {
    SERVER_REQUEST(ApiEndpoints.ADD_ORDER, 'post', dataItem).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}