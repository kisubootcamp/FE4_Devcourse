import CountDisplay from "./components/CountDisplay";
import CountButton from "./components/CountButton";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const [text, setText] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [select, setSelect] = useState("b");
  const changeHandlerS = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const [checked, setChecked] = useState(false);
  const handlerCheckbox = () => {
    setChecked((checked) => !checked);
  };

  const [checkedMulti, setCheckedMulti] = useState<string[]>([]);
  const handlerCheckboxMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckedMulti((checkedMulti) =>
      checkedMulti.includes(value)
        ? checkedMulti.filter((check) => check !== value)
        : [...checkedMulti, value]
    );
  };

  const [radio, setRadio] = useState("female");
  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  return (
    <>
      <CountDisplay count={count}></CountDisplay>
      <CountButton
        increment={increment}
        decrement={decrement}
        reset={reset}
      ></CountButton>

      <h1>input: {text}</h1>
      <input type="text" value={text} onChange={changeHandler} maxLength={4} />
      {text.length >= 4 && <p>4글자 이상은 작성 할 수 없습니다.</p>}

      <h1>input: {select}</h1>
      <select value={select} onChange={changeHandlerS}>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>

      <input type="checkbox" checked={checked} onChange={handlerCheckbox} />
      {checked && <h1>선택됨</h1>}

      <div>
        ---------------------------
        <p>선택된 check : {checkedMulti.join(",")}</p>
        <label>
          <input
            type="checkbox"
            checked={checkedMulti.includes("a")}
            onChange={handlerCheckboxMulti}
            value={"a"}
          />
          a
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedMulti.includes("b")}
            onChange={handlerCheckboxMulti}
            value={"b"}
          />
          b
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkedMulti.includes("c")}
            onChange={handlerCheckboxMulti}
            value={"c"}
          />
          c
        </label>
      </div>

      <div>
        -------------------------------------
        <h1>radio : {radio}</h1>
        <label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            checked={radio === "male"}
            onChange={radioHandler}
          />
          male{" "}
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            checked={radio === "female"}
            onChange={radioHandler}
          />
          female
        </label>
      </div>
    </>
  );
}

// export default function App() {
//   const [count, setCount] = useState<number>(0);
//   const [name, setName] = useState<string | null>(null);

//   const increment = () => {
//     //상태업데이트함수(값)
//     //상태업데이트함수(콜백함수)
//     // setCount(10);
//     setCount((count) => count + 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };
//   const decrement = () => {
//     setCount((count) => count - 1);
//   };

//   const changeName = () => {
//     setName("홍길동");
//   };

//   return (
//     <>
//       <h1 className="text-3xl underline mb-10">Count : {count}</h1>
//       <button onClick={decrement}>감소</button>
//       <button onClick={reset}>0</button>
//       <button onClick={increment}>증가</button>

//       <h1>name: {name}</h1>
//       <button onClick={changeName}>이름변경</button>
//     </>
//   );
// }
