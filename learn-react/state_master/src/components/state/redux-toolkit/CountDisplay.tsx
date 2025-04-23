import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
// state: 중앙 selector의 slice객체
