
exports.up = function(knex, Promise) {
  return knex.schema.createTable('message_category', function(table){
    table.increments();
    table.integer('category_id').references('category.id').unsigned().onDelete('cascade')
    table.integer('message_id').references('message.id').unsigned().onDelete('cascade')

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('message_category');
};
