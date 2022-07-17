import React from 'react'
import { useDispatch } from 'react-redux'
import './BookingForm.css'
import FormCheckbox from './FormCheckbox'
import FormGroup from './FormGroup'
import { 
    adultsOptionsList, 
    childrenOptionsList, 
    classOptionsList,
    generateMinorRows
} from './utils/utils.js';
import { useSelector } from 'react-redux';
import minorSlice, { selectMinor } from '../../app/BookingStates/passengers/minorSlice';
import { setMinorAge } from '../../app/BookingStates/passengers/minorSlice';

function BookingForm() {

  const dispatch = useDispatch();
  const setMinorAgeCall = (e) => {
    const key = e.target.dataset.key;
    dispatch(setMinorAge({ key, value: e.target.value }));
  };
  const minor = useSelector(selectMinor);
  return (
    <div className="booking-form">
    <form>
        <div className="form-group">
            <FormCheckbox />
        </div>
        <div className="row">
            <FormGroup label="Flying from" placeholder="City or airport" type="text"/>
            <FormGroup label="Flying to" placeholder="City or airport" type="text"/>
        </div>
        <div className="row">
            <FormGroup label="Departing" type="date"/>
            <FormGroup label="Returning" type="date"/>
        </div>
        <div className="row">
            <FormGroup label="Adults (18+)" type="select" options={adultsOptionsList}/>
            <FormGroup label="Children (0-17)" type="select" options={childrenOptionsList}/>
            <FormGroup label="Travel class" type="select" options={classOptionsList}/>
            {
                // console.log(minor.minors.length)
                minor.minors.length > 0 ? generateMinorRows(minor.minors.length, setMinorAgeCall, minor.minors) : null
            }
        </div>
        <div className="form-btn">
            <button className="submit-btn">Show flights</button>
        </div>
    </form>
</div>
  )
}

export default BookingForm