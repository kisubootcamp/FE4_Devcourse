import { useState } from "react";

// 불변성 -> 지켜주면서 코딩해야 함
// 한번 정의된 데이터가 변하지 않는 특징
export default function App() {
  const [values, setValues] = useState<string[]>([]);
  const clickHandler = () => {
    // values.push("apple"); //  이 방법은 안됨
    setValues((values) => [...values, "apple"]);
  };

  const [user, setUser] = useState<{
    [key: string]: string | number | boolean;
  }>({
    name: "sucoding",
    age: 20,
    handsome: false,
  });
  const clickHandler2 = () => {
    // setUser((user) => ({ ...user, age: 50, handsome: true }));
    setUser((user) => ({ ...user, gender: "male", superman: "haha" }));
  };

  return (
    <>
      <h1>{values.join(",")}</h1>
      <button onClick={clickHandler}>추가</button>

      <h1>{JSON.stringify(user, null, 2)}</h1>
      <button onClick={clickHandler2}>추가</button>
    </>
  );
}
