import {ORDER, TRACK_USER_ORDER, BESPOKE_BIDS, VIEW_BESPOKE_BID} from '../Constants';

const INITIAL_VALUES = {
    orders: [],
    trackOrder: {},
    trackDisplay: false,
    bespokeBids: [],
    viewBespoke: []
}

const orderReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type){
        case ORDER:
            return {
                ...state,
                orders: action.payload
            };
        case TRACK_USER_ORDER:
            return {
                ...state,
                trackDisplay: true,
                trackOrder: action.payload
            };
        case BESPOKE_BIDS:
            return {
                ...state,
                bespokeBids: action.payload
            };
        case VIEW_BESPOKE_BID:
            return {
                ...state,
                viewBespoke: action.payload
            }
        default:
            return state
    }
}

export default orderReducer;