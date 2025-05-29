import { useEffect } from "react";
import CountButtons from "./components/CountButtons";
import CountDisplay from "./components/CountDisplay";
import { useCountStore } from "./stores/countStore";

export default function App() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("new Count :", newCount);
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
