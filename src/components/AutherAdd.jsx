import { useDispatch, useSelector } from "react-redux";
import { postsAC } from "../store/Slices/PostsSlice";

export default function Auther(p) {
  const dispatch = useDispatch();
  const allUser = useSelector((s) => s.posts.user);
  const auther = useSelector((s) => s.posts.new.auther);

  const ShowAllUser = allUser.map((user, i) => {
    return (
      <option key={i} className="text-[1.8rem]" value={user.userId}>
        {user.nameUser}
      </option>
    );
  });

  return (
    <>
      <div className="aspect-[16/1.5] mb-5 mt-[-1.5rem]">
        <label htmlFor="auther" className="ml-14 text-[2rem] text-start block">
          {`${p.name}:`}
        </label>
        <select
          onChange={(e) => dispatch(postsAC.change(p.name, e.target.value))}
          value={auther}
          name="auther"
          id="auther"
          className="outline-none text-zinc-800 ml-14 bg-zinc-200 m-auto block text-[2.5rem] rounded-md w-[80%]"
        >
          <option value="">...</option>
          {ShowAllUser}
        </select>
      </div>
    </>
  );
}
