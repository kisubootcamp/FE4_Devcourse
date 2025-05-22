// export default function User(props: {
// 	message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	user: { id: number; name: string };
// }) {
// 	console.log(props);
// 	return (
// 		<>
// 			<h1>{props.message}</h1>
// 			<h2>{props.count}</h2>
// 			<h3>{props.isVisible.toString()}</h3>
// 			<h4>{JSON.stringify(props.tags, null, 2)}</h4>
// 			<h1>{JSON.stringify(props.user, null, 2)}</h1>
// 		</>
// 	);
// }

// export default function User({
// 	message,
// 	count,
// 	isVisible,
// 	tags,
// 	user,
// }: {
// 	message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	user: { id: number; name: string };
// }) {
// 	return (
// 		<>
// 			<h1>{message}</h1>
// 			<h2>{count}</h2>
// 			<h3>{isVisible.toString()}</h3>
// 			<h4>{JSON.stringify(tags, null, 2)}</h4>
// 			<h1>{JSON.stringify(user, null, 2)}</h1>
// 		</>
// 	);
// }

// interface여도 되는데 위처럼 적는게 더 코드적으로 깔끔할 수 있다.
// interface는 어떤 속성이 들어가 있는지 확인할 수 없는데, type쓰면 대략적인건 볼 수 있다.
// interface UserProps {
//   message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	user: { id: number; name: string };
// }

// type User = {
//   id: number;
//   name: string;
// }

// type UserProps = {
//   message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	// user: { id: number; name: string };
// 	user: User; // 이렇게 쪼개서 적을 수도 있다.
// }

// ***Props
// UserProps
// SettingsProps
// 이런식으로 interface나 type 이름 정해주는게 대부분이다.

// interface User {
//   id: number;
//   name: string;
// }

// interface UserProps {
//   message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	// user: { id: number; name: string };
// 	user: User; // 이렇게 쪼개서 적을 수도 있다.
// }

// export default function User({ message, count, isVisible, tags, user }: UserProps) {
// 	return (
// 		<>
// 			<h1>{message}</h1>
// 			<h2>{count}</h2>
// 			<h3>{isVisible.toString()}</h3>
// 			<h4>{JSON.stringify(tags, null, 2)}</h4>
// 			<h1>{JSON.stringify(user, null, 2)}</h1>
// 		</>
// 	);
// }

// export default function User({
// 	message,
// 	count,
// 	isVisible,
// 	tags,
// 	user,
// }: {
// 	message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	user: { id: number; name: string };
// }) {
// const myFunction = (message: string) => {
//   // alert("click");
//   alert(message);
// };
// 	return (
// 		<>
// 			<h1>{message}</h1>
// 			<h2>{count}</h2>
// 			<h3>{isVisible.toString()}</h3>
// 			<h4>{JSON.stringify(tags, null, 2)}</h4>
// 			<h1>{JSON.stringify(user, null, 2)}</h1>
// 			<button onClick={myFunction()}>클릭</button>
// 		</>
// 	);
// }

// export default function User({
// 	message,
// 	count,
// 	isVisible,
// 	tags,
// 	user,
// }: {
// 	message: string;
// 	count: number;
// 	isVisible: boolean;
// 	tags: string[];
// 	user: { id: number; name: string };
// }) {
//   const myFunction = (message: string) => {
//     // alert("click");
//     alert(message);
//   }; // 함수선언문으로 작성해도 되지만, 화살표 함수로 작성하는데 리액트 스타일 가이드라.
// 	return (
// 		<>
// 			<h1>{message}</h1>
// 			<h2>{count}</h2>
// 			<h3>{isVisible.toString()}</h3>
// 			<h4>{JSON.stringify(tags, null, 2)}</h4>
// 			<h1>{JSON.stringify(user, null, 2)}</h1>
// 			<button onClick={myFunction}>클릭</button>
// 			<button
// 				onClick={() => {
// 					myFunction("hello");
// 				}}
// 			>
// 				클릭
// 			</button>
// 		</>
// 	);
// }

// 이벤트
// 이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트 속성
// ie. onclick
// html에서 하듯이 onClick의 값으로 {함수명()}이렇게 적어버리면 클릭을 안해도 해당 함수가 호출이 되어 렌더링할 때마다 alert가 뜬다.
// 해결법 1: 함수의 식별자만, 함수명만 적는다. () 안적는다.
// 해결법 2: onClick에 함수를 만들어주고 그 안에서 myFunction을 호출하도록 감싸줌.
// 매개변수가 필요하면 해결법2로, 매개변수가 필요하지 않으면 해결법1을 사용한다.
export default function User({
	message,
	count,
	isVisible,
	tags,
	user,
	myFunction,
	greet,
}: {
	message: string;
	count: number;
	isVisible: boolean;
	tags: string[];
	user: { id: number; name: string };
	myFunction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => void;
	greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log("changeHandler");
		console.log(e.target.value);
	};

	return (
		<>
			<h1>{message}</h1>
			<h2>{count}</h2>
			<h3>{isVisible.toString()}</h3>
			<h4>{JSON.stringify(tags, null, 2)}</h4>
			<h1>{JSON.stringify(user, null, 2)}</h1>
			{/* <button onClick={myFunction}>클릭</button>  */} {/* 매개변수 있기 때문에 이걸로 안됨. */}
			<button
				onClick={(e) => { {/* 여기에도 e 적어야 타입 추론 해준다 */}
					myFunction(e, "hello");
				}}
			>
				클릭
			</button>
			<button onClick={greet}>greet</button>
			<input type="text" onChange={changeHandler}></input>
			<input type="text" onChange={changeHandler}></input>
			{/* onChange = {(e) ⇒ changeHandler(e)}해서 타입 추론후 changeHandler로 되돌린다 */}
		</>
	);
}

// 매개변수를 따로 전달하는데도 이벤트 객체가 필요할 수 있다.
// 매개변수를 전달하지 않으면 암묵적으로 이벤트 객체가 전달되는데, 매개변수를 전달하는 함수는 암묵적으로 이벤트 객체가 전달 되지 않는다.
// 따라서 명시적으로 이벤트 객체를 넘겨주면 된다. ie. myFunction(e, "Hello") 보통은 e를 가장 앞에 적는다.
