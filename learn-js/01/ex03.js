// 03. 연산자 연습문제

// 03-1 산술 연산자
// 1. 기본 산술 연산
//     a. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
//     b. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
//     c. 각 연산의 결과를 콘솔에 출력하세요.
let a = 10;
let b = 5;

let sum = a + b;
let minus = a - b;
let multiple = a * b;
let divide = a / b;
let left = a % b;

console.log(sum, minus, multiple, divide, left);

// 03-2 증감 연산자
// 1. 증가 및 감소 연산자
//     a. 변수 `y`에 숫자 7을 할당하세요.
//     b. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
//     c. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
//     d. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
//     e. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.

// a
const y = 7;

// b
console.log(`증가하기 전 y: ${y}`);
y++;
console.log(`증가하기 후 y: ${y}`);

// c
console.log(`증가하기 전 y: ${y}`);
y--;
console.log(`증가하기 후 y: ${y}`);

// d
++y;
console.log(`증가하기 후 y: ${y}`);

//e
--y;
console.log(`감소한 후 y: ${y}`);

// 03-3 대입연산자
// 1. 복합대입연산자 연습
//  - 변수 `x`에 숫자 20을 할당하세요.
//  - 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
//  - 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
//  - 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
//  - 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.

let x = 20;
const res1 = (x += 10);
const res2 = (x -= 5);
const res3 = (x /= 2);
const res4 = (x *= 3);

console.log(res1, res2, res3, res4);

// 03-4 비교 연산자
// 1.나이비교
//  - 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
//  - `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
//  - `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
//  - 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요.

let age1 = 25;
let age2 = 30;

console.log(age1 > age2);
console.log((age1 = age2));
console.log(age1 > age2 ? "Older" : "Younger or Same");

// 03-5 삼항 연산자
// 1. 숫자비교
//     a. 변수 `num`에 임의의 숫자를 할당하세요.
//     b. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.

const num = 0;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

// 2. 최댓값 찾기
//  - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//  - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.

{
  const a = 10;
  const b = 5;
  const c = 13;
  const res = a > b ? (a > c ? a : c) : b > c ? b : c;
  console.log(res);
}

// 3. 짝수 홀수 확인
//  - 변수 `number`에 임의의 숫자를 할당하세요.
//  - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.

{
  const number = 7;
  const res3 = number % 2 === 0 ? "Even" : "Odd";
  console.log(res3);
}

// 4. 로그인 확인
//  - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
//  - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome" : "Please log in";
console.log(message);

// 5. 성인 확인
//  - 변수 `age`에 임의의 나이를 할당하세요.
//  - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.

const age = 18;
const res5 = age >= 18 ? "Adult" : "Minor";
console.log(res5);

// 03-6 논리 연산자

// 1. 논리 연산자 기본
//  - 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
//  - `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
//  - `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
//  - `a`의 논리 NOT 연산 결과를 출력하세요.

{
  const a = true;
  const b = false;

  console.log(a && b);
  console.log(a || b);
  console.log(!a);
}

// 2. 여러 조건 결합
//  - 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
//  - `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
//  - `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
//  - `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.

{
  const x = 15;
  const y = 3;
  const z = 4;

  console.log(x > 10 && y < 5);
  console.log(x > 10 || z > 3);
  console.log(y !== 0);
}

// 3. 사용자 로그인 및 권한 확인
//  - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
//  - 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
//  - 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
//  - 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.

{
  const isLoggedIn = true;
  const isAdmin = false;

  console.log(isLoggedIn ? "Welcome" : "Please log in");
  console.log(isAdmin ? "Admin access granted" : "Admin access denied");
  console.log(
    isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
  );
}

// 4. 값의 존재 확인
//  - 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
//  - 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
//  - 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.

{
  const value1 = "hello";
  const value2 = null;

  console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
  console.log(
    !value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함"
  );
}

// 5. 범위 확인
//  - 변수 `num`에 임의의 숫자를 할당하세요.
//  - `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
//  - `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.

{
  const num = 50;
  console.log(num >= 0 && num <= 100 ? "범위 안" : "범위 밖");
  console.log(num < 0 || num > 100 ? "범위 밖" : "범위 안");
}

// 03-7 부록

// Q1. 여러개의 데이터를 하나로 묶어서 표현하고 인덱스 번호로 접근하는 자바스크립트 자료형은?
// - [ ]  숫자형
// - [x]  배열
// - [ ]  객체

// Q2. 아래의 코드에서 잘못된 부분을 수정하시오
const obj = {
  name: "철수",
  age: 20,
  gender: "male",
};

// Q3. 다음 중 산술 연산자가 아닌 것을 고르세요.
// - [ ]  +
// - [ ]  -
// - [ ]  *
// - [x]  =
// - [ ]  %

// Q4. 다음중 연산자와 이름이 잘못 적어진 것을 고르세요.
// - [x]  % 나누기 연산자
// - [ ]  * 곱셈연산자
// - [ ]  <= 작거나 같다
// - [ ]  == 같다
// - [ ]  ++ 증감연산자

// Q5. 아래의 코드의 실행 결과를 예측하세요.
const myLevel = 99;
const status = myLevel >= 99 ? "축하합니다. 만렙입니다" : "";

console.log(status); // '축하합니다. 만렙입니다'

// Q6. 아래 코드의 실행 결과를 예측하세요
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 * "20"); // 200
console.log(10 * 20); // 200

// Q7. 아래의 코드와 같은 코드를 고르세요
let score = 10;
score = score + 10;
//  - [x]  score += 10;
// - [ ]  score ++= 10;
// - [ ]  score =+10;
// - [ ]  score + 10 = 10;

// Q8. 아래의 실행 결과를 고르세요
{
  const result = 10 + 2 * 10;
}
// - [ ]  120
// - [x]  30
// - [ ]  42
// - [ ]  118

// Q9. 삼항 연산자 활용
// 1. 변수 num을 선언하고 어떤 숫자를 할당하세요.
// 2. num이 짝수인지 홀수인지 판별하는 삼항 연산자를 사용하여 결과를 isEven변수에 저장하고 콘솔에 출력하세요.
{
  const num = 10;
  const isEven = num % 2 === 0 ? "짝수" : "홀수";
  console.log(isEven);
}
