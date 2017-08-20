const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('./queries')
const cors = require('cors')

require('dotenv').config()

// router.get('/users', function(req, res) {
//   queries.getUsers()
//   .then((users) => {
//     res.json(users);
//   })
// })

// router.get('/:id', (req, res) => {
//   let id = req.params.id
//   queries.getUserByID(id)
//   .then(user => {
//     res.json(user)
//   })
// })

// router.post('/users', (req, res) => {
//   let hash = bcrypt.hashSync(req.body.password, 8)
//   let newUser = {
//     username: req.body.username,
//     email: req.body.email,
//     password: hash
//   }
//   queries.postSignUp(newUser)
//   .then(newUser => {
//     res.json({
//       newUser: newUser,
//       message: "success"
//     })
//   })
// })

module.exports = router;
