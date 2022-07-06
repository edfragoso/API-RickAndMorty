const Character = require('../models/Character');

const findAllCharacters = async () => {
     return await Character.find();
};

const findByIdCharacters = async (idParam) => {
    return await Character.findById(idParam);
};

const createCharacter = async (newCharacter) => {
    return await Character.create(newCharacter);
}; 

module.exports = {
    findAllCharacters,
    findByIdCharacters,
    createCharacter,
}
