var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          username: 'Tater',
          email: 'taterpugg@pugbrain.com',
          password: 'tatertot'
        },
        {
          id: 2,
          username: 'Pugzilla',
          email: 'pugzilla@pugbrain.com',
          password: 'puggo'}
      ]);
    });
};
