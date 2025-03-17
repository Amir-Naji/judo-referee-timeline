import React from 'react'

function Info({ text, color, startTime }) {
  let elapsedTime ;
  if (startTime) {
    
    elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds
  }

  return <React.Fragment>
    <div className={ color }>{text +  elapsedTime}</div>
  </React.Fragment>;
}

export default Info