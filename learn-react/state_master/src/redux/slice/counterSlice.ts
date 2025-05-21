import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//리듀서 함수
//useReducer()와 유사(함수역할하는 로직을 함수내부에 여러개 포함함)
//state, action 값을 전달받음
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  //상태값을 업데이트 할 수 있는 로직
  //{payload}
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
}); //createSlice의 구성요소: name,initialState,reducers

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
