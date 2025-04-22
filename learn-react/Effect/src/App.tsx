import { useState } from "react";
import Count from "./components/Count";
import WindowSize from "./components/WindowSize";
import TestApiCall from "./components/TestApiCall";

export default function App() {
  const [mode, setMode] = useState("");

  const handleClickSetMode = (mode: string) => {
    setMode(mode);
  };

  return (
    <>
      <div className="flex gap-2 m-2 justify-center">
        <button
          className="w-[100px] h-[44px] text-white bg-blue-500 rounded-lg cursor-pointer"
          onClick={() => handleClickSetMode("counter")}
        >
          Counter
        </button>
        <button
          className="w-[100px] h-[44px] text-white bg-red-500 rounded-lg cursor-pointer"
          onClick={() => handleClickSetMode("windowSize")}
        >
          WindowSize
        </button>
        <button
          className="w-[100px] h-[44px] text-white bg-green-500 rounded-lg cursor-pointer"
          onClick={() => handleClickSetMode("testApiCall")}
        >
          TestApiCall
        </button>
        <button
          className="w-[100px] h-[44px] text-white bg-yellow-500 rounded-lg cursor-pointer"
          onClick={() => handleClickSetMode("stopwatch")}
        >
          Stopwatch
        </button>
      </div>
      {mode === "counter" && <Count />}
      {mode === "windowSize" && <WindowSize />}
      {mode === "testApiCall" && <TestApiCall />}
    </>
  );
}
