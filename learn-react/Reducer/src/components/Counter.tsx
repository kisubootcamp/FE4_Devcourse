// 🎯 조건
// 	•	상태: count: number
// 	•	액션 타입:
// 	•	"INCREMENT" → 1씩 증가
// 	•	"DECREMENT" → 1씩 감소
// 	•	"RESET" → 0으로 초기화

// 🧠 과제
// 	1.	useReducer로 상태를 선언해라
// 	2.	reducer 함수는 count를 변경하는 로직만 포함해라
// 	3.	버튼 3개로 각각의 액션을 실행해라
// 	4.	dispatch를 직접 쓰지 말고, handleIncrement, handleDecrement, handleReset 같은 추상화된 함수로 감싸서 사용해라 (추상화 연습 포함!)

import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";
import { CounterActionType } from "../types/counter";

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: CounterActionType.INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: CounterActionType.DECREMENT });
  };

  const handleReset = () => {
    dispatch({ type: CounterActionType.RESET });
  };

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
