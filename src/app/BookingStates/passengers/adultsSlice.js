import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {adults: []},
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
        }
    }
})

export const { incrementAdults, decrementAdults } = adultsSlice.actions
export const selectAdults = state => state.adults.value
export default adultsSlice.reducer