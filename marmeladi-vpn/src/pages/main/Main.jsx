// src/components/Main.js
import React from 'react';
import Header from '../../components/Header';
import './styles.css'; // Предполагаем, что у вас есть стили для Main

export default function Main() {
  const handleClick = () => {
    
  };

  return (
    <main className="main">
      <Header /> {/* Добавляем компонент Header здесь */}
      <img src="/logo.png" alt="Большой логотип" className="main-logo" />
      <button className="main-button" onClick={handleClick}>
        Нажми меня
      </button>
    </main>
  );
}
