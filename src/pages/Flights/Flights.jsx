import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react'
import { getFlights } from '../../api/api.js'
import './Flights.css';
import Cards from '../../components/Flights/Cards/Cards.jsx';
import Card from '../../components/Card/Card.jsx';
function Flights() {

  const [dataRef, setDataRef] = useState([])

  let requestId = window.localStorage.getItem('offerRequestId');
  console.log(requestId)

  useEffect(() => { 
    const response = async function () {
      return await getFlights({
        offerRequestId: requestId,
        sort: 'total_amount'
      });
    }
    
    response().then(res => {
      return res.json()
    }).then(data => {
      setDataRef(data.data)
      console.log('here')
    }).catch(err => {
      console.log(err)
    })

  }, [])


  

  return (
    <div className='flights'>
      <div className='flights__filters-ctn'></div>
      <div className='flights__cards-ctn'>
      {dataRef !== [] ? dataRef.map((flight, index) => {
          return (
            <Card>
              {flight}
            </Card>
          )
        }) : <div>Loading</div>}
      </div>
    </div>
  )
}

export default Flights