// import { useState } from "react";

import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState<number>(0);
//   const [name, setName] = useState<null | string>(null);
//   const increment = () => {
//     // 상태 업데이트 함수(값)
//     // setCount(10);
//     // setCount(count + 1)
//     // 상태 업데이트 함수(콜백함수)
//     setCount((count) => count + 1); // 현재 값을 참조한 새로운 값을 계산할 때 사용
//   };
//   const changeName = () => {
//     setName("이름");
//   };
//   const decrement = () => {
//     setCount((count) => count - 1);
//   };
//   const zero = () => {
//     setCount(0);
//   };
//   return (
//     <>
//       <h1 className="text-3xl underline">count: {count}</h1>
//       <button onClick={increment}>증가</button>
//       <button onClick={decrement}>감소</button>
//       <button onClick={zero}>0</button>
//       <h1>name: {name}</h1>
//       <button onClick={changeName}>이름</button>
//     </>
//   );
// }

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
//       <CountButton />
//     </>
//   );
// }
// 상태 끌어올리기
// 공통의 부모 컴포넌트에서 상태를 정의하고 그 상태를 활용

// props drilling

// import { useState } from "react";

// export default function App() {
//   const [text, setText] = useState("");
//   const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setText(e.target.value);
//   }; // 여기까지를 한 세트로 본다. 따로 운용을 하고 싶으면 한 세트를 또 만들어야 함.
//   const resetHandler = () => {
//     setText("");
//   };
//   return (
//     <>
//       <h1>input: {text}</h1>
//       <textarea value={text} onChange={changeHandler}></textarea>
//       {/* <input type="text" value={text} onChange={changeHandler} maxLength={4} /> event: HTMLInputElement
//       {text.length >= 4 && <p>4글자 이상은 작성할 수 없습니다</p>} */}

//       <button onClick={resetHandler}>입력값 리셋</button>
//     </>
//   );
// }

// export default function App() {
//   const [input, setInput] = useState("apple");
//   const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setInput(e.target.value);
//   };
//   const [checked, setChecked] = useState(true);
//   const handlerCheckBox = () => {
//     setChecked((checked) => !checked);
//   };
//   return (
//     <>
//       <p>selected: {input}</p>
//       <select value={input} onChange={changeHandler}>
//         <option value="apple">apple</option>
//         <option value="banana">banana</option>
//         <option value="orange">orange</option>
//       </select>
//       <input type="checkbox" checked={checked} onChange={handlerCheckBox} />
//       {checked && <h1>선택됨</h1>}
//     </>
//   );
// }

// 체크박스
// 다중선택
// 라디오버튼
// 단일선택

export default function App() {
  // const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  // const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setSelectedFruits((selectedFruits) =>
  //     selectedFruits.includes(value)
  //       ? selectedFruits.filter((fruit) => fruit !== value)
  //       : [...selectedFruits, value]
  //   );
  // };

  const [radio, setRadio] = useState("male");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      {/* <p>선택된 과일: {selectedFruits.join(",")}</p>
      <label htmlFor="">
        <input
          type="checkbox"
          value="apple"
          checked={selectedFruits.includes("apple")}
          onChange={changeSelectHandler}
        />
        apple
        <input
          type="checkbox"
          value="banana"
          checked={selectedFruits.includes("banana")}
          onChange={changeSelectHandler}
        />
        banana
        <input
          type="checkbox"
          value="orange"
          checked={selectedFruits.includes("orange")}
          onChange={changeSelectHandler}
        />
        orange
      </label> */}
      <hr />
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
        onChange={radioChangeHandler}
      />
      female
    </>
  );
}

// 불변성
// 한번 정의된 데이터가 변하지 않는 특징
// 리액트는 불변성을 지키면서 코딩해야 함. <- 배열이나 객체에 해당
// export default function App() {
//   const [values, setValues] = useState<string[]>([]);
//   const clickHandler = () => {
//     // 상태 업데이트는 push를 사용 불가 <- 불변성 원칙에 위배
//     // setValues(["apple"]);
//     setValues((values) => [...values, "apple"]);
//     // 기존 배열 전개(스프레드 연산자를 사용한 배열 복사)
//   };
//   const [user, setUser] = useState<{
//     name: string;
//     age: number;
//     wake: boolean;
//   }>({
//     name: "Lee",
//     age: 29,
//     wake: false,
//   });
//   const clickHandler2 = () => {
//     setUser((user) => ({ ...user, age: 20, wake: true })); // 괄호에 주의
//   };
//   return (
//     <>
//       <h1>{values.join(", ")}</h1>
//       <button onClick={clickHandler}>추가</button>

//       <pre>{JSON.stringify(user, null, 2)}</pre>
//       <button onClick={clickHandler2}>추가</button>
//     </>
//   );
// }

// 배열 / 객체 참조자료형은 데이터가 존재하고 있는 주소값이 변수에 들어간다.

// const [count, setCount] = useState(0)
// setCount(10); -> 불변성을 지킴
// count = 10 -> 불변성을 지키지 않음

// 객체 자체를 건드리면 할당된 주소값은 바뀌지 않고 그 내용만 바뀌기때문에 리액트가 알아차릴 수 없다.
