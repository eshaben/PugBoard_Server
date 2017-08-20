const knex = require('../db/knex')
const bodyParser = require('body-parser')

function getAllMessages() {
  return knex('message')
  .select('message.id as message_id', '*')
  .leftOuterJoin('user', 'message.user_id', '=', 'user.id')
}

function getMessagesByUserId(id){
  return knex('message')
  .where('user_id', id)
}

function getMessagesById(id) {
  return knex('message')
  .where('id', id)
}

function postMessage(post) {
  return knex('message')
  .insert(post)
  returning('*')
}

function getUsers(newPost) {
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
  getMessagesByUserId,
  getUserByID,
  getAllMessages,
  postMessage,
  postSignUp,
  deleteMessage,
  editMessage,
  getMessagesById
}
