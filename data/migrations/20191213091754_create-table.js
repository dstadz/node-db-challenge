exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 128).unique().notNullable();
    tbl.string('description', 255)
    tbl.boolean('completed').defaulTo(false).notNullable()
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('name', 128).unique().notNullable();
    tbl.string('description', 255)
  })

  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('description', 128).notNullable()
    tbl.string('notes', 255)
    tbl.boolean('completed').defaulTo(false).notNullable()
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};
