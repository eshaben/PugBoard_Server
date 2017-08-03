
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "category"; ALTER SEQUENCE category_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'Kibble'},
        {id: 2, name: 'Breeds'},
        {id: 3, name: 'Chew Toys'}
      ]);
    });
};
