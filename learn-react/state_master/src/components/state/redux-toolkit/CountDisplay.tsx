import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function CountDisplay() {
  // state.counter -> initialState까지만 접근함.
  // state.counter.value -> initialState의 value까지 접근할 수 있음.
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
