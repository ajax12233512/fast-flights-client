import { configureStore } from '@reduxjs/toolkit'
import typeReducer from './BookingStates/typeSlice'
import classReducer from './BookingStates/classSlice'
import minorReducer from './BookingStates/passengers/minorSlice'
import adultsReducer from './BookingStates/passengers/adultsSlice'
import originReducer from './BookingStates/originSlice'
import destinationReducer from './BookingStates/destinationSlice'

export const store = configureStore({
  reducer: {
    type: typeReducer,
    classs: classReducer,
    minor: minorReducer,
    adults: adultsReducer,
    origin: originReducer,
    destination: destinationReducer,
  },
})