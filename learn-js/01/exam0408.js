// 01 변수
// 1) 변수 선언과 할당
// 1 두 개의 변수 **`x`**와 **`y`**를 선언하고, 각각 숫자 10과 20을 할당하세요. 그리고 두 변수를 더한 값을 새로운 변수 **`sum`**에 저장하고 **`sum`**의 값을 콘솔에 출력하세요.
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum); //30

// 2) 변수 재할당
// 1 변수 **`name`**에 "Alice"라는 값을 할당하세요.
// 2 이후 **`name`** 변수에 "Bob"이라는 값으로 재할당하세요.
// 3 **`name`** 변수의 최종 값을 콘솔에 출력하세요.
let name = "Alice";
name = "Bob";
console.log(name); // Bob

// 3) 상수
// 1 상수 **`PI`**를 선언하고 값 3.14를 할당하세요.
// 2 **`PI`** 값을 콘솔에 출력하세요.
const PI = 3.14;
console.log(PI); // 3.14

// 4) 변수 스왑
// 1 **`a`**와 **`b`**라는 두 변수를 선언하고 각각 숫자 5와 10을 할당하세요.
// 2 변수의 값을 서로 교환하여 **`a`**에는 10이, **`b`**에는 5가 저장되도록 코드를 작성하세요.
let a = 5;
let b = 10;
let c;
c = a;
a = b;
b = c;
console.log(`a: ${a}, b: ${b}`);

// --------------------------------------------------------- //
// 02. 자료형
// 1 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
let num1 = 42;
let name1 = "John";
let isTrue1 = true;
let person1 = { name: "Alice", age: 30 };
let fruits1 = ["apple", "banana", "orange"];
const typeResult = (arg) => {
  return console.log(typeof arg);
};
typeResult(num1); // number
typeResult(name1); // string
typeResult(isTrue1); // boolean
typeResult(person1); // object
typeResult(fruits1); // object
// 배열인데 객체로 나오는 이유
// typeof 연산자는 array를 판별할 수 없고,
// 배열도 그냥 object 라고 나온다...
// 자바스크립트에서 배열은 객체의 한 종류이기 때문
// 배열인지 확인하고 싶다면 Array.isArray() 를 사용하면 된다!

// 2 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16; //number
let lastName = "Brown"; // string
let score = [10, 20]; //array
let x1 = {
  firstName: "Nick",
  lastName: "Doe",
}; //object

// --------------------------------------------- //
// 03. 연산자
// 1) 기본 산술 연산
// 1 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
// 2 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
// 3 각 연산의 결과를 콘솔에 출력하세요.
a = 10;
b = 5;
let sum1 = a + b;
let sub1 = a - b;
let mul1 = a * b;
let div1 = a / b;
let rest = a % b;
console.log(
  `덧셈 : ${sum1}, 뺄셈 : ${sub1}, 곱셈 : ${mul1}, 나눗셈 : ${div1}, 나머지 : ${rest} `
);

// 2) 증감 연산
// 1 증가 및 감소 연산자
//     1. 변수 `y`에 숫자 7을 할당하세요.
//     2. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
//     3. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
//     4. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
//     5. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.
y = 7;

console.log(`증가하기 전 y: ${y}`); // 7
y++;
console.log(`증가하기 후 y: ${y}`); // 8

console.log(`증가하기 전 y: ${y}`); // 8
y--;
console.log(`증가하기 후 y: ${y}`); // 7

++y;
console.log(`증가하기 후 y: ${y}`); // 8

--y;
console.log(`감소한 후 y: ${y}`); // 7

// 3) 대입 연산
// 1. 복합대입연산자 연습
// - 변수 `x`에 숫자 20을 할당하세요.
// - 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
// - 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
// - 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
// - 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.
x = 20;
const res1 = (x += 10); // 30
const res2 = (x -= 5); // 25
const res3 = (x /= 2); // 12.5
const res4 = (x *= 3); // 37.5
console.log(res1, res2, res3, res4); // 30 25 12.5 37.5

// 4) 비교 연산
// 1.나이비교
// - 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
// - `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
// - `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
// - 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요
let age1 = 25;
let age2 = 30;
age1 > age2 ? console.log("Older") : console.log("Younger or Same");

// 5) 삼항 연산
// 1. 숫자비교
//     1. 변수 `num`에 임의의 숫자를 할당하세요.
//     2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.
let num = 0;
num > 0
  ? console.log("Positive")
  : num === 0
  ? console.log("Zero")
  : console.log("Negative");

// 2. 최댓값 찾기
//     - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//     - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
a = 1;
b = 2;
c = 3;
const result1 = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(result1);

// 3. 짝수 홀수 확인
// - 변수 `number`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
let number = 0;
number % 2 === 0 ? console.log("Even") : console.log("Odd");

// 4. 로그인 확인
// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
let isLoggedIn = true;
isLoggedIn ? console.log("Welcome") : console.log("Please log in");

// 5. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
let age = 20;
age >= 18 ? console.log("Adult") : console.log(" Minor");

// 6) 논리 연산
// 1. 논리 연산자 기본
// - 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
// - `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
// - `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
// - `a`의 논리 NOT 연산 결과를 출력하세요.
a = true;
b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// 2. 여러 조건 결합
// - 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
// - `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
x = 11;
y = 66;
z = 99;
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0);

// 3. 사용자 로그인 및 권한 확인
// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
// - 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
// - 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
isLoggedIn = true;
let isAdmin = false;
isLoggedIn ? console.log("Welcome") : console.log("Please log in");
isAdmin
  ? console.log("Admin access granted")
  : console.log("Admin access denied");
isLoggedIn && isAdmin
  ? console.log("Full access granted")
  : console.log("Restricted access");

//   4. 값의 존재 확인
// - 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
// - 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
let value1 = 11;
let value2 = null;
value1 || value2 ? console.log("값이 존재") : console.log("값이 존재x");

// 5. 범위 확인
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
