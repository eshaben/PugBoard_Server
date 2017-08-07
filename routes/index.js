const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const queries = require('./queries')

router.get('/', (req, res) => {
  queries.getMessages()
  .then((messages) => {
    res.json(messages)
  })
})

router.post('/:id', (req, res) => {
  let newPost = req.body
  queries.postMessage(newPost)
  .then(newPost => {
    res.json(newPost)
  })
})





module.exports = router;
