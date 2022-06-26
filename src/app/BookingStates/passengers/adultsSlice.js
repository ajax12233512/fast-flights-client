import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const adultsSlice = createSlice({
    name: 'adults',
    initialState,
    reducers: {
        incrementAdults: (state, action) => {
            state.value++;
        },
        decrementAdults: (state, action) => {
            state.value--;
            if(state.value < 0) state.value = 0;
        }
    }
})

export const { incrementAdults, decrementAdults } = adultsSlice.actions
export const selectAdults = state => state.adults.value
export default adultsSlice.reducer