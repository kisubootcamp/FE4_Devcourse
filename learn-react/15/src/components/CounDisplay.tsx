import { useState } from "react";

export default function CounDisplay() {
  console.log("CounDisplay 렌더링");
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
