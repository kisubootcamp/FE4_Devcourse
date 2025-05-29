import { useEffect } from "react";
import CountGroup from "./CountGroup";
import { useCounterStore } from "../../../stores/counterStore";

export default function Count() {
  useEffect(() => {
    const subscribe = useCounterStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("Count has changed", newCount);
      }
    );

    return () => {
      subscribe();
    };
  }, []);
  return (
    <>
      <CountGroup />
    </>
  );
}
