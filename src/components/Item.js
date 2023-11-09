import React from "react";
import { useState } from 'react';


function Item({ name, category }) {
  const [isInCart, setCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : "";

  function handleCartClick () {
    setCart((isInCart) => !isInCart);
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} 
      onClick={handleCartClick}>{isInCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
