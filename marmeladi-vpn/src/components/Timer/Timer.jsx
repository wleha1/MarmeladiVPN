// src/components/TimerButton.js
import React, { useState, useEffect } from 'react';
import './Timer.scss';
import gummyBearPink from '../../assets/gummyBearPink.png';
import gummyBearGrey from '../../assets/gummyBearGrey.png';

const TimerButton = () => {
  const [seconds, setSeconds] = useState(0); // Количество секунд
  const [isActive, setIsActive] = useState(false); // Состояние таймера (активен или нет)
  const [isPink, setIsPink] = useState(true); // Состояние для переключения изображения
  const [glow, setGlow] = useState(false); // Состояние для включения glow-эффекта

  // Используем useEffect для запуска таймера
  useEffect(() => {
    let interval = null;

    if (isActive) {
      // Если таймер активен, запускаем интервал для увеличения времени каждую секунду
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      // Если таймер остановлен, очищаем интервал
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]); // Зависит только от isActive

  // Обработка нажатия на кнопку
  const handleClick = () => {
    if (isActive) {
      // Если таймер активен, сбрасываем таймер
      setIsActive(false);  // Останавливаем таймер
      setSeconds(0);       // Сбрасываем время
      setGlow(false);      // Отключаем glow-эффект
      setIsPink(true);     // Возвращаем исходное изображение
    } else {
      // Если таймер не активен, запускаем его
      setIsActive(true);   // Запускаем таймер
      setIsPink(false);    // Меняем изображение
      setGlow(true);       // Включаем glow-эффект
    }
  };

  // Форматирование времени в часы:минуты:секунды
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="timer-button-container">
      {/* Кнопка, по нажатию на которую запускается/останавливается таймер */}
      <button 
        className={`main-button ${glow ? 'active' : ''}`} 
        id="imageButton" 
        onClick={handleClick}
      >
        <img src={isPink ? gummyBearGrey : gummyBearPink} alt="Button Image" id="buttonImage" />
      </button>

      {/* Блок с таймером под кнопкой */}
      <div className="timer-block">
        <div className="timer-display">
          {formatTime(seconds)} {/* Форматированное время */}
        </div>
      </div>
    </div>
  );
};

export default TimerButton;
