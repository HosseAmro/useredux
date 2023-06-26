import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "One",
    content:
      "He i am Hosin. bodpdv dlvvp fmdpc fpvfpddv fpbbfb pf ,dp fflfpvf vpvbp vbfbfp fpfbfpvvv vvvp wf fofb cvdps gpgvs. lbkmfo. pfbmfob vppv",
  },
  { id: "2", title: "Tow", content: "this is a post 2" },
  { id: "3", title: "Three", content: "this is a post 3" },
  { id: "4", title: "Four", content: "this is a post 4" },
  { id: "5", title: "Five", content: "this is a post 5" },
  { id: "6", title: "Six", content: "this is a post 6" },
  { id: "7", title: "Seven", content: "this is a post 7" },
  { id: "8", title: "Eight", content: "this is a post 8" },
  { id: "9", title: "Nine", content: "this is a post 9" },
  { id: "10", title: "Ten", content: "this is a post 10" },
  { id: "11", title: "Eleven", content: "this is a post 11" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    load: (state, action) => {
      action.payload.map((post) => {
        state.push(post);
      });
    },
    push: (state, action) => {
      state = state.push(action.payload);
    },
  },
});

export const postsAC = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
export const allPosts = (store) => store.posts;
