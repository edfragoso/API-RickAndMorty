const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/character-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((err) => console.log(`Erro ao conectar com o mongo Db ${err}`));
};

module.exports = connectDB;
