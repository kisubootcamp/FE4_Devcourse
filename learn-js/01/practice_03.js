
// 👻 연습문제 03-1.산술 연산자
// a. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
let a1 = 10;
let b1 = 5;
// b. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
let sum_ = a1 + b1;
let sub_ = a1 - b1;
let mul_ = a1 * b1;
let div_ = a1 % b1;
// c. 각 연산의 결과를 콘솔에 출력하세요.
console.log(sum_);
console.log(sub_);
console.log(mul_);
console.log(div_);

// 👻 연습문제 03-2.증감 연산자
// a. 변수 `y`에 숫자 7을 할당하세요.
let y_ = 7;
// b. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
console.log(`증가하기 전 y: ${y_}`);
y_++;
console.log(`증가하기 후 y: ${y_}`);
// c. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
console.log(`증가하기 전 y: ${y_}`);
y_--;
console.log(`증가하기 후 y: ${y_}`);
// d. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
++y_;
console.log(`증가하기 후 y: ${y_}`);
// e. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.
--y_;
console.log(`감소한 후 y: ${y_}`);

// 👻 연습문제 03-3.대입 연산자
// - 변수 `x`에 숫자 20을 할당하세요.
let x2 = 20;
// - 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
const res1 = x2 += 10;
console.log(res1);
// - 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
const res2 = x2 -= 5;
console.log(res2);
// - 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
const res3 = x2 /=2;
console.log(res3);
// - 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.
const res4 = x2 *= 3;
console.log(res4);

// 👻 연습문제 03-4.비교 연산자
// - 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
let age1 = 25;
let age2 = 30;
// - `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
console.log(age1 > age2);
// - `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
console.log(age1 === age2);
// - 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요.
console.log(age1 > age2 ? "Older" : "Younger or Same");


// 👻 연습문제 03-5.삼항 연산자
// 1. 숫자비교
//     a. 변수 `num`에 임의의 숫자를 할당하세요.
const num = 325;
//     b. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

// 2. 최댓값 찾기
//     - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//     - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
const a = 1;
const b =2;
const c = 3;
const biggest = a > b ? (a > c ? a : c) : b > c ? b : c; 
console.log(biggest);

// 3. 짝수 홀수 확인 
// - 변수 `number`에 임의의 숫자를 할당하세요.
const number = 325;
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
const res5 = number % 2 === 0 ? "Event" : "Odd";
console.log(res5);

// 4. 로그인 확인 

// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
const isLoggedIn = true;
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
const res6 = isLoggedIn ? "Welcome" : "Please log in";
console.log(res6);

// 5. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
const age = 98;
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
const res7 = age >= 18 ? "Adult" : "Minor";
console.log(res7);


// 👻 연습문제 03-5.논리 연산자
// 1. 논리 연산자 기본
// - 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
const a_ = true;
const b_ = false;
// - `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
console.log(a_ && b_);
// - `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
console.log(a_ || b_);
// - `a`의 논리 NOT 연산 결과를 출력하세요.
console.log(!a);

// 2. 여러 조건 결합
// - 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
const x = 2;
const y = 10;
const z = 5;
// - `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(x > 10 && y < 5);
// - `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(x > 10 || z > 3);
// - `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(y !== 0);

// 3. 사용자 로그인 및 권한 확인

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
const isLoggedIn_ = true;
const isAdmin = false;
// - 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
console.log(isLoggedIn_ ? "Welcome" : "Plese Log in");
// - 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
console.log(isAdmin ? "Admin access granted" : "Admin acccess denied");
// - 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
console.log(isLoggedIn && isAdmin ? "Full aceess granted" : "Resticted access");

// 4. 값의 존재 확인

// - 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
const value1 = 29;
const value2 = "X";
// - 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
// - 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(!value1 && !value2 ? "값이 존재 하지 않음" : "값이 하나라도 존재함");

// 5. 범위 확인

// - 변수 `num`에 임의의 숫자를 할당하세요.
const num_ = 33;
// - `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(num >= 0 && num <= 100 ? "조건 만족" : "조건 불만족");
// - `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
console.log(num < 0 || num > 100 ? "조건 불만족" : "조건 만족");

