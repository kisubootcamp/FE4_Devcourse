import { useState } from "react";
import b_off from "../images/b_off.png";
import b_on from "../images/b_on.png";

export default function Lamp() {
    const [lamp, setLamp] = useState(false);
    const lampToggleHandler = () => {
        setLamp((lamp) => !lamp);
    };
    return (
        <>
            <img
                src={lamp ? b_on : b_off}
                alt={lamp ? "전구 on" : "전구 off"}
                onClick={lampToggleHandler}
            ></img>
        </>
    );
}
