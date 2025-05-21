import { useReducer } from "react";
import { CounterReducer } from "../reducer/counter.reducer";

export default function Reducer() {
  const [count, dispatch] = useReducer(CounterReducer, { value: 0 });
  // dispatch: 액션 발생 함수
  return (
    <>
      <h1>Count: {count.value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
// 함수 안에서만 액션이 발생하기 때문에 상태값을 바꾸는 로직은 해당 함수 내에만 있다.
