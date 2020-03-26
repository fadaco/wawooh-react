import {
    GET_USER_ADDRESS,
    SET_USER_VALUES,
    SAVE_LAST_URL,
    AUTHENTICATING_USER,
    LOGIN_ERROR,
    RESETTING_PASSWORD,
    RESET_FAILED,
    RESET_SUCCESS,
    REGISTERING_USER,
    REGISTER_USER_FAIL,
    GET_USER_PROFILE,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    ADDING_ADDRESS,
    ADDING_ADDRESS_FAIL,
    DELETING_ADDRESS,
    DELETING_ADDRESS_FAIL,
    USER_SINGLE_ADDRESS,
    EDIT_USER_PROFILE,
    EDIT_USER_ADDRESS,
    USER_PREFERENCE,
    EDIT_USER_PROFILE_FAIL,
    SAVE_TRANSFER_INFO,
    ADDING_WISHLIST,
    ADDING_WISHLIST_SUCCESS,
    ADDING_WISHLIST_FAIL
} from "../Constants";

const INITIAL_VALUES = {
    email: '',
    password: '',
    confirmPassword: '',
    lastName: '',
    firstName: '',
    country:'',
    edit: false,
    state:'',
    address:'',
    city:'',
    preferred:'',
    phoneNo:'',
    postal:'',
    zipCode:'',
    role: '',
    socialFlag: 'N',
    userAddressList: [],
    loggedIn: false,
    lastUrl: '',
    loading: false,
    loginError: '',
    resetError: '',
    registerError: '',
    resetLoading: false,
    resetSuccess: false,
    userLoading: false,
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: ''
    },
    userError: '',
    adddingError:'',
    userAddress: {},
    addressRedirect: false,
    transferInfo: {
        paymentDate: '',
        accountName: '',
        amountPayed: '',
        bank: '',
        foreignBanks: '',
        paymentNote: '',
        orderNum: ''
    },
    oldPassword:'',
    newPassword:'',
    addWishlist: false,
    addWishlistError: '',
    addWishlistSuccess:''
};

const UserReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case AUTHENTICATING_USER:
            return { ...state, loading: action.payload, loginError: '' };
        case SET_USER_VALUES:
            return { ...state, [action.key]: action.value };
        case SAVE_TRANSFER_INFO:
            return {
                ...state,
                transferInfo: {
                    ...state.transferInfo,
                    [action.key]: action.name
                }
            }
        case USER_PREFERENCE:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    [action.name]: action.value
                }
            }
        case EDIT_USER_ADDRESS:
            return {
                ...state,
                addressRedirect: true
            }
        case USER_SINGLE_ADDRESS:
            return { ...state,
                edit: true,
                firstName: action.payload.firstName ? action.payload.firstName: null,
                lastName: action.payload.lastName ? action.payload.lastName: null,
                address: action.payload.address ? action.payload.address: null,
                country: action.payload.country ? action.payload.country: null,
                state: action.payload.state ? action.payload.state: null,
                phoneNo: action.payload.phoneNo ? action.payload.phoneNo: null,
                postalCode: action.payload.postalCode ? action.payload.postalCode: ''
            };
        case GET_USER_ADDRESS:
            return {...state, userAddressList: action.payload === null ? [] : action.payload};
        case SAVE_LAST_URL:
            return { ...state, lastUrl: action.url };
        case LOGIN_ERROR:
            return { ...state, loginError: action.message };
        case RESETTING_PASSWORD:
            return { ...state, resetLoading: true, resetError: '', resetSuccess: false };
        case RESET_FAILED:
            return { ...state, resetLoading: false, resetError: action.message, resetSuccess: false };
        case RESET_SUCCESS:
            return { ...state, resetLoading: false, resetSuccess: true };
        case REGISTERING_USER:
            return { ...state, loading: true, registerError: '' };
        case REGISTER_USER_FAIL:
            return { ...state, loading: false, registerError: action.message };
        case GET_USER_PROFILE:
            return { ...state, userLoading: true, userError: '' };
        case PROFILE_SUCCESS:
            return { ...state, userLoading: false, userInfo: action.payload };
        case PROFILE_FAIL:
            return { ...state, userLoading: false, userError: action.message };
        case ADDING_ADDRESS:
            return { ...state, loading: action.payload, addingError: ''}
        case ADDING_ADDRESS_FAIL:
            return {...state, loading: false, adddingError: action.message}
        case DELETING_ADDRESS:
            return { ...state, loading: true}
        case DELETING_ADDRESS_FAIL:
            return { ...state, loading: false}
        case EDIT_USER_PROFILE:
            return { ...state, loading: true}
        case EDIT_USER_PROFILE_FAIL: 
            return {...state, loading: false}
            case ADDING_WISHLIST:
            return { ...state, addWishlist: action.payload, addWishlistError: '', addWishlistSuccess: false };
        case ADDING_WISHLIST_FAIL:
            return { ...state, addWishlist: false, addWishlistError: action.message, addWishlistSuccess: false };
        case ADDING_WISHLIST_SUCCESS:
            return { ...state, addWishlist: action.payload, addWishlistSuccess: true };
        default:
            return state;
    }
};

export default UserReducer;
