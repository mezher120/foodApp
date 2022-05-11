const express = require('express');
const router = express.Router();
const {Types } = require('../db');

router.get('/', async (req, res) => {
  const types = await Types.findAll();

  res.json(types);
});

router.post('/', async (req, res, next) => {

  const count = await Types.count();

  if (count === 0) {
    
    try {
        const newType = await Types.bulkCreate([
          { title: "vegan"},
          { title: "vegetarian"},
          { title: "glutenFree"},
          { title: "ketogenic"},
          { title: "pescetarian"},
          { title: "lacto vegetarian"},
          { title: "ovo vegetarian"},
          { title: "lacto ovo vegetarian"},
          { title: "paleo"},
          { title: "primal"},
          { title: "Low FODMAP"},
          { title: "whole30"},
          { title: "fruitarian"},
          { title: "dairy free"},
        ])
  
        res.json(newType);
    
      } catch (error) {
        next(error);
      }
  } else {
    res.send("Los types estan cargados");
  }
})

module.exports = router;