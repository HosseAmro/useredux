import { useDispatch, useSelector } from "react-redux";
import { postsAC } from "../store/Slices/PostsSlice";

export default function InputAdd(p) {
  const newPost = useSelector((s) => s.posts.new);
  const dispatch = useDispatch();
  const Value = value(p.name, newPost);

  return (
    <>
      <div className="aspect-[9/2] my-5">
        <label className="px-14 text-[2rem] text-start block" htmlFor={p.name}>
          {`Post ${p.name}`}
        </label>
        <input
          className={` outline-none text-zinc-800 bg-zinc-200 ${hight(
            p.name
          )} ml-[8%] m-auto block text-[3.5rem] rounded-md w-[80%]`}
          type="text"
          name={p.name}
          id={p.name}
          value={Value}
          onChange={(e) => dispatch(postsAC.change(p.name, e.target.value))}
        />
      </div>
    </>
  );
}

function hight(name) {
  if (name === "title") {
    return "aspect-[9/1]";
  } else if (name === "content") {
    return "aspect-[9/1.8]";
  }
}

function value(name, newPost) {
  if (name === "title") {
    return newPost.title;
  } else if (name === "content") {
    return newPost.content;
  }
}
