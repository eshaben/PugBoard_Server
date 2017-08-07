const knex = require('../db/knex')
const bodyParser = require('body-parser')

function getMessages() {
  return knex('message')
}

function postMessage(post) {
  return knex('message')
  .insert(post)
  returning('*')
}

function getUsers() {
  return knex('user')
}

function getUserByID(id) {
  return knex('user')
  .where('id', id)
}

function postSignUp(user) {
  return knex('user')
  .insert(user)
  .returning('*')
}

module.exports = {
  getUsers,
  getUserByID,
  getMessages,
  postMessage,
  postSignUp
}
