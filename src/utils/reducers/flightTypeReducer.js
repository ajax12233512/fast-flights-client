export default function flightTypeReducer(state = 'one-way', action){
    switch(action.type){
        case 'SET_FLIGHT_TYPE' :
            state = action.payload;
            return state;
        default: 
            return state;
    }
}