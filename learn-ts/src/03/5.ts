{
	// 타입 별정 -> 첫 글자 항상 대문자
	// number, string, boolean ....
	type Level = number;
	let level: Level = 10;
	let level2: number = 10;

	type Level1 = number | string;
	let level3: Level = 10;
	let level4: Level1 = 10;

	// 타입 별칭
	// type -> 나만의 타입을 지정하는 방법
	type ComplexType = {
		id: number;
		value: string;
		attributes: {
			weight: number;
			color: string;
		};
	};

	// let complexStructure: {
	// 	id: number;
	// 	value: string;
	// 	attributes: {
	// 		weight: number;
	// 		color: string;
	// 	};
	// }[] = [
	// 	{ id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
	// 	{ id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
	// 	{ id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
	// ];

	let complexStructure: ComplexType[] = [
		{ id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
		{ id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
		{ id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
	];
	console.log(complexStructure);


  type Attributes = {weight: number; color: string};
  type ComplexData = {
    id : number;
    value: string;
    attributes : Attributes;
  };
  type ComplexStructure = ComplexData[] // 타입이 다른 타입의 재료가 될 수도 있음
  let complexStructure2 : ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
		{ id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
		{ id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ]
}