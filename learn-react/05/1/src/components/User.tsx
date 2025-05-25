export default function User({
	id,
	name,
	age,
	clickHandler,
}: {
	id: number;
	name: string;
	age: number;
	clickHandler?: () => void;
}) {
	return (
		<>
			{/* 객체는 {...객체} 형식으로 데이터 전달 가능함 */}
			{/* 위 형식과 아래 형식이 같은 뜻 */}
			{/* (App에서) <User {...user} clickHandler={() => alert("click")} /> */}
			{/* <User id={user.id} name={user.name} age={user.age} />{" "} */}
			{/* 스프레드를 쓰면 선택적으로 받아오는 것이 가능 */}
			<h1>
				{id} - {name} - {age}
			</h1>
			{clickHandler && <button onClick={clickHandler}>클릭</button>}
		</>
	);
}
