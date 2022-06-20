import React from 'react'
import Dropdowns from '../utils/Dropdowns'


function FlightClass() {

  const classes = [
    <li value='economy'>Economy</li>,
    <li value='premium-economy'>Premium-Economy</li>,
    <li value='business'>Business</li>,
    <li value='first'>First</li>,
    <li value='multiple'>Multiple</li>
  ]  

  return (
    <>
        <Dropdowns title='Flight Class' ctnClass='class'>
            {classes}
        </Dropdowns>
    </>
  )
}

export default FlightClass