import { useEffect, useState } from "react";

// 사이드 이펙트(side effect)
// -> 컴포넌트에서 화면을 렌더링하는 것을 제외한 모든 행동
// -> 외부 라이브러리와 상호작용, 세션, 쿠키 등

// useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
// 컴포넌트가 해제될 때 (언마운트)

export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 마운트 (API 작업)
  useEffect(() => {
    console.log("Count Mounted");

    // 언마운트 (정리)
    return () => {
      console.log("Count UnMounted");
    };
  }, []);

  // count와 name이라는 값을 감시하겠다는 의미
  useEffect(() => {
    console.log("count change: " + count);
    console.log("name change: " + name);
  }, [count, name]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("yubin")}>이름변경</button>
    </>
  );
}
