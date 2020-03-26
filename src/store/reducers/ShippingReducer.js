import { SHIPPING_FEE} from "../Constants";

const INITIAL_VALUES = {
    shippingFee: 0
}

const shippingReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type){
        case SHIPPING_FEE:
            return {
                ...state,
                shippingFee: action.payload
            };
        default:
            return state;
    }
}

export default shippingReducer;