import React from 'react'
import './SearchBtn.css'
import { useSelector } from 'react-redux'
import{ selectMinor } from '../../../app/BookingStates/passengers/minorSlice';
import { selectAdults } from '../../../app/BookingStates/passengers/adultsSlice';
import { selectType } from '../../../app/BookingStates/typeSlice';
import { selectClasss } from '../../../app/BookingStates/classSlice';
import { selectOrigin } from '../../../app/BookingStates/originSlice';
import { selectDestination } from '../../../app/BookingStates/destinationSlice';
import { selectLeaveDate } from '../../../app/BookingStates/datesStates/leaveDateSlice';
import { selectReturnDate } from '../../../app/BookingStates/datesStates/returnDateSlice';
import { searchFlights } from '../../../api/api';



function SearchBtn() {
  let minors = useSelector(selectMinor);
  let adults = useSelector(selectAdults);
  let classs = useSelector(selectClasss);

  let createOfferRequest = {
    slices: [
      {
        origin: useSelector(selectOrigin),
        destination: useSelector(selectDestination),
        departure_date: useSelector(selectLeaveDate),
      },
      {
        origin: useSelector(selectDestination),
        destination: useSelector(selectOrigin),
        departure_date: useSelector(selectReturnDate),
      }
    ],
    passengers: adults.adults.concat(minors.minors),
    cabin_class: classs,
    return_offers: false,
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(createOfferRequest)
  }

  return (
    <button onClick={handleClick}>Search Flights</button>
  )
}

export default SearchBtn