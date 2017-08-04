
exports.up = function(knex, Promise) {
  return knex.schema.createTable('message', function(table){
    table.increments();
    table.string('title');
    table.string('message');
    table.integer('rating');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('message');
};
