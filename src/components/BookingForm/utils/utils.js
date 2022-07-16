export const adultsOptionsList = [
    1, 2, 3, 4, 5
];

export const childrenOptionsList = [
    0, 1, 2, 3, 4
];

export const classOptionsList = [
    'Economy Class', 'Business Class', 'First Class'
];

export const childAgeOptionsList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
]

export const generateMinorRows = (numOfChildren) => {
    let items = [];
    for (let i = 0; i < numOfChildren; i++) {
        items.push(
            <div className="col-md-4 col-sm-4">
                <div className="form-group">
                    <span className="form-label">Child Age</span>
                    <select className="form-control">
                        {childAgeOptionsList.map((option, index) => {
                            return <option key={index} >{option}</option>
                        })}
                    </select>
                    <span className="select-arrow"></span>
                </div>
            </div>
        )
    }
    return items;
}