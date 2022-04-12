export function flightAdultReducer(state = 0, action){
    switch(action.type){
        case 'adult/add':
            state++;
            return state
        case 'adult/sub':{
            state--;
            if(state < 0 ) state = 0
            return state
        }
        default:
            return state
    }
}   
export function flightStudentReducer(state = 0, action){
    switch(action.type){
        case 'student/add':
            state++;
            return state
        case 'student/sub':
            {
                state--;
                if(state < 0 ) state = 0
                return state
            }
        default:
            return state
    }
}
export function flightSeniorReducer(state = 0, action){
    switch(action.type){
        case 'senior/add':
            state++;
            return state
        case 'senior/sub':
            {
                state--;
                if(state < 0 ) state = 0
                return state
            }
        default:
            return state
    }
}
export function flightYouthsReducer(state = 0, action){
    switch(action.type){
        case 'youth/add':
            state++;
            return state
        case 'youth/sub':
            {
                state--;
                if(state < 0 ) state = 0
                return state
            }
        default:
            return state
    }
}
export function flightChildrenReducer(state = 0, action){
    switch(action.type){
        case 'children/add':
            state++;
            return state
        case 'children/sub':
            {
                state--;
                if(state < 0 ) state = 0
                return state
            }
        default:
            return state
    }
}
export function flightToddlersReducer(state = 0, action){
    switch(action.type){
        case 'toddler/add':
            state++;
            return state
        case 'toddler/sub':
            {
                state--;
                if(state < 0 ) state = 0
                return state
            }
        default:
            return state
    }
}
export function flightInfantsReducer(state = 0, action){
    switch(action.type){
        case 'infant/add':
            state++;
            return state
        case 'infant/sub':
            {
                state--;
                if(state < 0 ) state = 0
                return state
            }
        default:
            return state
    }
}