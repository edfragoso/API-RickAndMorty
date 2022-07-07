const route = require('express').Router();
const controllerCharacter = require('../controllers/characters.controller');
const { validId, validObjectBody } = require('../middleware/characters.middleware');
/* const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json'); */
/* 
route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument)); */

route.get('/characters', controllerCharacter.findAllCharacters);
route.get('/characters/find/:id', validId, controllerCharacter.findByIdCharacters);
route.post('/character/create', validObjectBody, controllerCharacter.createCharacter);
route.put('/character/update/:id', validId, validObjectBody, controllerCharacter.updateCharacter);
route.delete('/character/delete/:id', validId, controllerCharacter.deleteCharacter);

module.exports = route;
