import React from 'react'
import Dropdowns from '../utils/Dropdowns'

function Type() {

  const type = [
    <li value='one-way'>One Way</li>,
    <li value='round-trip'>Round Trip</li>,
    <li value='multi-city'>Multi City</li>
  ]

  return (
    <>
        <Dropdowns title='Flight Type' ctnClass='triptype'>
          {type}
        </Dropdowns>
    </>
  )
}

export default Type