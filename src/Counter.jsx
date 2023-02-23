import React from "react";

function Counter({
  text = "Counter",
  id,
  value,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <li>
      <h1>{text}</h1>
      <button onClick={() => handleDecrease(id)}>-</button>
      <span className={value <= 0 && "negative"}>{value}</span>
      <button onClick={() => handleIncrease(id)}>+</button>
    </li>
  );
}

export default Counter;
 