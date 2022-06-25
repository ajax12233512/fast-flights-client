import { configureStore } from '@reduxjs/toolkit'
import typeReducer from './BookingStates/typeSlice'
import classReducer from './BookingStates/classSlice'

export const store = configureStore({
  reducer: {
    type: typeReducer,
    classs: classReducer,
  },
})