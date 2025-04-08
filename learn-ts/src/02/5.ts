{
	// 1.
	// readonly와 ?는 객체 내에서만 쓸 수 있다. ?는 나중에 함수에서도 쓸 수 있는데.
	let obj: {
		readonly name: string; // 객체 내부에 타입 지정할 때 readonly로 지정하면 그 속성은 변경할 수 없음.
		age: number;
		gender?: string; // ?를 붙이면 optional 속성이라서 변수에 할당 될 값이 option적이다. 있어도 되고 없어도 된다는 뜻이다.
	} = {
		name: "ys",
		age: 20,
	};

	obj.name = "jw";
	obj.age = 25;

	console.log(obj.name);
	console.log(obj.age);

	// 추후에
	// obj.gender = "Female"; // obj는 name과 age만 올 수 있기 때문에 에러가 남.
	// 타입 지정할 때 옵셔널 속성 넣어주면 추후에 추가될 속성을 지정할 수 있음.
	obj.gender = "Female";
	console.log(obj);
  // 타입 추가는 동적으로 할 수 없음.
}
