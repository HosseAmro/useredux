import InputAdd from "../components/InputAdd";
import ButtenAdd from "../components/ButtenAdd";
import { useDispatch, useSelector } from "react-redux";
import { postsAC } from "../store/Slices/PostsSlice";
import postApi from "../db/PostDb";

export default function AddPost() {
  const newPost = useSelector((s) => s.posts.new);
  const dispatch = useDispatch();

  async function Add(e) {
    e.preventDefault();
    const id = await postApi.length();
    const Post1 = await postApi.add({
      id,
      date: Date.now(),
      title: newPost.title,
      content: newPost.content,
    });
    dispatch(postsAC.push(Post1));
    dispatch(postsAC.clear());
  }
  return (
    <div className="grid items-center text-zinc-200 bg-zinc-800 min-w-[40rem] max-w-[35%] aspect-[9/2] m-auto my-20 rounded-2xl">
      <form className="grid items-center" onSubmit={Add}>
        <h2 className="my-8 px-14 m-auto font-bold text-[3.5rem] w-full aspect-[18/2]">
          New Post
        </h2>
        <InputAdd name="title" />
        <InputAdd name="content" />
        <ButtenAdd />
      </form>
    </div>
  );
}
