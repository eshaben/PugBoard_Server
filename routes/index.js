var express = require('express');
var router = express.Router();
const knex = require('../db/knex')
const queries = require('./queries')

router.get('/', (req, res) => {
  queries.getMessages()
  .then((messages) => {
    res.json(messages)
  })
})

router.post('/', (req, res) => {
  queries.postMessage()
  let newPost = req.body
  .then(newPost => {
    res.json(newPost)
  })
})

router.post('/' (req, res) => {
  queries.postSignUp()
  let newUser = req.body
  .then(newUser => {
    res.json(newUser)
  })
})



module.exports = router;
