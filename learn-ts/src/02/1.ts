// var, let, const
// let num: number = 10; // 파일마다 변수 선언을 공유해서 에러가 뜬다. 똑같이 이 코드를 01폴더의 index.ts에 작성하면 -> 해결법 : 코드 블럭(중괄호)안에 코드를 작성할 것임.

{
	// 코드 블럭 (중괄호)
	let num: number = 10;
	// 1. string <- 문자열은 무조건 string타입을 선언해주면 된다
	let name: string = "Alice";
	let greeting: string = `Hello, ${name}`;
	let single: string = "Single Quote";
	let multiLine: string = `This is
  a multiline string`;

	// 2. number(숫자)
	let age: number = 10; // 10진수
	// age = "10"; // 다른 자료형을 할당하려고 하면 에러가 발생.
	// age = true; // 다른 자료형을 할당하려고 하면 에러가 발생.
	let hex: number = 0xff; // 16진수
	let binary: number = 0b1010; // 2진수
	let float: number = 3.14; // 실수든 다 number이다.

	// 3. boolean(논리형)
	// truthy, falsy
	// falsy -> false, 0, -0, "", null, undefined, NaN. falsy란 false로 평가되는 값.
	// truthy -> falsy를 제외한 모든 값. truthy란 true로 평가되는 값.
	let bool1: boolean = true;
	let bool2: boolean = false;
	let bool3: boolean = !0; // true
	let bool4: boolean = 10 > 20;
	console.log(bool3);
	console.log(bool4);
	// let bool5: boolean = ""; // 자동으로 평가해주는 애들이 아니라서 오류가 난다. ""가 정확히 false인 것이 아니기 때문에.
	// let bool6: boolean = null; // 자동으로 평가해주는 애들이 아니라서 오류가 난다. null이 정확히 false인 것이 아니기 때문에.

	// 4. null
	let nothing: null = null; // null은 null타입으로

	// 5. undefined
	let notDefined: undefined = undefined;

	// 6. any - 아무거나 허용하겠다
	// -> 타입을 검사하지 않겠다.
	// -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 함. 타입스크립트를 사용하는 이점이 없어지는거지.
	// let anything: number = 10;
	// anything = 20;
	// anything = 30;
	// anything = "A"; // 에러가 나는데
	// anything = true; // 에러가 나는데
	let anything: any = 10;
	anything = 20;
	anything = 30;
	anything = "A"; // 에러 안남
	anything = true; // 에러 안남
	anything = null;
	anything = undefined;

	// 7. unknown(any 순한맛, 안전한 any)
	// -> 타입 검사를 하지 않아요.
	// -> 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함.
	let input: unknown = "Hello";
	input = 10;
	input = true;
	input = undefined;
	input = null;
	input = 3.14; // 만약에 이 코드 없고, input.toFixed(2)하면 any는 타입검사를 하지 않지만, 실행했을 때 에러가 나면 에러가 발생하기 때문에 실행하면 에러 발생.

	console.log(input); // 3.14
	// console.log(input.toFixed(2)); // 타입에러 발생. 타입이 number, any일때는 에러나지 않지만, unknown일 때는 에러 발생. input은 알 수 없는 타입이므로 input에 number이 들어가있을걸 확신할 수 없으므로 toFixed 못해준다.
	// -> 확신을 주면 됨
	if (typeof input === "number") console.log(input.toFixed(0)); // 에러 발생하지 않음.
	// 따라서 특정 타입을 알아내기 어렵다면, any보다 unknown를 써라.
	// unknown은 반드시 검증을 거쳐야 하기 때문에 좀 더 any보다 안전하다고 평가받기 때문에.
	// 개인적으로는 둘 다 걷어내야 할 타입이다.

	// 8. 배열 (array)
	// 배열은 타입으로 키워드가 아니라 []가 온다.
	let arr: [] = []; // 배열은 []안에 실제로 무슨 값이 들어가는지가 중요함.
	// arr = [10, 20]; // 에러 발생.
	let numArr: number[] = [10, 20];
	let numArr2: Array<number> = [10, 20]; // 과거에는 이렇게도 썼었는데 오늘날에는 안쓴다.

	let strArr: string[] = ["a", "b", "c"];
	let strArr2: Array<string> = ["a", "b", "c"]; // 과거 코드

	let boolArr: boolean[] = [true, false];
	let boolArr2: Array<boolean> = [true, false];

	let undefinedArr: undefined[] = [undefined, undefined];
	let undefinedArr2: Array<undefined> = [undefined, undefined];

	let nullArr: null[] = [null, null];
	let nullArr2: Array<null> = [null, null];

	let objArr: object[] = [{}, {}]; // <=> let objArr: {}[] = [{}, {}];도 가능

	let matrix: number[][] = [
		// 먼저 큰 덩어리 [] 적고, 그 안에 있는게 number 배열이니까 [] 앞에 number[] 적으면 됨.
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	let matrix2: Array<Array<number>> = [
		// 과거. 훨씬 더 복잡하네~ 이제 더이상 안쓴다.
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	let cube: number[][][] = [
		// 다 접어봤더니 일단 배열이니 [], 하나 펼쳐도 배열이니 앞에 [], 또 펼치니 숫자 배열이니 앞에 number[]
		[
			[1, 2],
			[3, 4],
		],
		[
			[5, 6],
			[7, 8],
		],
	];

	// 9. 튜플(tuple)
	// 특정 형태를 갖는 배열을 의미
	let mixArr: [number, string] = [10, "A"]; // 어떤 인덱스가 어떤 타입의 값인지 적어줌.
	let mixArr2: [number, number[]] = [10, [20, 30]];
	let mixArr3: [number, [], {}] = [10, [], {}];

	let mixTuple: [number, string, object][] = [
		// object = {}
		[1, "hello", { key: "value" }],
		[2, "world", { key: "value" }],
	];

	// mixArr = [20, "B", 30]; // 단점 : 이렇게 하는 순간 오류가 나겠지. 따라서 고정된 개수의 값만 올 수 있다는 단점이 있음.
	// => 해결법
	let mixArr4: (number | string)[] = [10, "a"];
	mixArr4 = [20, "b", 100, 10000, "ccc"]; // 확장 가능

	// push는 타입을 따로 평가하지 않아도 되는 함수다.
	// 따라서 push는 아무값이나 가능하지만 push하려는 배열은 넣는 값이 넣으려는 배열에 지정한 타입과 맞아야 한다.

	mixArr.push("A"); // 에러 나지 않음. 타입 추론 -> 타입스크립트가 타입을 자동으로 추론해주는 기능. 자동으로 mixArr: [number, string, string]으로 추론함.
	console.log(mixArr); // [ 10, 'A', 'A' ]
	// 그래도 아무리 보정한다 해도 아예 생뚱 맞은 null이나, 아예 다른 타입을 push를 하는건 안됨.
	// mixArr.push(10);도 가능

	// 10. bigint
	console.log(Number.MAX_SAFE_INTEGER); // <- 여기서 출력되는 숫자보다 더 큰 숫자는 정교하게 처리하지 못한다.
	console.log(9007199254740991);
	console.log(9007199254740997); // <- 원하는대로 출력되지 않음. => bigint 등장

	const bigNumber = 9007199254740997n; // bigint는 숫자 뒤에 n을 붙인다. 그러면 bigint가 됨.
	console.log(bigNumber);
  console.log(100n + 200n); // 300n. 100n은 그냥 100이다.
  // console.log(100n + 200); // 에러. bigint와 그냥 number는 함께 사용하지 못함. 
}
