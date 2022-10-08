const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes');
const recipe = require('./recipe');
const types = require('./types');
const products = require('./products');
const { YOUR_API_KEY } = require('../db');
const axios = require('axios');

const router = Router();

router.get('/all', async (req, res) => {
    try {
        const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=20`);
        res.send(apiResponse.data.recipes)
    } catch (error) {
    return res.status(400).send(error.message);
}
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipes);
router.use('/recipe', recipe);
router.use('/types', types);
router.use('/products', products);


module.exports = router;
