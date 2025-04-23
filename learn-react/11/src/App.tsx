// import { useState } from "react";

// import CountDisplay from "./components/CountDisplay";
// import CountButton from "./components/CountButton";

// export default function App() {
//   const [count, setCount] = useState(0);
//   // const [name, setName] = useState<null | string>(null);
//   const increment = () => {
//     // 상태업데이트함수(값) -> 제일 최근 상태값이 필요 없을때
//     setCount(count + 1);
//     // 상태업데이트함수(콜백함수) -> 제일 최근 상태값이 필요할때 콜백함수의 매개변수로 제일 최근 상태값이 전달해서 진행
//     setCount((prevCount) => prevCount + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };
//   return (
//     <>
//       <CountDisplay count={count} />
//       <CountButton increment={increment} decrement={decrement} reset={reset} />
//       {/* <h1>Name: {name}</h1> */}
//       {/* <button onClick={() => setName("John")}>이름 설정</button> */}
//     </>
//   );
// }
// export default function App() {
//   // 제어 컨트롤러 방식
//   // 폼(요소) 제어
//   const [text, setText] = useState("");
//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setText(e.target.value);
//   };
//   return (
//     <>
//       {/* <input
//         type="text"
//         value={text}
//         className="border-2 border-gray-300 rounded-md p-2"
//         onChange={handleChange}
//       /> */}
//       <textarea
//         name=""
//         id=""
//         value={text}
//         onChange={handleChange}
//         className="border-2 border-gray-300 rounded-md p-2"
//       ></textarea>
//     </>
//   );
// }
// import { useState } from "react";

// export default function App() {
//   const [input, setInput] = useState("orange");
//   const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setInput(e.target.value);
//   };
//   const [checked, setChecked] = useState(false);
//   const handlerCheckbox = () => {
//     setChecked((checked) => !checked);
//   };
//   return (
//     <>
//       <p>selected: {input}</p>
//       <select value={input} onChange={handlerSelect}>
//         <option value="apple">apple</option>
//         <option value="banana">banana</option>
//         <option value="orange">orange</option>
//       </select>
//       <input type="checkbox" checked={checked} onChange={handlerCheckbox} />
//       {checked && <h1>선택됨</h1>}
//     </>
//   );
// }

import { useState } from "react";

export default function App() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedFruits((prev) =>
      prev.includes(value)
        ? prev.filter((fruit) => fruit !== value)
        : [...prev, value]
    );
  };

  const [gender, setGender] = useState<string>("female");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <>
      <p>선택된 과일: {selectedFruits.join(", ")}</p>
      <label htmlFor="apple">
        <input
          type="checkbox"
          id="apple"
          checked={selectedFruits.includes("apple")}
          value="apple"
          onChange={handleChange}
        />
        apple
      </label>
      <label htmlFor="banana">
        <input
          type="checkbox"
          id="banana"
          checked={selectedFruits.includes("banana")}
          value="banana"
          onChange={handleChange}
        />
        banana
      </label>
      <label htmlFor="orange">
        <input
          type="checkbox"
          id="orange"
          checked={selectedFruits.includes("orange")}
          value="orange"
          onChange={handleChange}
        />
        orange
      </label>
      <hr />
      <p>선택된 성별: {gender}</p>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={handleRadioChange}
      />
      male
      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={handleRadioChange}
      />{" "}
      female
    </>
  );
}
