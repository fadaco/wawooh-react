import { ORDER, TRACK_USER_ORDER, BESPOKE_BIDS, VIEW_BESPOKE_BID } from '../Constants';
import {SERVER_REQUEST} from '../../shared/Backend';
import {ApiEndpoints} from '../../config';

export const getUserOrder = () => async (dispatch) => {
    let UserOrder = await SERVER_REQUEST(ApiEndpoints.USER_ORDER, 'get', null);
    if(UserOrder.status === '00') {
        dispatch({
            type: ORDER,
            payload: UserOrder.data
        })
    }
}

export const trackUserOrder = (orderNum) => {
    return async (dispatch) => {
        const response = await SERVER_REQUEST(ApiEndpoints.TRACK_ORDER(orderNum), 'get', null);
        if(response.status === '00'){
            dispatch({
                type: TRACK_USER_ORDER,
                payload: response.data
            })
        }

    }
}

export const getBespokeBid = () => {
    return async(dispatch) => {
      const response = await SERVER_REQUEST(ApiEndpoints.BESPOKE_BIDS, 'get', null);
      if(response.status === '00'){
          dispatch({
              type: BESPOKE_BIDS,
              payload: response.data
          })
      }
    }
}


export const viewBespokeBid = (id) => {
    return async(dispatch) => {
        const response = await SERVER_REQUEST(ApiEndpoints.VIEW_BESPOKE_QUOTES(id), 'get', null);
        if(response.status === '00'){
            dispatch({
                type: VIEW_BESPOKE_BID,
                payload: response.data
            })
        }

    }
}

