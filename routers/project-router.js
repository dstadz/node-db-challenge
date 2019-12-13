const express = require("express");

const db = require("../data/db-config.js");
const Projects = require('./models/project-model');

const router = express.Router();

router.get('/',(req,res) => {
  Projects.getAll()
    .then(projects => { 
      //convert 1 & 0 => true & false
      for (project in projects) {
        project.completed === 1
          ? project.completed = true
          : project.completed = false
      }
      res.json(projects) 
    })
    .catch(err => res.status(500).json({message: 'sorry dude, i messed up somewhere'}))
})

router.post('/', (req,res) => {
  const newProject = req.body;
  Projects.add(newProject)
    .then(project => { res.status(201).json(project) })
    .catch(err => res.status(500).json({message: 'sorry dude, i messed up somewhere'}))
})



module.exports = router;
