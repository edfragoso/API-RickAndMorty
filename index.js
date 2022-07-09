require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/characters.routes');
const connectDB = require('./src/database/database');

const port = process.env.PORT || 3000;

const app = express();

connectDB();
app.use(express.json());
app.use(cors());



app.use("/characters", routes);

app.listen(port,() => {
    console.log(`Servidor Rodando em http://localhost:${port}`)
});
