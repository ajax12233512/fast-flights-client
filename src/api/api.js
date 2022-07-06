export const searchAirports = (query) => {
    return fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({input: query})
    })
}

export const searchFlights = (query) => {
    return fetch('/api/duffel/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({input: query})
    })
}

export const getFlights = (query) => {
    return fetch('/api/duffel/getSearch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            offerRequestId: query.offerRequestId,
            sort: query.sort,
        })
    })
}