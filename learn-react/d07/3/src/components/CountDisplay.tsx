import { useState } from "react";

export default function CountDisplay() {
  const [count, setCount] = useState(0);
  console.log("CountDisplay Component");
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
