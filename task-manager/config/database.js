require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

let sequelize;
try {
    sequelize = new Sequelize('localhost', process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });
    console.log('Database connected successfully');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize; // Exporta a instância do Sequelize para ser usada em outros arquivos

