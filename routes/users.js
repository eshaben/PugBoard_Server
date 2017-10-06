const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('./queries')
const cors = require('cors')

require('dotenv').config()

router.get('/users', function(req, res) {
  queries.getUsers()
  .then((users) => {
    res.json(users);
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  queries.getUserByID(id)
  .then(user => {
    res.json(user)
  })
})

module.exports = router;
