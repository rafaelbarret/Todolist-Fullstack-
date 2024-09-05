require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

// Configura a conexão com o banco de dados usando Sequelize
const sequelize = new Sequelize('localhost', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;// Exporta a instância do Sequelize para ser usada em outros arquivos
