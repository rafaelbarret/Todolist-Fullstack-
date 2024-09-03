import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../services/api';
import '../styles/TaskForm.css'; // Certifique-se de ter um arquivo CSS para o formulário de tarefas

const TaskForm = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [task, setTask] = useState({ title: '', description: '', completed: false });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await api.get(`/tasks/${id}`);
          setTask(response.data);
        } catch (error) {
          console.error('Erro ao buscar tarefa', error);
        }
      };
      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/tasks/${id}`, task);
      } else {
        await api.post('/tasks', task);
      }
      navigate('/tasks');
    } catch (error) {
      console.error('Erro ao salvar tarefa', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  if (!auth) {
    return <p>Você precisa estar logado para acessar esta página.</p>;
  }

  return (
    <div className="task-form-container">
      <Header showAddTaskButton={false} />
      <div className="task-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Título"
          />
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Descrição"
          />
          <button type="submit">{id ? 'Atualizar' : 'Criar'} Tarefa</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default TaskForm;


