
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_id:1,name:"popcorn",instructions:"take out of wrapper",cook_time:'varies'}
      ]);
    });
};
