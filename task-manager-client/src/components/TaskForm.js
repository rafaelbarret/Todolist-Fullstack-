import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await api.get(`/tasks/${id}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
        } catch (error) {
          console.error('Erro ao buscar tarefa', error);
        }
      };

      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    try {
      if (id) {
        await api.put(`/tasks/${id}`, { title, description });
      } else {
        await api.post('/tasks', { title, description });
      }
      navigate('/tasks');
    } catch (error) {
      console.error('Erro ao salvar tarefa', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      />
      <button type="submit">{id ? 'Atualizar' : 'Adicionar'} Tarefa</button>
    </form>
  );
};

export default TaskForm;
