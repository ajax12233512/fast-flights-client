export default function navbarReducer(state = false, action){
    switch(action.type){
        case 'CONDENSE' :
            state = false;
            return state;
        case 'EXPAND' :
            state = true;
            return state;
        default: 
            return state;
    }
}



