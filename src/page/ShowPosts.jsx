import { useSelector, useDispatch } from "react-redux";
import { allPosts, postsAC } from "../store/Slices/PostsSlice";
import postApi from "../db/PostDb";
import { useEffect } from "react";
import ShowAuther from "../components/ShowAuther";
import ShowTime from "../components/ShowTime";
import ReactionBut from "../components/ReactionBut";

export default function ShowPost() {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);

  useEffect(() => {
    async function load() {
      //as db to redux
      const post = await postApi.getAll();
      dispatch(postsAC.load(post));
    }
    load();
  }, [dispatch]);
  
  let showPost;
  if (posts.length) {
    showPost = posts.map((post, i) => {
      return (
        <>
          <div
            key={post.id}
            className="relative group rounded-2xl border-4 transition-colors duration-200  border-zinc-700 hover:border-zinc-400 hover:text-zinc-800 hover:bg-zinc-200  text-zinc-200 bg-zinc-800 mt-16 m-auto px-3 min-w-[40rem] max-w-[35%] aspect-[9/3]"
          >
            <span className="pl-6 font-bold text-[3.2rem]">
              {i + 1}.{post.title}
            </span>
            <p className="pl-6 pb-[8rem] text-[1.9rem] break-all">
              {post.content.slice(0, 100)}
            </p>
            <div className="flex justify-start absolute bottom-10 left-6 gap-4">
              <ShowAuther auther={post.auther} />
              <ShowTime date={post.date} />
            </div>
            <ReactionBut post={post} />
          </div>
        </>
      );
    });
  }

  return (
    <>
      <main>{showPost}</main>
    </>
  );
}
