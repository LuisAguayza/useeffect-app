import React, { useState, useEffect } from "react";
console.log("pre");

const Lifecycle = () => {
  console.log("Loginc render");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log("sin dependencias");
    return () => {
      console.log("cleanup useEffect [sin dependencias]");
    };
  });
  useEffect(() => {
    console.log("useEffect []");
    return () => {
      console.log("cleanup useEffect []");
    };
  }, []);
  useEffect(() => {
    console.log("useEffect [counter1]");
    return () => {
      console.log("cleanup useEffect [counter1]");
    };
  }, [counter1]);
  useEffect(() => {
    console.log("useEffect [counter2]");
    return () => {
      console.log("cleanup useEffect [counter2]");
    };
  }, [counter2]);
  useEffect(() => {
    console.log("useEffect [counter1, counter2]");
    return () => {
      console.log("cleanup useEffect [counter1, counter2]");
    };
  }, [counter1, counter2]);
  return (
    <div>
      {console.log("return")}
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>
    </div>
  );
};

export default Lifecycle;
