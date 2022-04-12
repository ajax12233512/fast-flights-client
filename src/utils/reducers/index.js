import navbarReducer  from "./navbarReducer";
import flightFormReducer from "./flightTypeReducer";
import flightClassReducer from "./flightClassReducer";
import { flightInputReducer1, flightInputReducer2, flightInputReducer3, flightInputReducer4 } from "./FlightInputReducer";
//Flight Passenger data
import {    
    flightAdultReducer, 
    flightStudentReducer,
    flightSeniorReducer,
    flightYouthsReducer,
    flightChildrenReducer,
    flightToddlersReducer,
    flightInfantsReducer
} from "./flightNumberReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    navbar : navbarReducer,
    flightType : flightFormReducer,
    flightClass : flightClassReducer,
    passAdult : flightAdultReducer,
    passStudent : flightStudentReducer,
    passSenior : flightSeniorReducer,
    passYouth : flightYouthsReducer,
    passChildren : flightChildrenReducer,
    passToddler : flightToddlersReducer,
    passInfant : flightInfantsReducer,
    origin: flightInputReducer1,
    destination: flightInputReducer2,
    departureDate: flightInputReducer3,
    returnDate: flightInputReducer4  
});

export default allReducers;