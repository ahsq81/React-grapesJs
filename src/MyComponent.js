import React, { useState, useEffect } from "react";

function MyComponent({ mlsid, children }) {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prevCounter) => prevCounter + 10);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(updateCounter, 8000);

  //   // Clean up the interval when the component unmounts
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div>
      <div>Mlsid: {mlsid}</div>
      <div>{children}</div>
      <div>Counter: {counter}</div>
      <button onClick={updateCounter}> Click me</button>
    </div>
  );
}

export default MyComponent;
