
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurement_qty').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurement_qty').insert([
        {measurement_qty_id:'1',qty_amount:"1"}
    
      ]);
    });
};
