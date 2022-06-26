import React, { useState } from 'react'

function ChildAge() {

  const [age, setAge] = useState(0)

  const handleClick = (e) => {
    if(e.target.innerText === '+'){
        if(age === 17){
            setAge(age)
        } else {
            setAge(age + 1)
        }
    } else {
        if(age === 0){
            setAge(0)
        } else {
            setAge(age - 1)
        }
    }

  }

  return (
    <div className='children-ages-ctn'>
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