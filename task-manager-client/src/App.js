import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles/App.css'; // Importando o arquivo CSS

const PrivateRoute = ({ element }) => {
  const { auth } = useContext(AuthContext);
  return auth ? element : <Navigate to="/login" />;
};

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<PrivateRoute element={<TaskList />} />} />
          <Route path="/tasks/new" element={<PrivateRoute element={<TaskForm />} />} />
          <Route path="/tasks/:id" element={<PrivateRoute element={<TaskForm />} />} />
        </Routes>
      </Router>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;










