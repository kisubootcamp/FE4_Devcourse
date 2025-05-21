// Context API
// 1. Context 객체 - createContext()
// 2. Provider - 전역 상태를 공유하게 하는 컴포넌트 의미

import { createContext } from 'react';
interface CounterContext {
  count: number;
}
interface CounterActionContext {
  decrement: () => void;
  increment: () => void;
  reset: () => void;
}
export const CounterContext = createContext<CounterContext | null>(null);
export const CounterActionContext = createContext<CounterActionContext | null>(
  null
);
