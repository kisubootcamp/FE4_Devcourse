// Context API
// Context 객체가 필요 - createContext()
// Provider - 전역 상태를 공유하게 하는 컴포넌트를 의미

import { createContext } from "react";

interface CounterContext {
  count: number;
}
interface CounterActionContext {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContext | null>(null); // 컨텍스트 객체 만들어짐
export const CounterActionContext = createContext<CounterActionContext | null>(
  null
); // 상태를 나눠서 공급
