import { useEffect, useState } from "react";

export default function AutoSave() {
  const [text, setText] = useState("");

  const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("text", text);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  return (
    <>
      <h1>{text}</h1>
      <textarea
        name=""
        id=""
        value={text}
        onChange={textChangeHandler}
      ></textarea>
    </>
  );
}
