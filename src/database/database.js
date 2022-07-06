const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect('mongodb+srv://root:admin@api-rickandmorty.oezm1.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((err) => console.log(`Erro ao conectar com o mongo Db ${err}`));
};

module.exports = connectDB;
