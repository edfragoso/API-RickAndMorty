const mongoose = require('mongoose');
const charactersService = require('../services/character.services');

const findAllCharacters = async (req, res) => {
  const allCharacters = await charactersService.findAllCharacters();

  if (allCharacters.length == 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhum personagem cadastrado' });
  }
  res.send(allCharacters);
};

const findByIdCharacters = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  const character = await charactersService.findByIdCharacters(id);
  if (!character) {
    return res.status(204);
  }
  res.send(character);
};

const createCharacter = async (req, res) => {
  const characterBody = req.body;

  if (!characterBody || !characterBody.name || !characterBody.image) {
    return res.status(400).send({
      message:
        'Você precisa preencher todos os campos para adionar novo personagem!',
    });
  }
  const newCharacter = await charactersService.createCharacter(characterBody);
  res.status(201).send({
    messsage: 'Personagem adicionado com sucesso!',
    data: newCharacter,
  });
};

const updateCharacter = async (req, res) => {
  const id = req.params.id;
  const editCharacter = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  const character = await charactersService.findByIdCharacters(id);

  if (!editCharacter) {
    return res.status(204);
  }

  if (!editCharacter || !editCharacter.name || !editCharacter.image) {
    return res.status(400).send({
      message:
        'Você precisa preencher todos os campos para adionar novo personagem!',
    });
  }

  const updateCharecter = await charactersService.updateCharecter(
    id,
    editCharacter,
  );

  res
    .status(201)
    .send({
      message: 'Atualiazação efetuada com sucesso!',
      data: updateCharecter,
    });
};



module.exports = {
  findAllCharacters,
  findByIdCharacters,
  createCharacter,
  updateCharacter,
};
