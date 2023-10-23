import { useState } from "react";
import "./IncrementDecrement.css";

export function IncrementDecrement() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="counter">
      <button className="action" onClick={decrement}>
        -
      </button>
      <p className="number-counter">{count}</p>
      <button className="action" onClick={increment}>
        +
      </button>
    </div>
  );
}
