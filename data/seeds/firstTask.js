
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'add sugar and flour',
          project_id: 1
        },
        {
          description: 'bake mixure',
          project_id: 1
        },
        {
          description: 'throw in water',
          notes: 'water should be moving, like river',
          project_id: 2
        }
        ])
    });
};
