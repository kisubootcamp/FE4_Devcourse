import { create } from "zustand";

// use***Store로 짓는게 관례 ***: 파일 이름
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 50,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
