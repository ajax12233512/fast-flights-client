import React from 'react'
import { useDispatch } from 'react-redux';
import { setType } from '../../app/BookingStates/typeSlice';
function FormCheckbox() {
    const dispatch = useDispatch();
    return (
        <div className="form-checkbox">
            <label htmlFor="roundtrip">
                <input type="radio" id="roundtrip" name="flight-type" />
                <span onClick={() => dispatch(setType('roundtrip'))}></span>Roundtrip
            </label>
            <label htmlFor="one-way">
                <input type="radio" id="one-way" name="flight-type" />
                <span onClick={() => dispatch(setType('one-way'))}></span>One way
            </label>
            <label htmlFor="multi-city">
                <input type="radio" id="multi-city" name="flight-type" />
                <span onClick={() => dispatch(setType('multi-city'))}></span>Multi-City
            </label>
        </div>
    )
}

export default FormCheckbox