import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";

// state : 상태값
// action : 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터
// 반환하지 않을 경우 throw new Error("Error")
// 반드시 반환(Return)하는 값이 있어야함

export default function Reducer() {
  //count : 상태값
  // dispatch : 액션 발생 함수
  // dispatch는 useState에서 setCount 함수랑 다르게 여기저기 뿌려도 괜찮음
  const [count, dispatch] = useReducer(counterReducer, 20);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
