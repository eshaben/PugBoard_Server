
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "message"; ALTER SEQUENCE message_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {id: 1, title: 'this is the title', message: 'this is a message', rating: 2, user_id: 1, thread_id: 3},
        {id: 2, title: 'title2', message: 'message2', rating: 4, user_id: 2, thread_id: 1},
        {id: 3, title: 'title3', message: 'message3', rating: 5, user_id: 2, thread_id: 2},
        {id: 4, title: 'title4', message: 'message4', rating: 1, user_id: 1, thread_id: 2}
      ]);
    });
};
