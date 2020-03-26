import { ADD_CART_ITEM, GET_CART_ITEM, CART_COUNT, REMOVE_CART_ITEM, CLEAR_CART } from '../Constants';

const INITIAL_VALUES = {
   cart: [],
   cartCount: 0,
   cartTotal: 0,
   cartSaved: false
};

const cartReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type){
        case ADD_CART_ITEM:
            return {
                ...state,
                cart: action.payload,
                cartCount: Array.isArray(action.payload) ? action.payload.length : 0,
                cartSaved: true,
            };
        case GET_CART_ITEM:
            return {
                ...state,
                cart: action.payload === null ? [] : action.payload,
                cartCount: Array.isArray(action.payload) ? action.payload.length : 0,
                cartTotal: action.totalCart
            };
        case CART_COUNT:
            return {
                ...state,
                cartCount: action.payload
            };
        case CLEAR_CART:
            return {
                ...state,
                cartCount: 0,
                cart: []
            };
            case REMOVE_CART_ITEM:
            return {
                ...state,
                cart: action.payload === null ? [] : action.payload,
                cartCount: Array.isArray(action.payload) ? action.payload.length : 0,
                cartTotal: action.totalCart
            };
        default:
            return state;
    }
};

export default cartReducer;