import { useDispatch, useSelector } from "react-redux";
import { postsAC } from "../store/Slices/PostsSlice";

export default function InputAdd(p) {
  const Value = useSelector((s) => s.posts.new.title);
  const dispatch = useDispatch();

  return (
    <>
      <div className="aspect-[9/2] my-5">
        <label className="ml-14 text-[2rem] text-start block" htmlFor={p.name}>
          {`Post ${p.name}:`}
        </label>
        <input
          className="outline-none text-zinc-800 ml-14 bg-zinc-200 aspect-[9/1] m-auto block text-[2.5rem] rounded-md w-[80%]"
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
