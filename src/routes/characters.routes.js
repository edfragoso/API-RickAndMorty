const route = require('express').Router();
const controllerCharacter = require('../controllers/characters.controller');
const { validId, validObjectBody } = require('../middleware/characters.middleware');

route.get('/characters', controllerCharacter.findAllCharacters);
route.get('/characters/find/:id', validId, controllerCharacter.findByIdCharacters);
route.post('/character/create', validObjectBody, controllerCharacter.createCharacter);
route.put('/character/update/:id', validId, validObjectBody, controllerCharacter.updateCharacter);
route.delete('/character/delete/:id', validId, controllerCharacter.deleteCharacter);

module.exports = route;
