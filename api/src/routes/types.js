const express = require('express');
const router = express.Router();
const {Types } = require('../db');

router.get('/', async (req, res) => {
  const types = await Types.findAll();

  res.json(types);
});

router.post('/', async (req, res) => {
  try {
      const newType = await Types.bulkCreate([
        { title: "vegan"},
        { title: "vegetarian"},
        { title: "glutenFree"},
        { title: "ketogenic"},
        { title: "Pescetarian"},
        { title: "lacto vegetarian"},
        { title: "ovo vegetarian"},
        { title: "Paleo"},
        { title: "Primal"},
        { title: "Low FODMAP"},
        { title: "Whole30"},
        { title: "fruitarian"},
        { title: "dairy free"},
      ])

      res.json(newType);
  
    } catch (error) {
      console.log(error);
    }
})

// router.post('/:dieta', async (req, res) => {
//     const {dieta} = req.params;
    
// try {
//     const newType = await Types.create({
//     title: dieta,
//   })
//   res.json(newType);
// } catch (error) {
//   console.log(error);
// }
// });  

module.exports = router;