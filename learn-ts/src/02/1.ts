// 타입스크립트는 폴더나 파일이 다르더라도 일괄적으로 검사
// 중복으로 변수 정의 불가
// 그러므로 코드 블록(중괄호 내부) 사용
// var는 블록 스코프 지원 안되는듯
{
	// 1. String
	let name: string = "Yuni";
	let greeting: string = `Hello, ${name}`;
	let multiLine: string = `This is
	a multiline string!`;

	// 2. number (숫자)
	let age: number = 4; // 10진수
	let hex: number = 0xff; // 16진수
	let binary: number = 0b1010; // 2진수
	let float: number = 3.1415926535; // 실수

	// 3. boolean (논리형)
	// truthy, falsy
	// falsy = false는 아니지만 false로 평가되는 값
	// falsy : 0, -0, "", null, undefined, NaN
	// truthy -> falsy를 제외한 모든 값
	let bool1: boolean = true;
	let bool2: boolean = false;
	let bool3: boolean = !0;
	let bool4: boolean = 10 > 20;

	// 4. null

	// 5. undefined

	// 6. any
	// 타입을 검사하지 않음
	// 타입 검사를 무력화하기 때문에 남용을 피해야 함
	let anything: any = 10;
	anything = 20;
	anything = "A";
	anything = true;
	anything = null;
	anything = undefined;
	anything = 60;
	// 리액트에는 존재하지만 타입스크립트에서는 존재하지 않는 타입이 존재하는 경우가 있음
	// 그런 것을 활용할 때 임시로 사용

	// 7. Unknown (any 순한맛)
	// 타입 검사를 하지 않음, but 그 값을 사용하려 할 때는 검증해야 함

	// 8. 배열
	// let arr: [] = [];
	// arr = [10, 20];
	// 배열은 배열 안에 있는 요소가 중요함
	let arr1: number[] = [10, 20]; // 올바른 예시
	// let arr1_1: Array<number> = [20, 30]; // 구식 방식
	let arr2: string[] = ["A", "B", "C"];
	let arr3: boolean[] = [true, false];
	let arr4: undefined[] = [undefined, undefined];
	let arr5: null[] = [null, null, null];
	let arr6: {}[] = [{}, {}]; // object

	// let matrix: Array<Array<number>> = [
	let matrix: number[][] = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	// 9. 튜플 (tuple)
	// 특정 형태를 갖는 배열을 의미
	// 배열 내 요소마다 타입 지정
	let mixArr: [number, string] = [10, "A"];
	let mixArr2: [number, number[]] = [10, [20, 30]];

	let mixTuple: [number, string, object][] = [
		[1, "hello", { key: "ex1" }],
		[2, "world", { key: "ex2" }],
	];
	// 위 방식은 고정된 형식으로만 쓸 수 있기 때문에 아래 형식으로 단점 보완
	let mixArr3: (number | string)[] = [10, "A", 20, "B", "C"]; // 고급 문법

	// push는 미리 지정함
	let pushArr: (number | string)[] = [];
	pushArr.push(10);
	pushArr.push("A");

	// 10. bigint
	console.log(Number.MAX_SAFE_INTEGER);

	const bigNum: bigint = 9007199254740384193918n;
	console.log(bigNum);

	// bigint는 bigint끼리만 연산해야 함
	// 그냥 숫자 뒤에 n을 붙이면 bigint 타입
}
