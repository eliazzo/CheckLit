import React from 'react'
import { useState } from 'react';
import ListCard from './ListCard';


function NewList() {
  
  
  console.log(' newList function called')
  return (
    <div>
      <ListCard/>
    </div>
  )
}

export default NewList

//   const [showListCard, setShowListCard] = useState(false);

  // setShowListCard(!showListCard);

  // return (
  //   <div>
  //      {showListCard && <ListCard />} 
  //   </div>
  // )