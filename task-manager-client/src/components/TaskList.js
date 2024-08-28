import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';
import Task from '../components/Task';

const TaskList = () => {
  const { auth, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data || []); // Garante que tasks será um array
      } catch (error) {
        console.error('Erro ao buscar tarefas', error);
      }
    };

    if (auth) {
      fetchTasks();
    }
  }, [auth]);

  const handleEdit = (id) => {
    navigate(`/tasks/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Erro ao excluir tarefa', error);
    }
  };

  const handleToggleComplete = async (id) => {
    const task = tasks.find(task => task.id === id);
    try {
      await api.put(`/tasks/${id}`, { ...task, completed: !task.completed });
      setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    } catch (error) {
      console.error('Erro ao atualizar tarefa', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!auth) {
    return <p>Você precisa estar logado para ver as tarefas.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate('/tasks/new')}>Adicionar Nova Tarefa</button>
      <button onClick={handleLogout}>Logout</button>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))
      ) : (
        <p>Não há tarefas para exibir.</p>
      )}
    </div>
  );
};

export default TaskList;


