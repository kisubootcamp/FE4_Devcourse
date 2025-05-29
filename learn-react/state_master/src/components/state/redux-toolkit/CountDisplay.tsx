import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
