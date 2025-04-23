// 사이드 이펙트(side effect)
// useEffect 훅
// 컴포넌트가 생성 될 때 (마운트) - 리렌더링 영향 X
// 컴포넌트가 해제 될 떄 (언마운트) - 리렌더링 영향 X
// 컴포넌트의 상태 값이 변경될 때 (업데이트) - 리렌더링 영향 O

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // 의존성 배열이 빈 배열이면 컴포넌트가 마운트 될 때 딱 한번 실행
  useEffect(() => {
    console.log("counter mounted");

    return () => {
      console.log("counter unmounted");
    };
  }, []);

  // 의존성 배열에 값이 있다면, 해당 값이 변경될때마다 실행
  useEffect(() => {
    console.log("counter updated");
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
