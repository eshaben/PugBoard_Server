const knex = require('../db/knex')
const bodyParser = require('body-parser')

function getMessages() {
  return knex('message')
  .leftOuterJoin('user', 'message.user_id', '=', 'user.id')
}

function getMessagesById(id){
  return knex('message')
  .where('id', id).first()
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

function deleteMessage(id) {
  return knex('message')
  .where('id', id).del()
}

function editMessage(id, edit){
  return knex('message').where('id', id)
  .update(edit)
  .returning('*')
}

module.exports = {
  getUsers,
  getMessagesById,
  getUserByID,
  getMessages,
  postMessage,
  postSignUp,
  deleteMessage,
  editMessage
}
