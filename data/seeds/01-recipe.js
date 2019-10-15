
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_id:1,name:"popcorn"},
        {recipe_id:2,name:"ceral"}
        
      ]);
    });
};
