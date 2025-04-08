/*
타입스크립트
자바스크립트 + 타입 시스템을 추가한 언어

올바른 학습 순서
자바스크립트(문법) -> 타입스크립트(타입 시스템)

string, number, boolean, object, array,
tuple, undefined, null, any, bigint, symbol

타입스크립트는 결국 값의 타입을 지정해주는 것
그런데 왜 어려움? 타입을 지정하는 방법이 많아서
타입을 지정하면 불필요한 실수를 예방할 수 있음

자바스크립트 : 동적 타입 시스템, 할당과 동시에 타입이 결정됨
타입스크립트 : 정적 타입 시스템, 지정된 타입만 사용가능
*/

{
	let name: string = "sucoding";
	let age: number = 20;
	let bool: boolean = true;

	let MAX_LEVEL: number = 99;
	// MAX_LEVEL = "99";	// error; 타입이 다름
	let obj: object = {};
	let arr: [] = [];
	let und: undefined = undefined; // 쓸 일 없음
	let nul: null = null;
	let big: bigint = 100n;

	console.log(age + 150);
}
