const express = require('express')
const router = express.Router()
const knex = require('../database-connection')
const queries = require('../queries')

router.get('/', (req, res) => {
  const body = req.body
  queries.matchCredentials(body)
  .then(body => {
    if(body.length){
      res.status(200).json({message: "success"})
    } else {
      res.status(404).json({message: "failure"})
    }
  })
})

router.post('/create', (req, res) => {
  queries.createAccount(req.body)
  .then(account => {
    res.status(201).json({message: "signed up"})
  })
})

module.exports = router
