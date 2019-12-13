const db = require("../data/db-config.js");

module.exports = {
  add,
  getAll
}

function findById(id) {
  return db('resources')
    .where({ id })
    .first()
}

function add(resource) {
  return db('resources')
  .insert(resource, 'id')
  .then(ids => {
    const [id] = ids
    return findById(id)
  })
}

function getAll() {
  return db('resources')
}