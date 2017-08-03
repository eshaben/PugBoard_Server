
exports.up = function(knex, Promise) {
  return knex.schema.createTable('thread', function(table){
    table.increments();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade')
    table.integer('category_id').references('category.id').unsigned().onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('thread');
};
