

const fillStyle = {
    listStyle: 'none',
    borderBottom: '1px solid #ccc',
    margin: '2%',
    cursor: 'pointer',
}


const handleListClick = (e) => {
    e.preventDefault();
    const iata = e.target.dataset.iata; // iata code
    e.target.parentElement.previousElementSibling.firstChild.value = iata;//Set input value to the clicked IATA code
    e.target.parentElement.style.display = 'none'; //Hide the list
}

export const fillFlightOptionsDepart = (array) => {
    return array.map((item, index) => {
        if(item === null) return null
        return (
            <li onClick={handleListClick} className="list-fill-options" data-iata={item.iata_code} style={fillStyle} key={index}>{item.name}</li>
        )
    }
)}

export const fillFlightOptionsArrive = (array) => {
    return array.map((item, index) => {
        if(item === null) return null
        return (
            <li onClick={handleListClick} className="list-fill-options" data-iata={item.iata_code} style={fillStyle} key={index}>{item.name}</li>
        )
    }
)}

export const  delay = (fn, ms) => {
    let timer = 0
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
  }

export const handleSubmit = (e, obj) => {
    if(obj.flightTotalPassenger === 0) { return console.log('need passengers') }
    console.log(obj)
}


