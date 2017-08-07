const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('./queries')

require('dotenv').config()

/* GET users listing. */
router.get('/', function(req, res) {
  queries.getUsers()
  .then((users) => {
    res.send(users);
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
