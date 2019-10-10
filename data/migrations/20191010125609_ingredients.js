
exports.up = function(knex) {
  return knex.schema
  .createTable('recipe', function(recipes){
      recipes.increments('recipe_id')
      recipes
            .string('name')
            .notNullable()
            .unique();
      recipes
           .text('instructions')
           .notNullable()
      recipes
            .integer('cook_time').notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
};
