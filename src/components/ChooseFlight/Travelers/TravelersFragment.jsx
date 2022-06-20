import React from 'react'

function TravelersFragment(props) {
  return (
    <>
        <h4>{props.title}</h4>
        <p>{props.ages}</p>
        <div>
            <div>-</div>
            <div>state</div>
            <div>+</div>
        </div>
    </>
  )
}

export default TravelersFragment