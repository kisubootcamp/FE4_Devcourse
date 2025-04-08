/*
1. 기본 산술 연산
    1. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
    2. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
    3. 각 연산의 결과를 콘솔에 출력하세요.


2. 증가 및 감소 연산자
    1. 변수 `y`에 숫자 7을 할당하세요.
    2. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
    3. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
    4. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
    5. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.


3. 복합대입연산자 연습
- 변수 `x`에 숫자 20을 할당하세요.
- 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
- 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
- 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
- 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.


4. 나이비교

- 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
- `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
- `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
- 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요.



5. 숫자비교
    1. 변수 `num`에 임의의 숫자를 할당하세요.
    2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.


6. 
    - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
    - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
    


7. 짝수 홀수 확인 

- 변수 `number`에 임의의 숫자를 할당하세요.
- 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.


8. 로그인 확인 

- 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
- 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.


9.성인 확인
- 변수 `age`에 임의의 나이를 할당하세요.
- 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.

*/

//1
{
  let a = 10;
  let b = 5;
  let add = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;
  let rem = a % b;
  console.log(add, sub, mul, div, rem);
}

//2
{
  let y = 7;
  console.log(y);
  y++;
  console.log(y);
  y--;
  console.log(y);
  ++y;
  console.log(y);
  --y;
  console.log(y);
}

//3
{
  let x = 20;
  x += 10;
  console.log(x);
  x -= 5;
  console.log(x);
  x /= 2;
  console.log(x);
  x *= 3;
  console.log(x);
}

//4
let age1 = 25;
let age2 = 30;
if (age1 > age2) {
  console.log(age1);
} else {
  console.log(age2);
}

if (age1 === age2) {
  console.log("같음");
} else {
  console.log("다름");
}

age1 > age2 ? console.log("Older") : console.log("Younger or Same");

//5
{
  let num = 811;
  console.log(num > 0 ? "Postive" : num === 0 ? "Zero" : "Negative");
}

//6
{
  let a = 8;
  let b = 1;
  let c = 0;

  console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
}

//7
{
  let n = 531;
  console.log(n % 2 === 0 ? "Even" : "Odd");
}

//8
{
  isLoggedIn = true;
  console.log(isLoggedIn ? "Welcome 😊" : "Please Login 🔒");
}

//9
{
  let age = 25;
  console.log(age >= 18 ? "Adult" : "Minor");
}
