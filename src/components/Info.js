import React from 'react'

function Info({ side, action, startTime }) {
  let elapsedTime ;
  if (startTime) {

    elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds
  }

  return <React.Fragment>
    <div className={ side }>{side} <b>{action}</b> at : {elapsedTime}</div>
  </React.Fragment>;
}

export default Info