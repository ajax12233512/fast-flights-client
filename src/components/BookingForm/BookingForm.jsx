import React from 'react'
import './BookingForm.css'
import FormCheckbox from './FormCheckbox'
import FormGroup from './FormGroup'
import { 
    adultsOptionsList, 
    childrenOptionsList, 
    classOptionsList 
} from './utils/utils.js'
function BookingForm() {
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
        </div>
        <div className="form-btn">
            <button className="submit-btn">Show flights</button>
        </div>
    </form>
</div>
  )
}

export default BookingForm