import { useState } from 'react';

export default function State() {
  // state 상태값
  // setCount 상태업데이트
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>delete</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
