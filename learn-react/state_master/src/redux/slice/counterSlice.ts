import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 리듀서 함수
// useReducer()
// state, action
const counterSlice = createSlice({
	name: "counterSlice", // name은 파일명으로 적는게 관례다. name은 slice를 고유하게 구분하기 위해 선언한다.
	initialState: {
		value: 0,
	}, // 내가 공급할 데이터의 초기값을 적어준다.
	// reducers에는 상태 값을 업데이트 할 수 있는 로직을 적어준다.
	// action은 반드시 payload라는 속성을 포함하고 있고 이 속성에 외부에서 전달한 값이 들어간다. {payload}
	reducers: {
		// increment(state) {
		increment(state, action: PayloadAction<number>) {
			// state.value += 1;
			state.value += action.payload; // <- 외부에서 전달한 값을 받을 수 있다.
		},
		// decrement(state) {
		decrement(state, action: PayloadAction<{ num: number }>) {
			state.value -= action.payload.num;
		},
		reset(state) {
			state.value = 0;
		},
	},
});

// counterSlice 객체는 createSlice로 만들어진 객체고, createSlice로 만들어진 객체에는 reducer라는 속성이 있고, actions라는 속성이 있다.
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
