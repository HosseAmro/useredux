import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    { nameUser: "Hossin Fati" },
    { nameUser: "Ali Ansari" },
    { nameUser: "Bahram Zargar" },
    { nameUser: "Shahab Ghasemi" },
  ],
  new: {
    title: "",
    content: "",
    auther: "",
  },
  allPost: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    load: (state, action) => {
      const allPosts = [...new Set([...state.allPost, ...action.payload])];
      const uniq = allPosts.filter((post, index) => {
        return (
          index ===
          allPosts.findIndex((obj) => {
            return post.id === obj.id;
          })
        );
      });
      const uniqSort = uniq.sort((a, b) => {
        return a.id - b.id;
      });
      state.allPost.splice(0);
      uniqSort.map((post) => {
        state.allPost.push(post);
      });
    },
    push: (state, action) => {
      state.allPost.push(action.payload);
    },
    change: {
      reducer: (state, action) => {
        state.new[action.payload.names] = action.payload.value;
      },
      prepare: (names, value) => {
        return {
          payload: {
            names,
            value,
          },
        };
      },
    },
    clear: (state) => {
      state.new.title = "";
      state.new.content = "";
      state.new.auther = "";
    },
    replase: (state, action) => {
      state.allPost = state.allPost.map((post) => {
        if (post.id === action.payload.id) {
          return (post = action.payload);
        }
        return post;
      });
    },
  },
});

export const postsAC = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
export const allPosts = (store) => store.posts.allPost;
