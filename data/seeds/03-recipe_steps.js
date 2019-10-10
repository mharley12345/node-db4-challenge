
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
           {step_id:1,step_number:1,ingredient_id:1,ingredient_qty:1,recipe_id:1}
      ]);
    });
};
