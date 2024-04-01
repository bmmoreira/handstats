import React, { useState, useEffect,  useContext } from "react";
import StateContext from "../../StateContext";

const TimeCounter = () => {
  const appState = useContext(StateContext);
  const [time, setTime] = useState(() => {
    const storedTime = localStorage.getItem("timer");
    return storedTime ? parseInt(storedTime, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          localStorage.setItem("timer", newTime.toString());
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formattedTime = formatTime(time);

  const handleStartPauseClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleResetClick = () => {
    setTime(0);
    localStorage.setItem("timer", "0");
  };

  return (
    <div className="container">
  
  <div className="row justify-content-center p-2 ">
    <div className="col-auto text-center">
      <div>{formattedTime}</div>
      <div>Home: {appState.gameScoreboardHome} x {appState.gameScoreboardAway} Away</div>
    </div>
    <div className="col-auto text-center">
      <button onClick={handleStartPauseClick} className="btn btn-primary me-2">
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleResetClick} className="btn btn-secondary">
        Reset
      </button>
    </div>
  </div>
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
  return num.toString().padStart(2, "0");
};

export default TimeCounter;
