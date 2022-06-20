import React from 'react'

function FormItem(props) {
  return (
    <div className='cf-form-item'>
      <input 
        id={props.id} 
        className='cf-form-input' 
        type='text' 
        placeholder={props.placeholder}
      />
      <ul className='form-item-dropdown'>

      </ul> 
    </div>
  )
}

export default FormItem