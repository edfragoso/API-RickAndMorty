const route = require('express').Router();
const controllerCharacter = require('../controllers/characters.controller');

route.get('/characters', controllerCharacter.findAllCharacters);
route.get('/characters/find/:id', controllerCharacter.findByIdCharacters);


module.exports = route;
