exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 128).unique().notNullable();
    tbl.string('description', 255)
    tbl.boolean('completed').defaultTo(false).notNullable()
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
    tbl.boolean('completed').defaultTo(false).notNullable()
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('users');
};
