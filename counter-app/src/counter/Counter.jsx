import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());
  return (
    <div>
      <h1>Counter</h1>
      <h2> Value: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <br />
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
