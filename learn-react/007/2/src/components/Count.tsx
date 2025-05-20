// 사이드 이펙트: 화면 렌더링 작업 이외의 모든 작업
// useEffect 훅
// 1. 컴포넌트가 생성 될 때 (마운트)
// 2. 컴포넌트의 상태 값이 변경 될 때 (업데이트)
// 3. 컴포넌트가 해제 될 때 (언마운트)
import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 마운트
  useEffect(() => {
    console.log("Count Mounted");
    // 언마운트
    return () => {
      console.log("Count UnMounted");
    };
  }, []);
  // 업데이트
  useEffect(() => {
    console.log("Count Change: " + count);
    console.log("Name Change: " + name);
  }, [count, name]);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("jaegeon")}>변경</button>
    </>
  );
}
