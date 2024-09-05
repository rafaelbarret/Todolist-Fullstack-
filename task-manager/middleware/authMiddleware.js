require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const jwt = require('jsonwebtoken');

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtém o token do cabeçalho de autorização
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token JWT
    req.userId = decoded.userId; // Adiciona o userId ao objeto req
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware; // Exporta o middleware para ser usado em outras rotas


