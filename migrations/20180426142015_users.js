
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.text('userName')
    table.text('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
