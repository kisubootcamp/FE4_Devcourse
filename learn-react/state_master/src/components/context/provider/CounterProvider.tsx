import React, { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  const memoization = useMemo(() => ({ increment, decrement, reset }), []); // 메모이제이션 되어있기 때문에 리렌더링 되지 않음
  return (
    <CounterActionContext value={memoization}>
      <CounterContext value={{ count }}>{children}</CounterContext>
    </CounterActionContext>
  );
}

// 공급 범위 지정
// CounterProvider를 통해 컴포넌트들이 상태를 공유받음
// CounterProvider가 리렌더링되면서 상태를 공급받는 컴포넌트도 리렌더링이 일어남
