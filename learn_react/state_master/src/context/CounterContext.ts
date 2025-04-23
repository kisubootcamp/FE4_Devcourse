//context api를 사용하기 위해서 context객체가 필요
// createContext()
// Provider : 전역 상태를 공유하게 하는 컴포넌트를 의미

import { createContext } from "react";
interface CounterContext {
  count: number;
}

interface CounterActionContext {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const CounterContext = createContext<CounterContext | null>(null);
export const CounterActionContext = createContext<CounterActionContext | null>(
  null
);
