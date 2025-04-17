// **.d.ts
// declaration file
/* 자바스크립트 라이브러니나 모듈에 대한 타입 정보를
타입스크립트에 제공하기 위해 사용된 파일 형식 */

// 이벤트
// 이벤트 속성, HTML에서 사용할 수 있는 이벤트 속성
// onclick 등

export default function User({
	message,
	count,
	isVisible,
	tags,
	user,
	myFunction,
}: UserProps) {
	// 리액트에서 만든 타입을 쓴다
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		console.log(e.nativeEvent);
	};

	return (
		<>
			{/* true, false는 렌더링되지 않기 때문에 문자열로 변경해줘야 함 */}
			{/* 객체를 그대로 출력하려고 하면 오류 */}
			<h1>{message}</h1>
			<h1>{count}</h1>
			<h1>{isVisible.toString()}</h1>
			<h1>{JSON.stringify(tags, null, 2)}</h1>
			<h1>{JSON.stringify(user, null, 2)}</h1>

			{/* 매개변수가 필요없으면 위, 필요하면 아래 */}
			<button onClick={myFunction}>클릭</button>
			{/* <button onClick={() => myFunction("Hello, World!")}>클릭</button>
			<button onClick={greet}>클릭</button> */}

			<input type="text" onChange={changeHandler}></input>
			<input type="text" onChange={(e) => changeHandler(e)}></input>
		</>
	);
}
