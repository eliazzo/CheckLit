import React from "react";

function ListCard() {
  return (
    <div>
      <h1 className="text-m">My Lists</h1>
      <div className="blue card-width">
        <h2>Shopping</h2>
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
