import React, { useState, useEffect, useContext } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ThemeProvider } from "@mui/material/styles";
import { timeCounter } from "../Utils/Themes";
import LoopIcon from "@mui/icons-material/Loop";
import IconButton from "@mui/material/IconButton";
import StateContext from "../../StateContext";
import Typography from "@mui/material/Typography";

/**
 * A component to display and manage a timer.
 * @returns {JSX.Element} The JSX representation of the component.
 */
const TimeCounter = () => {
  const appState = useContext(StateContext);

  /**
   * State to hold the current time.
   * @type {[number, Function]}
   */
  const [time, setTime] = useState(() => {
    const storedTime = localStorage.getItem("timer");
    return storedTime ? parseInt(storedTime, 10) : 0;
  });

  /**
   * State to manage the running status of the timer.
   * @type {[boolean, Function]}
   */
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    /**
     * Function to handle the timer tick.
     */
    const tick = () => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        localStorage.setItem("timer", newTime.toString());
        return newTime;
      });
    };

    if (isRunning) {
      intervalId = setInterval(tick, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  /**
   * Format the time in HH:MM:SS format.
   * @param {number} timeInSeconds - Time in seconds.
   * @returns {string} Formatted time string.
   */
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${padZero(minutes)}:${padZero(seconds)}`;
  };

  /**
   * Pad a number with zeros.
   * @param {number} num - Number to pad.
   * @returns {string} Padded number string.
   */
  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };

  /**
   * Handle the click event of start/pause button.
   */
  const handleStartPauseClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  /**
   * Handle the click event of reset button.
   */
  const handleResetClick = () => {
    setTime(0);
    localStorage.setItem("timer", "0");
  };

  return (
    <ThemeProvider theme={timeCounter}>
    <div className="row gx-0" style={{backgroundColor: '#4cbd96', marginBottom: '-30px', zIndex: 10, width: '80%', borderRadius: '20px', height: '60px'}}>
      <div className="col-4   d-flex align-items-center justify-content-center align-items-center">
        <Typography variant="h5">{appState.scoreMyTeam} x {appState.scoreOpponentTeam}</Typography>
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center align-items-center">
       
          <IconButton
            onClick={() => {
              handleStartPauseClick();
            }}
          >
            {isRunning ? (
              <PauseIcon style={{ fontSize: 16 }} />
            ) : (
              <PlayArrowIcon style={{ fontSize: 16 }} />
            )}
          </IconButton>

          
        
      </div>
      <div className="col-4   d-flex align-items-center justify-content-center align-items-center"> <Typography variant="h5">{formatTime(time)}</Typography></div>
    </div>
    </ThemeProvider>
  );
};

export default TimeCounter;
