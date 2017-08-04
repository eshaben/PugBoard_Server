const knex = require('../db/knex')

function getUsers() {
  return knex('user')
}

function getMessages() {
  return knex('message')
}

function postMessage() {
  return knex('message')
  .insert(newPost)
  returning('*')
}

module.exports = {
  getUsers,
  getMessages,
  postMessage
}
