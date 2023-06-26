import { useSelector, useDispatch } from "react-redux";
import { allPosts, postsAC } from "../store/Slices/PostsSlice";
import postApi from "../db/PostDb";
import { useEffect } from "react";

export default function ShowPost() {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);

  useEffect(() => {
    async function load() {
      const post1 = await postApi.getAll();
      const post2 = post1.sort((a, b) => {
        return a.id - b.id;
      });
      dispatch(postsAC.load(post2));
    }
    load();
  }, []);
  const showPost = posts.map((post) => {
    return (
      <div
        key={post.id}
        className="rounded-2xl border-4 transition-colors duration-200 border-zinc-700 hover:border-zinc-400 hover:text-zinc-800 hover:bg-zinc-200  text-zinc-200 bg-zinc-800 my-8 m-auto px-3 min-w-[40rem] max-w-[35%] aspect-[9/3]"
      >
        <span className="pl-10 font-bold text-[3.2rem]">{post.title}</span>
        <p className="pl-6 py-4 text-[1.9rem]">{post.content}</p>
      </div>
    );
  });
  function send() {
    // posts.map((post) => {
    //   postApi.add(post).then(console.log(post));
    // });
  }

  return (
    <>
      <main>
        {showPost}
        <button
          className=" w-[30rem]  py-5 mx-auto block bg-yellow-300"
          onClick={send}
        >
          push
        </button>
      </main>
      ;
    </>
  );
}
