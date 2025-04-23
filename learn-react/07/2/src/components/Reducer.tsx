import { useReducer } from 'react';
import { counterReducer } from '../reducer/counter.reducer';

// state -> 상태값
// action -> 함수 내부에서 상태를 변경하기 위해서 참조할 수 있는 데이터

// reducer함수 : 반드시 무엇인가를 return 해야한다 (그러지 않을거면 에러를 던져야한다)

// 기본 틀
// function reducer(state, action) {
//   return state;
//   // return이 없다면
//   // throw new Error("error")
// }

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

export default function Reducer() {
  // count - 상태값
  // dispatch - 액션 발생 함수
  const [count, dispatch] = useReducer(counterReducer, { value: 0 });
  // 0은 초기값
  return;
  <>
    <h1>Count: {count.value}</h1>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    <button onClick={() => dispatch({ type: 'RESET' })}>0</button>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
  </>;
}
