// 사이드 이펙트
// useEffect 훅
// 컴포넌트가 생성 될 때(마운트)
// 컴포넌트의 상태 값이 변경될 때(업데이트)
// 컴포넌트가 해제 될 때(언마운트)
// 에 대한 처리를 지원한다.
// 사이드 이펙트가 생기는 시점에 대해 지원

import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // 마운트
  useEffect(() => {
    console.log("Count Mounted"); // 컴포넌트가 마운트될 때 한번만 실행

    return () => {
      console.log("Count UnMounted");
      // 컴포넌트를 정리하는 시점
    }; // 언마운트 시점
  }, []); // []은 의존성 배열 의존성 배열이 비어있으면 리렌더링과 상관 없이 실행되면서 마운트될 때 한 번만 실행

  useEffect(() => {
    console.log("count change: " + count);
    console.log("count change: " + name);
  }, [count, name]); // 의존성 배열에 count 지정: count값 감시
  // 따로 감시할 떄는 useEffect를 따로 작성
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("Test")}>지정</button>
    </>
  );
}
// 의존성 배열이 다를 경우 useEffect를 여러 번 사용 가능하다.
