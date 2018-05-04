const express = require('express')
const router = express.Router()
const knex = require('../database-connection')
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getAllRiders()
  .then(riders => {
    res.status(200).json({riders})
  })
})

router.get('/:id', (req, res) => {
  queries.viewRider(req.params.id)
  .then(rider => {
    rider
      ? res.status(200).json({rider})
      : res.status(404).json({message: "no driver found for this id"})
  })
})

router.post('/', (req, res) => {
  queries.addRider(req.body)
  .then(newRider => {
    res.status(201).json({newRider})
  })
})

router.post('/drivers', (req, res) => {
  const body = req.body
  queries.showDrivers(body)
  .then(drivers => {
      res.status(200).json({drivers})
  })
})

router.post('/match', (req, res) => {
  queries.matchDate(req.body.departing)
  queries.matchDestination(req.body.destination)
  .then(matches => {
    res.status(200).json({matches})
  })
})


router.post('/destination', (req, res) => {
  const id = req.params.id
  queries.updateDriving(drive, id)
  .then(drivers => {
    res.status(200)
  })
})

module.exports = router
