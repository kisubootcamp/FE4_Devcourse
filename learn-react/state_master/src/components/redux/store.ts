// redux는 하나의 중앙 store를 가지고 있고, slice를 가지고 상태를 공유함

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// 반드시 하나의 store
// slice를 여러개 만들어서 관리
