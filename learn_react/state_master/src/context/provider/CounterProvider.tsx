import { useMemo, useState } from "react";
import { CounterContext, CounterActionContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  const memo = useMemo(() => ({ increment, decrement, reset }), []);
  return (
    <CounterActionContext value={memo}>
      <CounterContext value={{ count }}>{children}</CounterContext>
    </CounterActionContext>
  );
}
