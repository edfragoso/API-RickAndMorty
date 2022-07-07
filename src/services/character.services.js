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

const updateCharecter = async (idParam, editCharacter) => {
  return await Character.findByIdAndUpdate(idParam, editCharacter).setOptions({
    returnOriginal: false,
  });
};

const deleteCharacter = async (idParam) => {
  return await Character.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCharacters,
  findByIdCharacters,
  createCharacter,
  updateCharecter,
  deleteCharacter,
};
