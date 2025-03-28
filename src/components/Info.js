import React from 'react'

function Info({ side, action, startTime }) {
  let elapsedTime = "00:00";
  if (startTime) {
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000); // Round to seconds
    const minutes = Math.floor(totalSeconds / 60); // Get minutes
    const seconds = totalSeconds % 60; // Get remaining seconds

    // Format minutes and seconds as MM:SS
    elapsedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }


  return <React.Fragment>
    <div className={ side }>{side} <b>{action}</b> at : {elapsedTime}</div>
  </React.Fragment>;
}

export default Info