const express = require('express');
const router = express.Router();
const {Recipe, Types } = require('../db');

router.get('/', (req, res) => {
    res.send('recipe con una sola s');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const {title, summary, puntuacion, level, pasoapaso, dieta} = req.body;
    try {
      
      const newRecipe = await Recipe.create({
        title: title,
        summary: summary,
        puntuacion: puntuacion,
        level: level,
        pasos: pasoapaso,
      })
      // if (dieta.dieta1 === true) {
      //   newRecipe.addRecipeTypes()
        
      // }
      res.json(newRecipe);
    } catch (error) {
      console.log(error);
    }
    try {
          const newType = await Types.create({
          title: summary,
        })
        res.json(newType);
      } catch (error) {
        console.log(error);
      }

});  

router.post('/:props', async (req, res) => {
    const {props} = req.params
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