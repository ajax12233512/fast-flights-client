export function flightInputReducer1(state = '', action){
    switch(action.type){
        case 'SET_FLIGHT_INPUT_DESTINATION' :
            state = action.payload.inputString;
            return state;
        default: 
            return state;
    }
}
export function flightInputReducer2(state = '', action){
    switch(action.type){
        case 'SET_FLIGHT_INPUT_ORIGIN' :
            state = action.payload.inputString;
            return state;
        default: 
            return state;
    }
}
export function flightInputReducer3(state = '', action){
    switch(action.type){
        case 'SET_FLIGHT_INPUT_DEPARTUREDATE' :
            state = action.payload.inputString;
            return state;
        default: 
            return state;
    }
}
export function flightInputReducer4(state = '', action){
    switch(action.type){
        case 'SET_FLIGHT_INPUT_RETURNDATE' :
            state = action.payload.inputString;
            return state;
        default: 
            return state;
    }
}