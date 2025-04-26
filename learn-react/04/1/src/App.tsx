import Button from "./components/Button";
import User from "./components/User";

export default function App() {
	const myFunction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => {
		alert(message);
	};

	const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e);
		console.log(e.nativeEvent);
	};

	return (
		<>
			{/* <User
				message="안녕하세요"
				count={10}
				isVisible={true}
				tags={["react", "ts", "js"]}
				user={{ id: 1, name: "yeonseo" }}
				myFunction={myFunction} // 부모에서 함수도 prosps로 전달 가능
				greet={greet} // 부모에서 props로 전달 가능
			></User> */}
			{/* <Button text="로그인"></Button> <br></br>
			<Button></Button> */}
			<Button type="button">
				<div>로그인</div>
				<h1>로그아웃</h1>
			</Button>
		</>
	);
}
