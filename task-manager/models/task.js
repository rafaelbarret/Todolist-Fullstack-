const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo Task com seus campos e tipos de dados
const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Task; // Exporta o modelo Task

