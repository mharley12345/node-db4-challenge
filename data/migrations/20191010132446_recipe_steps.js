
exports.up = function(knex) {
    return knex.schema
  .createTable('recipe_steps', function(step){
      step
        .increments('step_id')
      step.integer('step_number')
      step
      .integer('ingredient_qty')
      .unsigned()
        .notNullable()
        .references('ingredient_qty')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        step
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        step
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      
  })
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('recipe_steps')
};
