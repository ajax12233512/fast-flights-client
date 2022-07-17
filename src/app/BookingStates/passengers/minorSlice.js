import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {minors: []},
}

const returnChildItems = (numOfChildren) => {
    let items = [];
    for (let i = 0; i < numOfChildren; i++) {
        items.push({age: 0})
    }

    return items;
}

export const minorSlice = createSlice({
    name: 'minor',
    initialState,
    reducers: {
        incrementMinor: (state, action) => {
            return ({...state, value: {...state.value, minors: [...state.value.minors, action.payload]}})
        },
        decrementMinor: (state, action) => {
            return ({...state, value: {...state.value, minors: state.value.minors.slice(0 , state.value.minors.length - 1)}})
        },
        incrementMinorAge: (state, action) => {
            state.value.minors[action.payload.index].age += 1
            if(state.value.minors[action.payload.index].age > 17) {
                state.value.minors[action.payload.index].age = 17
            }
        },
        decrementMinorAge: (state, action) => {
            state.value.minors[action.payload.index].age -= 1;
            if(state.value.minors[action.payload.index].age < 0) {
                state.value.minors[action.payload.index].age = 0;
            }
        },
        setMinor: (state, action) => {
            return ({...state, value: {...state.value, minors: returnChildItems(action.payload)}})
        },
        // returnChildItems(action.payload)
        setMinorAge: (state, action) => {
            state.value.minors[action.payload.key].age = action.payload.value; 
        }
    }
})

export const { incrementMinor, decrementMinor, incrementMinorAge, decrementMinorAge, setMinor, setMinorAge } = minorSlice.actions
export const selectMinor = state => state.minor.value
export default minorSlice.reducer