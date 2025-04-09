//3-1. 기본 산술 연산
let a = 10;
let b = 5;

let sum = a + b;
let sub = a - b;
let multi = a * b;
let divide = a / b;
let rest = a % b;

console.log(sum);
console.log(sub);
console.log(multi);
console.log(divide);
console.log(rest);

// 3-2. 증감 연산자
let y = 7;
console.log(y); //7
y++;
console.log(y); //8
console.log(y); //8
y--;
console.log(y); //7
++y;
console.log(y); //8
--y;
console.log(y); //7

// 3-3. 대입 연산자
// 1. 복합대입연산자 연습
// - 변수 `x`에 숫자 20을 할당하세요.
// - 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
// - 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
// - 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
// - 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.

let x = 20;
x += 10;
console.log(x); //30
x -= 5;
console.log(x); //25
x /= 2;
console.log(x); //12.5
x *= 3;
console.log(x); //37.5

// 3-4. 비교 연산자
// 1.나이비교
// - 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
// - `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
// - `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
// - 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요.

let age1 = 25;
let age2 = 30;
console.log(age1 > age2); // false
console.log(age1 === age2); // false
const compareAge = age1 > age2 ? "Older" : "Younger or Same";
console.log(compareAge); // Younger or Same

// 3-5-1.숫자비교
// 1. 변수 `num`에 임의의 숫자를 할당하세요.
// 2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.

let num = 3;
const compareNum = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negatvie";
console.log(compareNum); // Positive

// 3-5-2. 최댓값 찾기
// - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
a = 3;
b = 6;
let c = 9;
const maxNum = a > b ? (a > c ? a : b > c ? b : c) : b > c ? b : c;
console.log(maxNum); //9

// 3-5-3. 짝수 홀수 확인
// - 변수 `number`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
let number = 4;
const checkNum = 4 % 2 === 0 ? "Even" : "Odd";
console.log(checkNum); //Even

// 3-5-4. 로그인 확인
// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
let isLoggedIn = true;
const checkLogin = isLoggedIn === true ? "Welcome" : "Please log in";
console.log(checkLogin); //Welcome

// 3-5-5. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
let age = 20;
const checkAdult = age >= 18 ? "Adult" : "Minor";
console.log(checkAdult); // Adult
