import { useSelector } from "react-redux";

export default function ButtenAdd() {
  const newPost = useSelector((s) => s.posts.new);
  const canSave = Boolean(newPost.title) && Boolean(newPost.content) && Boolean(newPost.auther)
  return (
    <>
      <button
        className="rounded-md  hover:text-zinc-800 hover:bg-white  text-white bg-zinc-800 border-4 border-white my-8 m-auto w-[30%] aspect-[9/3.5] text-[2.7rem] font-bold text-center disabled:bg-neutral-900 disabled:text-neutral-600 disabled:border-neutral-600"
        disabled={!canSave}
      >
        Add
      </button>
    </>
  );
}
