import React from "react";
import { useState } from "react";
import NewList from "./NewList";

export default function ViewForm() {
  
  const [showForm, setShowForm] = useState(); // showForm = current state value, setShowForm = function that updates the state

  const [newList, setNewList ] = useState()

  return (
    <div>
      <h1 className="text-m ">New List</h1>
      <button onClick={() => setShowForm(!showForm)}>+</button>

      <div
        className={`newListForm flex-col width ${
          showForm ? "" : "display-none"
        }`}
      >
        <input className="width top-l" type="text"></input>
        <button className='top-s width' type='submit' onClick={ () => {
          setNewList(true) 
          }}>
          Create new List
        </button>
      </div>

      { newList ? <NewList/> : '' }
      
    </div>
  );
}

