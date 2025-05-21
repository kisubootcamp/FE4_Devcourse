// Context API 를 사용하기 위해서 객체 필요
// 1. Context 객체 - 리액트 패키지에 포함되어 있는 createContext()를 사용해서 만듬
// 2. Provider - 전역 상태를 공유하게 하는 컴포넌트를 의미

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
