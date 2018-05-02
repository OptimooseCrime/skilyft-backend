
exports.up = function(knex, Promise) {
  return knex.schema.createTable('riders', table => {
    table.increments('id')
    table.text('imageUrl')
    table.text('userName')
    table.text('firstName')
    table.text('lastName')
    table.text('vehicle')
    table.text('destination')
    table.text('departing')
    table.integer('time')
    table.boolean('drive')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('riders')
};
