const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo User com seus campos e tipos de dados
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User; // Exporta o modelo User

