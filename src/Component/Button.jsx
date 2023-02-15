import React from 'react'

const Button = (props) => {
  return (
    <div className='button'>
        <button style={props.style}> {props.text}</button>
      
    </div>
  )
}

export default Button
