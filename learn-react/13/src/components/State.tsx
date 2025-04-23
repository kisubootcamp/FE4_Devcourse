import { useState } from "react";

// useState 상태 정의 방법
export default function State() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>+</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleClickMinus}>-</button>
    </>
  );
}
