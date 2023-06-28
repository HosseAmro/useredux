import { useDispatch } from "react-redux";
import postApi from "../db/PostDb";
import { postsAC } from "../store/Slices/PostsSlice";

const allReaction = {
  wow: "😲",
  like: "👍",
  angry: "😡",
  sad: "😭",
};
export default function ReactionBut(p) {
  const dispatch = useDispatch();
  const reaction = Object.entries(allReaction).map(([name1, emoji]) => {
    async function reactionAdd() {
      const postForDb = {
        ...p.post,
        reaction: { ...p.post.reaction, [name1]: p.post.reaction[name1] + 1 },
      };
      const postForRedux = await postApi.update(postForDb);
      dispatch(postsAC.replase(postForRedux));
    }

    return (
      <button
        key={name1}
        type="butten"
        onClick={reactionAdd}
        className="text-[1.5rem]"
      >
        {emoji}
        {p.post.reaction[name1]}
      </button>
    );
  });

  return (
    <div className="flex justify-center gap-10 absolute bottom-1 left-6">
      {reaction}
    </div>
  );
}
