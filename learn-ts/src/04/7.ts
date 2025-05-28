{
	let value: number | string = 10.12;
	console.log(value.toFixed(0));
}

{
	function printValue1(value: number | string) {
		// if (typeof value === "number") console.log(value.toFixed(0));

		// 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
		// 타입 단언 -> as [단언할 타입]
		console.log((value as number).toFixed(0));

		// 타입 단언 -> <단언할 타입>
		// 리액트에서 사용 불가능, JSX 문법과 충돌
		console.log((<number>value).toFixed(0));
	}
	printValue1(3.14);
}

{
	type User = {
		name: string;
	};
	type Car = {
		speed: number;
	};

	const user: User = {
		name: "kisu",
	};
	const car: Car = {
		speed: 100,
	};

	function printValue2(obj: User | Car) {
		console.log((obj as Car).speed);
	}

	printValue2(user); // undefined
	// 객체에 없는 속성에 접근하면 undefined가 나옴
}

{
	// null 아님 보장 연산자 (!)
	function printValue3(value: number | null) {
		// null이 아니라고 확실하게 단언함
		console.log(value!.toFixed(2));
	}
	// printValue(null); // runtime error

	// 타입스크립트는 런타임 이전에 에러를 검출하지만,
	// 타입 단언이나 !를 쓰면 런타임 에러가 발생할 가능성이 있음
}

// {
// 	const element = document.querySelector("button") as HTMLButtonElement;
// 	element.style.color = "red";
// }
