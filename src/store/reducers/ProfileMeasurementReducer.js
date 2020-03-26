import { PROFILE_MEASUREMENT } from '../Constants';

const INITIAL_VALUES = {
    measurement: {
        name: ''
    }
}

const profileMeasurementReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type){
        case PROFILE_MEASUREMENT:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export default profileMeasurementReducer;