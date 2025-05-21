import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
// 상태값을 변경할 수 있는 로직을 어느 컴포넌트에서나 구현 가능
// 대규모 프로젝트에서 그러한 로직이 흩어져있을 수 있을 가능성이 높음

// 상태 업데이트 함수를 별도의 캡슐화를 하고 절대 자식 컴포넌트로 상속시켜주지 않는다면 Reducer보다 더 편하게 사용이 가능함.
