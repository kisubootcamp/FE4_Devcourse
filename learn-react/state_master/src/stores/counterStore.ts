import { create } from "zustand";
type CounterStore = {
  count: number;
  increment: () => void;
  reset: () => void;
  decrement: () => void;
};

//use***Store
export const useCounterStore = create<CounterStore>((set) => ({
  count: 50,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  reset: () => set({ count: 0 }),
}));
