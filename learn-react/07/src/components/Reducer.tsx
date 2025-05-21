import { useReducer } from "react";
import { counterReducer } from "../reducer/counter.reducer";

/* useReducer */
// state : 상태값, action : 함수 내부에서 상태를 변경하기 위해 참조할 수 있는 데이터
// reducer 함수는 반드시 return값이 있어야 함(그렇지 않다면 에러를 던져야 함)
// reducer 함수의 반환값이 상태값이 된다.
// 상태값이 변경되는 로직이 한개의 함수 안에 몰려있다!
export default function Reducer() {
    // count: 상태값, dispatch : 액션발생 함수
    const [count, dispatch] = useReducer(counterReducer, 0);
    return (
        <>
            <h1>useReducer Count: {count}</h1>
            <button onClick={() => dispatch("decrement")}>-</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            <button onClick={() => dispatch("increment")}>+</button>
        </>
    );
}
