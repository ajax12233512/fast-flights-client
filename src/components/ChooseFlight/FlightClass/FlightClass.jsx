import React from 'react'
import Dropdowns from '../utils/Dropdowns'
import { useSelector, useDispatch } from 'react-redux'
import { setClass, selectClasss } from '../../../app/BookingStates/classSlice'


function FlightClass() {

  const classs = useSelector(selectClasss)
  const dispatch = useDispatch()

  const handleClass = (e) => {
    dispatch(setClass(e.target.attributes.value.value))
  }

  const classes = [
    <li key={0} onClick={handleClass} value='economy'>Economy</li>,
    <li key={1} onClick={handleClass} value='premium-economy'>Premium-Economy</li>,
    <li key={2} onClick={handleClass} value='business'>Business</li>,
    <li key={3} onClick={handleClass} value='first'>First</li>,
    <li key={4} onClick={handleClass} value='multiple'>Multiple</li>
  ]  

  return (
    <>
        <Dropdowns title={classs} ctnClass='class'>
            {classes}
        </Dropdowns>
    </>
  )
}

export default FlightClass