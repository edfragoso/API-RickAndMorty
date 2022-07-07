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

  const character = await charactersService.findByIdCharacters(id);
  if (!character) {
    return res.status(204);
  }
  res.send(character);
};

const createCharacter = async (req, res) => {
  const characterBody = req.body;

  const newCharacter = await charactersService.createCharacter(characterBody);
  res.status(201).send({
    messsage: 'Personagem adicionado com sucesso!',
    data: newCharacter,
  });
};

const updateCharacter = async (req, res) => {
  const id = req.params.id;
  const editCharacter = req.body;

  const character = await charactersService.findByIdCharacters(id);

  if (!editCharacter) {
    return res.status(204).send({message: "Personagem não encontrado!"});
  }

  const updateCharecter = await charactersService.updateCharecter(
    id,
    editCharacter,
  );

  res
    .status(200)
    .send({
      message: 'Atualiazação efetuada com sucesso!',
      data: updateCharecter,
    });
};

const deleteCharacter = async (req, res) => {
  const id = req.params.id;
  
  const character = await charactersService.findByIdCharacters(id);

  if (!character) {
    return res.status(204);
  };

  await charactersService.deleteCharacter(id);
  res.status(200).send({message: "Personagem deletado com sucesso!", data: character})

}

module.exports = {
  findAllCharacters,
  findByIdCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
