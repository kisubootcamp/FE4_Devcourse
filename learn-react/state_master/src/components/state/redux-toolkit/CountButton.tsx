import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slice/counterSlice";

export default function CountButton() {
  console.log("Count Button");
  const dispatch = useDispatch();
  return (
    <>
      {/* 이렇게 써도 되지만 불편해서 export하고 이름만 써줌 */}
      {/* <button onClick={() => dispatch({ type: "counterSlice/decrement" })}>
        -
      </button> */}
      <button onClick={() => dispatch(decrement({ num: 3 }))}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
    </>
  );
}
