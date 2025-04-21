import { useState } from "react";
import Lamp from "./components/Lamp";
import ColorBox from "./components/ColorBox";
import Login from "./components/Login";

export default function App() {
    const [display] = useState<"lamp" | "colorbox" | "login">("login");
    return (
        <>
            {display === "lamp" && <Lamp />}
            {display === "colorbox" && <ColorBox />}
            {display === "login" && <Login />}
        </>
    );
}
