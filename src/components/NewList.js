import React from 'react'
import { useState } from 'react';


  



function NewList() {
  const [isActive, setIsActive] = useState(false); 
  const handleClick = event => {
    setIsActive(current => !current);
  }
  return (
    <div>
        <h1>New List</h1>
        <button className={isActive ? 'blue' : ''} onClick={handleClick}>+</button>
        <div className='blue flex-col width display-none'>
          <input type='text'></input>
          <button className='top' type='submit'></button>
        </div>
    </div>
  )
}

export default NewList