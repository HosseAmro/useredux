import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./Slices/CounterSlice";
import { postsReducer } from "./Slices/PostsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // counter: counterReducer,
  },
});
