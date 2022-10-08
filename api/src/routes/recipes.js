const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const axios = require('axios');
const { YOUR_API_KEY } = require('../db');
const { Types, Recipe } = require('../db');


router.get('/filter', async (req, res, next) => {
    const { name, filter } = req.query;
    console.log(name);
    if (filter === "vegan") {

        try {
            const allTypes = await Types.findAll();


            const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
            dataFromApi = [];
            apiResponse.data.results.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": element.image,
                    "score": element.spoonacularScore
                };

                dataTypes = [];
                allTypes.forEach(type => {
                    const typeTitle = type.title;

                    if (element.hasOwnProperty(typeTitle) && element[typeTitle] === true) {
                        dataTypes.push(typeTitle);
                    } else if (element.diets.includes(typeTitle)) {
                        dataTypes.push(typeTitle);
                    }
                });
                data.types = dataTypes;


                dataFromApi.push(data);
            });

            const dbResponse = await Recipe.findAll({
                include: Types,
                where: {
                    title: {
                        [Op.iLike]: "%" + name + "%"
                    }
                }
            });

            dataFromDb = [];
            dbResponse.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": null,
                    "score": element.puntuacion
                }

                dataTypes = [];
                element.types.forEach(type => {
                    dataTypes.push(type.title);
                });
                data.types = dataTypes;

                dataFromDb.push(data);

            });
            const prefilter = dataFromApi.concat(dataFromDb);
            const newFilter = prefilter.filter(e =>
                e.types.includes(filter))

            res.json(newFilter);


        } catch (error) {
            next(error);
        }
    } else if (filter === "vegetarian") {

        try {
            const allTypes = await Types.findAll();


            const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
            dataFromApi = [];
            apiResponse.data.results.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": element.image,
                    "score": element.spoonacularScore
                };

                dataTypes = [];
                allTypes.forEach(type => {
                    const typeTitle = type.title;

                    if (element.hasOwnProperty(typeTitle) && element[typeTitle] === true) {
                        dataTypes.push(typeTitle);
                    } else if (element.diets.includes(typeTitle)) {
                        dataTypes.push(typeTitle);
                    }
                });
                data.types = dataTypes;

                dataFromApi.push(data);
            });

            const dbResponse = await Recipe.findAll({
                include: Types,
                where: {
                    title: {
                        [Op.iLike]: "%" + name + "%"
                    }
                }
            });

            dataFromDb = [];
            dbResponse.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": null,
                    "score": element.puntuacion
                }

                dataTypes = [];
                element.types.forEach(type => {
                    dataTypes.push(type.title);
                });
                data.types = dataTypes;

                dataFromDb.push(data);

            });
            const prefilter = dataFromApi.concat(dataFromDb);
            const newFilter = prefilter.filter(e =>
                e.types.includes(filter))

            res.json(newFilter);

        } catch (error) {
            next(error);
        }
    } else if (filter === "glutenFree") {

        try {
            const allTypes = await Types.findAll();


            const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
            dataFromApi = [];
            apiResponse.data.results.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": element.image,
                    "score": element.spoonacularScore
                };

                dataTypes = [];
                allTypes.forEach(type => {
                    const typeTitle = type.title;

                    if (element.hasOwnProperty(typeTitle) && element[typeTitle] === true) {
                        dataTypes.push(typeTitle);
                    } else if (element.diets.includes(typeTitle)) {
                        dataTypes.push(typeTitle);
                    }
                });
                data.types = dataTypes;

                dataFromApi.push(data);
            });

            const dbResponse = await Recipe.findAll({
                include: Types,
                where: {
                    title: {
                        [Op.iLike]: "%" + name + "%"
                    }
                }
            });

            dataFromDb = [];
            dbResponse.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": null,
                    "score": element.puntuacion
                }

                dataTypes = [];
                element.types.forEach(type => {
                    dataTypes.push(type.title);
                });
                data.types = dataTypes;

                dataFromDb.push(data);

            });
            const prefilter = dataFromApi.concat(dataFromDb);
            const newFilter = prefilter.filter(e =>
                e.types.includes(filter))

            res.json(newFilter);

        } catch (error) {
            next(error);
        }
    } else if (filter === "diaryHealthy") {

        try {
            const allTypes = await Types.findAll();

            const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
            dataFromApi = [];
            apiResponse.data.results.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": element.image,
                    "score": element.spoonacularScore
                };

                dataTypes = [];
                allTypes.forEach(type => {
                    const typeTitle = type.title;

                    if (element.hasOwnProperty(typeTitle) && element[typeTitle] === true) {
                        dataTypes.push(typeTitle);
                    } else if (element.diets.includes(typeTitle)) {
                        dataTypes.push(typeTitle);
                    }
                });
                data.types = dataTypes;


                dataFromApi.push(data);
            });

            const dbResponse = await Recipe.findAll({
                include: Types,
                where: {
                    title: {
                        [Op.iLike]: "%" + name + "%"
                    }
                }
            });

            dataFromDb = [];
            dbResponse.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": null,
                    "score": element.puntuacion
                }

                dataTypes = [];
                element.types.forEach(type => {
                    dataTypes.push(type.title);
                });
                data.types = dataTypes;

                dataFromDb.push(data);

            });
            const prefilter = dataFromApi.concat(dataFromDb);
            const newFilter = prefilter.filter(e =>
                e.types.includes(filter))

            res.json(newFilter);

        } catch (error) {
            next(error);
        }
    } else {
        try {
            const allTypes = await Types.findAll();

            const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
            dataFromApi = [];
            apiResponse.data.results.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": element.image,
                    "score": element.spoonacularScore
                };

                dataTypes = [];
                allTypes.forEach(type => {
                    const typeTitle = type.title;

                    if (element.hasOwnProperty(typeTitle) && element[typeTitle] === true) {
                        dataTypes.push(typeTitle);
                    } else if (element.diets.includes(typeTitle)) {
                        dataTypes.push(typeTitle);
                    }
                });
                data.types = dataTypes;

                dataFromApi.push(data);
            });

            const dbResponse = await Recipe.findAll({
                include: Types,
                where: {
                    title: {
                        [Op.iLike]: "%" + name + "%"
                    }
                }
            });

            dataFromDb = [];
            dbResponse.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": null,
                    "score": element.puntuacion
                }

                dataTypes = [];
                element.types.forEach(type => {
                    dataTypes.push(type.title);
                });
                data.types = dataTypes;

                dataFromDb.push(data);

            });

            const dataFinal = dataFromApi.concat(dataFromDb);
            res.json(dataFinal);
        } catch (error) {
            next(error);
        }

    }
});

