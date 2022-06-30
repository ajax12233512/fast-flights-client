import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
}

export const returnDateSlice = createSlice({
    name: 'returnDate',
    initialState,
    reducers: {
        setReturnDate: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setReturnDate } = returnDateSlice.actions;
export const selectReturnDate = state => state.returnDate.value;
export default returnDateSlice.reducer;