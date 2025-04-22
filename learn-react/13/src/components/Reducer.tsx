import { useReducer } from "react";
import { counterReducer } from "../reducer/CountReducer";

export default function Reducer() {
  // count - 상태 값
  // dispatch - 액션 발생 함수
  const [count, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <div>Count: {count.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
