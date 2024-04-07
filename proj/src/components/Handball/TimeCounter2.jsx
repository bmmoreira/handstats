import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

const TimeCounter2 = () => {
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

  // const handleResetClick = () => {
  //   setTime(0);
  //   localStorage.setItem('timer', '0');
  // };

  

  return (
    <div>
      <Button onClick={handleStartPauseClick}
              id="" 
              style={{
                width:120, 
                flex: '1 1 0', 
                boxShadow: '0px 10px 7px -2px rgba(0, 0, 0, 0.2)', 
                borderRadius: 5}}>
                {isRunning 
                  ? 
                  <svg viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                    <g id="Pause">
                    <path id="Vector" d="M0 0.922783C0 0.412484 0.381099 0 0.852324 0L4.26162 0C4.73284 0 5.11394 0.412484 5.11394 0.922783V13.8417C5.11394 14.352 4.73284 14.7645 4.26162 14.7645H0.852324C0.381099 14.7645 0 14.352 0 13.8417L0 0.922783Z" fill="#FFE66D"/>
                    <path id="Vector_2" d="M6.86658 0.922783C6.86658 0.412484 7.24768 0 7.7189 0L11.1282 0C11.5994 0 11.9805 0.412484 11.9805 0.922783V13.8417C11.9805 14.352 11.5994 14.7645 11.1282 14.7645H7.7189C7.24768 14.7645 6.86658 14.352 6.86658 13.8417V0.922783Z" fill="#FFE66D"/>
                    </g>
                  </svg>
                  : 
                  <svg viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                    <g id="Polygon 1" filter="url(#filter0_d_221_3673)">
                    <path d="M27.4775 13.3567C28.7409 14.0941 28.7282 15.9239 27.4548 16.6438L7.54614 27.8978C6.27752 28.6149 4.70791 27.6919 4.71798 26.2346L4.87546 3.45245C4.88553 1.99521 6.46776 1.09394 7.72634 1.82854L27.4775 13.3567Z" fill="white"/>
                    </g>
                  </svg>
                }
       </Button>
       {/* <button onClick={handleResetClick}>Reset</button> */}
      <p
        id="timeTable"
        className="col-12 d-flex justify-content-center align-items-center px-1 mt-3"
        style={{ color: 'white', fontSize: 25, fontFamily: 'Roboto'}}>
          {formattedTime}
      </p> 
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

export default TimeCounter2;