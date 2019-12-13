
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
      {
        name: 'make a cake',
        description: 'pastries with sugar and other stuff. yummy'
      },
      {
        name:'build a bridge'
      },
      {
        name: 'dancing in the moon light'
      }
      ])
    });
};
