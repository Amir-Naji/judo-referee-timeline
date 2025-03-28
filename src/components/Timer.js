import React, { useState, useEffect } from "react";

function StopWatch({ isRunning }) {
  // state to store time
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    else{
        setTime(0);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        Time: {" "}
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};


export default StopWatch;