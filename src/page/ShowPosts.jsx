import { useSelector, useDispatch } from "react-redux";
import { allPosts, postsAC } from "../store/Slices/PostsSlice";
import postApi from "../db/PostDb";
import { useEffect } from "react";

export default function ShowPost() {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);
  let showPost;
  useEffect(() => {
    async function load() {
      //as db to redux
      const post = await postApi.getAll();
      dispatch(postsAC.load(post));
    }
    load();
  }, [dispatch]);
  if (posts.length) {
    showPost = posts.map((post) => {
      return (
        <div
          key={post.id}
          className="rounded-2xl border-4 transition-colors duration-200 border-zinc-700 hover:border-zinc-400 hover:text-zinc-800 hover:bg-zinc-200  text-zinc-200 bg-zinc-800 my-8 m-auto px-3 min-w-[40rem] max-w-[35%] aspect-[9/3]"
        >
          <span className="pl-14 font-bold text-[3.2rem]">{post.title}</span>
          <p className="pl-10 py-4 text-[1.9rem]">{post.content}</p>
        </div>
      );
    });
  }

  return (
    <>
      <main>{showPost}</main>
    </>
  );
}
