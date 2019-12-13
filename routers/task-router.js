const express = require("express");

const db = require("../data/db-config.js");
const Tasks = require("./models/task-model.js");

const router = express.Router();

router.get('/',(req,res) => {
  Tasks.getAll()
    .then(tasks => { 
      //convert 1 & 0 => true & false
      for (task in tasks) {
        task.completed === 1
          ? task.completed = true
          : task.completed = false
      }
      res.json(tasks) 
    })
    .catch(err => res.status(500).json({message: 'sorry dude, i messed up somewhere'}))
})

router.post('/', (req,res) => {
  const newTask = req.body;
  Tasks.add(newTask)
    .then(task => { res.status(201).json(task) })
    .catch(err => res.status(500).json({message: 'sorry dude, i messed up somewhere'}))
})



module.exports = router;
