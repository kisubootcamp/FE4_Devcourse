import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 리듀서 함수
// useReducer()
// state, action
const counterSlice = createSlice({
  name: "counterSlice",
  // 파일명을 name속성으로 넣는다
  initialState: {
    value: 0,
  },
  // 상태 값을 업데이트 할 수 있는 로직
  // {payload} 속성에 외부에서 전달한 속성이 들어간다. 무조건 외부에서 전달받은 데이터이며 이름은 바꿀 수 없다
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    }, // actions는 reducers의 함수를 참조
  },
}); // reducers까지 갖춰야 함

export const { increment, decrement, reset } = counterSlice.actions; //actions: 객체
export default counterSlice.reducer; // reducer: 객체
