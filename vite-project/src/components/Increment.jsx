import { useState } from "react";

// import React from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  const clickHander = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h2>{count}</h2>
      <button
        style={{ marginRight: "10px" }}
        onClick={clickHander}
        type="button"
      >
        Incroment
      </button>

      <button onClick={resetCount} type="button">
        Reset
      </button>
    </>
  );
};

export default Increment;
