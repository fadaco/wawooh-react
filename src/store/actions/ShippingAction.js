import { SHIPPING_FEE } from "../Constants";
import { SERVER_REQUEST } from "../../shared/Backend";
import {ApiEndpoints} from "../../config";

export const getShippingFee = (data) => (dispatch) => {
    SERVER_REQUEST(ApiEndpoints.GET_SHIPPING_FEE, 'post', data).then((response) => {
        console.log(response);
             dispatch({
                 type: SHIPPING_FEE,
                 payload: response.shippingAmount
             })


    }).catch((error) => {
        console.log(error);
    })
}

export const getUserShippingType = (data) => (dispatch) => {
    console.log(data);
    SERVER_REQUEST(ApiEndpoints.GET_USER_SHIPPING_PRICE, 'post', data).then((response) => {
       if(response.status === '00'){
           dispatch({
               type: SHIPPING_FEE,
               payload: response.data
           })
       }
    }).catch((error) => {
        console.log(error);
    })
}