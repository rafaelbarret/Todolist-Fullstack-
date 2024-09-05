require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors()); // Habilita CORS para permitir requisições de diferentes origens
app.use(bodyParser.json()); // Configura o body-parser para parsear JSON

app.use('/api/users', userRoutes); // Define as rotas de usuários
app.use('/api/tasks', taskRoutes); // Define as rotas de tarefas

// Sincroniza o Sequelize com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Database connected'); // Mensagem de sucesso na conexão com o banco de dados
    })
    .catch(err => {
        console.log('Error connecting to the database', err); // Mensagem de erro na conexão com o banco de dados
    });

module.exports = app; // Exporta a instância do Express para ser usada em outros arquivos


