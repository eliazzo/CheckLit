/* eslint-disable react/prop-types */
import React from "react";

function ListCard({ listName }) {
  return (
    <div>
      <div className="blue card-width">
        <h2>{listName}</h2>
        <ul className="list-none">
          <li>
            <input type="checkbox"></input>Eggs
          </li>
          <li>
            <input type="checkbox"></input>Bread
          </li>
          <li>
            <input type="checkbox"></input>Cheese
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListCard;
