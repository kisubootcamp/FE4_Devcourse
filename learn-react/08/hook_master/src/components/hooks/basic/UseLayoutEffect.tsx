import { useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing
  }
  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(10)}>클릭</button>
    </>
  );
}
