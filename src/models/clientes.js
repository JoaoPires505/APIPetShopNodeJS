const { DataTypes } = require('sequelize');
const conexao = require('../database.js');

const Clientes = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    } 
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Clientes;
