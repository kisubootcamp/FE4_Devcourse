// export default function User(parameter: { name: string; age: string }) {
// 	console.log(parameter);
// 	return (
// 		<h1>
// 			User: {parameter.name} / {parameter.age}
// 		</h1>
// 	);
// }

// export default function User(props: { name: string; age: string }) {
// 	console.log(props);
// 	return (
// 		<h1>
// 			User: {props.name} / {props.age}
// 		</h1>
// 	);
// }

// props는 구조분해 할당해서 받아도 된다. 실무에서는 특별한 일 아니면 구조분해해서 받는다.
export default function User({ name, age }: { name: string; age: number }) {
	console.log(name);
	return (
		<h1>
			User: {name} / {age}
		</h1>
	);
}
