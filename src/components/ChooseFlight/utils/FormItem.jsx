import React from 'react'
import { useDispatch } from 'react-redux'
import { setLeaveDate } from '../../../app/BookingStates/datesStates/leaveDateSlice'
import { setReturnDate } from '../../../app/BookingStates/datesStates/returnDateSlice'
import Calendar from 'react-calendar'

function FormItem(props) {

  const [showCalendar, setShowCalendar] = React.useState(false);
  const dispatch = useDispatch()
  const handleType = (e) => {
    const value = e.target.value
    const id = e.target.attributes.id.value
    if(id === 'return-input') dispatch(setReturnDate(value)) 
    else dispatch(setLeaveDate(value))
  }

  const toggleCalendar = (e) => {
    e.preventDefault();
    setShowCalendar(true);
  }

  const hideCalendar = (e) => {
    e.preventDefault();
    setShowCalendar(false);
  }

  return (
    <div className='cf-form-item'>
      <input 
        onKeyUp={handleType}
        id={props.id} 
        className='cf-form-input' 
        type='text' 
        placeholder={props.placeholder}
        onFocus={toggleCalendar}
        onBlur={hideCalendar}
      />
      <div style={
        showCalendar ? {display: 'block'} : {display: 'none'}
      }>
        <Calendar />
      </div>
    </div>
  )
}

export default FormItem