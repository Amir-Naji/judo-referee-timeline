import React from 'react';

function Info({ side, action, startTime }) {

  let elapsedTime = "00:00";
  let whiteSide = "";
  let blueSide = "";

  if (startTime) {
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000); // Round to seconds
    const minutes = Math.floor(totalSeconds / 60); // Get minutes
    const seconds = totalSeconds % 60; // Get remaining seconds

    // Format minutes and seconds as MM:SS
    elapsedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    sideText(side, action, elapsedTime);
  }

  function sideText(side, action, elapsedTime) {
    // Determine the side and action for the text
    if (side === "white"){
      whiteSide = `${side} ${action} at : ${elapsedTime}`;
      blueSide = "";
    }
    else if (side === "blue"){
      blueSide = `${side} ${action} at : ${elapsedTime}`;
      whiteSide = "";
    }
  }

  return <React.Fragment>
    <div className="leftCol whtite border">
      {whiteSide}
    </div>
    <div className="rightCol blue border">	
      {blueSide} 
    </div> 
  </React.Fragment>;
}

export default Info