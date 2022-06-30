import React from 'react'
import { searchAirports } from '../../../api/api'
import { setDestination } from '../../../app/BookingStates/destinationSlice'
import { setOrigin } from '../../../app/BookingStates/originSlice'
import { useDispatch } from 'react-redux'

function FormItemLoad(props) {

  const dispatch = useDispatch()

  const handleType = (e) => {
    const value = e.target.value
    const id = e.target.attributes.id.value
    if(id === 'from-input'){
      dispatch(setOrigin(value))
    } else {
      dispatch(setDestination(value))
    }

    
    if(value.length > 2){
      searchAirports(value)
        .then(res => {
          if(res.ok) return res.json();
        })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div className='cf-form-item'>
      <div className='input-item_loading'>
        <input 
          onKeyUp={handleType}
          id={props.id} 
          className='cf-form-input' 
          type='text' 
          placeholder={props.placeholder}
        />
        <span></span>
      </div>
      <ul className='form-item-dropdown'>

      </ul> 
    </div>
  )
}

export default FormItemLoad