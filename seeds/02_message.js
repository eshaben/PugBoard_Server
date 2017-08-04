
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "message"; ALTER SEQUENCE message_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {id: 1, title: 'BARK!', message: 'Bark woof bark bark woof.', rating: 2, user_id: 1},
        {id: 2, title: 'WOOF BARK WOOF!', message: 'Bark woof bark bark woof.', rating: 4, user_id: 2},
        {id: 3, title: 'BARK WOOF!', message: 'Bark woof bark bark woof.', rating: 5, user_id: 2},
        {id: 4, title: 'BARK BARK!', message: 'Bark woof bark bark woof.', rating: 1, user_id: 1}
      ]);
    });
};
