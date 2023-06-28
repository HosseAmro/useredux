import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function ShowAuther(p) {
  const allUser = useSelector((s) => s.posts.user);
  const Auther = allUser.find((user) => user.nameUser === p.auther);

  return (
    <>
      <div className="flex items-end ">
        <AiOutlineUser size="20" className="" />
        <span className="text-zinc-200 text-[1.5rem] group-hover:text-zinc-700">
          {Auther ? `${Auther.nameUser}` : `Unknown auther`}
        </span>
      </div>
    </>
  );
}
