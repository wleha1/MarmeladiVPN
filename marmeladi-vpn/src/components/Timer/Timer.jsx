// src/components/Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <div className="time-display">
        {new Date(seconds * 1000).toISOString().substr(11, 8)}
      </div>
      <div className="timer-buttons">
        {!isActive && seconds === 0 && (
          <button onClick={handleStart} className="start-button">
            Старт
          </button>
        )}
        {isActive && (
          <button onClick={handleStop} className="stop-button">
            Стоп
          </button>
        )}
        {!isActive && seconds > 0 && (
          <>
            <button onClick={handleStart} className="resume-button">
              Продолжить
            </button>
            <button onClick={handleReset} className="reset-button">
              Сброс
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
