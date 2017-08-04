
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "message_category"; ALTER SEQUENCE message_category_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('message_category').insert([
        {id: 1, message_id: 1, category_id: 1},
        {id: 2, message_id: 2, category_id: 2},
        {id: 3, message_id: 3, category_id: 1},
        {id: 4, message_id: 4, category_id: 3}
      ]);
    });
};
