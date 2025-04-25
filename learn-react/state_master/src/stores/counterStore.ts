import { create } from "zustand";

//use***Store(***:파일이름)
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 50,
  increment: () => set({ count: 10 }),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
