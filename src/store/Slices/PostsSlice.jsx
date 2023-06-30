import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get(POST_URL);
    return response.data;
  } catch (err) {
    return ErrorEvent.message;
  }
});

const initialState = {
  user: [
    { nameUser: "Hossin Fati", useId: "11" },
    { nameUser: "Ali Ansari", useId: "12" },
    { nameUser: "Bahram Zargar", useId: "13" },
    { nameUser: "Shahab Ghasemi", useId: "14" },
  ],
  new: {
    title: "",
    content: "",
    auther: "",
  },
  allPost: [],
  status: "idle",
  error: null,
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
      state.allPost.unshift(action.payload);
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
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        const NewPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ });
          console.log(post.date);

          (post.reaction = {
            wow: 0,
            like: 0,
            angry: 0,
            sad: 0,
          }),
            (post.content = post.body);
          delete post.body;
          return post;
        });
        const uniqSort = NewPosts.sort((a, b) => {
          return b.date - a.date;
        });
        state.allPost.splice(0);
        uniqSort.map((post) => {
          state.allPost.push(post);
        });
      });
  },
});

export const postsAC = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
export const allPosts = (store) => store.posts.allPost;
