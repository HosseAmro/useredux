import { useDispatch, useSelector } from "react-redux";
import { postsAC } from "../store/Slices/PostsSlice";

export default function TextareaAdd(p) {
  const Value = useSelector((s) => s.posts.new.content);
  const dispatch = useDispatch();

  return (
    <>
      <div className="aspect-[9/2] my-5">
        <label className="ml-14 text-[2rem] text-start block" htmlFor={p.name}>
          {`Post ${p.name}:`}
        </label>
        <textarea
          className={` h-[130px] outline-none resize-none text-zinc-800 ml-14 bg-zinc-200 m-auto text-[2.5rem] rounded-md w-[80%]`}
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
