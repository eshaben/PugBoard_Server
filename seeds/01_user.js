var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 6;')
    .then(function () {
      var hash1 = bcrypt.hashSync('tatertot', 10)
      var hash2 = bcrypt.hashSync('puggo', 10)
      var hash3 = bcrypt.hashSync('iago', 10)
      var hash4 = bcrypt.hashSync('nikki', 10)
      var hash5 = bcrypt.hashSync('poopypants', 10)

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
        },
        {
          id: 3,
          username: 'Iago',
          email: 'iago@catdog.com',
          password: hash3
        },
        {
          id: 4,
          username: 'Jonathan',
          email: 'jsax@paulets.com',
          password: hash4
        },
        {
          id: 5,
          username: 'Casey',
          email: 'caseynate@gmail.com',
          password: hash5
        }
      ]);
    });
};
