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
    <li onClick={handleClass} value='economy'>Economy</li>,
    <li onClick={handleClass} value='premium-economy'>Premium-Economy</li>,
    <li onClick={handleClass} value='business'>Business</li>,
    <li onClick={handleClass} value='first'>First</li>,
    <li onClick={handleClass} value='multiple'>Multiple</li>
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