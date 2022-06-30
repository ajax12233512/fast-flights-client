import React from 'react'
import './SearchBtn.css'
import { useSelector } from 'react-redux'
import{ selectMinor } from '../../../app/BookingStates/passengers/minorSlice';
import { selectAdults } from '../../../app/BookingStates/passengers/adultsSlice';




function SearchBtn() {
  let minors = useSelector(selectMinor);
  let adults = useSelector(selectAdults);

  let createOfferRequest = {
    slices: [
      {
        origin: '',
        destination: '',
        departureDate: '',
      },
      {
        origin: '',
        destination: '',
        departureDate: '',
      }
    ],
    passengers: [adults.adults.concat(minors.minors)],
    cabin_class: '',
    return_offers: false,
  }



  return (
    <button onClick={() => console.log(minors.minors, adults.adults)}>Search Flights</button>
  )
}

export default SearchBtn