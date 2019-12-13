const db = require("../data/db-config.js");

module.exports = {
  add,
  getAll //list should also return project name&& project description
}

function findById(id) {
  return db('tasks')
    .where({ id })
    .first()
}

function add(task) {
  return db('tasks')
  .insert(task, 'id')
  .then(ids => {
    const [id] = ids
    return findById(id)
  })
}

function getAll() {
  return db('tasks')
}