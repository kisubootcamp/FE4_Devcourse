{
	let value: number | string = 10.12;
	console.log(value.toFixed(0));
}

{
	function printValue(value: number | string) {
		// 타입 가드 : 타입을 좁혀주는 조건문 또는 문법
		// if (typeof value === "number") console.log(value.toFixed(0));

		// 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
		// 타입 단언 -> as 단언할타입
		console.log((value as number).toFixed(0));
		// <단언할타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
		console.log((<number>value).toFixed(0));
	}

	printValue(3.14);
	printValue("aaaa"); // <- 런타임 때 발생할 에러를 미리 알아내지 못한다.
}
{
	type User = {
		name: string;
	};
	type Car = {
		speed: number;
	};

	const user: User = {
		name: "ys",
	};

	const car: Car = {
		speed: 100,
	};

	// console.log((user as Car).speed);

	function printValue(obj: User | Car) {
		console.log((obj as Car).speed);
	}
	printValue(user);
}
{
	// 널 아님 보장 연산자 (!)
	function printValue(value: number | null) {
		if (typeof value === "number") console.log(value.toFixed(2));
		// console.log(value?.toFixed(2));
    console.log(value!.toFixed(2)); // 절대로 null이 아닐거라고 보장시켜주는 연산자 !. 타입 단언의 한 종류
	}

  printValue(null); // ? 사용했을 때는 undefined, ! 사용했을 때는 런타임 에러
}
// 개발자가 백프로 확신하는데, 컴파일러가 확신하지 못할 때 타입단언은 매우 유용하다.
// 하지만 그로인해 런타임 에러가 발생할 수 있다는 건 주의하자.
{
  const element = document.querySelector("button"); // element가 null일 수 도 있다고 보기 때문에
  // element.style.color = "red"; // 이 코드를 그냥 실행하지 못함.

  const element1 = document.querySelector("button") as HTMLButtonElement; // 타입 단언해주면
  element1.style.color = "red"; // 코드 실행 가능.
}