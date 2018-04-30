const express = require('express')
const router = express.Router()
const knex = require('../database-connection')
const queries = require('../queries')

router.get('/', (req, res) => {
  const body = req.body
  queries.matchCredentials(body)
  .then(body => {
    if(body == null){
      res.status(404).send('you\'re credentials are incorrect')
    } else {
      res.status(200).redirect('localhost:3000/welcome')
    }
  })
})

router.post('/create', (req, res) => {
  queries.createAccount(req.body).then(account => {
        response.status(201).redirect('localhost:3000/')
})
