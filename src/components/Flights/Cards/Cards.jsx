import React from 'react'
import './Cards.css' 

function Cards({ children }) {
  return (
    <div className='card-ctn'>
      <h2>{children.owner.name} <span>{children.owner.iata_code}</span></h2>
      <img src={children.owner.logo_symbol_url} alt='owner' />
      <p>{children.total_amount} {children.total_currency}</p>
      <p>Updated at {children.updated_at}</p>
    </div>
  )
}

export default Cards