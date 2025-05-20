import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

/* persist 미들웨어 */
// 새로고침을 해도 값이 유지된다.
// 로컬 스토리지에 값을 자동으로 등록, 불러오기 해준다.

/* subscribeWithSelector 미들웨어 */
// 상태 관찰

/* immer */
// 불변성 유지(상태관리)를 알아서 도와주는 라이브러리

export const useCountStore = create(
    subscribeWithSelector(
        persist(
            immer<CountStore>((set) => ({
                count: 0,
                increment: () => set((state) => (state.count += 1)),
                decrement: () => set((state) => (state.count -= 1)),
                reset: () => set({ count: 0 }), // 여긴 어떻게바꾸는거지..
            })), 
            {
                name: "counter",
            }
        )
    )
);

// export const useCountStore = create(
//     subscribeWithSelector(
//         persist<CountStore>(
//             (set) => ({
//                 count: 0,
//                 increment: () => set((state) => ({ count: state.count + 1 })),
//                 decrement: () => set((state) => ({ count: state.count - 1 })),
//                 reset: () => set({ count: 0 }),
//             }),
//             {
//                 name: "counter",
//             }
//         )
//     )
// );

// export const useCountStore = create<CountStore>(
//      (set) => ({
//          count: 0,
//          increment: () => set((state) => ({ count: state.count + 1 })),
//          decrement: () => set((state) => ({ count: state.count - 1 })),
//          reset: () => set({ count: 0 }),
//      })
// );
