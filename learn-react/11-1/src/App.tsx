import { useState } from "react";
import Login from "./components/Login";
import ColorPicker from "./components/ColorPicker";
import Light from "./components/Light";
// import Signup from "./components/Signup";

export default function App() {
  const [mode, setMode] = useState<"login" | "color" | "light">("login");
  return (
    <>
      <div className="flex justify-center items-center gap-4 m-2">
        <button
          className="bg-blue-500 text-white p-4 rounded-md cursor-pointer"
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          className="bg-red-500 text-white p-4 rounded-md cursor-pointer"
          onClick={() => setMode("color")}
        >
          Color
        </button>
        <button
          className="bg-green-500 text-white p-4 rounded-md cursor-pointer"
          onClick={() => setMode("light")}
        >
          Light
        </button>
      </div>
      {mode === "login" && <Login />}
      {mode === "color" && <ColorPicker />}
      {mode === "light" && <Light />}
      {/* <Signup /> */}
    </>
  );
}
