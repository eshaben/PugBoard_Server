var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3;')
    .then(function () {
      var hash1 = bcrypt.hashSync('tatertot', 10)
      var hash2 = bcrypt.hashSync('puggo', 10)
      return knex('user').insert([
        {
          id: 1,
          username: 'Tater',
          email: 'taterpugg@pugbrain.com',
          password: hash1
        },
        {
          id: 2,
          username: 'Pugzilla',
          email: 'pugzilla@pugbrain.com',
          password: hash2
        }
      ]);
    });
};
