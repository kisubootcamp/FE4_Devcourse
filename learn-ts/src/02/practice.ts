// 연습문제
// 1. 문제: 문자열 변수 선언
// `string` 타입을 사용하여 `"Hello"`라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.
let sayHello: string = "Hello";
console.log(sayHello);

// 2. 문제: 숫자 변수 선언
// `number` 타입을 사용하여 `42`라는 숫자를 갖는 변수를 선언하고, 출력하세요.
let fortyTwo: number = 42;
console.log(fortyTwo);

// 3. 문제: 불리언 변수 선언
// `boolean` 타입을 사용하여 `true` 값을 갖는 변수를 선언하고, 출력하세요.
let boolTruthy: boolean = true;
console.log(boolTruthy);

// 4. 문제: 숫자 배열 선언
// `Array<number>` 또는 `number[]` 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.
let prices: Array<number> = [12000, 14300, 8000];
console.log(prices);

// 5. 문제: 문자열 배열 선언
// `Array<string>` 또는 `string[]` 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.
let colors: string[] = ["green", "brown", "black"];
console.log(colors);

// 6. 문제: 튜플 변수 선언
// `tuple` 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.
let address: [string, number, number] = ["asan", 8, 105];
console.log(address);

// 7. 문제: `null` 값 할당
// `null` 타입을 사용하여 `null` 값을 갖는 변수를 선언하고, 이를 출력하세요.
let userData: null = null;
console.log(userData);

// 8. 문제: `undefined` 값 할당
// `undefined` 타입을 사용하여 `undefined` 값을 갖는 변수를 선언하고, 이를 출력하세요.
let userAge: undefined = undefined;
console.log(userAge);

// 9. 문제: 객체 선언
// `object` 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
let userInfo: {
  name: string;
  age: number;
} = {
  name: "김은지",
  age: 24,
};
console.log(userInfo);
