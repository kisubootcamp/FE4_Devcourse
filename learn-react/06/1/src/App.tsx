// import CountButton from "./css/components/CountButton";
// import CountDisplay from "./css/components/CountDisplay";
// import { useState } from "react";

import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   // const [name, setName] = useState<null | string>(null);
//   const increment = () => {
//     //상태업데이트함수(값)
//     //상태업데이트함수(콜백함수)
//     //setCount(10);
//     //setCount(count+1);
//     setCount((count) => count + 1);
//   };
//   const decrement = () => {
//     setCount((count) => count - 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };
//   return (
//     <>
//       <CountDisplay count={count} />
//       <CountButton increment={increment} decrement={decrement} reset={reset} />
//       {/* <button onClick={()=>{setCount((count)=>count-1);}>감소</button>도 가능} */}
//     </>
//   );
// }
// import { useState } from "react";
// //제어 컨트롤러 방식
// //폼(요소) 제어
// export default function App() {
//   const [text, setText] = useState("");

//   const changeHandler = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
//     setText(e.target.value);
//   };
//   //한세트당 한요소 제어가능
//   return (
//     <>
//     <h1>input:{text}</h1>
//       <input type="text" value={text} onChange={changeHandler} maxLength={4} />
//       {text.length===4&&<p>4글자 이상은 작성할 수 없습니다.</p>}
//       {/* onChange={(e)=>changeHandler(e)}로두면 타입 확인가능 (이벤트 객체의 타입 보여줌)*/}

//     </>
//   );
//}
// import { useState } from "react";
// export default function App () {
//   const [input, setInput]=useState("");
//   const handlerSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
//     setInput(e.target.value);
//   };
//   const [checked,setChecked]=useState(true);

//   const handlerCheckbox=()=>{
//     setChecked((checked)=>!checked);
//   };
//     return (
//     <>
//       <p>selected:{input}</p>
//       <select value={input} onChange={handlerSelect}>
//         <option value="apple">apple</option>
//         <option value="banana">banana</option>
//         <option value="orange">orange</option>
//       </select>
//       <input type="checkbox" checked={checked} onChange={handlerCheckbox}/>
//       {checked&&<h1>선택됨</h1>}
//     </>
//   );
// }

//체크박스
//다중 선텍이 전제가 됨

//라디오
//단일 선택이 전제가 됨
export default function App() {
  //[]
  //['apple']
  //['apple','banana']
  //['apple','orange']
  //map,filter => 조건을 만족하는 새로운 배열을 생성
  //(사용이유: set함수와 함께 사용되는 값은 값자체가 불변=>새로운 배열 만들어서 이 값을 포함시켜 업데이트해야함)

  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //value.push(["apple"])로는 value에 apple을 추가할순없음

    setSelectedFruits(
      (selectedFruits) =>
        selectedFruits.includes(value)
          ? selectedFruits.filter((fruit) => fruit !== value) //value가 이미 있다면 value를 제외시킨 새로운 배열 생성하여 리턴
          : [...selectedFruits, value] //value가 없다면 기존 값에 value추가
    );
    const [radio, setRadio] = useState("female");
    const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRadio(e.target.value);
    };
  };
  return (
    <>
      <p>선택된 과일:{selectedFruits.join(",")}</p>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"apple"} //왜 중괄호로 묶니? 자바스크립트 표현식(문자열)이라서
          checked={selectedFruits.includes("apple")}
          onChange={changeSelectHandler}
        />{" "}
        apple
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"banana"}
          checked={selectedFruits.includes("banana")}
          onChange={changeSelectHandler}
        />{" "}
        banana
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          value={"orange"}
          checked={selectedFruits.includes("orange")}
          onChange={changeSelectHandler}
        />{" "}
        orange
      </label>
      <hr />
      <input
        type="radio"
        name="gender"
        value="male"
        checked={radio === "male"}
        onChange={radioChangeHandler}
      />
      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        checked={radio === "female"}
        onChange={radioChangeHandler}
      />
      {/* radio는 같은 name의 태그들을 묶어 사용(그 태그들 중 하나만 선택가능하게 설정됨) */}
    </>
  );
}

//불변성->지켜주면서 코딩해야함
//한번 정의된 데이터가 변하지 않는 특징
// export default function App() {
//   const [values, setValues] = useState<string[]>([]);//제너릭 옆에 ()에는 초기값 작성
//   const clickHandler = () => {
//     //setValues(["apple"]);
//     setValues((values)=>[...values,"apple"]);
//   };
//   const [user,setUser]=useState<{name:string ; age:number}>({
//     name:"sucoding",
//     age:20,
//   });
//   const clickHandler2=()=>{
//     setUser((user)=>({...user, age:50})); //setUser((user)=>{return{...user};})의 축약
//     //값 수정 가능 이미있는 값이면 덮어쓰고, 없는값이면 추가
//   }
//   return (
//     <>
//       <h1>{values.join(",")}</h1>
//       <button onClick={clickHandler}>추가</button>

//       <pre>{JSON.stringify(user,null,2)}</pre>
//       <button onClick={clickHandler2}>추가</button>
//     </>
//   );
// }
