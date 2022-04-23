const express = require('express');
const router = express.Router();
const axios = require('axios');
const {YOUR_API_KEY} = require('../db');



router.get('/', async (req, res) => {
    const {name} = req.query; 
    console.log(name);
    if (name) {
        
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=4`)
            console.log(response.data.results, "hola");
            const data = response.data.results.map(e => ({id: e.id, title: e.title, image: e.image, vegetarian: e.vegetarian, vegan: e.vegan, 
                glutenFree: e.glutenFree, diaryHealthy: e.diaryHealthy}));
            console.log(data);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    } else {
        res.send('falta informacion');
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resp = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`);
        console.log(resp.data);
        res.json(resp.data);
    } catch (error) {
        console.log(error);
    }

})








module.exports = router;    