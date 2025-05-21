import { useEffect } from "react";
import CountButtons from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import { useCountStore } from "./stores/countStore";

export default function App() {
  // const count = useCountStore((state) => state.count);

  useEffect(() => {
    // console.log("change", count);
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("new Count: ", newCount);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
