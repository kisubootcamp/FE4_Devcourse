// 6-1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
let number = 0;
function sum(...nums) {
  for (let i = 0; i < nums.length; i++) {
    number += nums[i];
  }
  console.log(number);
}
sum(1, 2, 3, 4);

// 6-2
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.
const add = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// 6-3 짝수와 홀수 판별하기
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isEven = (num) => {
  if (num % 2 === 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
};
isEven(7); //홀수

// 6-4. 배열의 모든 요소 더하기
//배열의 모든 요소의 합을 반환하는 함수를 작성하세요
let total = 0;
const sumArray = (arr) => {
  for (let num of arr) {
    total += num;
  }
  console.log(total);
};
sumArray([1, 2, 3]);

// TODO  6-5. 배열의 최댓값 찾기
// const findMax = (arr) => {
//   arr.forEach((num) => {});
// };

// console.log(findMax([1, 5, 3, 9, 2])); // 9

// TODO 6-6. 문자열 반전
// const reverseString = function (str) {
//   str.split("").reverse("").join("");
// };
// console.log(reverseString("hello"));

// TODO 6-7. 문자열에서 특정문자 개수 세기
//주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요
const countCharacter = (word, a) => {
  word.split("").filter((charater) => "a");
};

//6-8. 팩토리얼 계산하기
// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

const factory = (num) => {
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  console.log(num);
};
factory(5); // 120

// 6-9. 삼각형 넓이 계산하기
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
function triangleArea(bottom, height) {
  return (bottom * height) / 2;
}
console.log(triangleArea(10, 5));

// ********************연습문제 +
// 6-1 +. 특정문자 제거 - 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오
// removeChar("hello world", "o"); // "hell wrld"
