export default function flightClassReducer(state = 'economy', action){
    switch(action.type){
        case 'SET_FLIGHT_CLASS' :
            state = action.payload;
            return state;
        default: 
            return state;
    }
}


