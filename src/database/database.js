const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((err) => console.log(`Erro ao conectar com o mongo Db ${err}`));
};

module.exports = connectDB;
