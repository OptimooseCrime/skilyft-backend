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
  const id = req.params.id
  queries.viewRider(id)
  .then(rider => {
    res.status(200).json({rider})
  })
})

router.get('/drivers', (req, res) => {
  const drive = req.body.drive
  queries.showDrivers(drive)
  .then(drivers => {
    if(drive == false){
      res.status(200).json({drivers})
    }
  })
})

router.post('/', (req, res) => {
  queries.matchDestination(req.body.destination)
  .then(matches => {
    res.status(201).json({matches})
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
