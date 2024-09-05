require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const app = require('./app');

const PORT = process.env.PORT || 3000; // Define a porta do servidor a partir da variável de ambiente ou usa a porta 3000 como padrão

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Mensagem de sucesso ao iniciar o servidor
});
