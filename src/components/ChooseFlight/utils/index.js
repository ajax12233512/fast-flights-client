export const fillFlightOptionsDepart = (array) => {
    return array.map((item, index) => {
        if(item === null) return null
        return (
            <li key={index}>{item.name}</li>
        )
    }
)}

export const fillFlightOptionsArrive = (array) => {
    return array.map((item, index) => {
        if(item === null) return null
        return (
            <li key={index}>{item.name}</li>
        )
    }
)}


