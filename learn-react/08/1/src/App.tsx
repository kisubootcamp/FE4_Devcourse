import { useEffect } from "react";
import CountButtons from "./components/CountButtons";
import CountDisplay from "./components/CountDisplay";
import { useCountStore } from "./stores/countStores";

export default function App() {
  //const count = useCountStore((state) => state.count);
  useEffect(() => {
    const unsubscirbe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("neww Count :", newCount);
      }
    );

    return () => {
      unsubscirbe();
    };
  }, []);
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
