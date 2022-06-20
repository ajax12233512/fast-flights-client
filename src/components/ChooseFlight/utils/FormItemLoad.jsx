import React from 'react'

function FormItemLoad(props) {
  return (
    <div className='cf-form-item'>
      <div className='input-item_loading'>
        <input 
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