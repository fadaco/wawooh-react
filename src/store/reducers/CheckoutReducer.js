import { GUEST_CHECKOUT, USER_CHECKOUT } from '../Constants';

const INITIAL_VALUES = {
    checkout: '',

};


const checkoutReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type){
        case GUEST_CHECKOUT:
            return {
                ...state,
                checkout: action.payload
            }
        case USER_CHECKOUT:
            return {
                ...state,

            }
        default:
            return state;
    }
}

export default checkoutReducer;