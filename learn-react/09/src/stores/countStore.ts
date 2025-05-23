import {create} from "zustand";
import {persist} from "zustand/middleware";

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// export const useCountStore = create<CountStore>((set) => ({
//   count: 0,
//   increment: () => set((state) => ({count: state.count + 1})),
//   decrement: () => set((state) => ({count: state.count + 1})),
//   reset: () => set({count: 0}),
// }));

// persist
// subscribeWithSelector
export const useCountStore = create(
  persist<CountStore>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({count: state.count + 1})),
      decrement: () => set((state) => ({count: state.count + 1})),
      reset: () => set({count: 0}),
    }),
    {
      name: "counter",
    }
  )
);
