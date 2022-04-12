import React from 'react'
import { useSelector } from 'react-redux'
import './Menu.css'
function Menu() {
    
  const toggleNavbar = useSelector(state => state.navbar)

  return (
    <div className='menu' style={toggleNavbar ? {display: 'block'} : {display: 'none'}}>
        <div className='menu-1 menu-item'>
            <a href='/'><i className='fas fa-user menu-icon'></i>Sign In</a>
        </div>
        <div className='menu-2 menu-item'>
            <a href='/flights'><i className="fas fa-plane-departure menu-icon"></i>Flights</a>
            <a href='/'><i className="fas fa-cloud-sun menu-icon"></i>Things to do</a>
        </div>
        <div className='menu-3 menu-item'>
            <a href='/'><i className="fas fa-address-card menu-icon"></i>About</a>
            <a href='/'><i className="fas fa-envelope menu-icon"></i>Contact</a>
        </div>
        <div className='menu-4 menu-item'>
            <a href='/'><i className="fas fa-location-arrow menu-icon"></i>Trips</a>
        </div>
    </div>
  )
}

export default Menu