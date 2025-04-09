{
	// 타입 별칭
	// number, string, boolean ,,,
	// -> 첫 글자 대문자 권장
	// type -> 나만의 타입 지정

	type Level = number;
	let level1: Level = 10;
	let level2: Level = 20;

	type Attributes = { weight: number; color: string };

	type ComplexData = {
		id: number;
		value: string;
		attributes: Attributes;
	};

	// 타입은 다른 타입의 재료가 될 수 있음
	type ComplexStructure = ComplexData[];

	let complexStructure: ComplexStructure = [
		{ id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
		{ id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
		{ id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
	];
}

{
	type User = {
		name: string;
		age: number;
	};

	type Developer = {
		skill: string;
	};

	let human: User = {
		name: "sucoding",
		age: 20,
	};

	type HumanDeveloper = User & Developer;

	let developer01: HumanDeveloper = {
		name: "sucoding",
		age: 20,
		skill: "TypeScript",
	};
}
