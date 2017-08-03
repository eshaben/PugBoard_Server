const knex = require('../db/knex')

function getUsers() {
  return knex('user')
}

module.exports = {
  getUsers
}
