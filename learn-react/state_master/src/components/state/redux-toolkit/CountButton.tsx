import { useDispatch } from "react-redux";
import { increment, reset } from "../../../redux/slice/counterSlice";

export default function CountButton() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: "counterSlice/decrement" })}>
        -
      </button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
