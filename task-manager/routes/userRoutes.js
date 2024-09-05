const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register); // Rota para registrar um novo usuário
router.post('/login', userController.login); // Rota para login de usuário

module.exports = router; // Exporta o roteador de usuários
