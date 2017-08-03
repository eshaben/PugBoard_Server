var express = require('express');
var router = express.Router();
const knex = require('../db/knex')
const queries = require('./queries')

router.get('/', function(req, res) {
  queries.getUsers()
  .then((data) => {
    res.json(data)
  })
});


module.exports = router;
