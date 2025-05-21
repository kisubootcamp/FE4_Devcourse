import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// persist 로컬 스토리지에 현재 상태 저장
// subscriberWithSelector 내부의 상태 변화를 감시
// immer 불변성을 자동으로 관리해줌
export const useCountStore = create(
  subscribeWithSelector(
    persist(
      immer<CountStore>((set) => ({
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
      })),
      {
        name: "counter",
      }
    )
  )
);
