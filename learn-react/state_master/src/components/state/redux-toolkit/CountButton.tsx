import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slice/counterSlice";

export default function CountButton() {
  console.log("count button");
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement({ num: 5 }))}>-</button>
      {/* <button onClick={() => dispatch({ type: "counterSlice/decrement" })}>
        -
      </button> */}
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </>
  );
}
