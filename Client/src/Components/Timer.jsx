
import React, { useState, useEffect } from 'react';
import "./timer.css"

export function Timer (){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
 
    useEffect(() => {
        start();
  }, []);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

    // const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    
    const start = () => {
      setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
      };

  return (
    <div className="timer-container">
      <span className="time">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
};

export default Timer;