import CountDisplay from "./components/CountDisplay";
import CountButton from "./components/CountButton";
import { useCountStore } from "./stores/countStore";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (count) => {
        console.log("count changed", count);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <>
      <CountDisplay />
      <CountButton />
    </>
  );
}
