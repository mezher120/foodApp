const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { YOUR_API_KEY } = require('./db');
const axios = require('axios');

const {Recipe, conn } = require('./db.js');

const server = express();

server.use(express.json());

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// server.post('/prueba', async (req, res) => {
//     const {name} = req.body;
//     try {
//       const newRecipe = await Recipe.create({
//         name
//       })
//       res.json(newRecipe);
      
//     } catch (error) {
//       res.send(error);
//     }
// });
const max_results = 2;


// server.post('/:name', async (req, res) => {
//   // console.log(YOUR_API_KEY);
//   const {name} = req.params;
//   // console.log(name);
//   try {
//     const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&title=${name}&number=${max_results}`)
//     const results = result.data.results;
//     // console.log(results);
//     // res.json(results);
//     console.log(results);
//     const array = results.map(async e => await Recipe.create({
//       title: e.title,
//       image: e.image
//     }));
//     res.json(array);
//   } catch (error) {
//     res.send(error);
//   }
//  });

server.post('/create', async (req, res) => {
  console.log(req.body);
  const {name, summary, puntuacion, level, pasoapaso, dieta} = req.body;
  try {
    
    const newRecipe = await Recipe.create({
      title: name,
      summary: summary,
      puntuacion: puntuacion,
      level: level,
      pasos: pasoapaso,
    })
    res.json(newRecipe);
  } catch (error) {
    console.log(error);
  }
  // const {title, dishTypes, spoonacularScore, level, summary} = req.body;

});


server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
