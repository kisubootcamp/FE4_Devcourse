// 조건부 렌더링
// 조건문을 활용해서 조건 렌더링을 수행하는 기법
// 1. if
// 2. 삼항 연산자
// 3. AND (&&) 연산자
// 3.1. expr1 && expr2 -> expr1이 true면 expr2 실행, false면 중지

// import Sustagram from "./components/Sustagram";

// 반복 렌더링
// 반복문을 활용해서 반복 렌더링을 수행하는 기법
// map() 사용
// key 속성값을 부여하고, 유니크하게 해줘야 함
// 되도록이면 key 값을 index 값으로 쓰는 건 지양
// key 속성은 컴포넌트 전달되지 않음

// import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
	return (
		<>
			<div className="item-middle">
				<Input type="text" className="input-style" />
				<Input
					type="password"
					placeholder="Enter Your Password"
					className="input-style"
				/>
				<Input
					type="number"
					placeholder="Enter Your Number"
					className="rounded-lg border border-[#4f4f4] px-4 text-sm placeholder:text-[#acacac]"
				/>
			</div>
		</>
	);
}

// import User from "./components/User";

// export default function App() {
// 	const items = ["apple", "banana", "orange", "grape", "apple"];
// 	const users = [
// 		{
// 			id: 1,
// 			name: "John",
// 			age: 20,
// 		},
// 		{
// 			id: 2,
// 			name: "sucoding",
// 			age: 30,
// 		},
// 		{
// 			id: 3,
// 			name: "won",
// 			age: 28,
// 		},
// 	];
// 	return (
// 		<>
// 			<ul>
// 				{items.map((value, index) => (
// 					<li key={index}>{value}</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{users.map((user) => (
// 					<User key={user.id} {...user} />
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// import Loggedin from "./components/Loggedin";
// import NotLoggedin from "./components/NotLoggedin";

// export default function App() {
// 	const isLogin = false;

// 	// if문은 패스

// 	// return <>{isLogin ? <Loggedin /> : <NotLoggedin />}</>;

// 	return (
// 		<>
// 			{isLogin && <Loggedin />}
// 			{!isLogin && <NotLoggedin />}
// 		</>
// 	);
// }
