import { useState } from "react";
import Count from "./components/Count";
export default function App() {
  console.log("App 렌더링");
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <Count />
    </>
  );
}
