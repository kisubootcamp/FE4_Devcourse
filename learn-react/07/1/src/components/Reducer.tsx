import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";

// state -> 상태 값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 무엇인가를 return 해야한다. (그러지 않을 거면 에러를 던져야함)
export default function Reducer() {
  // count 상태 값
  // dispatch 액션 발생 함수
  const [count, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <h1>count : {count.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
