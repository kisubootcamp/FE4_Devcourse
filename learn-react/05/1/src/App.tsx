// // import User from "./components/User";

import Button from "./components/html/Button";
import Input from "./components/html/Input";
import Sustagra from "./components/Sustagra";

// import { renderToString } from "react-dom/server";
// import LoggedIn from "./components/LoggedIn";
// import NotLoggedIn from "./components/NotLoggedIn";
// import User from "./components/User";

// // export default function App() {
// // 	const user = {
// // 		id: 1,
// // 		name: "yeonseo",
// // 		age: 20,
// // 	};
// // 	return (
// // 		<>
// // 			{/* 1. 객체를 객체 그대로 전달 */}
// // 			{/* <User user={user}></User> */}
// // 			{/* 2. */}
// // 			{/* <User id={user.id} name={user.name} age={user.age}></User> */}
// // 			{/* 3. 전개연산자 사용 - 객체 데이터에만 쓸 수 있음. */}
// // 			<User {...user} clickHandler={() => alert("click")}></User>
// // 		</>
// // 	);
// // }

// // 조건부 렌더링
// // 조건문을 활용해서 조건 렌더링을 수행하는 기법
// // 조건에 따라서 컴포넌트를 렌더링하는 기법
// // 1. if
// // 2. 삼항 연산자
// // 3. 논리 && 연산자
// // 3.1 expr1 && expr2 -> true

// // true일때만 뭘 출력하게 하고 싶으면 삼항 연산자는 적절하지 않을 수 있다. 따라서 이럴 때는 if문이나 &&연산자가 적합하다.
// // export default function App() {
// // 	const isLogin = false;

// // if (isLogin) {
// // 	return (
// // 		// <>
// // 		// 	<h1>User is Login!</h1>
// // 		// </>
// //     // 컴포넌트 렌더링도 가능
// // 		<LoggedIn></LoggedIn>
// // 	);
// // }
// // // else {
// // // 	return (
// // // 		<>
// // // 			<h1>User is not Login!</h1>
// // // 		</>
// // // 	);
// // // }

// // // 가독성을 고려해 아래로 작성한다.
// // return (
// // 	// <>
// // 	// 	<h1>User is not Login!</h1>
// // 	// </>
// // 	<NotLoggedIn />
// // );

// // 삼항 연산자로 분기 처리도 가능
// // return (
// // 	<>
// // 		{isLogin ? (
// // 			<>
// // 				<LoggedIn></LoggedIn>
// // 				<LoggedIn></LoggedIn>
// // 			</>
// // 		) : (
// // 			<>
// // 				<h1>User is not Login!</h1>
// // 				<h1>User is not Login!</h1>
// // 			</>
// // 		)}
// // 	</>
// // );

// // 논리 && 연산자

// // 	return (
// // 		<>
// // 			{/* JSX에서는 if문을 인식하지 못한다. 따라서 if문은 항상 return 문 밖에서 처리해야 한다 */}
// // 			{isLogin && <h1>User is Login!</h1>}
// // 			{!isLogin && <NotLoggedIn></NotLoggedIn>}

// // 			{/* 즉시 실행함수 */}
// // 			{/* 즉시 실행함수에서는 if문을 처리할 수 있다. */}
// // 			{(() => {
// // 				if (isLogin) {
// // 					return <h1>Login!</h1>;
// // 				}
// // 				return <h1>Logout!</h1>;
// // 			})()}
// // 		</>
// // 	);
// // }

// // 반복 렌더링
// // 반복문을 활용해서 반복 렌더링을 수행하는 기법
// // [].map() : 리액트에서 반복 렌더링은 거의 map 메서드만 쓴다.
// // key 속성의 값을 유니크하게 해줘야함.
// export default function App() {
// 	// const items = [<li>apple</li>, <li>banana</li>, <li>orange</li>];
// 	// return (
// 	// 	<>
// 	// 		<ul>{items}</ul>
// 	// 	</>
// 	// );
// 	const renderItems = [];
// 	const items = ["apple", "banana", "orange", "orange"];
// 	const users = [
// 		{
// 			id: 1,
// 			name: "John",
// 			age: 20,
// 		},
// 		{
// 			id: 2,
// 			name: "yeonseo",
// 			age: 25,
// 		},
// 	];

// 	// for문은 사실 깔끔하지 않다. -> 리액트는 주로 map 메서드를 사용한다.
// 	// for (let i = 0; i < items.length; i++) {
// 	// 	renderItems.push(<li>{items[i]}</li>);
// 	// }
// 	// return (
// 	//   <>
// 	//     <ul>{renderItems}</ul>
// 	//   </>
// 	// )
// 	// 반복 렌더링 했을 때는 key속성을 사용해서 고유값을 적어줘야 한다.
// 	// value가 겹치지 않는다는 확신이 있으면 value값을 key 속성값으로 넣어주면 된다.
// 	// 그런데 만약 value가 겹친다면 에러가 뜬다.
// 	// map의 두번째 요소인 index값을 사용하면 되겠다.
// 	// 그런데 주의할 점은 key값으로 index 넣으면 안된다.
// 	// 실무에서는 객체 요소를 가지고 반복 렌더링하는 경우가 많은텐데, 무조건 객체 내에 고유하게 식별할 수 있는 요소가 있을 것임. 그걸 써줘야 하고
// 	// index 값은 어쩔수 없을 때만, 고유값이 없는 경우에만 써줘야 한다. 왜냐면 index값은 매우 가변적이기 때문이다.
// 	return (
// 		<>
// 			<ul>
// 				{items.map((value, index) => (
// 					// <li key={value}>{value}</li>
// 					<li key={index}>{value}</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{users.map((user) => (
// 					<li key={user.id}>
// 						{user.name} - {user.age}{" "}
// 					</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{users.map((user) => (
//           // key속성은 컴포넌트에 전달되지 않는다. 즉 props로 넘어가지 않는다.
// 					<User key={user.id} {...user}></User>
// 					// <User key={user.id} id={user.id} name={user.name} age={user.age}></User>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default function App() {
// 	return <Sustagra></Sustagra>;
// }
export default function App() {
	return (
		<>
			<div className="item-middle">
				<Button isLogin={true} type="button" className="bg-[#4f4f4f]">
					Add
				</Button>
				<Button type="submit" className="bg-[#ed4848]">
					Cancel
				</Button>
				<Button type="reset" className="bg-[#7D48ED]" disabled>
					Success
				</Button>
				<Input type="text" className="input-style"></Input>
				<Input type="password" className="input-style"></Input>
				<Input type="number" className="input-style"></Input>
				{/* 체크박스의 경우 원하는 방향으로 생성되지 않기 때문에 체크박스와 라디오버튼 타입을 못 오게 하고 싶을 수 있다. */}
				{/* <Input
					type="checkbox"
					className=" rounded-lg border border-[#4f4f4f] text-sm px-4 placeholder:text-[#acacac]"
				></Input> */}
			</div>
		</>
	);
}
