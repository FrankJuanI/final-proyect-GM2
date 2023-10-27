import { useState } from "react";
import { Toaster, toast } from "sonner";
import "./IncrementDecrement.css";

export function IncrementDecrement({ productStock, handleSumQuantity, handleResQuantity}) {
  const [count, setCount] = useState<number>(1);

  function increment() {
    
    if (count < productStock) {
      setCount((prev) => prev + 1);
    } else {
      toast(<div>You select maximum purchase</div>);
    }
    handleSumQuantity()

  }

  function decrement() {

    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
    handleResQuantity()
  }

  return (
    <>
      <Toaster richColors position="bottom-left" />
      <div className="counter">
        <button className="action" onClick={() => {
          // handleResQuantity()
          decrement()
        }} >
          -
        </button>
        <p className="number-counter">{count}</p>
        <button className="action" onClick={() => {
          increment()
          // handleSumQuantity()
          }}>
          +
        </button>
      </div>
    </>
  );
}
