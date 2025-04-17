// import Child from "./components/Child";
// import Content from "./components/Content";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

export default function App() {
	// const onClick = () => {
	// 	console.log("버튼이 클릭되었습니다");
	// };

	return (
		<>
			{/* <Child
				message="Hello, World!"
				age={42}
				fruits={["Apple", "Banana", "Cherry"]}
				user={{ name: "Alice", age: 30 }}
				isLoggedIn={false}
				onClick={onClick}
				// name="연서"
				value={[10, 29]}
				style={{ fontSize: "50px", color: "red" }}
				// Header={Header} // 이렇게 넘기면 컴포넌트를 넘긴게 아니라 함수를 넘긴거다
				Header={<Header></Header>}
				Content={<Content></Content>}
				Footer={<Footer></Footer>}
			></Child> */}
			<ProfileCard
				bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				uname="Sally Ramos"
				instaId="@sallytheramos"
				onClick={() => alert("Follow")}
			></ProfileCard>
			<ProfileCard
				bg="https://cdn.pixabay.com/photo/2024/12/05/08/06/modern-9246082_1280.jpg"
				userImg="https://cdn.pixabay.com/photo/2019/10/23/08/03/woman-4570763_1280.jpg"
				uname="Anna"
				instaId="@anna"
				onClick={() => alert("Follow")}
			></ProfileCard>
		</>
	);
}
