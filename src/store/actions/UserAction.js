import { 
    SET_USER_VALUES,
    CART_COUNT,
    GET_USER_ADDRESS,
    SAVE_LAST_URL,
    AUTHENTICATING_USER,
    LOGIN_ERROR,
    RESETTING_PASSWORD,
    RESET_FAILED,
    RESET_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTERING_USER,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    ADDING_ADDRESS,
    ADDING_ADDRESS_FAIL,
    DELETING_ADDRESS,
    DELETING_ADDRESS_FAIL,
    EDIT_USER_PROFILE,
    EDIT_USER_PROFILE_FAIL,
    USER_SINGLE_ADDRESS,
    USER_PREFERENCE,
    EDIT_USER_ADDRESS,
    SAVE_TRANSFER_INFO,
    ADDING_WISHLIST,
    ADDING_WISHLIST_SUCCESS,
    ADDING_WISHLIST_FAIL
    
} from "../Constants";
import { SERVER_REQUEST, NEW_SERVER_REQUEST } from '../../shared/Backend';
import { ApiEndpoints } from '../../config';
import { LOGGER } from "../../shared/Methods";
import { SAVE_TOKEN, GET_CART, GET_TOKEN } from "../../shared/Storage";

export const updateUserInput = (key, value) => {
    return {
        type: SET_USER_VALUES,
        key, value
    }
};

export const updateUserPreference = (value, name)  => {
    return (dispatch) => {
        dispatch({
            type: USER_PREFERENCE,
            name, value
        })
    }
}

export const saveTransferInfo  = (key, name) => {
    return (dispatch) => {
         dispatch({
            type: SAVE_TRANSFER_INFO,
            key, name
        })
    }
}

export const updateTransferInfo = (data) => {
    return async (dispatch) => {
       const response = await SERVER_REQUEST(ApiEndpoints.SAVE_TRANSFER_INFO, 'post', data);
      if(response.status === '00'){
          console.log(response);
      }
    }
}



export const saveLastUrl = (url) => {
    return {
        type: SAVE_LAST_URL,
        url
    }
};

export const editUserPreference = (data) => {
    return async(dispatch) => {
      const response = await SERVER_REQUEST(ApiEndpoints.EDIT_USER_DETAILS, 'post', data);
      console.log(response);
    }
}


