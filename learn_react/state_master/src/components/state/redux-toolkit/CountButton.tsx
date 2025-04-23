import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slice/CounterSlice";
export default function CountButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </>
  );
}
