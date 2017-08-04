
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "comment"; ALTER SEQUENCE comment_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {id: 1, comment: 'BARK WOOF!!', message_id: 2},
        {id: 2, comment: 'BARK WOOF!!', message_id: 3},
        {id: 3, comment: 'BARK WOOF!!', message_id: 2}
      ]);
    });
};
