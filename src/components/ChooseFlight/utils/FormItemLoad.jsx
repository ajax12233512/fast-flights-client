import React from 'react'
import { searchAirports } from '../../../api/api'
function FormItemLoad(props) {

  const handleType = (e) => {
    const value = e.target.value
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