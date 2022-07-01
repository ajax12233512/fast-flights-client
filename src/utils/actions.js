export const expand = () => {
    return {
        type: 'EXPAND'
    }
}

export const condense = () => {
    return {
        type: 'CONDENSE'
    }
}

export const setFlightType = (type) => {
    return {
        type: 'SET_FLIGHT_TYPE',
        payload: type
    }
}
export const setFlightNumber = (action) => {
    return {
        type: action,//ex. adult/add
    }
}
export const setFlightClass = (flightClass) => {
    return {
        type: 'SET_FLIGHT_CLASS',
        payload: flightClass
    }
}

export const setFlightInput1 = (inputString, inputType) => {
    return {
        type: 'SET_FLIGHT_INPUT_DESTINATION',
        payload: { inputString, inputType } //specifies which input to change
    }
}
export const setFlightInput2 = (inputString, inputType) => {
    return {
        type: 'SET_FLIGHT_INPUT_ORIGIN',
        payload: { inputString, inputType } //specifies which input to change
    }
}
export const setFlightInput3 = (inputString, inputType) => {
    return {
        type: 'SET_FLIGHT_INPUT_DEPARTUREDATE',
        payload: { inputString, inputType } //specifies which input to change
    }
}
export const setFlightInput4 = (inputString, inputType) => {
    return {
        type: 'SET_FLIGHT_INPUT_RETURNDATE',
        payload: { inputString, inputType } //specifies which input to change
    }
}

export const addChild = (age) => {
    return {
        type: 'ADD_CHILD',
        payload: {age} 
    }
}

export const removeChild = (age) => {
    return {
        type: 'ADD_CHILD',
        payload: {age} 
    }
}
    