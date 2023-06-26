import { useSelector, useDispatch } from "react-redux";
import { counterAC, count } from "../store/Slices/CounterSlice";
import { useState } from "react";

export default function Counter() {
  const [Add, setAdd] = useState(0);
  const add = Number(Add) || 0;

  const value = useSelector(count);
  const dispatch = useDispatch();
  function Change(n) {
    dispatch(counterAC.Change(n)); 
  }
  function Rest() {
    dispatch(counterAC.Reset());
    setAdd(0);
  }
  return (
    <>
      <main className=" mt-7 m-auto w-[20rem] p-2 text-center rounded-3xl border-4 border-zinc-600     ">
        <h2 className="text-3xl mt-3">Counter</h2>
        <h1 className="text-6xl my-14">{value}</h1>

        <button
          className="w-[4rem] text-3xl mx-5 p-1  rounded-lg border-2 border-black hover:bg-zinc-300"
          onClick={() => Change(-1)}
        >
          -
        </button>
        <button
          className="w-[4rem] text-3xl mx-5 p-1  rounded-lg border-2 border-black hover:bg-zinc-300"
          onClick={() => Change(+1)}
        >
          +
        </button>
        <input
          className="w-[10.5rem] py-2 text-4xl mx-8  mt-4  rounded-lg border-2 border-black outline-none  text-center hover:bg-zinc-300 "
          type="text"
          inputMode="numeric"
          value={Add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button
          className="w-[4.5rem] text-2xl my-4  p-1 mx-3  rounded-lg border-2 border-black hover:bg-zinc-300"
          onClick={() => Change(add)}
        >
          add
        </button>
        <button
          className="w-[4.5rem] text-2xl my-4 mx-3 p-1  rounded-lg border-2 border-black hover:bg-zinc-300"
          onClick={Rest}
        >
          rest
        </button>
      </main>
    </>
  );
}
