import React, { useEffect } from "react";
import { useState } from 'react';
import ListCard from "./ListCard";

export default function ViewForm() {

  const [listArr, setListArr] = useState([]);


 const addNewList = () => {
  const newList = <ListCard/>
  setListArr(prevArr => [...[prevArr], newList])
  console.log(listArr)
  // console.log(ListCard)
  // let cardArr = [];
  // cardArr.push(ListCard)
  // console.log(cardArr)
 }

  return (
    <div>
    <h1 className="text-m ">New List</h1>
      <input className="width top-l" type="text"></input>
      <button className='top-s width' type='submit' onClick={addNewList}>Add new list</button>

      {listArr.map((list, index) => (<div key={index}>{list}</div>
      ))}
    </div>

  );
}

// dynamically render 