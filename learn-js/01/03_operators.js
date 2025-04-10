//1. 기본 산술 연산
// 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
// 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
// 각 연산의 결과를 콘솔에 출력하세요.

let a = 10;
let b = 5;
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;

console.log("sum: ", sum);
console.log("sub: ", sub);
console.log("mul: ", mul);
console.log("div: ", div);
console.log("mod: ", mod);

// 2. 증가 및 감소 연산자
// 변수 `y`에 숫자 7을 할당하세요.
// 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
// 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
// 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
// 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.

let y = 7;

console.log("y: ", y);
y++;
console.log("y++: ", y);

console.log("y: ", y);
y--;
console.log("y--: ", y);

++y;
console.log("++y: ", y);

--y;
console.log("--y: ", y);

// 3. 복합대입연산자 연습
// 변수 `x`에 숫자 20을 할당하세요.
// 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.

let x = 20;
x += 10;
console.log("x += 10: ", x);

x -= 5;
console.log("x -= 5: ", x);

x /= 2;
console.log("x /= 2: ", x);

x *= 3;
console.log("x *= 3: ", x);

// 4. 나이비교
// 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
// `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
// `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
// 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요.

let age1 = 25;
let age2 = 30;
console.log("age1 > age2 : ", age1 > age2);
console.log("age1 === age2 : ", age1 === age2);
console.log(
  "age1 > age2 ? Older : Younger or Same : ",
  age1 > age2 ? "Older" : "Younger or Same"
);

// 5. 논리 연산자 기본
// 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
// `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
// `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
// `a`의 논리 NOT 연산 결과를 출력하세요.
// 위의 식별자와 겹치므로 1을 추가하여 선언한다.

let a1 = true;
let b1 = false;
console.log("a1 && b1 : ", a1 && b1);
console.log("a1 || b1 : ", a1 || b1);
console.log("!a1 : ", !a1);

// 6. 여러 조건 결합
// 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
// `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
// `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
// `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
// 위의 식별자와 겹치므로 1을 추가하여 선언한다.

let x1 = 123;
let y1 = 45;
let z1 = 6;
console.log("x1 > 10 && y1 < 5 : ", x1 > 10 && y1 < 5);
console.log("x1 > 10 || z1 > 3 : ", x1 > 10 || z1 > 3);
console.log("y1 !== 0 : ", y1 !== 0);

// 7. 사용자 로그인 및 권한 확인
// 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
// 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
// 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.

let isLoggedIn = true;
let isAdmin = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 8. 값의 존재 확인
// 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
// 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
// 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.

let value1 = "Hello, World!";
let value2 = null;
console.log(value1 || value2 ? "값 존재" : "값 없음");
console.log(!value1 && !value2 ? "둘 두 값 없음" : "값이 하나라도 존재");

// 9. 범위 확인
// 변수 `num`에 임의의 숫자를 할당하세요.
// `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
// `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.

let num = 139847293;
console.log(
  num >= 0 && num <= 100 ? "0 이상 100 이하" : "0 미만 또는 100 초과"
);
console.log(num < 0 || num > 100 ? "0 미만 또는 100 초과" : "0 이상 100 이하");
