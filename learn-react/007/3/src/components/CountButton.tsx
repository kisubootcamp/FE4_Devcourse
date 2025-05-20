import { useState } from "react";

export default function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
}
