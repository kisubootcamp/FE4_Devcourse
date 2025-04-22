import { useReducer } from "react";
import { counterReducer } from "./reducer/counter.reducer";
// state -> 상태값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 반드시 return이 있어야하고 없다면 error를 던져야 함.

export default function Reducer() {
  // count -> 상태값
  // dispatch -> 액션 발생 함수
  const [count, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <>
      <h1>Reducer Count : {count.value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>+</button>
    </>
  );
}
