
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurement_units').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurement_units').insert([
         {measurement_id:1,description:"bag"}
      ]);
    });
};
