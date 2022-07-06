const Character = require('../models/Character');

const findAllCharacters = async () => {
     return await Character.find();
};



module.exports = {
    findAllCharacters,
    findByIdCharacters,
}
