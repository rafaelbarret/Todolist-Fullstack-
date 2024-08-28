const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('localhost', 'root', 'Banco@98457147', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;
