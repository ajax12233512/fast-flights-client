import React from 'react'

function FormCheckbox() {
    return (
        <div className="form-checkbox">
            <label htmlFor="roundtrip">
                <input type="radio" id="roundtrip" name="flight-type" />
                <span></span>Roundtrip
            </label>
            <label htmlFor="one-way">
                <input type="radio" id="one-way" name="flight-type" />
                <span></span>One way
            </label>
            <label htmlFor="multi-city">
                <input type="radio" id="multi-city" name="flight-type" />
                <span></span>Multi-City
            </label>
        </div>
    )
}

export default FormCheckbox