import React from 'react'

function FormGroup(props) {
    switch (props.type) {
        case 'text':
           return  (
                <div className="col-md-6">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <input className="form-control" type="text" placeholder={props.placeholder} />
                    </div>
                </div>

            )
        case 'date':
            return (
                <div className="col-md-6">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <input className="form-control" type="date" required />
                    </div>
                </div>
            )           
        case 'select':
            return(
                <div className="col-md-4">
                    <div className="form-group">
                        <span className="form-label">{props.label}</span>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                    </div>
                </div>
            )         
            default: return null;
    }
}
    export default FormGroup