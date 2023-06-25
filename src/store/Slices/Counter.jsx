import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Change: (state, action) => {
      state.value = state.value + action.payload;
    },
    Reset: (state) => {
      state.value = 0;
    },
  },
});

export const action = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export const count = (store) => store.counter.value;
