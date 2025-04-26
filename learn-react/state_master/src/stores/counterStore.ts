import { create } from "zustand";

type CounterStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

// use***Store로 짓는게 관례, ***은 파일명
// zustand는 상태 값 변경할 때 set을 꼭 써야 하는데. useState의 setState와 똑같다.
// 똑같이 그냥 값을 전달하는 것과 콜백함수를 전달하는 방식이 있는데 기준도 똑같다. 상태를 사용해서 업데이트하면 콜백, 아니면 그냥 값 전달하면 된다.
export const useCounterStore = create<CounterStore>((set) => ({
	count: 50,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),
}));
