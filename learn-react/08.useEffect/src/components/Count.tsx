import { useEffect, useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Count Mounted");

    return () => {
      console.log("Count UnMounted");
    };
  }, []);
  useEffect(() => {
    console.log("count change:" + count);
    console.log("name change:" + name);
  }, [count, name]);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("fxxx React!")}>이름 변경</button>
    </>
  );
}
