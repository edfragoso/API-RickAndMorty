const route = require('express').Router();
const controllerCharacter = require('../controllers/characters.controller');

route.get('/characters', controllerCharacter.findAllCharacters);


module.exports = route;
