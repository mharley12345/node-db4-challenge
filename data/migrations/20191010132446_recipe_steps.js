
exports.up = function(knex) {
    return knex.schema
    .createTable('recipe', function(recipes){
        recipes.increments('recipe_id')
        recipes
         .string('name')
  
    })
  .createTable('recipe_steps', function(step){
      step
        .increments('step_id')
       step.string('instructions')
    
  })
  .createTable('ingredients', tbl =>{
      tbl.integer('ingredient_id')
      tbl.string('ingredient_name')
  })
  .createTable('measurement_qty',tbl=>{
      tbl.integer('measurement_qty_id')
      tbl.string('qty_amount')
  })
  .createTable('measurement_units',tbl =>{
     tbl.integer('measurement_id')
     tbl.string('description')
  })
  .createTable('recipe_ingredients', function(ing){
    ing.integer('recipe_id')
    .unsigned()
    .notNullable('recipe_id')
    .references('recipe.recipe_id_in_recipe')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    ing.integer('measurement_id')
    .unsigned()
    .notNullable('measurement_id')
    .references('measurement.measurement_id_in_measurement_units')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    ing.integer('measurement_qty_id')
    .unsigned()
    .notNullable('measurement_qty_id')
    .references('measurement_qty.measurement_qty_id_in_measurement_qty')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    ing.integer('ingredient_id')
    .unsigned()
    .notNullable('ingredient_id')
    .references('ingredients.ingredient_id_in_ingredients')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    ing.integer('steps_id')
    .unsigned()
    .notNullable('steps_id')
    .references('step_id.step_id_in_recipe_steps')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
  })

};

exports.down = function(knex) {
return knex.schema
.dropTableIfExists('recipe')
.dropTableIfExists('recipe_steps')
          .dropTableIfExists('ingredients')
          .dropTableIfExists('measurement_units')
          .dropTableIfExists('measurement_id')
          
     
};
