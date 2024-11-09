import { useState } from "react";

const IncrementDecrement = () => {
  const [value, setInDec] = useState(0);
  const [color, setColor] = useState("white");

  const IncrementValue = () => {
    setInDec((currValue) => {
      if (currValue < 10) {
        const newValue = currValue + 1;
        setColor(newValue >= 0 ? "white" : "red");

        return newValue;
      }
      return currValue;
    });
  };

  const DecrementValue = () => {
    setInDec((currValue) => {
      if (currValue > -10) {
        const newValue = currValue - 1;
        setColor(newValue >= 0 ? "white" : "red");

        return newValue;
      }
      return currValue;
    });
  };

  return (
    <>
      <h2 style={{ color }}>{value}</h2>
      <button onClick={IncrementValue}>Increment</button>
      <button onClick={DecrementValue}>Decrement</button>
    </>
  );
};

export default IncrementDecrement;
