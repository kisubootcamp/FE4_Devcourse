import CountDisplay from "./components/CountDisplay";
import CountButton from "./components/CountButton";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <CountDisplay count={count} />
      <CountButton increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}
