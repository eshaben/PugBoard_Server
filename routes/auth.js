var express = require('express');
var router = express.Router();
const knex = require('../db/knex')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

require('dotenv').config()

router.post('/login', function(req, res, next) {
  let password = req.body.password
  let email = req.body.email
  let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

  if (email.length === 0 || password.length === 0){
    res.json({error: "No email/password was entered. Please enter a valid email address and password."})
  } else if (!regex.test(email)) {
    res.json({error: "Please enter a valid email address."})
  } else {
    knex('user').select('*')
    .where('email', email)
    .then(user => {
      if(user.length === 0){
        res.json({error: "Email not found. Please sign up."})
      } else {
        let hashedPassword = user[0].password
        let match = bcrypt.compareSync(password, hashedPassword)
        if(match){
          let payLoad = user[0]
          delete payLoad.password

          let token = jwt.sign(payLoad, process.env.TOKEN_SECRET)

          res.json({token})
        } else {
          res.json({error: "Email and password do not match. Please try again."})
        }
      }
    })
  }
});

router.post('/signup', function(req, res, next) {
  let email = req.body.email
  let password = req.body.password
  let username = req.body.username

  knex('user').select('*')
  .where('email', email)
  .then(user => {
    if(user.length == 0){
      var hash = bcrypt.hashSync(password, 8)
      req.body.password = hash;

      knex('user').insert(req.body).returning('*')
      .then(newUser => {
        let payLoad = newUser[0]
        console.log(payLoad);
        delete payLoad.password
        let token = jwt.sign(payLoad, process.env.TOKEN_SECRET)

        res.json({token})
      })
    } else {
      res.json({error: "Email already in use."})
    }
  })
});

module.exports = router;
