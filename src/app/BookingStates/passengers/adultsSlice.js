import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {adults: []},
}

const returnAdultItems = (numOfAdults) => {
    let items = [];
    for (let i = 0; i < numOfAdults; i++) {
        items.push({type: 'adult'})
    }

    return items;
}

export const adultsSlice = createSlice({
    name: 'adults',
    initialState,
    reducers: {
        incrementAdults: (state, action) => {
            return ({...state, value: {...state.value, adults: [...state.value.adults, action.payload]}})
        },
        decrementAdults: (state, action) => {
            return ({...state, value: {...state.value, adults: state.value.adults.slice(0 , state.value.adults.length - 1)}})
        },
        setAdults: (state, action) => {
            return ({...state, value: {...state.value, adults: returnAdultItems(action.payload)}})
        }
    }
})

export const { incrementAdults, decrementAdults, setAdults } = adultsSlice.actions
export const selectAdults = state => state.adults.value
export default adultsSlice.reducer