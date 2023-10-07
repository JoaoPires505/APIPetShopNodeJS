const { DataTypes } = require('sequelize')

const conexao = require('../database.js')

 

const Atendimento = conexao.define('atendimento', {

    id: {

        primaryKey: true,

        autoIncrement: true,

        type: DataTypes.INTEGER

       

    },

    diahora: {

        type: DataTypes.STRING,

        allowNull: false

    },

    valor: {

        type: DataTypes.INTEGER,

        allowNull: false

    },
    concluido: {

        type: DataTypes.BOOLEAN,

        allowNull: false

    }

}, {

    createdAt: false,

    updatedAt: false

})

 

module.exports = Atendimento;