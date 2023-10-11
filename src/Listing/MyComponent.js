import React, { useState, useEffect } from "react";

function MyComponent({ mlsid, children }) {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prevCounter) => prevCounter / 2);
  };

  return (
    <div>
      <div>Mlsid: {mlsid}</div>
      <div>{children}</div>
      <div>Counter: {counter}</div>
      <button onClick={updateCounter}> Click Here</button>
    </div>
  );
}

export default MyComponent;
