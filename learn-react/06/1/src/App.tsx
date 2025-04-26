// import { useState } from "react";
// import CountDisplay from "./components/CountDisplay";
// import CountButton from "./components/CountButton";

import { useState } from "react";

// export default function App() {
// 	// const [count, setCount] = useState<number>(0); // 기본값과 상태 업데이트로 업데이트되는 타입이 똑같다면 <number>생략해도 됨.
// 	const [count, setCount] = useState(0);
// 	const [name, setName] = useState<null | string>(null); // 초기 할당되는 값을 보고 상태변수의 타입을 추론하기 때문에 이렇게 작성하면 name은 null 타입만 가능한 것이다. 그런데 밑에서 문자열로 세팅하려고 하니까 에러가 발생한다. -> 유니온 타입으로 해결한다.
// 	const increment = () => {
// 		// 상태 업데이트 함수(값)
// 		// 상태 업데이트 함수(콜백함수)
// 		// setCount(10);
// 		// setCount(count + 1);
// 		setCount((count) => count + 1);
// 		setCount((count) => count + 1);
// 	};
// 	const decrement = () => {
// 		setCount((count) => count - 1);
// 	};
// 	const reset = () => {
// 		setCount(0);
// 	};
// 	const changeName = () => {
// 		setName("홍길동");
// 	};
// 	return (
// 		<>
// 			{/* <h1 className="text-3xl underline">Count: {count}</h1>
// 			<button onClick={decrement}>감소</button>  */}
//       {/* onClick에 그냥 onClick = {() => setCount((count) => count - 1)} 이렇게 함수 적으면 안되나?
//       만약에 증가하는 함수를 child 컴포넌트에 전달하려고 하면 함수로 만들어서 함수를 전달해주는게 더 좋기 때문에 따로 빼면 좋지만,
//       그냥 컴포넌트에서만 사용한다면 onClick에서 함수로 적어도 괜찮다.
//       그런데 강사님은 되도록이면 별도의 함수로 다 뺀다. */}
// 			{/* <button onClick={reset}>0(리셋)</button>
// 			<button onClick={increment}>증가</button>
// 			<h1>name: {name}</h1>
// 			<button onClick={changeName}>이름 변경</button> */}
//       <CountDisplay count={count}></CountDisplay>
//       <CountButton decrement={decrement} reset={reset} increment={increment}></CountButton>
// 		</>
// 	);
// }

// 전치 연산
// ~하기 전에
// 후치 연산
// ~한 후에

// 제어 컨트롤러 방식
// 폼(요소) 제어
// export default function App() {
// 	const [text, setText] = useState("");
// 	const handlerInputbox = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setText(e.target.value);
// 	};

// 	const [text1, setText1] = useState("");
// 	const handlerTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
// 		setText1(e.target.value);
// 	};

// 	// e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> <- 이렇게 유니온으로 묶을 수 도 있긴 하지만 잘 사용하지 않음.
// 	// 보통은 입력 요소 하나당 상태를 하나씩 정의하기 때문이다.

// 	const resetHandler = () => {
// 		setText("");
// 	};

// 	const [fruit, setFruit] = useState("apple");
// 	const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
// 		setFruit(e.target.value);
// 	};

// 	const [checked, setChecked] = useState(false);
// 	const handlerCheckbox = () => {
// 		setChecked((checked) => !checked);
// 	};
// 	return (
// 		<>
// 			<h1>input: {text}</h1>
// 			{/* value = {text}가 있어야 리셋할때 input 요소 안에 적혀있던 값도 제거됨. */}
// 			<input type="text" value={text} onChange={handlerInputbox} maxLength={4} />
// 			{text.length >= 4 && <p>4 글자 이상은 작성할 수 없습니다.</p>}

// 			<button onClick={resetHandler}>입력값 리셋</button>

// 			<pre>{text1}</pre>
// 			<textarea value={text1} onChange={handlerTextarea}></textarea>

