import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slices/Counter";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
