import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>0(리셋)</button>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
