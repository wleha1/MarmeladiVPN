// src/components/Header.js
import settings from '../../assets/settings.png'
import question from '../../assets/question.png'
import login from '../../assets/login.svg'
import gummyBearPink from '../../assets/gummyBearPink.png'
import React from 'react';
import './Header.scss'; 

const Header = () => {

  const handleSettings = () => {
    alert('Функция настроек пока не реализована.');
  };

  return (
    <header className="header">
      <div className="logo-container">
      <img src={gummyBearPink} alt="logo " className="logo" />
      </div>
      <div className="header-right">
        <button className="question-button" onClick={handleSettings}>
          <img src={question} alt="login" className="login-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
