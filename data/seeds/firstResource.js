
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'sugar',
          description: 'sweet white powder'
        },
        {
          name:'flour',
          description: 'sand made from grass'

        },
        {
          name: 'bridge material'
        }
        ])
    });
};
