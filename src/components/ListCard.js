import React from "react";
import { useState } from "react";

const ListItem = ({ item }) => {
  return (
    <>
      <input type="checkbox"></input>${item}
    </>
  );
};
const ListCard = ({ listName }) => {
  const [listItemInput, setListItemInput] = useState("");
  const handleInput = (event) => {
    setListItemInput(event.target.value);
    console.log(listItemInput);
  };

  const [listItemArr, setListItemArr] = useState([]);
  const addListItem = () => {
    const newListItem = <ListItem />;
    setListItemArr((prevList) => [...[prevList], newListItem]);
  };
  return (
    <div>
      <div className="blue card-width">
        <h2>{listName}</h2>
        <input type="text" onChange={handleInput}></input>
        <button type="submit" onClick={addListItem}>
          Submit
        </button>
        <ul className="list-none">
          {listItemArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListCard;
