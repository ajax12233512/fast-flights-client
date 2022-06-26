import React, { useEffect, useState } from 'react';
import './ChooseFlight.css'
import Type from './Type/Type';
import FlightClass from './FlightClass/FlightClass';
import Travelers from './Travelers/Travelers';
import FormItemLoad from './utils/FormItemLoad';
import FormItem from './utils/FormItem';
import { useSelector } from 'react-redux';
import { selectMinor } from '../../app/BookingStates/passengers/minorSlice';
import ChildAge from './utils/ChildAge';
function ChooseFlight() {
    
    //TODO: Componetize this
    const minors = useSelector(selectMinor)
    let minorsList = [];

    for(let i = 0; i < minors; i++){
        minorsList.push(<ChildAge />)
    }

    return (
        <div className='cf-container'>
            <div className='cf-title'>
                <h2>Search your perfect flight</h2>
            </div>
            <div className='cf-filters'>
                <Type />
                <Travelers />
                <FlightClass />
            </div>
            { minors > 0 ? minorsList.map(item => item) : null }
            <div className='cf-form'>
                {/* Keep the ID      attrubute as the first attribute after `onKeyUp` event listener */}
                <FormItemLoad id='from-input' placeholder='From' />
                <FormItemLoad id='to-input' placeholder='To' />
                <FormItem id='leave-input' placeholder='Departure yyyy/dd/mm'></FormItem>
                <FormItem id='return-input' placeholder='Return yyyy/dd/mm'></FormItem>
            </div>
            <div className='cf-btn'>
                <button type='submit'>Search Flights</button>
            </div>
        </div>
    )
}

export default ChooseFlight