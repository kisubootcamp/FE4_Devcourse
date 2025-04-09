{
	// 1.
	let obj: {
		readonly name: string; // readonly -> 읽기만 가능함, 바꿀 수 없음
		age: number;
		gender?: string; // 옵셔널 속성 (필수가 아닌 선택 옵션)
		// 옵셔널 속성은 객체 타입에서 사용가능
		// 배열에서는 안됨
	} = {
		name: "sucoding",
		age: 20,
	};

	// obj.name = "jane"; // 에러

	console.log(obj.name);
	console.log(obj.age);

	obj.gender = "Female"; // 옵셔널 속성
}