// 			<p>selected: {fruit}</p>
// 			<select value={fruit} onChange={handlerSelect}>
// 				<option value="apple">apple</option>
// 				<option value="banana">banana</option>
// 				<option value="orange">orange</option>
// 			</select>
// 			<input type="checkbox" checked={checked} onChange={handlerCheckbox} />
// 			{checked && <h1>선택됨</h1>}
// 		</>
// 	);
// }

// 체크박스
// 다중 선택이 전제가 됨
// 라디오
// 단일 선택이 전제가 됨
export default function App() {
	// const [selectedFruits, setSelectedFruits] = useState(false);

	// []
	// ['apple']
	// ['apple', 'banana']
	const [values, setValues] = useState<string[]>([]);
	const clickHandler = () => {
		// setValues(["apple"]);
		// setValues((values) => values.push("apple")); // 타입이 안 맞는다는 에러가 나온다.
		// 불변성 -> 지켜주면서 코딩해야 함.
		// 한 번 정의된 데이터가 변하지 않는 특징
		// 따라서 이미 있는 배열을 가공하는게 아니라 새로운 배열 껍데기를 만들어주고 새롭게 배열을 만들어줘야 한다.
		setValues((values) => [...values, "apple"]);
	};
	// const [user, setUser] = useState<{ name: string; age: number; }>({ name: "yeonseo", age: 25 });
	const [user, setUser] = useState<{ [key: string]: string | number | boolean }>({ name: "yeonseo", age: 25 });
	const clickHandler2 = () => {
		setUser((user) => ({ ...user, age: 20, gender: "female", superman: false }));
	};

	const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
	// const changeSelectHandler = () => {
	// 	setSelectedFruits((selectedFruits) => !selectedFruits);
	// };
	const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		const value = e.target.value;
		setSelectedFruits((selectedFruits) =>
			selectedFruits.includes(value) ? selectedFruits.filter((fruit) => fruit !== value) : [...selectedFruits, value]
		);
	};
	const [radio, setRadio] = useState("female");
	const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadio(e.target.value);
	};

	return (
		<>
			{/* <p>선택된 과일 : </p>
      <label htmlFor="">
				<input type="checkbox" checked={selectedFruits} onChange={changeSelectHandler} /> apple
			</label>
			<label htmlFor="">
				<input type="checkbox" checked={selectedFruits} onChange={changeSelectHandler} /> banana
			</label>
			<label htmlFor="">
				<input type="checkbox" checked={selectedFruits} onChange={changeSelectHandler} /> orange
			</label> */}
			{/* 
      여러 input이 있을 때 이렇게 작성하면 한번에 다 클릭되거나 다 해제 되어 버림.
      -> 상태를 3개 만들어도 해결 되고
      -> 상태를 배열로 관리해도 해결 가능
       */}
			<h1>{values.join(", ")}</h1>
			<button onClick={clickHandler}>추가</button>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<button onClick={clickHandler2}>변경</button>
			<p>선택된 과일 : {selectedFruits.join(", ")} </p>
			<label htmlFor="">
				<input
					type="checkbox"
					value="apple"
					checked={selectedFruits.includes("apple")}
					onChange={changeSelectHandler}
				/>{" "}
				apple
			</label>
			<label htmlFor="">
				<input
					type="checkbox"
					value="banana"
					checked={selectedFruits.includes("banana")}
					onChange={changeSelectHandler}
				/>{" "}
				banana
			</label>
			<label htmlFor="">
				<input
					type="checkbox"
					value="orange"
					checked={selectedFruits.includes("orange")}
					onChange={changeSelectHandler}
				/>{" "}
				orange
			</label>
			<hr />
			<h1>radio: {radio}</h1>
			<input type="radio" name="gender" value="male" onChange={radioChangeHandler} checked={radio === "male"} /> male
			<br />
			<input
				type="radio"
				name="gender"
				value="female"
				onChange={radioChangeHandler}
				checked={radio === "female"}
			/>{" "}
			female

      {/* defaulChecked 속성을 주거나, 기본값을 "특정값"으로 설정하고 checked 속성에 radio가 특정값이랑 같은지 비교해서 선택되게 하거나, 아예 처음에 선택된 값이 없게 하거나 */}
		</>
	);
}
