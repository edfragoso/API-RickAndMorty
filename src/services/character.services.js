const Character = require('../models/Character');

const findAllCharacters = async () => {
     return await Character.find();
};

const findByIdCharacters = async (idParam) => {
    return await Character.findById(idParam);
};


module.exports = {
    findAllCharacters,
    findByIdCharacters,
}
