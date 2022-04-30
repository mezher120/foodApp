const express = require('express');
const router = express.Router();
const {Types } = require('../db');

router.get('/', (req, res) => {
    res.send('types');
});

router.post('/', async (req, res) => {
    const {dieta} = req.body;
    
try {
    const newType = await Types.create({
    title: props,
  })
  res.json(newType);
} catch (error) {
  console.log(error);
}
});  

module.exports = router;