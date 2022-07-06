const mongoose = require('mongoose');
const charactersService = require('../services/character.services');

const findAllCharacters = async (req, res) => {
    const allCharacters = await charactersService.findAllCharacters();
    
    if (allCharacters.length == 0) {
        return res.status(206).send({ message: "Não existe nenhum personagem cadastrado" });
    }
    res.send('allCharacters');
};



module.exports = {
    findAllCharacters,
}
