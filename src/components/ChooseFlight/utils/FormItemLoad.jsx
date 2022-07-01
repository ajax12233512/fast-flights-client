import React from 'react'
import { searchAirports } from '../../../api/api'
import { setDestination } from '../../../app/BookingStates/destinationSlice'
import { setOrigin } from '../../../app/BookingStates/originSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


function FormItemLoad(props) {
  const dispatch = useDispatch()
  const [newData, setNewData] = useState([])

  const handleType = (e) => {
    const value = e.target.value
    const id = e.target.attributes.id.valu
    
    //Set state of origin or destination
    if(id === 'from-input') dispatch(setOrigin(value)) 
    else dispatch(setDestination(value))
    
    //Search for airports based on the value of the input
    if(value.length > 2){
      searchAirports(value)
        .then(res => {
          if(res.ok) return res.json();
        })
        .then(data => {
          setNewData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const handleClick = (e) => {
    const type = e.target.attributes.type.value
    const dataset = e.target.dataset
    if(dataset.iata !== '') {
      e.target.parentElement.previousElementSibling.children[0].value = dataset.iata
      setNewData([])
    } else { 
      e.target.parentElement.previousElementSibling.children[0].value = dataset.city
      setNewData([])
    }

    if(type === 'from-input') {
      if(dataset.iata !== '') {
        e.target.parentElement.previousElementSibling.children[0].value = dataset.iata
        dispatch(setOrigin(dataset.iata))
      } else { 
        e.target.parentElement.previousElementSibling.children[0].value = dataset.city
        dispatch(setOrigin(dataset.city))
        setNewData([])
      }
    } else {
      if(dataset.iata !== '') {
        e.target.parentElement.previousElementSibling.children[0].value = dataset.iata
        dispatch(setDestination(dataset.iata))
      } else { 
        e.target.parentElement.previousElementSibling.children[0].value = dataset.city
        dispatch(setDestination(dataset.city))
        setNewData([])
      }
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
        {newData.data ? newData.data.map((item, index) => {
          return (
            <li className='form-item-list_load' key={index} onClick={handleClick} data-iata={item.iata} data-city={item.city} type={props.id}>
              {item.name}
            </li>
          )
        }) : null}
      </ul> 
    </div>
  )
}

export default FormItemLoad