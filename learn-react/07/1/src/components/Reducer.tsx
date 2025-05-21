import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";

export default function Reducer() {
  // count - 상태 값
  // dispatch - 액션 발생 함수 / 이미 짜여져있는 함수 호출만 가능,수정불가 => 하나의 파일에서만 수정가능(그 child에서는 수정불가)
  const [count, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <>
      <h1>Count: {count.value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
