import {MEASUREMENT_VALUES, GET_MEASUREMENT,REMOVE_MEASUREMENT, ADDING_MEASUREMENT} from "../Constants";

const INITIAL_VALUES = {
    id:'',
    name: '',
    gender: '',
    unit: '',
    fitness: '',
    ankle: '',
    armHole: '',
    backShirtLength: '',
    biceps: '',
    blouseLength: '',
    bubaLength: '',
    bust: '',
    crotch: '',
    chest: '',
    elbowCircumference: '',
    fistCircumference: '',
    fullLength: '',
    halfLength: '',
    hips: '',
    kneeCircumference: '',
    kneeLength: '',
    lapCircumference: '',
    longSleeve: '',
    neck: '',
    senatorLength: '',
    shirtLength: '',
    shortSleeve: '',
    shortsLength: '',
    shoulderWidth: '',
    trouserLength: '',
    thigh: '',
    threeQuarterSleeve: '',
    waist: '',
    wrist: '',
    loading: false,
    addingError:'',
    customize:[],
    measurementList: []
}

const MeasurementReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case GET_MEASUREMENT:
            return {...state,
                measurementList: action.payload === null ? []: action.payload};
        case MEASUREMENT_VALUES:
            return {...state, [action.key]: action.value };
        case REMOVE_MEASUREMENT:
            return {...state, measurementList:action.payload};
        case ADDING_MEASUREMENT:
            return {...state, loading: action.payload, addingError:''}
        default:
            return state;
    }
};

export default MeasurementReducer;