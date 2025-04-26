import User from "./components/User";

export default function App() {
	return (
		<>
      {/* 컴포넌트의 속성(properties)으로 데이터를 전달 */}
      {/* 컴포넌트의 properties로 데이터를 전달 */}
      {/* 컴포넌트의 props로 데이터를 전달 */}
      {/* props 객체 */}
      {/* age를 number로 전달하고 싶으면 {}안에 적어주면 됨 */}
			<User name="yeonseo" age={20}></User>
		</>
	);
}
