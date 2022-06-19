import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './ChooseFlight.css'
import { setFlightInput1, setFlightInput2, setFlightInput3, setFlightInput4, setFlightNumber } from '../../utils/actions'
import { fillFlightOptionsArrive, fillFlightOptionsDepart } from './utils/index.js'
import { tabStyle } from './utils/styles.js';
import { handleSubmit, childrenAgeCapture } from './utils/index.js';


function ChooseFlight() {
    
    //TODO: Componetize this

    return (
        <div className='cf-container'>
            <div className='cf-title'>
                <h2>Search your perfect flight</h2>
            </div>
            <div className='cf-filters'>
                <div className='cf-filters-triptype filter-item'>
                    <h3>Filter Items</h3>
                    <ul>
                        <li value='one-way'>One-Way</li>
                        <li value='round-trip'>Round-Trip</li>
                        <li value='multi-city'>Multi-City</li>
                    </ul>
                </div>
                <div className='cf-filters-travelers filter-item'>
                    <h3>Travelers</h3>
                    <ul>
                        <li>
                            <h4>Adults</h4>
                            <p>18-64</p>
                            <div data-passtype='adult'>
                                <div>-</div>
                                <div>Fligtt Adult State</div>
                                <div>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Students</h4>
                            <p>over 18</p>
                            <div data-passtype='student'>
                                <div>-</div>
                                <div></div>
                                <div>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Seniors</h4>
                            <p>65+</p>
                            <div data-passtype='senior'>
                                <div>-</div>
                                <div></div>
                                <div>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Youths</h4>
                            <p>12-17</p>
                            <div data-passtype='youth'>
                                <div>-</div>
                                <div></div>
                                <div>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Children</h4>
                            <p>2-11</p>
                            <div data-passtype='children'>
                                <div>-</div>
                                <div></div>
                                <div>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Toddlers with own seat</h4>
                            <p>2-11</p>
                            <div data-passtype='toddler'>
                                <div>-</div>
                                <div></div>
                                <div>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Infants on lap</h4>
                            <p>-2</p>
                            <div data-passtype='infant'>
                                <div>-</div>
                                <div></div>
                                <div>+</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='cf-filters-class filter-item'>
                    <h3>Travelers</h3>
                    <ul>
                        <li value='economy'>Economy</li>
                        <li value='premium-economy'>Premium-Economy</li>
                        <li value='business'>Business</li>
                        <li value='first'>First</li>
                        <li value='multiple'>Multiple</li>
                    </ul>
                </div>
            </div>
            {/* { flightTotalChildren > 0 ? <div className='children-ages-ctn'><strong>Children Ages</strong>{childrenAgeCapture(flightTotalChildren)}</div> : null } */}
            <div className='cf-form'>
                {/* Keep the ID      attrubute as the first attribute after `onKeyUp` event listener */}
                <div className='cf-form-item'>
                    <div className='input-item_loading'>
                        <input id='from-input' className='cf-form-input' type='text' placeholder='From'/>
                        <span></span>
                    </div>
                    <ul className='form-item-dropdown'>
                        
                    </ul>
                </div>
                <div className='cf-form-item'>
                    <div className='input-item_loading'>
                        <input id='to-input'  className='cf-form-input' type='text' placeholder='To'/>
                        <span></span>
                    </div>
                    <ul className='form-item-dropdown'>
                        
                    </ul>
                </div>
                <div className='cf-form-item'>
                    <input onKeyUp={null}  id='leave-input' className='cf-form-input' type='text' placeholder='Departure Date yyyy/dd/mm'/>
                    <ul className='form-item-dropdown'>

                    </ul>
                </div>
                <div className='cf-form-item'>
                    <input onKeyUp={null}  id='arrive-input' className='cf-form-input' type='text' placeholder='Arrive Date yyyy/dd/mm'/>
                    <ul className='form-item-dropdown'>

                    </ul>
                </div>
            </div>
            <div className='cf-btn'>
                <button type='submit'>Search Flights</button>
            </div>
        </div>
    )
}

export default ChooseFlight