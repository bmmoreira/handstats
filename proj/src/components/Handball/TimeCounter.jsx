import React, { useState, useEffect } from 'react';

const TimeCounter = () => {
  const [time, setTime] = useState(() => {
    const storedTime = localStorage.getItem('timer');
    return storedTime ? parseInt(storedTime, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          localStorage.setItem('timer', newTime.toString());
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formattedTime = formatTime(time);

  const handleStartPauseClick = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleResetClick = () => {
    setTime(0);
    localStorage.setItem('timer', '0');
  };

  return (
    <div>
      <h2>Time Counter</h2>
      <p>{formattedTime}</p>
      <button onClick={handleStartPauseClick}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};

const padZero = (num) => {
  return num.toString().padStart(2, '0');
};

export default TimeCounter;