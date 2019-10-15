
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
         {recipe_id:1,measurement_id:1,measurement_qty_id:1,ingredient_id:1,steps_id:1},
         {recipe_id:1,measurement_id:1,measurement_qty_id:1,ingredient_id:1,steps_id:2},
         {recipe_id:1,measurement_id:1,measurement_qty_id:1,ingredient_id:1,steps_id:3},
         {recipe_id:1,measurement_id:1,measurement_qty_id:1,ingredient_id:1,steps_id:4},
         {recipe_id:2,measurement_id:2,measurement_qty_id:2,ingredient_id:2,steps_id:5},
         {recipe_id:2,measurement_id:2,measurement_qty_id:2,ingredient_id:3,steps_id:6},
         {recipe_id:2,measurement_id:2,measurement_qty_id:2,ingredient_id:'',steps_id:7},
    

    

      ]);
    });
};
