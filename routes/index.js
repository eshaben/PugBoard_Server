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

router.get('/:id', (req, res) => {
  let id = req.params.id
  queries.getMessagesById(id)
  .then((message) => {
    res.json(message)
  })
})

router.post('/:id', (req, res) => {
  let id = req.params.id
  let newPost = req.body
  queries.postMessage(newPost)
  .then(newPost => {
    res.json(newPost)
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id
  let edit = req.body
  queries.editMessage(id, edit)
  .then(edited => {
    res.json(edited)
  })
})



module.exports = router;
