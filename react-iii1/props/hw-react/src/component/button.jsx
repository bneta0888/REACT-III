import React from 'react'
import './button.css'

const button = (props) => {
  return (
    <div>
      <button>{props.hello}</button>
      <p>{props.text}</p>
      <h1>{props.he}</h1>
      
    </div>
  )
}

export default button