export const authenticateUser = (data) => {
    LOGGER('user payload', data);
    return async (dispatch) => {
        dispatch({ type: AUTHENTICATING_USER, payload: true });

        const response = await SERVER_REQUEST(ApiEndpoints.USER_LOGIN, 'POST', data);
        dispatch({ type: AUTHENTICATING_USER, payload: false });

        if (response.status === '00') {
            SAVE_TOKEN(response.data.token);
            dispatch(updateUserInput('loggedIn', true));

            if (GET_CART()) {
                let cart = GET_CART();
                cart.forEach((item) => {
                    let data = {
                        amount: item.amount,
                        artWorkPictureId: null,
                        color: undefined,
                        designerId: item.designerId,
                        designerName: item.designerName,
                        expiryDate: "",
                        materialLocation: null,
                        materialPickupDate: "",
                        materialPictureId: null,
                        materialStatus: "N",
                        productColorStyleId: item.productColorStyleId,
                        productId: item.id,
                        productSizeId: item.productSizeId,
                        quantity: item.quantity,
                        size: item.size,
                        slashedPrice: item.slashedPrice,
                    }

                    SERVER_REQUEST(ApiEndpoints.ADD_TO_CART, 'post', data).then((response) => {
                        if (response.status === '00') {
                            localStorage.removeItem('cart');
                            let cartCount = parseInt(response.data);
                            console.log(cartCount);
                            dispatch({
                                type: CART_COUNT,
                                payload: cartCount
                            })
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                })
            }
        } else {
            dispatch({ type: LOGIN_ERROR, message: response.message });
        }
    }
};

export const registerUserOnly = (data) => {
    LOGGER('registerUserOnly', data);
    return async (dispatch) => {
        dispatch({ type: REGISTERING_USER });

        const response = await SERVER_REQUEST(ApiEndpoints.USER_REGISTER, 'POST', data);
        LOGGER(ApiEndpoints.USER_REGISTER, response);

        if (response.status === '00') {
            dispatch(authenticateUser(data));
        } else {
            dispatch({ type: REGISTER_USER_FAIL, message: response.message });
        }
    }
}

export const getUserSingleAddress = (data) => (dispatch) => {
  dispatch({
       type: USER_SINGLE_ADDRESS,
      payload: data
  })
};

export const getUserAddress = () => {
    return async (dispatch) => {
        if((GET_TOKEN('token')) !== null) {
            const userAddress = await SERVER_REQUEST(ApiEndpoints.USER_ADDRESS,'GET', null);
            if(userAddress.status === '00') {
                dispatch({
                    type: GET_USER_ADDRESS,
                    payload: userAddress.data
                })
            }
            LOGGER('useraddress', userAddress);
        }
        else {
            LOGGER('Auth Required','Please Log in')
        }
    }
}

export const forgotPassword = (body) => async (dispatch) => {
    dispatch({ type: RESETTING_PAScoSWORD });
    const response = await SERVER_REQUEST(ApiEndpoints.FORGOT_PASSWORD, 'post', body);
    LOGGER('ApiEndpoints.FORGOT_PASSWORD', response);
    if (response.status === '00') {
        dispatch({ type: RESET_SUCCESS });
    } else {
        dispatch({ type: RESET_FAILED, message: response.message });
    }
}

export const socialMediaLogin = (body) => async (dispatch) => {
    dispatch({ type: AUTHENTICATING_USER, payload: true });

    const response = await NEW_SERVER_REQUEST(ApiEndpoints.SOCIAL_LOGIN, 'post', body);
    LOGGER('social login', response);
    dispatch({ type: AUTHENTICATING_USER, payload: false });

    if (response.status === 200) {
        SAVE_TOKEN(response.data.token);
        dispatch(updateUserInput('loggedIn', true));
    } else {
        dispatch({ type: LOGIN_ERROR, message: response.message });
    }
}

export const getProfileInfo = () => async (dispatch) => {
    //dispatch({ type: GET_USER_PROFILE });

    const response = await SERVER_REQUEST(ApiEndpoints.GET_USER_DETAILS, 'get', null);
    if (response.status === '00') {
        dispatch({ type: PROFILE_SUCCESS, payload: response.data.userDetails });
    } else {
        dispatch({ type: PROFILE_FAIL, message: response.message });
    }
}

export const editProfileInfo = (data) => {
    return async (dispatch) => { 
        dispatch({type: EDIT_USER_PROFILE, payload: true});

        const response = await SERVER_REQUEST(ApiEndpoints.EDIT_USER_DETAILS, 'POST', data);
        dispatch({tpye: EDIT_USER_PROFILE, payload: false})
        LOGGER(ApiEndpoints.EDIT_USER_DETAILS, response);

        if(response.status === '00') {
            dispatch({
                type: 'GET_USER_PROFILE',
                payload: response.data
            })
        } else {
            dispatch({type: EDIT_USER_PROFILE_FAIL, payload: response.message})
        }
    }
}

export const saveAddress = (data) => {
    LOGGER('address payload', data);
    return async (dispatch) => {
        dispatch({type: ADDING_ADDRESS, payload: true});

        const response = await SERVER_REQUEST(ApiEndpoints.SAVE_ADDRESS, 'POST', data);
        dispatch({type: ADDING_ADDRESS, payload: false})
        LOGGER(ApiEndpoints.SAVE_ADDRESS, response);

        if(response.status === "00") {
            dispatch({
                type: GET_USER_ADDRESS,
                payload: response.data
            })
        } else {
            dispatch({type: ADDING_ADDRESS_FAIL, message: response.message})
        }
    }
}


export const editAddress = (data) => {
    return async(dispatch) => {
        const response = await SERVER_REQUEST(ApiEndpoints.EDIT_USER_DETAILS, 'post', data);
        if(response.status === '00'){
            console.log(response);
            dispatch({
                type: EDIT_USER_ADDRESS,
                payload: response.data
            })
        }
    }
}

export const updateAddress = () => {
    
}

export const deleteAddress = (id) => {
    return async (dispatch, history) => {
        dispatch({type:DELETING_ADDRESS, payload: true});

        const response = await SERVER_REQUEST(ApiEndpoints.DELETE_ADDRESS(id), 'GET', null);
        dispatch({type: DELETING_ADDRESS, payload:false})
        
        if(response.status === '00') {
            dispatch({
                type: DELETING_ADDRESS,
                payload: false
            })
            LOGGER(ApiEndpoints.DELETE_ADDRESS(id), response);
        } else {
            dispatch({type: DELETING_ADDRESS_FAIL, payload:false})
        }
    }
}

export const addToWishlist = (data, history) => {
    LOGGER('product id', data);
    return async (dispatch) => {
        dispatch({type: ADDING_WISHLIST, payload: true});

        const response = await SERVER_REQUEST(ApiEndpoints.ADD_TO_WISHLIST, 'POST', data);
        dispatch({type: ADDING_WISHLIST, payload: false})
        LOGGER(ApiEndpoints.ADD_TO_WISHLIST, response);

        if(GET_TOKEN() || response.status === '00') {
            dispatch({
                type: ADDING_WISHLIST_SUCCESS,
                payload: response.data
            })
        }
        else {
            dispatch({
                type: ADDING_WISHLIST_FAIL,
                message: response.message
            })
            history.push('/login');
        }
    }
}