import React from "react";
import { useState } from "react";
import ListCard from "./ListCard";

export default function ViewForm() {
  const [listName, setListName] = useState("");
  const handleInput = (event) => {
    setListName(event.target.value);
  }

  const [listArr, setListArr] = useState([]);
  const addNewList = () => {
    const newList = <ListCard listName={listName}/>;
    setListArr((prevArr) => [...[prevArr], newList]);
  };
  

  return (
    <div>
      <h1 className="text-m ">New List</h1>
      <input className="width top-l" type="text" value={listName} onChange={handleInput}></input>
      <button className="top-s width" type="submit" onClick={addNewList}>
        Add new list
      </button>
      <h1 className="text-m">My Lists</h1>
      {listArr.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </div>
  );
}
