import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },

  // 상태값을 업데이트 할 수 있는 로직
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
