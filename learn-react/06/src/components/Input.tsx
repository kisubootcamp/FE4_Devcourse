import { useState } from "react";

export default function Input() {
    const [text, setText] = useState<string>("");
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <h1>Input: {text}</h1>
            <input
                type="text"
                value={text}
                onChange={changeHandler}
                maxLength={10}
                placeholder="입력해주세요."
            ></input>
            {text.length >= 10 && <p>10글자 이상은 작성할 수 없습니다.</p>}
            <button
                onClick={() => {
                    setText("");
                }}
            >
                reset
            </button>
            <hr />
        </>
    );
}
