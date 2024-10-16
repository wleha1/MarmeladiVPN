// src/components/Main.js
import React from 'react';
import Header from '../../components/Header';
import Timer from '../../components/Timer'
import './styles.scss'; 

export default function Main() {
  const handleClick = () => {
    
  };

  return (
    <main className="main">
      <Header /> 
      <Timer /> 
    </main>
  );
} 