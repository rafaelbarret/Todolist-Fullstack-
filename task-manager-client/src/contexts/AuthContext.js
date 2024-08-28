import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const { exp } = JSON.parse(atob(base64));
        if (exp * 1000 > Date.now()) {
          setAuth(true);
        } else {
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Token inválido', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(true);
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

