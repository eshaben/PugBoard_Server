var express = require('express');
var router = express.Router();
const knex = require('../db/knex')

router.get('/', function(req, res) {
  knex('user')
  .then((data) => {
    res.json(data)
  })
});


module.exports = router;
