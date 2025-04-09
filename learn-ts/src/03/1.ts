{
	// 함수
	// 매개 변수와 반환 값의 타입을 지정해주는 것

	// const func : function = () => {}; // 이렇게 지정하지 않음

	// 반환 값 : return으로 되돌려주는 값인데, 아래 함수는 반환값이 없는 상태. => void로 지정
	// void -> 아무것도 반환하지 않는다

	// 함수 선언문 타입 지정
	function greet(): void {
		console.log("Greet!");
	}
	greet();

	// 반환값 타입을 지정하지 않으면 any로 추론되고 있음. -> 타입 에러 발생.
	// 함수명(n1 : n1의 타입, n2: n2의 타입): 반환값 타입
	function sum(n1: number, n2: number): number {
		return n1 + n2;
	}
	const result = sum(10, 20); // result의 타입까지 명시해야 하나? 조직을 따라가면 되는데. 함수 호출값의 반환 타입까지 적는 경우는 거의 없다.
	console.log(result);

	function printValue(value: string): void {
		console.log(value);
	}
	printValue("A");

	function add(numbers: number[]): number {
		return numbers.reduce((result, num) => result + num, 0);
	}
	let res = add([1, 2, 3]);
	console.log(res);

	function add1(...numbers: number[]): number {
		return numbers.reduce((result, num) => result + num, 0);
	}
	res = add1(1, 2, 3);
	console.log(res);

	function printObj(userObj: { name: string }): void {
		console.log(userObj.name); // reutrn이 없으면 void로 잘 추론함.
		// return 10; // 반환되는 값의 타입은 return 뒤 값을 보고 추론 가능
		// return userObj.name; // 이런 경우는 타입이 명확하지 않기 때문에 추론 잘 안됨.
	}
	printObj({ name: "ys" });
}
{
	// 함수 표현식 타입 지정
	// -> 1. 함수 선언문을 변수에 담아주기만 하면 됨. 함수 자체에 매재 변수와 반환 값의 타입을 지정하는 방법
	const greet = function greet(): void {
		console.log("Greet!");
	};

	const sum = function sum(n1: number, n2: number): number {
		return n1 + n2;
	};

	// -> 2. 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법 (화살표 함수 형태로, 화살표 오른쪽이 반환값 타입, 소괄호 안에 매개변수 타입 지정)
	const greet1: () => void = function greet() {
		console.log("Greet!");
	};

	const sum1: (n1: number, n2: number) => number = function sum(n1, n2) {
		return n1 + n2;
	};
	// 2번 사용하면 함수 부분에는 타입 지정 안해줘도 됨.
	// 강사님은 1번 즐겨 사용. 2번이 가독성 떨어진다고 생각해서
	// 변수에 타입 지정할 때 매개변수 이름은 다른 변수명을 사용해도 문제 되지 않음. (n1 :number, n2: number) -> (a:number, b:number)
	// 하지만 대부분 매개변수 이름 그대로 사용하지.

	const printValue: (value: string) => void = function printValue(value) {
		console.log(value);
	};
	printValue("A");

	function add(numbers: number[]): number {
		return numbers.reduce((result, num) => result + num, 0);
	}
	let res = add([1, 2, 3]);
	console.log(res);

	function add1(...numbers: number[]): number {
		return numbers.reduce((result, num) => result + num, 0);
	}
	res = add1(1, 2, 3);
	console.log(res);

	function printObj(userObj: { name: string }): void {
		console.log(userObj.name);
	}
	printObj({ name: "ys" });
}
{
	// 화살표 함수
	const greet: () => void = () => {
		console.log("Greet!");
	};

	const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
	const sum1 = (n1: number, n2: number): number => n1 + n2;

	const printValue: (value: string) => void = (value) => {
		console.log(value);
	};

	const add: (...numbers: number[]) => number = (...numbers) => {
		return numbers.reduce((result, num) => result + num, 0);
	};

	const printObj: (userObj: { name: string }) => void = (userObj) => {
		console.log(userObj.name);
	};
}
