const { sequelize } = require('../config/database');
const { Sequelize, DataTypes, Model } = require('sequelize');

class Consulta extends Model {};

Consulta.init(
    {
        consulta_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        retorno: {
            type: DataTypes.DATE,
            allowNull: false,
        },  
        qp: {
            type: DataTypes.TEXT,
        },
        hda: {
            type: DataTypes.TEXT,
        },
        prt: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        modelName: 'Consulta',
        tableName: 'Consultas'
    },
);

(async () => {
    try {
        await Consulta.sync({ force: true });
        console.log("Tabela 'Consultas' criada!!")
    } catch(error) {
        console.error("Erro ao criar tabela: " + error)
    };
})();

module.exports = { Consulta };