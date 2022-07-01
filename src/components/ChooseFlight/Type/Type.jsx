import React from 'react'
import Dropdowns from '../utils/Dropdowns'
import { setType, selectType } from '../../../app/BookingStates/typeSlice'
import { useSelector, useDispatch } from 'react-redux'

function Type() {
  const type = useSelector(selectType)
  const dispatch = useDispatch()

  const handleType = (e) => {
    console.log()
    dispatch(setType(e.target.attributes.value.value))
  }

  const types = [
    <li key={0} onClick={handleType} value='one-way'>One Way</li>,
    <li key={1} onClick={handleType} value='round-trip'>Round Trip</li>,
    <li key={2} onClick={handleType} value='multi-city'>Multi City</li>
  ]

  return (
    <>
        <Dropdowns title={type} ctnClass='triptype'>
          {types}
        </Dropdowns>
    </>
  )
}

export default Type