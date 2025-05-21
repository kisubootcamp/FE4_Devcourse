import { configureStore } from "@reduxjs/toolkit";
// 슬라이스는 직접 import해줘야 함.
import counterSlice from "./slice/counterSlice";

// 마치 게임 칩을 꽂아서 쓰는 것처럼 슬라이스를 여러 개 넣어주는 것.
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
