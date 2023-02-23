import React, { useState } from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  const [counters, setCounters] = useState([
    { id: "1", value: 0, text: "new name" },
    { id: "2", value: 0 },
    { id: "3", value: 0 },
  ]);

  const handleIncrease = (id) => {
    let newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    );
    setCounters(newCounters);
  };

  const handleDecrease = (id) => {
    let newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    );
    setCounters(newCounters);
  };

  const handleIncreaseAll = () => {
    let newCounters = counters.map((counter) => {
      return { ...counter, value: counter.value + 1 };
    });
    setCounters(newCounters);
  };

  const handleDecreaseAll = () => {
    let newCounters = counters.map((counter) => {
      return { ...counter, value: counter.value - 1 };
    });
    setCounters(newCounters);
  };

  return (
    <>
      <div className={"block"}>
        <h1>Make It Count</h1>
        Your goal: implement a page showing <strong>3 counters</strong>
        <br />
        <ul>
          <li>every counter has a + and a - button</li>
          <li>
            for every counter, clicking on + will increase the count number on
            that single counter
          </li>
          <li>
            for every counter, clicking on - will decrease the count number on
            that single counter
          </li>
          <li>
            the page will have 2 extra buttons "decrease all" and "increase all"
          </li>
          <li>
            clicking on "increase all" will increase the count of one unit on
            all the counters
          </li>
          <li>
            clicking on "decrease all" will decrease the count of one unit on
            all the counters
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        >
          Help
        </a>
      </div>

      <div className={"block"}>
        <button onClick={handleDecreaseAll}>Decrease All</button>
        <button onClick={handleIncreaseAll}>Increase All</button>
        <ul className={"counters"}>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              text={counter.text}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
