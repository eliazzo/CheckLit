import React, { useEffect } from "react";
import NewList from "./NewList";
import { useState} from "react";

export default function ViewForm() {

  const [newList, setNewList] = useState(false);

  // useEffect(() => {
  //   if (newList) {
  //     setNewList(false)
  //   }
  // }, [newList]);

  return (
    <div>
    <h1 className="text-m ">New List</h1>
      <input className="width top-l" type="text"></input>
      <button className='top-s width' type='submit' onClick={() => setNewList(true)}>Add new list</button>

      <output>{newList ? <NewList /> : ''}</output>
    </div>

  );
}

// dynamically render 