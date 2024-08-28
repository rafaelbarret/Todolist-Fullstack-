import React from 'react';
import './Task.css'; // Adicione um arquivo CSS para estilos

const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Desmarcar' : 'Marcar como Concluída'}
      </button>
      <button onClick={() => onEdit(task.id)}>Editar</button>
      <button onClick={() => onDelete(task.id)}>Excluir</button>
    </div>
  );
};

export default Task;


