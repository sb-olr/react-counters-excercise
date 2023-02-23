import React from "react";

function Counter({ text = "Counter", id, value }) {
  return (
    <li>
      <h1>{text}</h1>
      <button>-</button>
      <span>{value}</span>
      <button>+</button>
    </li>
  );
}

export default Counter;
