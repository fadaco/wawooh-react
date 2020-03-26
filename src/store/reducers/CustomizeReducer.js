import {
  SET_CUSTOMIZE_VALUES,
  ADDING_CUSTOMIZE_TO_CART,
  ADDING_CUSTOMIZE_TO_CART_FAIL,
  ADDING_CUSTOMIZE_TO_CART_SUCCCESS
} from "../Constants";

const INITIAL_VALUES = {
  productId: "",
  quantity: "",
  designerId: "",
  measurementId: "",
  amount: "",
  slashedPrice: "",
  artworkPictureId: "",
  materialPictureId: "",
  materialStatus: "",
  notes: "",
  materialPickUpAddressId: "",
  materialPickupDate: "",
  productName: "",
  productColorStyleId: "",
  loading: false,
  cart:[],
  cartTotal: 0,
  cartCount: 0,
  cartSaved: false
};

const CustomizeReducer = (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case SET_CUSTOMIZE_VALUES:
      return { ...state, [action.key]: action.value };
    case ADDING_CUSTOMIZE_TO_CART:
      return { ...state, loading: true };
    case ADDING_CUSTOMIZE_TO_CART_FAIL:
      return { ...state, loading: false };
    case ADDING_CUSTOMIZE_TO_CART_SUCCCESS: 
      return {
        ...state, cart: action.payload, 
        cartCount: Array.isArray(action.payload) ? action.payload.length : 0,
        cartSaved: true
      }
    default:
      return state;
  }
};

export default CustomizeReducer;
