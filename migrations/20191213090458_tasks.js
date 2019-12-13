
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();

    tbl.string('desription',255).notNullable().unique().index()
    tbl.string('notes',255)
    tbl.boolean('completed').notNullable().defaultTo(false)

  })
};

exports.down = function(knex) {
  return knex.dropTableIfExists('tasks')
};
