{
	// 함수
	// 매개 변수와 반환 값의 타입을 지정해주는 것
	// return
	// void  -> 아무것도 반환하지 않는다
	// 함수 선언문
	// 함수 표현식
	// 화살표 함수
	// -> 함수 자체에 매개변수와 반환 값의 타입을 저장하는 방법
	// -> 변수에 함수의 매개변수와 반환 값의 타입을 지정하는 방법

	let num: number = 10;

	const greet: () => void = function greet() {
		console.log("Greet!");
	};

	const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

	const pValue: (value: string) => void = function printValue(value) {
		console.log(value);
	};

	function add(...numbers: number[]) {
		return numbers.reduce((result, num) => result + num, 0);
	}

	// printValue("A");

	// const res = add([1, 2, 3]);
	// const res = add(1, 2, 3);
	// console.log(res);

	function printObj(userObj: { name: string }) {
		console.log(userObj.name);
	}

	printObj({ name: "sucoding" });

	// 매개변수는 타입추론이 되지 않는다
}
