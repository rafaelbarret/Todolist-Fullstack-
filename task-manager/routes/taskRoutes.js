const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware); // Aplica o middleware de autenticação a todas as rotas de tarefas

router.get('/', taskController.getTasks); // Rota para obter todas as tarefas
router.post('/', taskController.createTask); // Rota para criar uma nova tarefa
router.put('/:id', taskController.updateTask); // Rota para atualizar uma tarefa existente
router.delete('/:id', taskController.deleteTask); // Rota para deletar uma tarefa

module.exports = router; // Exporta o roteador de tarefas
