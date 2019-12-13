const express = require("express");

const db = require("../data/db-config.js");
const Resources = require("./resource-model.js");

const router = express.Router();

router.get('/',(req,res) => {
  Resources.getAll()
    .then(resources => { 
      res.json(resources) 
    })
    .catch(err => res.status(500).json({message: 'sorry dude, i messed up somewhere'}))
})

router.post('/', (req,res) => {
  const newResource = req.body;
  Resources.add(newResource)
    .then(resource => { res.status(201).json(resource) })
    .catch(err => res.status(500).json({message: 'sorry dude, i messed up somewhere'}))
})



module.exports = router;
