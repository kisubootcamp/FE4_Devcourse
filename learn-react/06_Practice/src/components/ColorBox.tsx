import { useState } from "react";

export default function ColorBox() {
    const [color, setColor] = useState("");
    const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    // 이 문제는 테일윈드로 풀 수 없다!
    return (
        <>
            <div className="item-middle">
                <div className="flex flex-col">
                    <div
                        className="w-40 h-40 border border-slate-500"
                        style={{ backgroundColor: color }}
                    ></div>
                    <input
                        type="text"
                        value={color}
                        onChange={changeColor}
                        className="border border-slate-500 w-40 mt-2"
                    />
                </div>
            </div>
        </>
    );
}
