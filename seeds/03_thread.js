
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "thread"; ALTER SEQUENCE thread_id_seq RESTART WITH 5;')

    .then(function () {
      // Inserts seed entries
      return knex('thread').insert([
        {id: 1, user_id: 1, category_id: 3},
        {id: 2, user_id: 2, category_id: 1},
        {id: 3, user_id: 2, category_id: 2},
        {id: 4, user_id: 1, category_id: 2}
      ]);
    });
};
