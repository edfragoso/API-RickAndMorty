const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
});

const Character = mongoose.model('character', CharacterSchema, 'characters' );

module.exports = Character;
