const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('./queries')
const cors = require('cors')

require('dotenv').config()
router.get('/', (req, res) => {
  queries.getAllMessages()
  .then((messages) => {
    res.json(messages)
  })
})

router.get('/users', function(req, res) {
  queries.getUsers()
  .then((users) => {
    res.json(users);
  })
})

router.get('/users/:id', function(req, res) {
  let id = req.params.id
  queries.getUserByID(id)
  .then((users) => {
    res.json(users);
  })
})

function validUser(user){
  let validName = typeof user.username == 'string' && user.username.trim() != '';
  let validEmail = typeof user.email == 'string' && user.email.match(/([@])/g) != null;
  let validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.length > 5;

  return validName && validEmail && validPassword
}

router.post('/users', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 8)
  let newUser = {
    username: req.body.username,
    email: req.body.email,
    password: hash
  }
  if(validUser(req.body)){
    queries.postSignUp(newUser)
    .then(newUser => {
      res.json({
        newUser: newUser,
        message: "success"
      })
    })
  } else {
    res.json({message: 'Invalid user input'})
  }
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  queries.getMessagesByUserId(id)
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

router.get('/message/:id', (req, res) => {
  let id = req.params.id
  queries.getMessagesById(id)
  .then((message) => {
    res.json(message)
  })
})

router.delete('/message/:id', (req, res) => {
  let id = req.params.id
  queries.deleteMessage(id)
  .then(deleted => {
    res.json({
      message: 'message deleted'
    })
  })
})

module.exports = router;
