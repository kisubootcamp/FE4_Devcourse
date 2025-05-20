import { useState } from "react";

export default function App() {
  const [radio, setRadio] = useState("female");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <h1>radio: {radio}</h1>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={radio === "male"}
        onChange={radioChangeHandler}
      />{" "}
      male
      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        checked={radio === "female"}
        onChange={radioChangeHandler}
      />{" "}
      female
    </>
  );
}
//
//NOTE
// import { useState } from "react";
// //불변성
// // 한번 정의된 데이터가 변하지 않는 특징
// // 리액트는 데이터를 지켜주면서 코딩해야함
// // 직접 조작 불가능 (array.push 등은 불변성 원칙에 위반, 배열을 직접적으로 바꾸기 때문)
// // 새로운 배열을 만들어서(복사) 새로운 값을 추가
// export default function App() {
//   const [values, setValues] = useState<string[]>([]);
//   const clickHandler = () => {
//     setValues((values) => [...values, "apple"]);
//   };
//   const [user, setUser] = useState<{
//     name: string;
//     age: number;
//     handsome: boolean;
//   }>({
//     name: "sucoding",
//     age: 20,
//     handsome: false,
//   });
//   const clickHandler2 = () => {
//     setUser((user) => ({ ...user, age: 50, handsome: true }));
//   };
//   return (
//     <>
//       <h1>{values.join(",")}</h1>
//       <button onClick={clickHandler}>추가</button>

//       <h1>{JSON.stringify(user, null, 2)}</h1>
//       <button onClick={clickHandler2}>추가</button>
//     </>
//   );
// }

//NOTE
//어려운예제
// import { useState } from "react";

// export default function App() {
//   //[]
//   //['apple']
//   //['apple', 'banana']
//   // array.map() 과 array.filter()는 항상 새로운 배열을 만들어서 반환해줌
//   const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
//   const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.value);
//     const value = e.target.value;
//     setSelectedFruits((selectedFruits) =>
//       selectedFruits.includes(value)
//         ? selectedFruits.filter((fruit) => fruit !== value)
//         : [...selectedFruits, value]
//     );
//   };
//   return (
//     <>
//       <p>선택된 과일:{selectedFruits.join(",")}</p>
//       <label style={{ display: "block" }}>
//         <input
//           type="checkbox"
//           value="apple"
//           checked={selectedFruits.includes("apple")}
//           onChange={changeSelectHandler}
//         />
//         apple
//       </label>
//       <label style={{ display: "block" }}>
//         <input
//           type="checkbox"
//           value="banana"
//           checked={selectedFruits.includes("banana")}
//           onChange={changeSelectHandler}
//         />
//         banana
//       </label>
//       <label style={{ display: "block" }}>
//         <input
//           type="checkbox"
//           value="orange"
//           checked={selectedFruits.includes("orange")}
//           onChange={changeSelectHandler}
//         />
//         orange
//       </label>
//     </>
//   );
// }

//
//NOTE
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

//
// NOTE
// import { useState } from "react";

// //제어 컨트롤러
// // 폼(요소) 제어
// export default function App() {
//   const [text, setText] = useState("");
//   const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setText(e.target.value);
//   };

//   return (
//     <>
//       <pre>input : {text}</pre>
//       <textarea value={text} onChange={changeHandler} />

//     </>
//   );
// }
//NOTE
// import { useState } from "react";

// //제어 컨트롤러
// // 폼(요소) 제어
// export default function App() {
//   const [text, setText] = useState("");
//   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };
//   const resetHandler = () => {
//     //
//     setText("");
//   };
//   return (
//     <>
//       <h1>input : {text}</h1>
//       <input type="text" value={text} onChange={changeHandler} />
//       {text.length >= 4 && <p>4글자 이상은 작성할 수 없습니다.</p>}

//       <button onClick={resetHandler}>입력값 리셋</button>
//     </>
//     //value 는 꼭 써주는 것이 좋음, 초기화하는 장치를 만들었을 때 사용
//   );
// }
//
//NOTE
// import CountDisplay from "./components/CountDisplay";
// import CountButton from "./components/CountButton";
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount((count) => count + 1);
//   const decrement = () => setCount((count) => count - 1);
//   const reset = () => setCount(0);
//   return (
//     <>
//       <CountDisplay count={count} />
//       <CountButton increment={increment} decrement={decrement} reset={reset} />
//     </>
//   );
// }

//NOTE
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState<number>(0);
//   const increment = () => {
//     // 상태업데이트함수(콜백함수)
//     setCount((count) => count + 1);
//   };
//   const decresecnt = () => {
//     setCount((count) => count - 1);
//   };

//   const reset = () => {
//     // setCount((count) => (count = 0));
//     setCount(0);
//   };

//   return (
//     <>
//       <h1 className="text-3xl underline">Count: {count}</h1>
//       <button onClick={increment}>증가</button>
//       <button onClick={decresecnt}>감소</button>
//       <button onClick={reset}>리셋</button>
//     </>
//   );
// }
// NOTE
// export default function App() {
//   const [count, setCount] = useState<number>(0);
//   const [name, setName] = useState<null | string>(null);
//   const increment = () => {
//     // 상태업데이트함수(값)
//     // setCount(10);
//     // 상태업데이트함수(콜백함수)
//     setCount((count) => count + 1);

//     //이것도 잘 동작하는 것처럼 보이나 일부 상황에서는 count 가 최신값을 반영하지 못함 (1%가능성..좋지않음)
//     // setCount(count + 1);
//   };
//   const changeName = () => {
//     setName("홍길동");
//   };
//   return (
//     <>
//       <h1 className="text-3xl underline">Count: {count}</h1>
//       <button onClick={increment}>increase</button>
//       <h1>name: {name}</h1>
//       <button onClick={changeName}>이름변경</button>
//     </>
//   );
// }
