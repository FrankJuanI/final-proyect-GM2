import { useState } from "react";
import { Toaster, toast } from "sonner";
import "./IncrementDecrement.css";

export function IncrementDecrement({ productStock }: { productStock: number }) {
  const [count, setCount] = useState(0);

  function increment() {
    console.log({ count, productStock });
    if (count < productStock) {
      setCount((prev) => prev + 1);
    } else {
      toast(<div>You select maximum purchase</div>);
    }
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
    <>
      <Toaster richColors position="bottom-left" />
      <div className="counter">
        <button className="action" onClick={decrement}>
          -
        </button>
        <p className="number-counter">{count}</p>
        <button className="action" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}
