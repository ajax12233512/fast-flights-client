import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Header.css';
import { expand, condense } from '../../utils/actions';

function Header () {
  
  const toggleNavbar = useSelector(state => state.navbar)
  const dispatch = useDispatch()

  return (
    <div className='header'>
        <div className='header-left'>
            <div className='header-menu-icon header-item'>
                <i  
                    className={toggleNavbar ? 'fas fa-ban' : 'fas fa-bars'}
                    onClick={() => { toggleNavbar ? dispatch(condense()) : dispatch(expand())} }>
                </i>
            </div>
            <div className='header-logo-icon header-item'>
                <i className='fas fa-paper-plane'></i>
            </div>
        </div>
        <div className='header-right'>
            <div className='header-adventures header-item'>
                <p id='header-trips-btn'>Trips</p>
            </div>
            <div className='header-signin header-item'>
                <i className="fas fa-user"></i>
                <p id='header-signin-btn'>Sign In</p>
            </div>
        </div>
    </div>
  )
}
export default Header