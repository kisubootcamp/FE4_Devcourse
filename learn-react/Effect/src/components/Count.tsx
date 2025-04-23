// ✅ 문제 1: 타이머 만들기 ⏱

// 🎯 조건
// 	•	컴포넌트가 마운트되었을 때 1초마다 숫자를 1씩 증가시켜라
// 	•	언마운트될 때 setInterval 정리해라 (메모리 누수 방지)
// 	•	숫자는 count라는 상태로 관리

import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-3xl">Count: {count}</h1>
    </>
  );
}
