
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table){
    table.increments();
    table.string('comment');
    table.integer('message_id').references('message.id').unsigned().onDelete('cascade')

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
