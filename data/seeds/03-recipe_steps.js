
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
           {step_id:1,instructions:'take popcorn out of wrapper'},
           {step_id:2,instructions:"put popcorn in microwave for 2-4 minutes"},
           {step_id:3,instructions:"take popcorn out shake well season "},
           {step_id:4,instructions:"enjoy"}
      ]);
    });
};
