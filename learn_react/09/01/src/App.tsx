import { useState } from "react";

// 불변성 -> 지켜주면서 코딩해야 함
// 한 번 정의된 데이터가 변하지 않는 특징
export default function App() {
  const [values, setValues] = useState<string[]>([]);
  const clickHandler = () => {
    setValues((values) => [...values, "apple"]);
  };
  const [user, setUser] = useState<{
    name: string;
    age: number;
    handsome: boolean;
    // 객체 추가
    // [key : string] : string|number|boolean
  }>({
    name: "sucoding",
    age: 20,
    handsome: false,
  });
  const clickHandler2 = () => {
    // 객체 변경
    setUser((user) => ({ ...user, age: 50, handsome: true }));
    // 객체 추가
    // setUser((user) => ({ ...user, gender: "male"}));
  };
  return (
    <>
      <h1>{values.join(",")}</h1>
      <button onClick={clickHandler}>추가</button>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={clickHandler2}>추가</button>
    </>
  );
}
