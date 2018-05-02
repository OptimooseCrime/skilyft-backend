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
  const body = req.body
  function getId(body, id){
    for (i=0;i<body.length;i++){
      if (bodyId[i].id == id){
        return body[i]
      }
    }
  }
  let indentify = getId(body, id)
  if(indentify == null){
    res.status(404).json({"message": "No driver found for this ID"})
  } else {
    queries.viewRider(id)
    .then(rider => {
      res.status(200).json({rider})
    })
  }
})

router.post('/drivers', (req, res) => {
  const body = req.body
  queries.showDrivers(body)
  .then(drivers => {
      res.status(200).json({drivers})
  })
})

router.post('/', (req, res) => {
  queries.matchDate(req.body.departing)
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
