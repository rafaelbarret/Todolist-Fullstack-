require('dotenv').config();
const jwt = require('jsonwebtoken');

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtém o token do cabeçalho de autorização
  if (!token) {
    console.log('Access denied: No token provided');
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token JWT
    req.userId = decoded.userId; // Adiciona o userId ao objeto req
    next();
  } catch (error) {
    console.error('Invalid token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;




