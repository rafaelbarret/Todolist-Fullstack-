import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../services/api';
import '../styles/Register.css'; // Certifique-se de ter um arquivo CSS para o registro

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/register', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(true);
      navigate('/tasks');
    } catch (error) {
      console.error('Erro ao registrar', error.response ? error.response.data : error.message);
      alert('Erro ao registrar. Tente novamente.');
    }
  };

  return (
    <div className="register-container">
      <Header showAddTaskButton={false} />
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit">Registrar</button>
        </form>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      <Footer />
    </div>
  );
};

export default Register;


