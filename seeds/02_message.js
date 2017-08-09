
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "message"; ALTER SEQUENCE message_id_seq RESTART WITH 8;')
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {id: 1, title: 'BARK!', message: 'Bark woof bark bark woof.', rating: 8, user_id: 3},
        {id: 2, title: 'Puppy Love.', message: 'I love my dog.', rating: 29, user_id: 2},
        {id: 3, title: 'BARK WOOF!', message: 'Bark woof bark bark woof.', rating: 5, user_id: 2},
        {id: 4, title: 'Snort', message: 'Snort Snort ZZZZZZZZZZZZZ. ', rating: 9, user_id: 1},
        {id: 5, title: 'Grrrr!!!', message: 'Sniff Sniff Bark Growl.', rating: 37, user_id: 5},
        {id: 6, title: 'BARK WOOF!', message: 'Where is Berto', rating: 197, user_id: 3},
        {id: 7, title: 'Lap Dogs', message: 'What knid of lap dogs do you have?', rating: 58, user_id: 4}
      ]);
    });
};
