import { useState, useEffect } from "react";

export default function AutoSave() {
    const [text, setText] = useState("");
    const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const saveText = localStorage.getItem("saveText");
        if (saveText) {
            setText(saveText);
        }
    }, []);

    useEffect(() => {
        const interval = setTimeout(() => {
            localStorage.setItem("saveText", text);
        }, 1000);

        return () => {
            clearTimeout(interval);
        };
    }, [text]);

    return (
        <>
            <h1>Text: {text}</h1>
            <textarea value={text} onChange={textChangeHandler}></textarea>
        </>
    );
}
