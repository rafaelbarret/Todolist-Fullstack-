import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const PrivateRoute = ({ element }) => {
  const { auth } = useContext(AuthContext);
  return auth ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<PrivateRoute element={<TaskList />} />} />
          <Route path="/tasks/new" element={<PrivateRoute element={<TaskForm />} />} />
          <Route path="/tasks/:id" element={<PrivateRoute element={<TaskForm />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;










