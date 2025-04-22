import { CounterReducer } from "../reducer/CounterReducer";
import { useReducer } from "react";
export default function Reducer() {
  // count : 상태 값
  // dispatch : action 발생 함수
  const [count, dispatch] = useReducer(CounterReducer, { value: 0 });
  return (
    <>
      <h1>count : {count.value}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      <button onClick={() => dispatch({ type: "RESET" })}> 0 </button>
    </>
  );
}
