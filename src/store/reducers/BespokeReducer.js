import {
  LOAD_STYLES_CATALOGUES,
  LOAD_MORE_PRODUCT,
  LOAD_STYLES_CATALOGUES_SUCCESS,
  LOAD_STYLES_CATALOGUES_FAIL,
  UPDATE_STYLES_VALUES,
  ADD_REQUEST_SUCCESS,
  ADD_REQUEST_FAIL,
  LOAD_BESPOKE_PRODUCT,
  LOAD_BESPOKE_PRODUCT_FAILURE,
  LOAD_BESPOKE_PRODUCT_SUCCESS
} from "../Constants";

const INITIAL_VALUES = {
  stylePage: 0,
  styleSize: 24,
  getStylesList: [],
  loading: false,
  loadMore: false,
  getStyleLoading: false,
  budget: "",
  acceptedBidId: 0,
  note: "",
  measurement: {
    id: ""
  },
  bespokeStyleId: "",
  gender: "",
  timeOfDelivery: "",
  height: "",
  sideImage: "",
  heightFeet: "",
  heightInches: "",
  categoryId: "",
  fabricType: "",
  hasFabric: "",
  bespokeProductList: [],
  bespokePage: 0,
  bespokeSize: 24,
  loadingBespoke: false
};

const BespokeReducer = (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case UPDATE_STYLES_VALUES:
      return { ...state, [action.key]: action.value };
    case LOAD_STYLES_CATALOGUES:
      return { ...state, getStyleLoading: true };
    case LOAD_MORE_PRODUCT:
      return { ...state, loadMore: true };
    case LOAD_STYLES_CATALOGUES_SUCCESS:
      return {
        ...state,
        getStyleLoading: false,
        getStylesList: [...state.getStylesList, ...action.data]
      };
    case LOAD_STYLES_CATALOGUES_FAIL:
      return { ...state, getStyleLoading: true };
    case ADD_REQUEST_SUCCESS:
      return { ...state, loading: false };
    case ADD_REQUEST_FAIL:
      return { ...state, loading: true };
    case LOAD_BESPOKE_PRODUCT:
      return { ...state, loadingBespoke: true };
    case LOAD_BESPOKE_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingBespoke: false,
        loadMore: false,
        bespokeProductList: [...state.bespokeProductList, ...action.data]
      };
    case LOAD_BESPOKE_PRODUCT_FAILURE:
      return { ...state, loadingBespoke: false };
    default:
      return state;
  }
};

export default BespokeReducer;
