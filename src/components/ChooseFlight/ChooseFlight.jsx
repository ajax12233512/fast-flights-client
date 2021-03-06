import React from 'react';
import './ChooseFlight.css'
import Type from './Type/Type';
import FlightClass from './FlightClass/FlightClass';
import Travelers from './Travelers/Travelers';
import FormItemLoad from './utils/FormItemLoad';
import FormItem from './utils/FormItem';
import { useSelector } from 'react-redux';
import { selectMinor } from '../../app/BookingStates/passengers/minorSlice';
import { } from '../../app/BookingStates/passengers/adultsSlice';
import SearchBtn from './SearchBtn/SearchBtn';
import ChildAge from './utils/ChildAge';
function ChooseFlight() {



    //TODO: Componetize this
    const minors = useSelector(selectMinor).minors.length;
    let minorsList = [];

    for (let i = 0; i < minors; i++) {
        minorsList.push(<ChildAge index={i} />)
    }

    return (
        <div class="booking-form">
            <form>
                <div class="form-group">
                    <div class="form-checkbox">
                        <label for="roundtrip">
                            <input type="radio" id="roundtrip" name="flight-type" />
                            <span></span>Roundtrip
                        </label>
                        <label for="one-way">
                            <input type="radio" id="one-way" name="flight-type" />
                            <span></span>One way
                        </label>
                        <label for="multi-city">
                            <input type="radio" id="multi-city" name="flight-type" />
                            <span></span>Multi-City
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <span class="form-label">Flying from</span>
                            <input class="form-control" type="text" placeholder="City or airport" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <span class="form-label">Flyning to</span>
                            <input class="form-control" type="text" placeholder="City or airport" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <span class="form-label">Departing</span>
                            <input class="form-control" type="date" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <span class="form-label">Returning</span>
                            <input class="form-control" type="date" required />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <span class="form-label">Adults (18+)</span>
                            <select class="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <span class="select-arrow"></span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <span class="form-label">Children (0-17)</span>
                            <select class="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            <span class="select-arrow"></span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <span class="form-label">Travel class</span>
                            <select class="form-control">
                                <option>Economy class</option>
                                <option>Business class</option>
                                <option>First class</option>
                            </select>
                            <span class="select-arrow"></span>
                        </div>
                    </div>
                </div>
                <div class="form-btn">
                    <button class="submit-btn">Show flights</button>
                </div>
            </form>
        </div>
    )
}

export default ChooseFlight