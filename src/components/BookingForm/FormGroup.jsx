import React from 'react'
import { useDispatch } from 'react-redux'
import { setDestination}  from '../../app/BookingStates/destinationSlice'
import { setOrigin}  from '../../app/BookingStates/originSlice'
import { setClass } from '../../app/BookingStates/classSlice'
import { setLeaveDate } from '../../app/BookingStates/datesStates/leaveDateSlice'
import { setReturnDate } from '../../app/BookingStates/datesStates/returnDateSlice'
import { setAdults } from '../../app/BookingStates/passengers/adultsSlice'
import { setMinor } from '../../app/BookingStates/passengers/minorSlice'

function FormGroup(props) {
    const dispatch = useDispatch();

    const handleKeyUp = (e) => {
        const label = e.target.previousSibling.innerText.toLowerCase();

        label === 'flying from' ? 
            dispatch(setOrigin(e.target.value)) : 
            dispatch(setDestination(e.target.value));
    }

    const handleClick = (e) => {
        const label = e.target.previousSibling.innerText.toLowerCase();
        label === 'departing' ? 
            dispatch(setLeaveDate(e.target.value)) :
            dispatch(setReturnDate(e.target.value));
    }

    const handleSelect = (e) => {
        const label = e.target.previousSibling.innerText.toLowerCase();
        switch (label) {
            case 'adults (18+)': dispatch(setAdults(e.target.value)); break;
            case 'children (0-17)': dispatch(setMinor(e.target.value)); break;
            default: break;
        }
    }

    switch (props.type) {
        case 'text':
           return  (
                <div className="col-md-6">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <input className="form-control" type="text" placeholder={props.placeholder} onKeyUp={handleKeyUp}/>
                    </div>
                </div>

            )
        case 'date':
            return (
                <div className="col-md-6">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <input className="form-control" type="date" required  onChange={handleClick}/>
                    </div>
                </div>
            )           
        case 'select':
            return(
                <div className="col-md-4">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <select className="form-control" onChange={handleSelect}>
                            {props.options.map((option, index) => {
                                return <option key={index}>{option}</option>
                            })}
                        </select>
                        <span className="select-arrow"></span>
                    </div>
                </div>
            )         
            default: return null;
    }
}
    export default FormGroup