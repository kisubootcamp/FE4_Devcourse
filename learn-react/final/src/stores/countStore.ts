import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
//전역변수는 새로고침하면 값이 다 날아감->방지하기위헤
// persist사용
// subscriberWithSelector
export const useCountStore = create(
  subscribeWithSelector(
    persist(
      immer<CountStore>(
        (set) => ({
          count: 0,
          increment: () =>
            set((state) => {
              state.count += 1;
            }),
          decrement: () =>
            set((state) => {
              state.count -= 1;
            }),
          reset: () => set({ count: 0 }),
        }),
        {
          name: "counter",
        }
      )
    )
  )
); //local storage에 counter라는 이름으로 저장중
