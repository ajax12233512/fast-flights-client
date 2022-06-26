import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const minorSlice = createSlice({
    name: 'minor',
    initialState,
    reducers: {
        incrementMinor: (state, action) => {
            state.value++;
        },
        decrementMinor: (state, action) => {
            state.value--;
            if(state.value < 0) state.value = 0;
        }

    }
})

export const { incrementMinor, decrementMinor } = minorSlice.actions
export const selectMinor = state => state.minor.value
export default minorSlice.reducer