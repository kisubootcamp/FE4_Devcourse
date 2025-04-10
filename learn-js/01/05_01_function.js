// 1. 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.

const add = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(add(1, 2, 3, 4, 5));

// 2. 사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.

const calc = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Invalid operator";
  }
};
console.log(calc(1, 2, "+"));
console.log(calc(1, 2, "-"));
console.log(calc(1, 2, "/"));
console.log(calc(1, 2, "*"));
console.log(calc(1, 2, "%"));

// 3. 짝수와 홀수 판별하기

const isEven = (num) => (num % 2 === 0 ? "짝수" : "홀수");
console.log(isEven(2));
console.log(isEven(3));

// 4. 배열의 모든 요소 더하기

const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([123, 44, 123, 665]));

// 배열의 최대값 찾기

const maxValue = (arr) => Math.max(...arr);
console.log(maxValue([123, 44, 123, 665]));

// 문자열 반전

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello, World!"));

// 문자열에서 특정 문자 개수 세기

const countChar = (str, char) => str.split("").filter((c) => c === char).length;
console.log(countChar("banana", "a"));

// 팩토리얼 계산하기
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(5));

// 삼각형 넓이 계산하기
const triangleArea = (w, h) => (w * h) / 2;
console.log(triangleArea(10, 5));
