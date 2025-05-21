import { useState } from "react";

export default function State() {
  //useState에서는 useReduce와는 다르게 state변수를 전달해주면 child에서도 수정가능=>관리어려움=>setState함수 속에 캡슐화시켜서 값 변경하는게 안전
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>0</button>
    </>
  );
}
