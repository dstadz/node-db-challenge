const db = require("../../data/db-config");

module.exports = {
  add,
  getAll
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first()
}

function add(project) {
  return db('projects')
  .insert(project, 'id')
  .then(ids => {
    const [id] = ids
    return findById(id)
  })
}

function getAll() {
  return db('projects')
}