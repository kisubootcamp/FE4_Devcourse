/* 1. 변수 선언과 할당 */
// a. 두 개의 변수 `x`와 `y`를 선언하고, 각각 숫자 10과 20을 할당하세요. 그리고 두 변수를 더한 값을 새로운 변수 `sum`에 저장하고 `sum`의 값을 콘솔에 출력하세요.
const x = 10, y = 20;
const sum = x + y;

console.log(sum);


/* 2. 변수 재할당 */
// a. 변수 `name`에 "Alice"라는 값을 할당하세요.
// b. 이후 `name` 변수에 "Bob"이라는 값으로 재할당하세요.
// c. `name` 변수의 최종 값을 콘솔에 출력하세요.
let name = "Alice";

name = "Bob";
console.log(name);


/* 3. 상수 */
// a. 상수 `PI`를 선언하고 값 3.14를 할당하세요.
// b. `PI` 값을 콘솔에 출력하세요.
const PI = 3.14;

console.log(PI);


/* 4. 변수 스왑 */
// a. `a`와 `b`라는 두 변수를 선언하고 각각 숫자 5와 10을 할당하세요.
// b. 변수의 값을 서로 교환하여 `a`에는 10이, `b`에는 5가 저장되도록 코드를 작성하세요.
let a = 5, b = 10;
let tmp;

tmp = a;
a = b;
b = tmp;
console.log(`a : ${a}, b : ${b}`);