const fetch = require('node-fetch');
const swapi = require('./script2');

it('call swapi to get people', ()=> {
    expect.assertions(1)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})

it('call swapi to get people with a promise', ()=> {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})