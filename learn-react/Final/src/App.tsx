import CountDisplay from "./components/CountDisplay";
import CountButtons from "./components/CountButton";
import { useCountStore } from "./stores/counterStore";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("new Count:", newCount);
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
// zustand는 새로고침하면 다시 렌더링된다.
