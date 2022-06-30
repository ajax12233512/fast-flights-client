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