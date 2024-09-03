// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css'; // Certifique-se de criar um arquivo CSS para a página inicial

const Home = () => {
  return (
    <div className="home-container">
      <Header showAddTaskButton={false} />
      <div className="home-content">
        <h1>Bem-vindo ao Gerenciador de Tarefas</h1>
        <p>Organize suas tarefas de forma eficiente e produtiva.</p>
        <button onClick={() => window.location.href = '/login'}>Comece Agora</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
