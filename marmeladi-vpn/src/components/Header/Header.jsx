// src/components/Header.js
import React from 'react';
import './Header.css'; // Создадим этот файл далее

const Header = () => {
  const handleTranslate = () => {
    // Здесь можно реализовать логику перевода
    alert('Функция перевода пока не реализована.');
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Логотип" className="logo" />
      </div>
      <button className="translate-button" onClick={handleTranslate}>
        Перевести
      </button>
    </header>
  );
};

export default Header;
