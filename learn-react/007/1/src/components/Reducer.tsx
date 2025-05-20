import { useReducer } from "react";
import CounterReducer from "../reducer/CounterReducer";
// state: 상태 값
// action: 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터

export default function Reducer() {
  // count = 상태 값
  // dispatch = 액션 발생 함수
  const [count, dispatch] = useReducer(CounterReducer, { value: 0 });
  return (
    <>
      <h1>count: {count.value}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </>
  );
}
