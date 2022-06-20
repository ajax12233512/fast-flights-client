import React from 'react'
import Dropdowns from '../utils/Dropdowns'
import TravelersFragment from './TravelersFragment'

function Travelers() {
  
  const travelers = [
    <li><TravelersFragment title='Adults' ages='18-64' /></li>,
    <li><TravelersFragment title='Students' ages='over 18' /></li>,
    <li><TravelersFragment title='Seniors' ages='65+' /></li>,
    <li><TravelersFragment title='Youths' ages='12-17' /></li>,
    <li><TravelersFragment title='Children' ages='2-11' /></li>,
    <li><TravelersFragment title='Toddlers with own seat' ages='2-11' /></li>,
    <li><TravelersFragment title='Infants on lap' ages='-2' /></li>
  ]

  return (
    <>
        <Dropdowns title='Passengers' ctnClass='travelers'>
            {travelers}
        </Dropdowns>
    </>
  )
}

export default Travelers