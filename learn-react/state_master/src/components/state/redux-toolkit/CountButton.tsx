import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/slice/counterSlice";

export default function CountButton() {
  console.log("count button");
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
// redux toolkit은 리렌더링을 알아서 관리
