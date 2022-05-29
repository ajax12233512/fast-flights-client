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


