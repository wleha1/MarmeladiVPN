// src/components/Header.js
import avatar from '../../assets/avatar.jpg'
import React from 'react';
import './Header.css'; 

const Header = () => {
  const handleTranslate = () => {
    alert('Функция перевода пока не реализована.');
  };

  const handleLogin = () => {
    alert('Функция входа пока не реализована.');
  };

  const handleSettings = () => {
    alert('Функция настроек пока не реализована.');
  };

  return (
    <header className="header">
      <div className="logo-container">
      <img src={avatar} alt="logo " className="logo" />
      </div>
      <div className="header-right">
        <div className="avatar-container">
          <img src={avatar} alt="Avatar " className="avatar" />
          <img src={avatar} alt="Avatar " className="avatar" />
          <img src={avatar} alt="Avatar " className="avatar" />
          <img src={avatar} alt="Avatar " className="avatar" />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Логин
        </button>
        <button className="settings-button" onClick={handleSettings}>
          Настройки
        </button>
      </div>
    </header>
  );
};

export default Header;
