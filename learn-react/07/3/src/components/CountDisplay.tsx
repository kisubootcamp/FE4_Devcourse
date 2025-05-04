import { useState } from "react";

export default function CountDisplay() {
  console.log("CountDisplay Component!");
  const [count, setcount] = useState(0);
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => setcount((count) => count + 1)}>증가</button>
    </>
  );
}
