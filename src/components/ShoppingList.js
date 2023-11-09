import React from "react";
import Item from "./Item";
import { useState } from 'react';

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All");

  function handleCategory (event) {
    setFilterBy(event.target.value);
  }
  const categoryDisplayed = items.filter((item) => {
    if(filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleCategory}>
        <select name="filter" >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryDisplayed.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
