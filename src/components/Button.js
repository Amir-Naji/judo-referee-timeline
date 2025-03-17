import React from 'react'

function Button({color, text, onClick}) {
  return (
    <button className={ color } onClick={ onClick }>{ text }</button>
  )
}

export default Button
