import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementAdults, decrementAdults } from '../../../app/BookingStates/passengers/adultsSlice'
import { incrementMinor, decrementMinor } from '../../../app/BookingStates/passengers/minorSlice'

function TravelersFragment(props) {

  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    const type = e.target.parentElement.parentElement.children[0].innerText
    if(type === 'Adults'){
      if(e.target.innerText === '+'){
        dispatch(incrementAdults({type: 'adult'}))
      } else {
        dispatch(decrementAdults({type: 'adult'}))
      }
    }
    else if(type === 'Minors'){
      if(e.target.innerText === '+'){
        dispatch(incrementMinor({age: 0}))
      } else {
        dispatch(decrementMinor())
      }
    }
  }

  return (
    <>
        <h4>{props.title}</h4>
        <p>{props.ages}</p>
        <div>
            <div onClick={handleClick}>-</div>
            <div>{props.value}</div>
            <div onClick={handleClick}>+</div>
        </div>
    </>
  )
}

export default TravelersFragment