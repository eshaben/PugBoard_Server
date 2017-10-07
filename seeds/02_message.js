exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "message"; ALTER SEQUENCE message_id_seq RESTART WITH 8;')
    .then(function () {
      return knex('message').insert([
        {id: 1, title: "Help! My pug won\'t stop peeing in the house!", message: 'I have a four year old female dog, she is fixed, and won\'t stop peeing inside. She was housetrained at one point and never went inside. Now she just pees and poops inside all the time. Help!', rating: 8, user_id: 3},
        {id: 2, title: 'New Puppy: Biting, Mouthing, Nipping', message: 'I thought it would be beneficial for myself and others if we all posted our favorite training tips and tricks for puppies that are biting or mouthing. Comment with your best tips!', rating: 29, user_id: 2},
        {id: 3, title: 'Pug Food!', message: 'I am a proud owner of a rescue pug, Frank, but he does not seem to like the food I give him. He has a sensitive stomach and I guess an extremely picky eater. Any suggestions on food? Dry or wet options are cool.', rating: 5, user_id: 2},
        {id: 4, title: 'Dog doesn\'t like Fiance - Normal? Not so much?', message: 'My dog does not like my Fiance. We have had him for two months and I know it takes some time to get adjusted but really, that long? He does not listen to my Fiance but will listen to me all day. Why?!?!', rating: 9, user_id: 1},
        {id: 5, title: 'Grrrr!!!', message: 'Sniff Sniff Bark Growl.', rating: 37, user_id: 5},
        {id: 6, title: 'BARK WOOF!', message: 'Where is Berto', rating: 197, user_id: 3},
        {id: 7, title: 'Lap Dogs', message: 'What kind of lap dogs do you have?', rating: 58, user_id: 4}
      ]);
    });
};
