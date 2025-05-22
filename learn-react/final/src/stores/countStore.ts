import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

// export const useCountStore = create<CountStore>((set) => ({
// 	count: 0,
// 	increment: () => set((state) => ({ count: state.count + 1 })),
// 	decrement: () => set((state) => ({ count: state.count - 1 })),
// 	reset: () => set({ count: 0 }),
// }));

// 새로고침해도 변경된 값이 유지되도록 하려면 create내의 함수를 persist 함수로 감싸면 된다
// persist로 감싼 함수를 subscriberWithSelector 함수로 감싸주기만 하면 됨 -> 내부의 상태 변화를 감시할 수 있게 됨
// export const useCountStore1 = create(
// 	subscribeWithSelector(
// 		persist<CountStore>(
// 			(set) => ({
// 				count: 0,
// 				increment: () => set((state) => ({ count: state.count + 1 })),
// 				decrement: () => set((state) => ({ count: state.count - 1 })),
// 				reset: () => set({ count: 0 }),
// 			}),
// 			{
// 				name: "counter",
// 			}
// 		)
// 	)
// );

export const useCountStore1 = create(
	subscribeWithSelector(
		persist(
			immer<CountStore>((set) => ({
				count: 0,
				increment: () =>
					set((state) => {
						state.count += 1;
					}), // 불변성을 유지해주기 때문에 아래와 같이 새로운 객체 껍데기 만들고 안에 값 업데이트 하는 식으로 하지 않아도 된다.
				decrement: () => set((state) => ({ count: state.count - 1 })),
				reset: () => set({ count: 0 }),
			})),
			{
				name: "counter",
			}
		)
	)
);
