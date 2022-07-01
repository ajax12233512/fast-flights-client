import React, { useState } from 'react'
import { incrementMinorAge, decrementMinorAge } from '../../../app/BookingStates/passengers/minorSlice'
import { useDispatch } from 'react-redux'
function ChildAge(props) {
  const dispatch = useDispatch()
  const [age, setAge] = useState(0)

  const handleClick = (e) => {
    const index = e.target.parentElement.parentElement.attributes.index.value
    if(e.target.innerText === '+'){
        if(age === 17){
            setAge(age)
            dispatch(incrementMinorAge({index: index, age: age}))
        } else {
            setAge(age + 1)
            dispatch(incrementMinorAge({index: index, age: age}))
        }
    } else {
        if(age === 0){
            setAge(0)
            dispatch(decrementMinorAge({index: index, age: age}))
        } else {
            setAge(age - 1)
            dispatch(decrementMinorAge({index: index, age: age}))
        }
    }
  }

  return (
    <div data-age={age} index={props.index} className='children-ages-ctn'>
        <div>
            <label>Enter Child Age</label>
            <br/>
            <span onClick={handleClick}>+</span>
            <span onClick={handleClick}>-</span>
        </div>
        <div>
            <strong className='child-age'>{age}</strong>
        </div>
    </div>
  )
}

export default ChildAge