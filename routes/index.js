var express = require('express');
var router = express.Router();
const knex = require('./db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('pugboard')
  .then((data) => {
    res.json(data)
  })
});

module.exports = router;
