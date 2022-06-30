import React from 'react'
import Dropdowns from '../utils/Dropdowns'
import TravelersFragment from './TravelersFragment'
import { useSelector } from 'react-redux'
import { selectAdults } from '../../../app/BookingStates/passengers/adultsSlice'
import { selectMinor } from '../../../app/BookingStates/passengers/minorSlice'

function Travelers() {
  
  const adults = useSelector(selectAdults).adults.length;
  const minors = useSelector(selectMinor).minors.length
  console.log(minors)
  //two travelers lists for different ui setups
  // const travelers1 = [
  //   <li><TravelersFragment title='Adults' ages='18-64' /></li>,
  //   <li><TravelersFragment title='Students' ages='over 18' /></li>,
  //   <li><TravelersFragment title='Seniors' ages='65+' /></li>,
  //   <li><TravelersFragment title='Youths' ages='12-17' /></li>,
  //   <li><TravelersFragment title='Children' ages='2-11' /></li>,
  //   <li><TravelersFragment title='Toddlers with own seat' ages='2-11' /></li>,
  //   <li><TravelersFragment title='Infants on lap' ages='-2' /></li>
  // ]

  const travelers2 = [
    <li><TravelersFragment value={adults} title='Adults' ages='18-64' /></li>,
    <li><TravelersFragment value={minors} title='Minors' ages='0-17' /></li>
  ]

  return (
    <>
        <Dropdowns title={`Passengers ${adults + minors}`} ctnClass='travelers'>
            {travelers2}
        </Dropdowns>
    </>
  )
}

export default Travelers