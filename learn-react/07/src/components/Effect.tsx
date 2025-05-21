import { useEffect, useState } from "react";

// 사이드 이펙트 : 컴포넌트에서 화면에 렌더링되는 것을 제외한 모든 작업
// useEffect : 리액트에서 사이드 이펙트를 처리하기 위해 사용하는 훅
// 컴포넌트가 생성될 때(마운트), 컴포넌트의 상태값이 변경될 때(업데이트), 컴포넌트가 해제될 때(언마운트)

export default function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        /* 마운트 */
        // 의존성 배열을 []로 설정하면, 첫 번째 매개변수는 useEffect가 마운트될때 최초 1회만 실행된다.
        console.log("Effect Mounted");

        /* 언마운트 */
        // 의존성 배열을 []로 설정하면, 첫 번째 매개변수의 콜백함수 return은 useEffect가 언마운트될때 최초 1회만 실행된다.
        return () => {
            console.log("Effect Unmounted");
        };
    }, []);

    useEffect(() => {
        /* 업데이트 */
        // 의존성 배열에 들어있는 특정 값을 감시하고, 값이 업데이트될 때마다 실행된다.
        console.log("count change:" + count);
    }, [count]);

    return (
        <>
            <h1>useEffect Count: {count}</h1>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
        </>
    );
}
