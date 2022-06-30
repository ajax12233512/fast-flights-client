import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
}

export const leaveDateSlice = createSlice({
    name: 'leaveDate',
    initialState,
    reducers: {
        setLeaveDate: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setLeaveDate } = leaveDateSlice.actions;
export const selectLeaveDate = state => state.leaveDate.value;
export default leaveDateSlice.reducer;