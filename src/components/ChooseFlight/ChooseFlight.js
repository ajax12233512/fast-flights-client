import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './ChooseFlight.css'
import { setFlightInput1, setFlightInput2, setFlightInput3, setFlightInput4, setFlightNumber } from '../../utils/actions'

function ChooseFlight() {

    const [travelType, setTravelType] = useState(false);
    const [travelNumber, setTravelNumber] = useState(false);
    const [travelClass, setTravelClass] = useState(false);

    const dispatch = useDispatch();

    //Flight type state
    const flightTypeState = useSelector(state => state.flightType);

    //Flight passenger state
    const flightAdultState = useSelector(state => state.passAdult);
    const flightStudentState = useSelector(state => state.passStudent);
    const flightSeniorState = useSelector(state => state.passSenior);
    const flightYouthState = useSelector(state => state.passYouth);
    const flightChildrenState = useSelector(state => state.passChildren);
    const flightToddlerState = useSelector(state => state.passToddler);
    const flightInfantState = useSelector(state => state.passInfant);
    const flightTotalPassenger = flightAdultState +
                                flightStudentState +
                                flightSeniorState +
                                flightYouthState +
                                flightChildrenState +
                                flightToddlerState +
                                flightInfantState;
                                

    //Flight class state
    const flightClassState = useSelector(state => state.flightClass);

    const handleClick = (e) => {
        const elementClassName = e.target.parentElement.attributes.class.nodeValue; //ul next to h3
        if(elementClassName.includes('triptype')) { //If user clicke flight type
            setTravelType(!travelType)
            setTravelNumber(false)
            setTravelClass(false)
        }
        else if(elementClassName.includes('travelers')){ //if user clicks flight travelers
            setTravelNumber(!travelNumber)
            setTravelType(false)
            setTravelClass(false)
        }
        else if(elementClassName.includes('class')){  //if user clicks flight class
            setTravelClass(!travelClass)
            setTravelType(false)
            setTravelNumber(false)
        }
    }

    const tabStyle = {
        'backgroundColor': 'rgb(54,81,94)',
        'color': 'white'
    }

    const handleTripTypeChange = (e) => {
        dispatch({ type: 'SET_FLIGHT_TYPE', payload : e.target.attributes.value.value })
    }

    const handleTripClassChange = (e) => {
        dispatch({ type: 'SET_FLIGHT_CLASS', payload : e.target.attributes.value.value })
    }

    const handleTripNumberChange = (e) => {
        //Create action
        const tripActionType = e.target.parentElement.dataset.passtype;
        const tripActionOp = e.target.innerHTML === '+' ? 'add' : 'sub';
         //Action to be made
        const actionString = tripActionType.concat('/', tripActionOp);

        dispatch(setFlightNumber(actionString))
    }

    useEffect(() => {
        
    }, [])


    const handleType = (e) => {
        //Set up autocomplete feature for airport input
        
        const inputType = e.target.attributes[0].nodeValue;
        console.log(inputType, e.target.value)

        fetch('api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: e.target.value,
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                data.map(item => {
                    if(item.name.includes(e.target.value)){
                        console.log(item);
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })

        switch(inputType) {
            case 'from-input': {
                let inputString = e.target.value;
                dispatch(setFlightInput1(inputString, inputType))
                break;
            }
            case 'to-input': {
                let inputString = e.target.value;
                dispatch(setFlightInput2(inputString, inputType))
                break;
            }
            case 'leave-input': {
                let inputString = e.target.value;
                dispatch(setFlightInput3(inputString, inputType))
                break;
            }
            case 'arrive-input': {
                let inputString = e.target.value;
                dispatch(setFlightInput4(inputString, inputType))
                break;
            }
            default: {

            }
        }
        
    }

    return (
        <div className='cf-container'>
            <div className='cf-title'>
                <h2>Search your perfect flight</h2>
            </div>
            <div className='cf-filters'>
                <div className='cf-filters-triptype filter-item'>
                    <h3 style={travelType ? tabStyle : null} onClick={handleClick}>{flightTypeState.toUpperCase()}</h3>
                    <ul className={travelType ? 'cf-show' : 'cf-hide'}>
                        <li onClick={handleTripTypeChange} value='one-way'>One-Way</li>
                        <li onClick={handleTripTypeChange} value='round-trip'>Round-Trip</li>
                        <li onClick={handleTripTypeChange} value='multi-city'>Multi-City</li>
                    </ul>
                </div>
                <div className='cf-filters-travelers filter-item'>
                    <h3 style={travelNumber ? tabStyle : null} 
                        onClick={handleClick}>{flightTotalPassenger === 1 ? 
                            '1 Traveler' :
                            `${flightTotalPassenger} Travelers`}
                    </h3>
                    <ul className={travelNumber ? 'cf-show' : 'cf-hide'}>
                        <li>
                            <h4>Adults</h4>
                            <p>18-64</p>
                            <div data-passtype='adult'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightAdultState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Students</h4>
                            <p>over 18</p>
                            <div data-passtype='student'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightStudentState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Seniors</h4>
                            <p>65+</p>
                            <div data-passtype='senior'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightSeniorState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Youths</h4>
                            <p>12-17</p>
                            <div data-passtype='youth'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightYouthState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Children</h4>
                            <p>2-11</p>
                            <div data-passtype='children'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightChildrenState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Toddlers with own seat</h4>
                            <p>2-11</p>
                            <div data-passtype='toddler'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightToddlerState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                        <li>
                            <h4>Infants on lap</h4>
                            <p>-2</p>
                            <div data-passtype='infant'>
                                <div onClick={handleTripNumberChange}>-</div>
                                <div>{flightInfantState}</div>
                                <div onClick={handleTripNumberChange}>+</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='cf-filters-class filter-item'>
                    <h3 style={travelClass ? tabStyle : null} onClick={handleClick}>{flightClassState}</h3>
                    <ul className={travelClass ? 'cf-show' : 'cf-hide'}>
                        <li value='economy' onClick={handleTripClassChange}>Economy</li>
                        <li value='premium-economy' onClick={handleTripClassChange}>Premium-Economy</li>
                        <li value='business' onClick={handleTripClassChange}>Business</li>
                        <li value='first' onClick={handleTripClassChange}>First</li>
                        <li value='multiple' onClick={handleTripClassChange}>Multiple</li>
                    </ul>
                </div>
            </div>
            <div className='cf-form'>
                {/* Keep the ID attrubute as the first attribute after `onKeyUp` event listener */}
                <div className='cf-form-item'>
                    <input onKeyUp={handleType} id='from-input' type='text' placeholder=''/>
                </div>
                <div className='cf-form-item'>
                    <input onKeyUp={handleType} id='to-input' type='text' placeholder=''/>
                </div>
                <div className='cf-form-item'>
                    <input onKeyUp={handleType} id='leave-input' type='text' placeholder=''/>
                </div>
                <div className='cf-form-item'>
                    <input onKeyUp={handleType} id='arrive-input' type='text' placeholder=''/>
                </div>
            </div>
            <div className='cf-btn'>
                <button>Search Flights</button>
            </div>
        </div>
    )
}

export default ChooseFlight