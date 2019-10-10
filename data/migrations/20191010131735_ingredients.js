
exports.up = function(knex) {
    return knex.schema
  .createTable('ingredients', function(ing){
        ing.increments('id')
        ing.string('name',255)
        ing.integer('qty')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients')
};
