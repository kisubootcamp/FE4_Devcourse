{
	// 타입 추론
	// 변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
	let num = 10;
	let name = "Hello";
	let bool = true;
	let symbol = Symbol("a");
	let numArr = [1, 2, 3];
	let obj = { name: "sucoding", age: 20 };
	let big = 100n;

	let unde = undefined; // any 타입으로 추론됨
	let nul = null; // any 타입으로 추론됨
	// 타입스크립트 컴파일러가 이 값들은 다른 값으로 할당될 것이라고 판단하기 때문에 any로 추론함
}

{
	let employee = {
		id: 123,
		name: "John Doe",
		contact: {
			email: "john.doe@example.com",
			number: [12165, 7845613, 55664],
		},
		department: "Engineering",
	};
}

{
	let mixedData = [
		{ type: "user", name: "Alice", age: 30 },
		{ type: "user", name: "Bob", age: 25 },
		{ type: "product", id: 1, name: "Laptop", price: 999 },
		{ type: "product", id: 2, name: "Smartphone", price: 499 },
	];
}
