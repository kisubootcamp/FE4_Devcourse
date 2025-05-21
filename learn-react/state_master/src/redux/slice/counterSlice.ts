import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 리듀서 함수
// useReducer()
// state, action
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  // 상태 값을 업데이트 할 수 있는 로직
  // action은 반드시 payload라는 속성을 포함하고 있음. -> { payload }
  // payload는 외부에서 전달받은 데이터를 활용하게 해줌.
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state, action: PayloadAction<{ num: number }>) {
      state.value -= action.payload.num;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

// actions와 reducer는 다 객체임. reducer는 store에 등록되는 것임.
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
