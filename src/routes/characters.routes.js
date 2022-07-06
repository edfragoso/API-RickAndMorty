const route = require('express').Router();
const controllerCharacter = require('../controllers/characters.controller');

route.get('/characters', controllerCharacter.findAllCharacters);
route.get('/characters/find/:id', controllerCharacter.findByIdCharacters);
route.post('/character/create', controllerCharacter.createCharacter);
route.put('/character/update/:id', controllerCharacter.uptadeCharacter);


module.exports = route;
