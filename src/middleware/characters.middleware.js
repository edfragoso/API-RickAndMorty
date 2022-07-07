const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const characterBody = req.body;

  if (!characterBody || !characterBody.name || !characterBody.image) {
    return res.status(400).send({
      message:
        'Você precisa preencher todos os campos para adionar novo personagem!',
    });
  }

  next();
};

module.exports = {
  validId,
  validObjectBody,
};
