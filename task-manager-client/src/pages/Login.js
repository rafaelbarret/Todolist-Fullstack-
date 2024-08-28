import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(true);
      navigate('/tasks');
    } catch (error) {
      console.error('Erro ao fazer login', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/register')}>Registrar</button>
    </div>
  );
};

export default Login;






