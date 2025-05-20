import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 리듀서 함수
// useReducer()
// state, action 매개변수
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  // 상태값을 업데이트할 수 있는 로직

  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
// actions - 객체 (createSlice 에 내장되어 있는 객체)
// reducer - 객체 (createSlice 에 내장되어 있는 객체)
