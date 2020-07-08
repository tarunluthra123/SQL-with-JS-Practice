const route = require('express').Router()
// This route is on the "/api/" path

const db = require('../db')

route.get('/persons/', (req, res) => {
    //Send all the persons as array here
    db.getAllPersons()
        .then((persons) => res.send(persons))
        .catch((err) => res.send({ error: err }))
})

route.post('/persons/', (req, res) => {
    //Add the new person (details are in body)
    // console.log('in post request')
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => res.redirect('/api/persons/')) // Redirect to get all the persons data
        .catch((err) => res.send({ error: err }))
})

exports = module.exports = {
    route
}