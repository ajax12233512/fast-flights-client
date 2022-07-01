import React from 'react'
import { useDispatch } from 'react-redux'
import { setLeaveDate } from '../../../app/BookingStates/datesStates/leaveDateSlice'
import { setReturnDate } from '../../../app/BookingStates/datesStates/returnDateSlice'

function FormItem(props) {

  const dispatch = useDispatch()
  const handleType = (e) => {
    const value = e.target.value
    const id = e.target.attributes.id.value
    if(id === 'return-input') dispatch(setReturnDate(value)) 
    else dispatch(setLeaveDate(value))
  }

  return (
    <div className='cf-form-item'>
      <input 
        onKeyUp={handleType}
        id={props.id} 
        className='cf-form-input' 
        type='text' 
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default FormItem