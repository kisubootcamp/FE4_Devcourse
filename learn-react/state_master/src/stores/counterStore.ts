import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// use***Store로 지어주는 게 관례 (*** : 파일 이름)

// 변경되는 상태 값이 현재 상태 값과 관련이 없다면 값 사용
// 변경되는 상태 값이 현재 상태 값과 관련이 있다면 콜백 함수 사용
export const useCounterStore = create<CounterStore>((set) => ({
  count: 50,
  increment: () => set({ count: 10 }),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
