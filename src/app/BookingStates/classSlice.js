import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'economy',
}

export const counterSlice = createSlice({
  name: 'classs',
  initialState,
  reducers: {
    setClass: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { setClass } = counterSlice.actions
export const selectClasss = state => state.classs.value
export default counterSlice.reducer