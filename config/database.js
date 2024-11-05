const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.URI, {
    logging: false
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Banco de dados conectado com sucesso!");
    } catch(error) {
        console.error("Erro ao conectar com o servidor: ", error);
    }
})();

module.exports = {sequelize};