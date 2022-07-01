import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
}

export const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {
        setDestination: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setDestination } = destinationSlice.actions;
export const selectDestination = state => state.destination.value;
export default destinationSlice.reducer;