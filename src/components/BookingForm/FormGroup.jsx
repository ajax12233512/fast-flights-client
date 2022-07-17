import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDestination } from '../../app/BookingStates/destinationSlice'
import { setOrigin } from '../../app/BookingStates/originSlice'
import { setClass } from '../../app/BookingStates/classSlice'
import { setLeaveDate } from '../../app/BookingStates/datesStates/leaveDateSlice'
import { setReturnDate } from '../../app/BookingStates/datesStates/returnDateSlice'
import { setAdults } from '../../app/BookingStates/passengers/adultsSlice'
import { setMinor } from '../../app/BookingStates/passengers/minorSlice'
import { searchAirports } from '../../api/api'

function FormGroup(props) {
    const dispatch = useDispatch();
    const [newData, setNewData] = useState([])
    const [toggleAutoComplete, setToggleAutoComplete] = useState(false)

    const handleKeyUp = (e) => {
        const value = e.target.value
        const label = e.target.previousSibling.innerText.toLowerCase();
        console.log(value)
        label === 'flying from' ?
            dispatch(setOrigin(e.target.value)) :
            dispatch(setDestination(e.target.value));

        if (value.length > 2) {
            setToggleAutoComplete(true)
            searchAirports(value)
                .then(res => {
                    if (res.ok) return res.json();
                })
                .then(data => {
                    setNewData(data)
                })
                .catch(err => {
                    console.log(err)
                })
        } else if (value.length < 2) {
            setToggleAutoComplete(false)
        }
    }

    const handleClick = (e) => {
        const label = e.target.previousSibling.innerText.toLowerCase();
        label === 'departing' ?
            dispatch(setLeaveDate(e.target.value)) :
            dispatch(setReturnDate(e.target.value));
    }

    const handleClickItem = (e) => {
        const dataset = e.target.dataset
        const label = e.target.parentElement.previousSibling.previousSibling.innerText.toLowerCase();
        if (label === 'flying from') {
            if (dataset.iata !== '') {
                e.target.parentElement.previousElementSibling.value = dataset.iata
                dispatch(setOrigin(dataset.iata))
                setToggleAutoComplete(false)
            } else {
                e.target.parentElement.previousElementSibling.value = dataset.city
                dispatch(setOrigin(dataset.city))
                setToggleAutoComplete(false)
            }
        } else {
            if (dataset.iata !== '') {
                e.target.parentElement.previousElementSibling.value = dataset.iata
                dispatch(setDestination(dataset.iata))
                setToggleAutoComplete(false)
            } else {
                e.target.parentElement.previousElementSibling.value = dataset.city
                dispatch(setDestination(dataset.city))
                setToggleAutoComplete(false)
            }
        }
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
            return (
                <div className="col-md-6">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <input className="form-control" type="text" placeholder={props.placeholder} onKeyUp={handleKeyUp} />
                        <ul style={toggleAutoComplete ? { display: 'block' } : { display: 'none' }}>
                            {newData.data ? newData.data.map((item, index) => {
                                console.log(newData.data.length)
                                return (
                                    <li className='form-item-list_load' key={index} onClick={handleClickItem} data-iata={item.iata} data-city={item.city} type={props.id}>
                                        {item.name}
                                    </li>
                                )
                            }) : null}
                        </ul>
                    </div>
                </div>

            )
        case 'date':
            return (
                <div className="col-md-6">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <input className="form-control" type="date" required onChange={handleClick} />
                    </div>
                </div>
            )
        case 'select':
            return (
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