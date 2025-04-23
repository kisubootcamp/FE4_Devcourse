import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  console.log("AppComponent");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <Count />
    </>
  );
}
