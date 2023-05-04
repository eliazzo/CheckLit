import React from 'react'
import { useState } from 'react';


function NewList() {
  const [isActive, setIsActive] = useState(false); // isActive = current state value, setIsActive = function that updates the state
  const handleClick = event => {
    setIsActive(!isActive);; ///setIsActive updates the value of isActive false => true (and visa versa)
  }
  return (
    // User interface
    <div>
        <h1 className='text-m '>New List</h1>
        <button onClick={handleClick}>+</button> 
        <div className={`newListForm flex-col width ${isActive ? '' : 'display-none'}`}>
          <input className='width top-l' type='text'></input>
          <button className='top-s width' type='submit'></button>
        </div>
    </div>
  )
}

export default NewList