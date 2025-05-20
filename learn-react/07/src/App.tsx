import State from "./components/State";
import Reducer from "./components/Reducer";
import Effect from "./components/Effect";
import Timer from "./components/Timer";
import AutoSave from "./components/AutoSave";
import { useState } from "react";

export default function App() {
    // useId도 리액트 훅!
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <State />
            <Reducer />
            {isShow && <Effect />}
            <button onClick={() => setIsShow((isShow) => !isShow)}>
                toggle
            </button>
            <Timer />
            <AutoSave />
        </>
    );
}