router.get('/', async (req, res, next) => {
    const { name } = req.query;

    if (!name) {
        res.send('falta informacion');
        return;
    }

    try {
        const allTypes = await Types.findAll();


        const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
        const dataFromApi = [];
        apiResponse.data.results.forEach(element => {
            data = {
                "id": element.id,
                "title": element.title,
                "image": element.image,
                "score": element.healthScore
            };

            const dataTypes = [];
            allTypes.forEach(type => {
                const typeTitle = type.title;
                if (element.hasOwnProperty(typeTitle) && element[typeTitle] === true) {
                    dataTypes.push(typeTitle);
                } else if (element.diets.includes(typeTitle.toLowerCase())) {
                    dataTypes.push(typeTitle);
                }
            });
            data.types = dataTypes;

            dataFromApi.push(data);
        });

        const dbResponse = await Recipe.findAll({
            include: Types,
            where: {
                title: {
                    [Op.iLike]: "%" + name + "%"
                }
            }
        });

        const dataFromDb = [];
        dbResponse.forEach(element => {
            data = {
                "id": element.id,
                "title": element.title,
                "image": null,
                "score": element.puntuacion
            }

            const dataTypes = [];
            element.types.forEach(type => {
                dataTypes.push(type.title);
            });
            data.types = dataTypes;

            dataFromDb.push(data);

        });
        res.json(dataFromApi.concat(dataFromDb));

    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    if (id.length < 10) {

        try {
            const allTypes = await Types.findAll();
            const resp = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`);
            const objResp = resp.data;
            dataFromApi = {
                "id": objResp.id,
                "title": objResp.title,
                "image": objResp.image,
                "score": objResp.spoonacularScore,
                "summary": objResp.summary,
                "instructions": objResp.instructions,
                "healthScore": objResp.healthScore
            }

            const dataTypes = [];
            allTypes.forEach(type => {
                const typeTitle = type.title;
                if (objResp.hasOwnProperty(typeTitle) && objResp[typeTitle] === true) {
                    dataTypes.push(typeTitle);
                } else if (objResp.diets.includes(typeTitle.toLowerCase())) {
                    dataTypes.push(typeTitle);
                }
            });
            dataFromApi.types = dataTypes;


            res.json(dataFromApi);


        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            let objDB = {};
            const allTypes = await Types.findAll();
            const dbResponse = await Recipe.findAll({
                include: Types,
                where: {
                    id: id
                }
            });

            const dataFromDb = [];
            dbResponse.forEach(element => {
                data = {
                    "id": element.id,
                    "title": element.title,
                    "image": null,
                    "score": element.puntuacion,
                    "summary": element.summary,
                    "healthScore": element.level,
                    "instructions": element.pasos,

                }

                dataTypes = [];
                element.types.forEach(type => {
                    dataTypes.push(type.title);
                });
                data.types = dataTypes;

                dataFromDb.push(data);

            });

            objDB = dataFromDb[0];

            res.json(objDB);

        } catch (error) {
            next(error);
        }

    }

});




module.exports = router; 