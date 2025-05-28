// Context API
// Context 객체
// 1. createContext()
// 2. Provider - 전역 상태를 공유하게 하는 컴포넌트

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
