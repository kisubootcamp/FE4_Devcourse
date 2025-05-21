//최적화(메모이제이션 안해도 필요없는 곳에서는 리렌더링하지 않음)
import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slice/counterSlice";
export default function CountButton() {
  console.log("count button");
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement({ num: 5 }))}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </>
  );
}
