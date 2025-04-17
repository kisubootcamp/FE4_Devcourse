// props 객체
// 관례적으로 매개변수를 props라고 사용함

// export default function User(props: { name: string; age: string }) {
export default function User({ name, age }: { name: string; age: number }) {
	// console.log(props);
	// const { name, age } = props;
	return (
		<>
			<h1 className="text-3xl font-bold p-4">
				{/* User: {props.name}, {props.age} */}
				User: {name} / {age}
			</h1>
		</>
	);
}
