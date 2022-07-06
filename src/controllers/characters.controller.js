const mongoose = require('mongoose');
const charactersService = require('../services/character.services');

const findAllCharacters = async (req, res) => {
    const allCharacters = await charactersService.findAllCharacters();
    
    if (allCharacters.length == 0) {
        return res.status(206).send({ message: "Não existe nenhum personagem cadastrado" });
    }
    res.send(allCharacters);
};

const findByIdCharacters = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido" })
    }

    const character = await charactersService.findByIdCharacters(id);
    if (!character) {
        return res.status(204);
    }
    res.send(character);
}; 



module.exports = {
    findAllCharacters,
    findByIdCharacters
}
