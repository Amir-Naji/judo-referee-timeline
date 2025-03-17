import React from 'react'

function Info({ text, color }) {
  return <React.Fragment>
    <div className={ color }>{text + new Date().getTime() }</div>
  </React.Fragment>;
}

export default Info