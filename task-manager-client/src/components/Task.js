import React from 'react';
import '../styles/Task.css'; // Importando o CSS das tarefas
import '../styles/Explosion.css'; // Importando o CSS da explosão

const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const handleDelete = (id) => {
    const taskElement = document.getElementById(`task-${id}`);
    taskElement.classList.add('explode');
    setTimeout(() => {
      onDelete(id);
    }, 500); // Tempo da animação
  };

  const handleToggleComplete = (id) => {
    const taskElement = document.getElementById(`task-${id}`);
    taskElement.classList.toggle('completed');
    onToggleComplete(id);
  };

  return (
    <div id={`task-${task.id}`} className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button onClick={() => onEdit(task.id)}>Editar</button>
        <button onClick={() => handleDelete(task.id)}>Excluir</button>
        <button onClick={() => handleToggleComplete(task.id)}>
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
      </div>
    </div>
  );
};

export default Task;



