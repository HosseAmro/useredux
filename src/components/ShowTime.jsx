import { BiTime } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";

export default function ShowTime(p) {
  
  const date = formatDistanceToNow(p.date);

  return (
    <>
      <div className="flex items-end">
        <BiTime size="20" />
        <span className="text-zinc-200 text-[1.5rem] group-hover:text-zinc-700">
          {date}
        </span>
      </div>
    </>
  );
}
