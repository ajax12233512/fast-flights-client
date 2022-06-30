import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
}

export const originSlice = createSlice({
    name: 'origin',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setOrigin } = originSlice.actions;
export const selectOrigin = state => state.origin.value;
export default originSlice.reducer;