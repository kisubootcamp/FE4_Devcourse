import { useState } from "react";
import { useRef } from "react";

export default function UseRef() {
    /* useRef 훅 */
    // - 값이 변경돼도 리렌더링이 발생하지 않는 변수가 필요할 때
    // - JSX 요소를 참조하는 경우

    // 컴포넌트가 리렌더링된다는 것 = 함수가 다시 실행된다는 것
    // 하지만 useState는 다시 호출되지 않으므로 값이 계속 저장된다.
    // 리액트가 관리하는 변수 -> 실시간성이 보장됨
    const cnt = useRef(0); // ref 객체
    const [count, setCount] = useState(0);
    const increment = () => {
        cnt.current += 1;
        setCount((count) => count + Math.floor(Math.random() * 10) + 1);
    };
    const printConsole = () => {
        console.log(`지금까지 ${cnt.current}번 클릭됨`);
    };
    return (
        <>
            <h1>Random Count: {count}</h1>
            <button onClick={increment}>클릭</button>
            <button onClick={printConsole}>클릭 횟수</button>
            <hr />
        </>
    );
}
