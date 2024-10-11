// src/components/Main.js
import React from 'react';
import Header from '../../components/Header';
import Timer from '../../components/Timer'
import './styles.css'; // Предполагаем, что у вас есть стили для Main

export default function Main() {
  const handleClick = () => {
    
  };

  return (
    <main className="main">
      <Header /> {/* Добавляем компонент Header здесь */}
      <button className="main-button" onClick={handleClick}>
        Нажми меня
      </button>
      <Timer /> {/* Добавляем компонент Timer */}
    </main>
  );
} 