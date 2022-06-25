import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'one-way'
}

export const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setType: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setType } = typeSlice.actions;
export const selectType = state => state.type.value;
export default typeSlice.reducer;