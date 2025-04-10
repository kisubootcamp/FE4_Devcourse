// 연산자

// 03-1. 산술 연산자
// 기본 산술 연산
// const a = 10;
// const b = 5;
let a = 10;
let b = 5;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;

console.log(add, sub, mul, div, mod); // 15 5 50 2 0

// 03-2. 증감 연산자
// const y = 7;  -> 오류: TypeError: Assignment to constant variable.
// a
let y = 7;

// b
console.log(`증가하기 전 y: ${y}`); // 7
y++;
console.log(`증가하기 후 y: ${y}`); // 8

// c
console.log(`증가하기 전 y: ${y}`); // 8
y--;
console.log(`증가하기 후 y: ${y}`); // 7

// d
++y;
console.log(`증가하기 후 y: ${y}`); // 8

//e
--y;
console.log(`감소한 후 y: ${y}`); // 7

// 03-3. 대입연산자
// 복합대입연산자 연습
let x = 20;

const res1 = (x += 10);
const res2 = (x -= 5);
const res3 = (x /= 2);
const res4 = (x *= 3);

console.log(res1, res2, res3, res4); // 30 25 12.5 37.5

// 03-4. 비교 연산자
// 나이 비교
let age1 = 25;
let age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);
console.log(age1 > age2 ? "Older" : "Younger or Same");

// 03-5. 삼항 연산자
// 1. 숫자비교
const num = 0;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative"); // Zero

{
  // 2. 최댓값 찾기
  const a = 10;
  const b = 5;
  const c = 13;
  console.log(a > b ? (a > c ? a : c) : b > c ? b : c); // 13
}

// 3. 짝수 홀수 확인
const number = 3;
console.log(number % 2 === 0 ? "Even" : "Odd"); // Odd

{
  // 4. 로그인 확인
  let isLoggedIn = false;
  console.log(isLoggedIn ? "Welcome" : "Please Login"); // Please Login
}

// 5. 성인 확인
const age = 25;
console.log(age >= 18 ? "Adult" : "Minor"); // Adult

// 03-6. 논리 연산자
// 1. 논리 연산자 기본
let t1 = true;
let t2 = false;
console.log(t1 && t2); // false
console.log(t1 || t2); //true
console.log(!t1); //false

// 2. 여러 조건 결합
let p1 = 11;
let p2 = 3;
let p3 = 0;
console.log(p1 > 10 && p2 < 5); //true
console.log(p1 > 10 || p2 > 3); //true
console.log(p3 !== 0); // false

// 3. 사용자 로그인 및 권한 확인
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please Login");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 4. 값의 존재 확인
let value1 = "kyo";
let value2 = undefined;
console.log(value1 || value2 ? "값이 존재 o" : "값이 존재 x"); // 값이 존재 o
console.log(!value1 && !value2 ? "값이 존재 o" : "값이 존재 x"); // 값이 존재 x

// 5. 범위 확인
const num5 = 25;
console.log(num5 >= 0 && num5 <= 100 ? "있음" : "없음"); // 있음
console.log(num5 < 0 && num5 > 100 ? "있음" : "없음"); // 없음
