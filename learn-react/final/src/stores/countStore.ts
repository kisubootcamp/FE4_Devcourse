import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// persist 미들웨어를 사용하여 카운터 상태를 지속적으로 저장
// 로컬스토리지에 자동 저장 됨
// subscribeWithSelector 미들웨어를 사용하여 상태 변경 시 자동 저장
export const useCountStore = create(
  subscribeWithSelector(
    persist(
      immer<CountStoreType>((set) => ({
        count: 0,
        increment: () =>
          set((state) => {
            state.count += 1;
          }),
        decrement: () =>
          set((state) => {
            state.count -= 1;
          }),
        reset: () =>
          set((state) => {
            state.count = 0;
          }),
      })),
      {
        name: "counter",
      }
    )
  )
);
