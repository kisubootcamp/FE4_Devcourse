// 트랜스 컴파일(컴파일링)
// ts -> js
// 트랜스 컴파일러 : 트랜스 컴파일을 수행하는 도구
// tsc -> 트랜스 컴파일러
// let num1: number = 10;
// console.log(num1);

const str = "Hello, world!!!!!";
console.log(str.replaceAll(" ", "")); // ES2021에서부터 가능하다

// 타입스크립트
// 자바스크립트 + 타입 시스템을 추가한 언어

// 자바스크립트?
// 타입스크립트부터 했는데?

// 자바스크립트 -> 타입스크립트
// 자바스크립트 -> 문법
// 타입스크립트 타입 시스템을 배우는 것.
// 타입스크립트는 결국 값의 타입을 지정해주는 것.
// 타입스크립트가 왜 어렵다는 생각이 드냐면?
// 값에 대한 타입을 지정하는 방법이 많음
// -> 장점 : 불필요한 실수를 예방할 수 있음.

// string, number, boolean, object, array, tuple, undefined, null, any, bigint
// 변수는 중괄호 안에 선언하자
// 정적 타이핑 : 이미 타입이 정해져 있다.

// 자바스크립트 -> 동적 타입 시스템
// 타입스크립트 -> 정적 타입 시스템
{
	let name: string = "yeonseo";
	let age: number = 25;
	let bool: boolean = true;
	let MAX_LEVEL: number = 99;
	// MAX_LEVEL = "99"; // 에러 발생. 타입이 달라서 발생할 수 있는 에러를 사전에 찾아 낼 수 있음.
	let obj: object = {}; // o -> 나중에 자세히 설명할것임
	let arr: [] = []; // o -> 나중에 자세히 설명할것임
	let sym: symbol = Symbol("a");
	let und: undefined = undefined;
	let nul: null = null;
	let big: bigint = 100n;
}
