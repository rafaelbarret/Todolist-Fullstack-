const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { userId: req.userId } }); // Filtra as tarefas pelo userId
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await Task.create({ title, description, userId: req.userId }); // Associa o userId à tarefa
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({ where: { id, userId: req.userId } }); // Filtra a tarefa pelo id e userId
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const task = await Task.findOne({ where: { id, userId: req.userId } }); // Filtra a tarefa pelo id e userId
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.title = title;
        task.description = description;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({ where: { id, userId: req.userId } }); // Filtra a tarefa pelo id e userId
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.destroy();
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};



