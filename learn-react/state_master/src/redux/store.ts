import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		// 나중에 todo가 필요하면
		// todo: todoSlice,
		// setting: settingSlice, ...
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
