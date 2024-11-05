const express = require('express');
const consultas = require('../routes/consultas');

const app = express();
const PORT = 10000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, Mundoooo!!');
});

app.use('/v1/consultas', consultas);

app.listen(PORT, () => {
    console.log('Servidor rodando em: http://localhost:' + PORT)
});

module.exports = { app };