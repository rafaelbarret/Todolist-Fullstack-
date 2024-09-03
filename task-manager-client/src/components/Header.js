import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Header.css';

const Header = ({ onLogout, showAddTaskButton }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>Minha Lista de Tarefas</h1>
      <div className="header-buttons">
        {showAddTaskButton && (
          <button onClick={() => navigate('/tasks/new')}>Adicionar Nova Tarefa</button>
        )}
        {onLogout && <button onClick={onLogout}>Logout</button>}
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Tema Escuro' : 'Tema Claro'}
        </button>
      </div>
    </header>
  );
};

export default Header;


