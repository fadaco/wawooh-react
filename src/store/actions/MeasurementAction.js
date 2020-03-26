import {
    GET_MEASUREMENT, 
    MEASUREMENT_VALUES, 
    REMOVE_MEASUREMENT,
    SAVE_MEASUREMENT_FAIL,
    SAVE_MEASUREMENT_SUCCESS,
    ADDING_MEASUREMENT
} from "../Constants";
import { SERVER_REQUEST } from "../../shared/Backend";
import { ApiEndpoints } from "../../config";
import { LOGGER } from "../../shared/Methods";
import {GET_TOKEN} from "../../shared/Storage";

export const measureInput = (key, value) => {
    return {
        type: MEASUREMENT_VALUES,
        key, value
    }
};

export const saveMeasurement = (data, history) => {
    LOGGER('user measure', data);
    return async (dispatch) => {
        dispatch({ type: ADDING_MEASUREMENT, payload: true});

        const response = await SERVER_REQUEST(ApiEndpoints.SAVE_MEASUREMENT, 'POST',data);
        dispatch({ type: ADDING_MEASUREMENT, payload: false});

        if(response.status === "00") {
            dispatch({type: SAVE_MEASUREMENT_SUCCESS, payload: response.data})
            history.push('/profile');
        } else {
            dispatch({type: SAVE_MEASUREMENT_FAIL, message: response.message})
        }
    }
}

export const getUserMeasurement = () => {
    return async (dispatch) => {
        if((GET_TOKEN('token')) !== null) {
            const userMeasurement = await SERVER_REQUEST(ApiEndpoints.GET_MEASUREMENT, 'GET', null);
            if(userMeasurement.status === '00') {
                dispatch({
                    type: GET_MEASUREMENT,
                    payload: userMeasurement.data
                })
            }
            LOGGER('usermeasurements', userMeasurement);
        } else {
            LOGGER('Not found','Please log in')
        }
    }
}

export const deleteUserMeasurement = (data) => {
    LOGGER('measureId', data);
    return async (dispatch) => {
        if((GET_TOKEN('token')) !== null) {
            const delMeasurement = await SERVER_REQUEST(ApiEndpoints.DELETE_MEASUREMENT(data), 'POST', data);
            if(delMeasurement.status === '00') {
                dispatch({
                    type: REMOVE_MEASUREMENT,
                    payload: delMeasurement.data
                })
            }
            LOGGER('delMeaurement', delMeasurement);
        }
    }
}